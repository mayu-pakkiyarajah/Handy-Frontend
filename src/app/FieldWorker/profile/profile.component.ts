import {Component, OnInit} from '@angular/core';
import {FieldWorkersService} from "../../../Services/Admin/field-workers.service";
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import { FieldWorkerService } from '../../../Services/fieldworker.service';
import { UsersComponent } from '../../Admin/users/users.component';
import { UsersService } from '../../../Services/Admin/users.service';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    CommonModule,
    profileComponent,
    UsersComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  providers: [NgIf] 
})
export class profileComponent implements OnInit{
  selectedFieldWorker: any;
  selectedCustomer : any;

  constructor(private fieldWorker: FieldWorkerService) {
  }
  fieldWorkers: any[] = [];


  ngOnInit() {
    const idString = localStorage.getItem('Id'); 
    if (idString !== null) {
      const id = parseInt(idString, 10);  // Parse the string into a number
    
      if (!isNaN(id)) {
        this.loadFieldWorkerById(id);  // Pass the parsed ID to your method
      } else {
        console.error('Invalid ID stored in local storage');
      }
    } else {
      console.error('No ID found in local storage');
    }
  
  }

  loadFieldWorkerById(id: number): void {
    this.fieldWorker.getFieldWorkerById(id).subscribe(
      (data: any) => {
        this.selectedFieldWorker = data;
        console.log(this.selectedFieldWorker);
      },
      error => {
        console.error(`Error while getting fieldworker with id ${id}`, error);
      }
    );
  }

}
