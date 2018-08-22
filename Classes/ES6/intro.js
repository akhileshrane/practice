 console.log("Hi!")

 function test() {
 	var num = 100
	 console.log("Value of num inside the function is " + num) 
	 {
 		console.log("Inner Block begins here")
 		let num = 5000
 		console.log("Value of num after using let: " + num)
 	}
 	console.log("Outside block" + num)
 }

 var main = function () 
 {
	 for (var x = 0; x < 5; x++) 
	 {
 		console.log(x);
 	 }
 	console.log(x);
 }

 for (let val of [12, 1223, 123]) 
 {
 	console.log(val)
 }

 function add(a, b = 2) 
 {
 	return a + b
 }
 var varName = new Function("a", "b", "c", "d=a+b+c; console.log(d);")
 varName("ABC", "AA", "AAAA")
 console.log(add(4))
 console.log(add(4, 448))

 function helloWorld() 
 {
 	console.log("Hello World!");
 }
 var msg = (a, b) => 
 {
 	console.log("Hello again, world!")
 	return a + b;
 }
 var n = msg(4, 65)
 var array = ["Hello", 1, 2, 5, "Hmm"]

 for (var i = 0; i < array.length; i++) 
 {
 	console.log(array[i])
 }

 var myArray = new Array(5)
 myArray = ["One", "Two"]

 for (var i = 0; i < myArray.length; i++) 
 {
 	console.log(myArray[i])
 }

try{
	aa
}

catch(e){
		console.log("You made a mistake")
}

var roles=
{
	type:"Admin",
	displayType : function()
	{
		console.log(this.type)
	}
}

var data={
	name:"Shyam",
	ID:"e52552",
	display (){
		console.log("Hello!!!!!")
	}
}

var super_role= Object.create(roles)
super_role.displayType()
var guest_role=Object.create(roles)
guest_role.type="Guest"
guest_role.displayType()

var copy=Object.assign({},roles)
for(let val in copy){
	console.log(copy[val])
}

var obj1={a:10}
var obj2={b:20}
var obj3={c:30}
var obj=Object.assign("",obj1,obj2,obj3)
console.log(obj)
console.log(obj1)

var myObj=new Object
myObj.a=5
myObj.b=12
delete myObj.a
console.log("a" in myObj)

var obj1={name:"Akhilesh"}
var obj2={name:"Akhilesh"}
console.log(obj1.name==obj2.name)

data.display()
console.log(n)
helloWorld()
main()
test()

const a='quick'
console.log('${a}')

const obj111={
	foo:1
}
obj111.bar=2
console.log(obj111)