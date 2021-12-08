var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var hello = "world";
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName("Moster", "Lessons"));
var user = {
    name: "Moster",
    age: 30,
    getMessage: function () {
        return "Hello " + name;
    }
};
var user2 = {
    name: "Jack",
    getMessage: function () {
        return "Hello " + name;
    }
};
var popularTags = ["dragon", "coffee"];
var dragonsTag = "dragon";
var username = "alex";
var pageName = "1";
var errorMesage = null;
var user1 = null;
var someProp;
var doSomething = function () {
    console.log("doSomething");
};
var foo = undefined;
var foo1 = undefined;
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
var s2 = vUnknown;
var pageNumber = "1";
var numericPageNumber = pageNumber;
var page = "1";
var pageNumber1 = page;
var someElement = document.querySelector(".foo");
console.log("someElement", someElement.value);
var someElement1 = document.querySelector(".foo");
someElement.addEventListener("blur", function (event) {
    var target = event.target;
    console.log("event", target.value);
});
var User = /** @class */ (function () {
    function User(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    User.prototype.changeUnchangableName = function () {
        //this.unchangableName="foo";
    };
    User.prototype.getFullname = function () {
        return this.firstname + " " + this.lastname;
    };
    User.maxAge = 50;
    return User;
}());
var user3 = new User("Monster", "lessons");
console.log(user3.getFullname());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User));
var admin = new Admin("Foo", "Bar");
console.log(admin.getEditor());
//const updateArray = append<string>("baz", ["foo", "bar"]);
//const searchStr = "foo";
//const _hasSearchesString = any<string>(
//  (el: string) => el.includes(searchStr),
//  ["fooooo", "bar", "baz"]
//);
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user4 = {
    name: "Jack",
    data: {
        meta: "foo"
    },
    meta: "bar"
};
//const user5: UserInterface3<string[]> = {
//  name: "Jack",
//  data: ["foo", "bar", "baz"],
//};
//const result = addId<UserInterface3>(user4);
//console.log("result", result);
var statuses = {
    notStarted: 0,
    inProgress: 1,
    done: 2
};
console.log(statuses.inProgress);
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["notStarted"] = "notStarted";
    StatusEnum["inProgress"] = "inProgress";
    StatusEnum["Done"] = "Done";
})(StatusEnum || (StatusEnum = {}));
var notStartedStatus = StatusEnum.notStarted;
notStartedStatus = StatusEnum.Done;
console.log(StatusEnum.inProgress);
