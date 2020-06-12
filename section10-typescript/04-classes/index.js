"use strict";
class Pizza {
    constructor() {
        this.tomato = false;
        this.cheese = "";
        this.bacon = false;
        this.otherIngredients = [""];
    }
    setCheese(cheese) {
        this.cheese = cheese;
        return this;
    }
    setBacon() {
        this.bacon = true;
        return this;
    }
    setOtherIngredients(ingredients) {
        this.otherIngredients = ingredients;
        return this;
    }
    build() {
        return this;
    }
}
const pepperoniPizza = new Pizza();
pepperoniPizza
    .setBacon()
    .setCheese("Mozzarella")
    .setOtherIngredients(["Tomato"])
    .build();
console.log(pepperoniPizza);
