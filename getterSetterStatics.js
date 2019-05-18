"use strict"

let varyingSize = {
    get size() {
        return Math.floor(Math.random() * 100)
    }
}

// console.log(varyingSize.size);

class Temperatur {
    constructor(celsius) {
        this.celsius = celsius;
    }

    get fahrenheit() {
        return (this.celsius * 9 / 5) + 32;
    }

    set fahrenheit(value) {
        this.celsius = (value - 32) * 5 / 9;
    }

    static fromFahrenheit(value) {
        return new Temperatur(((value - 32) * 5 / 9));
    }
}

let temp = Temperatur.fromFahrenheit(78);
console.log(temp.fahrenheit);

temp.fahrenheit = 86;
console.log(temp.celsius);


