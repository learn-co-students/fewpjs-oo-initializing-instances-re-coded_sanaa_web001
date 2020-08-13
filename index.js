// Write your code here
class Breakfast {
  constructor(name , name2){
    this.food = name ; 
    this.drink = name2 ;
  }
}

let bfast = new Breakfast('eggs', 'juice')
bfast.food ;
bfast.juice;

class Lunch {
  constructor(name , name2 , name3){
    this.salad = name ;
  
    this.soup = name2 ;
    this.drink =name3 ;
  }
}

let newlunch = new Lunch('side salad', 'broccoli cheddar soup', 'iced tea')
newlunch.salad;
newlunch.soup;
newlunch.drink ; 


class Dinner {
  constructor(name , name2 , name3 , name4){
    this.salad = name ;
    this.soup = name2 ;
    this.entree = name3 ; 
    this._dessert = name4 ;
  }
}

let  newdinner = new Dinner('balsamic salad', 'consomme', 'filet mignon', 'cheesecake')
    newdinner.salad;
    newdinner.soup;
    newdinner.entree;
    newdinner._dessert;