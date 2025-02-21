'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);

// // Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species);

// const Car = function (maker, speed) {
//   this.maker = maker;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
// };

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);
// console.log(car1);
// car1.brake();
// car1.accelerate();
// console.log(car1);

// console.log(car2);
// car2.brake();
// car2.accelerate();
// console.log(car2);
//
//
//
//

// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
// }

// const jessica = new PersonCl('Jessica', 1996);
// console.log(jessica);

// class CarCl {
//   constructor(maker, speed) {
//     this.maker = maker;
//     this.speed = speed;
//   }

//   get speedUs() {
//     console.log(this.speed / 1.6);
//     return this.speed / 1.6;
//   }

//   set speedUs(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarCl('Ford', 100);
// console.log(ford);

// ford.speedUs;
// console.log(ford);
// ford.speedUs = 50;
// console.log(ford);

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

class StudentCl extends PersonCl {
  constructor(firstName, birthYear, course) {
    super(firstName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  }
}

const miro = new StudentCl('Mirko', 2012, 'Computer Science');
miro.introduce();
miro.calcAge();

class Account {
  locale = navigator.language;

  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thank's ${owner}!`);
  }

  getMovements() {
    return this.#movements;
  }

  deposit(value) {
    this.#movements.push(value);
  }

  withdraw(value) {
    this.deposit(-value);
  }

  _approvedLoan(val) {
    return true;
  }

  requestLoan(value) {
    if (this._approvedLoan(value)) {
      this.deposit(value);
      console.log('Approved');
    }
  }
}

const acc1 = new Account('Adam', 'eur', 1234);
acc1.deposit(250);
acc1.withdraw(140);
console.log(acc1);

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

class EVCl extends CarCl {
  #charge;

  accelerate() {
    return this;
  }

  chargeBattery() {
    return this;
  }
}
