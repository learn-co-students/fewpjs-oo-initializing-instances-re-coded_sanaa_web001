// Write your code here
class Breakfast{
    constructor (food, drink){
        this.food= food;
        this.drink= drink;
    }
}
let myBreakFast= new Breakfast("eggs","milk");


class Lunch{
    constructor (salad, soup, drink){
        this.salad= salad;
        this.soup= soup;
        this.drink= drink;
    }
}
let myLunch= new Lunch("Any Salad", "Any Soup", "Any Drink")

class Dinner{
    constructor (salad, soup, entree, dessert){
        this.salad= salad;
        this.soup= soup;
        this.entree= entree;
        this._dessert= dessert;
    }
}
let myDinner= new Dinner("Any Salad", "Any Soup", "Any Entree","any Dessert")