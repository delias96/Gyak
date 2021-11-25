import { data, Animal, Cat } from "./index.js";
let updatedData = data;
updatedData.push(5);
console.log(data);

let cat = new Animal("Cat", 4);
cat.legs = 3;
cat.makeNoise("Meow");
console.log(cat, legs);
//console.log(Animal.return10());
console.log(cat.metaData);
let cat = new Cat("cat", 4);
cat.makeNoise();
console.log(cat.metaData);
