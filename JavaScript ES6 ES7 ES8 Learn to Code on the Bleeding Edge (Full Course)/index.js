let word1 = "Dylan";
let word2 = "Isreal";
let num1 = 2;
let num2 = 3;

//const fullName = `${num1 + num2} ${word2}`;
let example = `${word1}  ${word2}`;
console.log(example);
document.getElementById("example").innerText = example;

const personalInformation = {
  firstName: "Dylan",
  lastName: "Israel",
  city: "Austin",
  state: "Texas",
  zipCode: 73301,
};
const { firstName: fn, lastName: ln } = personalInformation;

console.log(`${fn} ${ln}`);

let { firstName, middleName, lastName } = ["Dylan", "Coding God", "Israel"];

lastName = "Clements";

console.log(firstName + middleName + lastName);

/*function addressMaker(city, state) {
  const newAddress = { city, state };

  console.log(newAddress);
}

addressMaker("Austin", "Texas");
*/

function addressMaker(addres) {
  const { city, state } = addres;
  const newAddress = {
    city,
    state,
    country: "United States",
  };
  console.log(`${newAddress.city}, ${newAddress.state},${newAddress.country}`);
}

addressMaker({ city: "Austin", state: "Texas" });

let incomes = [62000, 67000, 75000];
let total = 0;
for (const income of incomes) {
  console.log(income);
  total += income;
}
console.log(total);

let fullName = "Dylan Codig God Israel";

for (const char of fullName) {
  console.log(char);
}
let example1 = [1, 2, 3, 4, 5, 6];
let example2 = [...example1];
example2.push(true);
console.log(example1);

let example1 = {
  firstName: "Dylan",
};
let example2 = {
  ...example1,
};
function add(...nums) {
  let total = nums.reduce((x, y) => x + y);
  console.log(total);
  //console.log(nums);
}

add(4, 5, 7, 8, 12);

function add(numArray) {
  let total = 0;
  numArray.forEach((element) => {
    total += element;
  });
}
let numArray = [1, 2, 3, 4, 5];
console.log(numArray.includes(0));

export const data = [1, 2, 3];
let example = "Dylan";
console.log(example.padStart(3, "a"));
console.log(example.padEnd(3, "a"));
export class Animal {
  constructor(type, legs) {
    this.type = type;
    this.legs = legs;
  }
  makeNoise(sound = "Loud Noise") {
    console.log(sound);
  }
  get metaData() {
    return `Type: ${$this.type}, Legs: ${this.legs}`;
  }
  static return10() {
    return 10;
  }
}

export class Cat extends Animal {
  constructor(type, legs, tail) {
    super(type, legs);
    this.tail = tail;
  }
  makeNoise(sound = "meow") {
    console.log(sound);
  }
}
function add(param1) {
  const example = {
    name: "Dylan",
  };
  console.log(example);
}
add();

const apiUrl = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";
/*function getTop100Campers() {
  fetch(apiUrl)
    .then((r) => r.json())
    .then((json) => {
      console.log(json[0]);
    })
    .catch((error) => {
      console.log("failed");
    });
}*/

async function getTop100Campers() {
  const response = await fetch(apiUrl);
  const json = await response.json();

  console.log(json[0]);
}
getTop100Campers();
function resolveAfter3Secods() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 3000);
  });
}

async function getAsyncData() {
  const result = await resolveAfter3Secods();
  console.log(result);
}
getAsyncData();

const exampleSet = new Set([1, 1, 1, 1, 2, 2, 2, 2]);
exampleSet.add(5);
exampleSet.add(5).add(17);
console.log(exampleSet.has(5));
exampleSet.clear();
console.log(exampleSet.delete(5));
console.log(exampleSet.size);
