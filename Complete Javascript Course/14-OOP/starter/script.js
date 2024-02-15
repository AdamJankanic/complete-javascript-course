'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species);

const Car = function (maker, speed) {
  this.maker = maker;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
};
Car.prototype.brake = function () {
  this.speed -= 5;
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);
console.log(car1);
car1.brake();
car1.accelerate();
console.log(car1);

console.log(car2);
car2.brake();
car2.accelerate();
console.log(car2);
//
//
//
//

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);

class CarCl {
  constructor(maker, speed) {
    this.maker = maker;
    this.speed = speed;
  }

  get speedUs() {
    console.log(this.speed / 1.6);
    return this.speed / 1.6;
  }

  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 100);
console.log(ford);

ford.speedUs;
console.log(ford);
ford.speedUs = 50;
console.log(ford);
