//var -> function
//let -> block
//const -> block

function sayHello() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}

sayHello();

const x = 1;
x = 2;

const person = {
  name: "Mosh",
  walk() {
    console.log(this);
  },
  talk() {},
};

person.talk();
person.name = "";

const targetMember = "name";
person[targetMember.value] = "John";

person.walk();
const walk = person.walk.bind(person);
console.log(walk);
walk();

//window

//const square = function(number){
//    return number*number;
//}

const square = (number) => number * number;

console.log(square(5));

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

const activeJobs = jobs.filter(function (job) {
  return job.isActive;
});
const activeJobs = jobs.filter((job) => job.isActive);

const person = {
  talk() {
    var self = this;
    setTimeout(() => {
      console.log("self", self);
    }, 1000);
  },
};
person.talk();

const colors = ["red", "green", "blue"];
const items = colors.map((color) => `<li>${color}</li>`);
console.log(items);
const address = {
  street: "",
  city: "",
  country: "",
};

const street = address.street;
const city = address.city;
const country = address.country;

const { street: st, city, country } = address;

const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
const combined = [...first, "a", ...second, "b"];

const clone = [...first];
console.log(first);
console.log(clone);

const first = { name: "Mosh" };
const second = { job: "Instructor" };
const combined = { ...first, ...second, location: "australia" };
const clone = { ...first };
console.log(combined);

import Teacher, {promote} from "./teacher";
import { Person } from "./person";

//default -> import ... from '';
//named -> import {...} from '';

const person = new Person("mosh");
person.name;

const teacher = new Teacher("Moshy", "MSc");
teacher.walk();
teacher.teach();


