//const person: {
//  name: string;
//  age: number;
//  hobbies: string[];
//  role: [number, string];
//} = {
//  name: "Maximilian",
//  age: 30,
//  hobbies: ["Sports", "Cooking"],
//  role: [2, "author"],
//};
//person.role.push("admin");
//person.role[1] = 10;
//person.role = [0, "admin", "user"];

//const ADMIN = 0;
//const READ_ONLY = 1;
//const Author = 2;

enum Role {ADMIN,READ_ONLY,AUTHOR}

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: Role;
  } = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
  };
let favoriteActivities: string[];
favoriteActivities = ["Sports", "1"];
385893;
console.log(person.name);
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase);
}
if(person.role === Role.ADMIN){
    console.log("read only");
    
}