//Classes
class Greet{
    greet():void{
        console.log("Hi! This is an introduction to TypeScript.")
    }
}

var num:String="This is a string.";
var obj=new Greet()
console.log(num)
obj.greet()

//Scope
var global_num=12
class Numbers{
    num_val=13
    static sval=10
    storeNum():void{
        var localNum=14
        console.log(localNum)
    }
}

console.log("Global num:"+global_num)
console.log(Numbers.sval)
var object=new Numbers()
console.log(object.num_val)

//Tuples
var firstTuple=["One",1,true]
console.log("Printing tuple: \n")
console.log(firstTuple)

//pushing and popping
console.log(firstTuple.pop())
firstTuple.push("..",12)
console.log(firstTuple)


//tuples are mutable
firstTuple[0]="Modified val"
console.log(firstTuple)

//extracting values from tuples into variables
var secTuple=[10,"dummy",766]
var [b,c,d]=secTuple
console.log(b)
console.log(c)
console.log(d)

//union
var union:string|number
union=12
console.log(union)
union="Changed to a string"
console.log(union)

function disp(name:string|string[]){
    if(typeof name=="string")
        console.log(name)
    else{
        for(var i=0;i<name.length;i++)
        console.log(name[i])
        }
}
console.log("printing just the string")
disp("Oh hi Mark")
console.log("printing the array")
disp(["Tom","Ann","Ron"])

//custom type tuple
type tuple=[string,number,boolean]
function disp2(name:tuple){
    for(var i=0;i<name.length;i++)
        console.log([name[i]])
}
var myTuple:tuple;
myTuple=["Leslie",1,true]
disp2(myTuple)

var tTuple=["Mike","Jim","Pam"]
function tuple(tTuple){
    var a=this.tTuple[0]
    var b=this.tTuple[1]
    var c=this.tTuple[2]
    console.log(a,b,c)
}

//interfaces
interface firstInterface{
    firstName:string
    lastName:string
    empID:number
    sayHi:()=> string
}

var customer:firstInterface={
    firstName:"Akhilesh",
    lastName:"Rane",
    empID:52552,
    sayHi:():string=>{
        return "Hi there!"
    }
}
console.log("Customer Object")
console.log(customer.firstName+" "+customer.lastName+" "+customer.empID+" "+customer.sayHi())
var user:firstInterface={
    firstName:"Ron",
    lastName:"Swanson",
    empID:52445,
    sayHi:():string=>{
        return ("Hello,user")
    }
}
console.log(user.firstName+" "+user.lastName+" "+user.empID+" "+user.sayHi())

//classes
class Car{
    engine:string
    constructor(engine:string){
        this.engine=engine
    }

    disp():void{
        console.log("Engine is: "+this.engine)
    }
}

var object2=new Car("V10")
object2.disp()

class Mazda extends Car{
    disp():void{
        console.log("This Mazda car has a "+this.engine+" engine")
    }
}

var mazda=new Mazda("V8")
mazda.disp()

class LMazda extends Mazda{
    disp():string{
        super.disp()
        console.log("(Multilevel) This economy Mazda car has a "+this.engine+" engine")
        return "Yup"
    }
}

var lmazda=new LMazda("1000cc")
var m=lmazda.disp()
console.log(m)

class StaticClass{
    static num:Number
    static disp():void{
        console.log(StaticClass.num)
    }
}
StaticClass.num=12
console.log(StaticClass.num)
StaticClass.disp()

//instanceOf : check if an object belongs to a class

var isInstance= lmazda instanceof LMazda
console.log(isInstance)

//implements
interface ILoan{
    interest:number
    disp():void;
}

class AgriLoan implements ILoan{
    interest:number
    rebate:number
    disp():void{
        console.log("Agriculture Loan:"+ this.interest*this.rebate)
    }
}

var agriloan=new AgriLoan
agriloan.interest=0.15
agriloan.rebate=100
agriloan.disp()

class Encapsulate 
    { 
    str:string = "hello" 
    private str2:string = "world"
    disp():void{
        console.log(this.str2)
    } 
    }
 var obj6 = new Encapsulate() 
 console.log(obj6.str) 
 obj6.disp()

 const speed='quick'
 console.log ('The ${speed} ..')

 class Animal{
     noise
     constructor(noise){
         this.noise=noise
     

         console.log(this.noise)

 }
}
 class dog extends Animal{
     size
     constructor(size){
         super('bark')
         this.size=size
     }
 }

 const animal=new dog('large')

 const aa={foo:1}
 aa.bar=2
 console.log(aa)