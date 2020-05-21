import { Component, OnInit } from '@angular/core';
import {Recipe} from '../models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a simply test',
      'https://c1.peakpx.com/wallpaper/400/456/943/dishes-kitchen-bio-food-recipe-wallpaper-preview.jpg'),
    new Recipe('A test recipe', 'This is a simply test',
      'https://c1.peakpx.com/wallpaper/400/456/943/dishes-kitchen-bio-food-recipe-wallpaper-preview.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
