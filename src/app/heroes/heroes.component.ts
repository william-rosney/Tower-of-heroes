import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HeroService } from '../_services/hero.service';
import { MessageService } from '../_services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero?: Hero;
  addHeroMode: boolean = false;
  newHero: any = {};
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe({
      next: heroes => this.heroes = heroes,
      error: error => console.log(error),
    });
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id: ${this.selectedHero.id}`)
    console.log(this.selectedHero);
  }

  addHero() {
    if (this.heroes.findIndex(hero => hero.id == this.newHero.id) != -1) {
      console.log("Hero id already exists");
      return;
    }
    if (this.heroes.findIndex(hero => hero.name == this.newHero.name) != -1) {
      console.log("Hero name already exists");
      return;
    }
    if (this.newHero.id != null && this.newHero.name != null) {
      this.heroService.addHero(this.newHero);
      this.addHeroMode = false;
      localStorage.setItem("heroes", JSON.stringify(this.heroes))
    }
  }


}
