// Write your code here
// 1. Create a class for `Breakfast`. `Breakfast` will have a constructor with a food and a drink.
class Breakfast {
  //   food;
  //   drink;
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

// 2. Create a class for `Lunch`. `Lunch` will have a constructor with a salad, a soup, and a drink.
class Lunch {
  //   salad;
  //   soup;/
  //   drink;
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}

// 3. Create a class for `Dinner`. Since dinner is a little bit fancier,
//  `Dinner` will have a constructor with salad, soup, entree, and dessert.
//   Indicate that dessert is intended to be a private property by including
//   an underscore (`_`) at the beginning.
class Dinner {
  //   salad;
  //   soup;
  //   entree;
  //   _dessert;
  constructor(salad, soup, entree, _dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this._dessert = _dessert;
  }
}
