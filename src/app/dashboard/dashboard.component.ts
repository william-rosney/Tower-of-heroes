import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../_services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = HEROES;
  lastAddedHeroes: Hero[] = [];
  selectedHero?: Hero;
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getLastAddedHeroes(3);
  }

  getLastAddedHeroes(quantity: number){
    this.heroService.getLastAddedHeroes(quantity).subscribe({
      next: heroes => this.lastAddedHeroes = heroes,
      error: error => console.log(error)
    })
  }

  onSelect(hero: Hero){
    this.selectedHero = hero;
    //this.messageService.add(`HeroesComponent: Selected hero id: ${this.selectedHero.id}`)
    console.log(this.selectedHero);
  }
}
