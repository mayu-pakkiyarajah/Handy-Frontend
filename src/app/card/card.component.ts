import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";
import{Router,RouterLink,RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  noProfilePhoto = "https://res.cloudinary.com/dpmqdx02n/image/upload/v1711616632/noProfile_jwjkro.jpg";

  @Input() project: {
    projectName: string;
    profilePhoto: string;
    projectWorkerName: string;
    projectWorker:string;
    projectStatus: any;
    statusText: string,
    projectBudget: string;

  } | undefined;

  constructor(private router: Router) {
  }

  get profilePhotoUrl(): string {

    if (this.project && this.project.profilePhoto) {
      console.log("projectworkerid"+this.project.projectWorker);
      return this.project.profilePhoto;
    } else {
      return this.noProfilePhoto;
    }
  }

  getStatusColor(): string {
    if (this.project?.projectStatus === 0) {
      this.project.statusText = "Not Started"
      return 'text-red';
    } else if (this.project?.projectStatus === 1) {
      this.project.statusText = "Ongoing"
      return 'text-green';
    }else if (this.project?.projectStatus === -1) {
      this.project.statusText = "Completed"
      return 'text-orange';
    }
    else {
      return '';
    }
  }

  navigateFunction() {
    if (this.project && this.project.projectWorker) {
      this.router.navigate(['/dashboard/payment'], { queryParams: { worker: this.project.projectWorker } });
    } else {
      // Handle the case where project or projectWorker is undefined
      console.error('Project or projectWorker is undefined');
    }
  }
  navigateFunction2() {
    if (this.project && this.project.projectWorker) {
      this.router.navigate(['/dashboard/chat'], { queryParams: { worker: this.project.projectWorker } });
    } else {
      // Handle the case where project or projectWorker is undefined
      console.error('Project or projectWorker is undefined');
    }
  }
}
