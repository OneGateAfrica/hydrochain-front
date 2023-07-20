import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {Route, RouterModule, Routes} from "@angular/router";
import {AppModule} from "../app.module";
import {HeaderComponent} from "../components/header/header.component";
import {TopBodyComponent} from "../components/body/top-body.component";
import {CardsComponent} from "../components/cards/cards.component";

const homeRoutes: Route[] = [
  {path: '**', component: HomeComponent },

];

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    TopBodyComponent,
    CardsComponent
  ],
  imports: [
    RouterModule.forChild(homeRoutes),
    CommonModule
  ]
})
export class HomeModule { }
