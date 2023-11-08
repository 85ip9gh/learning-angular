import { Component } from '@angular/core';
import {Hero} from '../hero';
import { HEROES } from '../mock-heroes';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes = HEROES;

  hero: Hero = {
    id: 1,
    name: 'WindStorm'
  };
  hero1: Hero = {
    id: 2,
    name: 'InfernoHook'
  };
  hero2: Hero = {
    id: 3,
    name: 'ThunderShine'
  };
  
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
