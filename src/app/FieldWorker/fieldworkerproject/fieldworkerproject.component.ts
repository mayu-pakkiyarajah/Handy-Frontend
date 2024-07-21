import {Component, OnInit} from '@angular/core';
import {CardComponent} from "../../card/card.component";
import {NgForOf} from "@angular/common";
import {ProjectsService} from "../../../Services/Customer/projects.service";
import {StarRatingComponent} from "../../star-rating/star-rating.component";

@Component({
  selector: 'app-fieldworkerproject',
  standalone: true,
  imports: [
    CardComponent,
    NgForOf,
    StarRatingComponent
  ],
  templateUrl: './fieldworkerproject.component.html',
  styleUrl: './fieldworkerproject.component.css'
})
export class FieldWorkerProjectsComponent implements OnInit{

  projects: any[] = [];
  projectsStatic: any[] = [];

  constructor(private projectService: ProjectsService) {
  }

  ngOnInit() {
    const fieldWorkerId = Number(localStorage.getItem('Id')); // Ensure this ID is a number
    if (fieldWorkerId) {
        this.loadProjects(fieldWorkerId);
    } else {
        console.error('FieldWorker ID is not available');
    }
}

  // loadProjects(){
  //   let FieldWorkerId = localStorage.getItem('Id');
  //   this.projectService.getMyProjects(FieldWorkerId).subscribe(
  //     (data) => {
  //       console.log(data)
  //       this.projects = data;
  //       this.projectsStatic = data.slice();
  //     },
  //     (error) => {
  //       console.log("error while getting projects : ", error);
  //     }
  //   )
  // }

  loadProjects(fieldWorkerId: number) {
    this.projectService.getProjectsByFieldWorkerId(fieldWorkerId).subscribe(
      (data) => {
        console.log(data);
        this.projects = data;
        this.projectsStatic = data.slice();
      },
      (error) => {
        console.log("Error while getting projects: ", error);
      }
    );
}

  searchWord = "";


  onSearchChange(event:any){
    this.searchWord = event.target.value;
    this.searchProject();
    console.log(this.projects);
    console.log(this.projectsStatic);
  }

  searchProject() {
    if (this.searchWord.trim() === '') {
      this.projects = this.projectsStatic.slice();
      return;
    }

    const searchFilter = (project: any) =>
      project.projectName.toLowerCase().includes(this.searchWord.toLowerCase());

    this.projects = this.projectsStatic.filter((project: any) => {
      const result = searchFilter(project);
      console.log(`Project: ${project.projectName}, Matched: ${result}`);
      return result;
    });
  }

}
