import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'hero-details', component: HeroDetailsComponent},
  {path: "**", component: DashboardComponent, pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
