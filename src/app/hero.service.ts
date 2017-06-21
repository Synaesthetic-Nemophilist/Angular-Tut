/**
 * Created by nomaterials on 21/06/2017.
 */

import { Injectable } from '@angular/core';

import { Hero } from './Hero';
import { HEROES } from './mock-heros';


@Injectable()
export class HeroService {

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
}
