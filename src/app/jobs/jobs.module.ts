import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobsComponent} from './jobs.component';
import {Route, RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";


const jobsRoutes: Route[] = [
  {path: '**', component: JobsComponent },

];

@NgModule({
  declarations: [
    JobsComponent
  ],
  imports: [
    RouterModule.forChild(jobsRoutes),
    CommonModule,
    SharedModule,
    MatSlideToggleModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule
  ]
})
export class JobsModule { }