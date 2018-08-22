var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Classes
var Greet = /** @class */ (function () {
    function Greet() {
    }
    Greet.prototype.greet = function () {
        console.log("Hi! This is an introduction to TypeScript.");
    };
    return Greet;
}());
var num = "This is a string.";
var obj = new Greet();
console.log(num);
obj.greet();
//Scope
var global_num = 12;
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13;
    }
    Numbers.prototype.storeNum = function () {
        var localNum = 14;
        console.log(localNum);
    };
    Numbers.sval = 10;
    return Numbers;
}());
console.log("Global num:" + global_num);
console.log(Numbers.sval);
var object = new Numbers();
console.log(object.num_val);
//Tuples
var firstTuple = ["One", 1, true];
console.log("Printing tuple: \n");
console.log(firstTuple);
//pushing and popping
console.log(firstTuple.pop());
firstTuple.push("..", 12);
console.log(firstTuple);
//tuples are mutable
firstTuple[0] = "Modified val";
console.log(firstTuple);
//extracting values from tuples into variables
var secTuple = [10, "dummy", 766];
var b = secTuple[0], c = secTuple[1], d = secTuple[2];
console.log(b);
console.log(c);
console.log(d);
//union
var union;
union = 12;
console.log(union);
union = "Changed to a string";
console.log(union);
function disp(name) {
    if (typeof name == "string")
        console.log(name);
    else {
        for (var i = 0; i < name.length; i++)
            console.log(name[i]);
    }
}
console.log("printing just the string");
disp("Oh hi Mark");
console.log("printing the array");
disp(["Tom", "Ann", "Ron"]);
function disp2(name) {
    for (var i = 0; i < name.length; i++)
        console.log([name[i]]);
}
var myTuple;
myTuple = ["Leslie", 1, true];
disp2(myTuple);
var tTuple = ["Mike", "Jim", "Pam"];
function tuple(tTuple) {
    var a = this.tTuple[0];
    var b = this.tTuple[1];
    var c = this.tTuple[2];
    console.log(a, b, c);
}
var customer = {
    firstName: "Akhilesh",
    lastName: "Rane",
    empID: 52552,
    sayHi: function () {
        return "Hi there!";
    }
};
console.log("Customer Object");
console.log(customer.firstName + " " + customer.lastName + " " + customer.empID + " " + customer.sayHi());
var user = {
    firstName: "Ron",
    lastName: "Swanson",
    empID: 52445,
    sayHi: function () {
        return ("Hello,user");
    }
};
console.log(user.firstName + " " + user.lastName + " " + user.empID + " " + user.sayHi());
//classes
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.disp = function () {
        console.log("Engine is: " + this.engine);
    };
    return Car;
}());
var object2 = new Car("V10");
object2.disp();
var Mazda = /** @class */ (function (_super) {
    __extends(Mazda, _super);
    function Mazda() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mazda.prototype.disp = function () {
        console.log("This Mazda car has a " + this.engine + " engine");
    };
    return Mazda;
}(Car));
var mazda = new Mazda("V8");
mazda.disp();
var LMazda = /** @class */ (function (_super) {
    __extends(LMazda, _super);
    function LMazda() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LMazda.prototype.disp = function () {
        _super.prototype.disp.call(this);
        console.log("(Multilevel) This economy Mazda car has a " + this.engine + " engine");
        return "Yup";
    };
    return LMazda;
}(Mazda));
var lmazda = new LMazda("1000cc");
var m = lmazda.disp();
console.log(m);
var StaticClass = /** @class */ (function () {
    function StaticClass() {
    }
    StaticClass.disp = function () {
        console.log(StaticClass.num);
    };
    return StaticClass;
}());
StaticClass.num = 12;
console.log(StaticClass.num);
StaticClass.disp();
//instanceOf : check if an object belongs to a class
var isInstance = lmazda instanceof LMazda;
console.log(isInstance);
var AgriLoan = /** @class */ (function () {
    function AgriLoan() {
    }
    AgriLoan.prototype.disp = function () {
        console.log("Agriculture Loan:" + this.interest * this.rebate);
    };
    return AgriLoan;
}());
var agriloan = new AgriLoan;
agriloan.interest = 0.15;
agriloan.rebate = 100;
agriloan.disp();
var Encapsulate = /** @class */ (function () {
    function Encapsulate() {
        this.str = "hello";
        this.str2 = "world";
    }
    Encapsulate.prototype.disp = function () {
        console.log(this.str2);
    };
    return Encapsulate;
}());
var obj6 = new Encapsulate();
console.log(obj6.str);
obj6.disp();
var speed = 'quick';
console.log('The ${speed} ..');
var Animal = /** @class */ (function () {
    function Animal(noise) {
        this.noise = noise;
        console.log(this.noise);
    }
    return Animal;
}());
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog(size) {
        var _this = _super.call(this, 'bark') || this;
        _this.size = size;
        return _this;
    }
    return dog;
}(Animal));
var animal = new dog('large');
var aa = { foo: 1, bar: 1 };
aa.bar = 2;
console.log(aa);
