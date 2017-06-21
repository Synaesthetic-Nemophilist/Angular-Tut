/**
 * Created by nomaterials on 21/06/2017.
 */

import { Component, Input } from '@angular/core';
import { Hero } from './Hero';

@Component({
  selector: 'hero-detail',
  template: `
              <div *ngIf="hero">
                <h2>{{hero.name}} details</h2>
                <div><label>ID: </label>{{hero.id}}</div>
                <div>
                  <label>name: </label>
                  <input [(ngModel)]="hero.name" placeholder="Name">
                </div>
              </div>
            `
})

export class HeroDetailComponent {
  @Input() hero: Hero;
}
