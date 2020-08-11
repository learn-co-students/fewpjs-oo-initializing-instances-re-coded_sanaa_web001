// Write your code here
class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}
let bfast = new Breakfast("eggs", "juice");
bfast.food;
bfast.drink;

class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}

let newlunch = new Lunch("side salad", "broccoli cheddar soup", "iced tea");
newlunch.salad;
newlunch.soup;
newlunch.drink;

class Dinner {
  constructor(salad, soup, entree, _dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this._dessert = _dessert;
  }
}
let newdinner = new Dinner(
  "balsamic salad",
  "consomme",
  "filet mignon",
  "cheesecake"
);
newdinner.salad;
newdinner.soup;
newdinner.entree;
newdinner._dessert;
