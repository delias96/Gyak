const hello: string = "world";

const getFullName = (name: string, surname: string): string => {
  return name + " " + surname;
};

console.log(getFullName("Moster", "Lessons"));

interface IUser {
  name: string;
  age?: number;
  getMessage(): string;
}

const user: IUser = {
  name: "Moster",
  age: 30,
  getMessage() {
    return "Hello " + name;
  },
};
const user2: IUser = {
  name: "Jack",
  getMessage() {
    return "Hello " + name;
  },
};

type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;
interface UserInterface {
  id: ID;
  name: string;
  surname: string;
}

const popularTags: PopularTag[] = ["dragon", "coffee"];

const dragonsTag: MaybePopularTag = "dragon";

let username: string = "alex";

let pageName: string | number = "1";

let errorMesage: string | null = null;
let user1: UserInterface | null = null;
let someProp: string | number | null | undefined | string[] | object;

const doSomething = (): void => {
  console.log("doSomething");
};
const foo: void = undefined;
const foo1: any = undefined;
let vAny: any = 10;
let vUnknown: unknown = 10;
let s1: string = vAny;
let s2: string = vUnknown as string;
let pageNumber: string = "1";
let numericPageNumber: number = pageNumber as unknown as number;

let page: any = "1";
let pageNumber1 = page as string;
const someElement = document.querySelector(".foo") as HTMLInputElement;
console.log("someElement", someElement.value);

const someElement1 = document.querySelector(".foo");
someElement.addEventListener("blur", (event) => {
  const target = event.target as HTMLInputElement;
  console.log("event", target.value);
});

interface UserInterface2 {
  getFullname(): string;
}

class User implements UserInterface2 {
  protected firstname: string;
  private lastname: string;
  readonly unchangableName: string;
  static readonly maxAge = 50;
  constructor(firstname: string, lastname: string) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  changeUnchangableName(): void {
    //this.unchangableName="foo";
  }
  getFullname(): string {
    return this.firstname + " " + this.lastname;
  }
}

const user3 = new User("Monster", "lessons");
console.log(user3.getFullname());

class Admin extends User {
  private editor: string;
  setEditor(editor: string): void {
    this.editor = editor;
  }
  getEditor(): string {
    return this.editor;
  }
}
const admin = new Admin("Foo", "Bar");
console.log(admin.getEditor());

//const updateArray = append<string>("baz", ["foo", "bar"]);
//const searchStr = "foo";
//const _hasSearchesString = any<string>(
//  (el: string) => el.includes(searchStr),
//  ["fooooo", "bar", "baz"]
//);

const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};

interface UserInterface3<T, V> {
  name: string;
  data: T;
  meta: V;
}

const user4: UserInterface3<{ meta: string }, string> = {
  name: "Jack",
  data: {
    meta: "foo",
  },
  meta: "bar",
};
//const user5: UserInterface3<string[]> = {
//  name: "Jack",
//  data: ["foo", "bar", "baz"],
//};
//const result = addId<UserInterface3>(user4);
//console.log("result", result);

const statuses = {
  notStarted: 0,
  inProgress: 1,
  done: 2,
};

console.log(statuses.inProgress);

enum StatusEnum {
  notStarted = "notStarted",
  inProgress = "inProgress",
  Done = "Done",
}

interface Task {
  id: string;
  status: StatusEnum;
}

let notStartedStatus: StatusEnum = StatusEnum.notStarted;
notStartedStatus = StatusEnum.Done;
console.log(StatusEnum.inProgress);
