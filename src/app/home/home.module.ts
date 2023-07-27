import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {Route, RouterModule, Routes} from "@angular/router";
import {AppModule} from "../app.module";
import {HeaderComponent} from "../components/header/header.component";
import {TopBodyComponent} from "../components/body/top-body.component";
import {CardsComponent} from "../components/cards/cards.component";
import {StatsComponent} from "../components/stats/stats.component";
import {GetInTouchComponent} from "../components/get-in-touch/get-in-touch.component";
import {HebergementComponent} from "../components/hebergement/hebergement.component";
import {FooterComponent} from "../components/footer/footer.component";

const homeRoutes: Route[] = [
  {path: '**', component: HomeComponent },

];

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    TopBodyComponent,
    CardsComponent,
    StatsComponent,
    GetInTouchComponent,
    HebergementComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forChild(homeRoutes),
    CommonModule
  ]
})
export class HomeModule { }
