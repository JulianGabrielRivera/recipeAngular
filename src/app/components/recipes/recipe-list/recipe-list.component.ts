import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  // this property will be an array and that will be the array of Recipe models we created.
  // because of Recipe[] typescript knows the only thing that will get stored in recipes property is an array which holds a couple of recipe objects
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/01/31/WO1806_the-only-pizza-dough-youll-ever-need_s4x3.jpg.rend.hgtvcom.616.462.suffix/1580474734002.jpeg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
