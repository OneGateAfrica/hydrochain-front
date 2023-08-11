import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {JobService} from "../core/services/job/job.service";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit{
  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  jobs : any[];
  constructor(private jobService:JobService) {
  }
  ngOnInit(): void {
    this.jobService.getAll().subscribe((e : any) => this.jobs = e.data);
  }
}
