// Write your code here

class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}

class Dinner {
  constructor(salad, soup, entree, dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this._dessert = dessert;
  }
}


const breakfast = new Breakfast('Toast', 'Orange juice');
console.log(breakfast.food);   // Output: Toast
console.log(breakfast.drink);  // Output: Orange juice

const lunch = new Lunch('Caesar salad', 'Tomato soup', 'Iced tea');
console.log(lunch.salad);      // Output: Caesar salad
console.log(lunch.soup);       // Output: Tomato soup
console.log(lunch.drink);      // Output: Iced tea

const dinner = new Dinner('Greek salad', 'Lentil soup', 'Grilled chicken', 'Chocolate cake');
console.log(dinner.salad);     // Output: Greek salad
console.log(dinner.soup);      // Output: Lentil soup
console.log(dinner.entree);    // Output: Grilled chicken
console.log(dinner.#dessert);  // Error: Private field '#dessert' must be accessed from inside class 'Dinner'
