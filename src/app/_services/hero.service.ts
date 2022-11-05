import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../interfaces/hero';
import { HEROES } from '../mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>{

    const heroes = of(HEROES);
    this.messageService.add("HEROES are fetched !");
    return heroes;
  }

  getLastAddedHeroes(quantity: number): Observable<Hero[]>{
    const lastAddedHeroes: Hero[] = HEROES.slice(HEROES.length - quantity);
    return of(lastAddedHeroes);
  }

  addHero(newHero: Hero){
    HEROES.push(newHero);
  }
}


