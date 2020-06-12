class Pizza {
    public tomato: boolean = false;
    public cheese: string = "";
    public bacon: boolean = false;
    public otherIngredients: Array<string> = [""];

    setCheese(cheese: string): Pizza {
        this.cheese = cheese;
        return this;
    }

    setBacon(): Pizza {
        this.bacon = true;
        return this;
    }

    setOtherIngredients(ingredients: string[]): Pizza {
        this.otherIngredients = ingredients;
        return this;
    }

    build() {
        return this;
    }
}

const pepperoniPizza: Pizza = new Pizza();
pepperoniPizza
    .setBacon()
    .setCheese("Mozzarella")
    .setOtherIngredients(["Tomato"])
    .build();

console.log(pepperoniPizza);