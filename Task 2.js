// Task 1 — var, let, const
//Create three variables:
//var → student name
//let → student age
//const → college name
//Requirements:
//Print all three values.
//Change the var value.
//Change the let value.
//Try changing the const value and observe the error.
//Try redeclaring the var variable.
//Try redeclaring the let variable and observe the error.
var studentName0="Dharani";
let studentAge0=23;
const collegeName0="Bhoj Reddy Engineering College For Women";
console.log("Student Name:",studentName0);
console.log("Student Age:",studentAge0);
console.log("College Name:",collegeName0);
studentName="Reddy";
console.log("Changed Student Name:",studentName0);
studentAge=24;
console.log("Changed Student Age:",studentAge0);
//collegeName="Matrusri Engineering College";
//Error:Assignment to constant variable.
studentName="Vanguru";
console.log("Redeclared the student name:",studentName0);
//let studentAge=25;
//Error:Identifier 'studentAge'has already been declared.

//Task 2 — User Information
//Get the following information from the user using prompt():
//Name
//Age
//City
//Print the result in the console.
//Expected:
//Name: Naveen
//Age: 22
//City: Trichy
let name1=prompt("Enter your name:");
let age3=prompt("Enter your age:");
let city2=prompt("Enter your city:");
console.log("Name:",name1);
console.log("Age:",age3);
console.log("City:",city2);

//Task 3 — Welcome Message
//Get the user's name using prompt().
//Display:
//Welcome Naveen!
//Use alert().
let name2=prompt("Enter your name:");
alert("Welcome"+name2+"!");

//Task 4 — Age Calculator
//Ask the user for their birth year.
//Calculate their approximate age using:
//Current Year - Birth Year
//Print the age in the console.
//Example:
//Birth Year: 2000
//Age: 26
let birthYear=prompt("Enter your birth year:");
let currentYear=2026;
let age6=currentYear-Number(birthYear);
console.log("Birth Year:",birthYear);
console.log("Age:",age6);

//Task 5 — Identify Data Types
//Create variables containing:
//"Hello"
//100
//25.5
//true
//false
//undefined
//null
//Use typeof and print each data type.
let greeting="Hello";
let number=100;
let decimal=25.5;
let isTrue=true;
let isFalse=false;
let notDefined=undefined;
let emptyValue=null;
console.log(greeting, ":", typeof greeting);
console.log(number, ":", typeof number);
console.log(decimal, ":", typeof decimal);
console.log(isTrue, ":", typeof isTrue);
console.log(isFalse, ":", typeof isFalse);
console.log(notDefined, ":", typeof notDefined);
console.log(emptyValue, ":", typeof emptyValue);

//Task 6 — Student Data
//Create an object:
//name
//age
//city
//qualification
//isStudent
//Print:
//Complete object
//Name
//Age
//Qualification
//isStudent
let student={
    name2:"Dharani",
    age1:23,
    city1:"Hyderabad",
    qualification:"B.Tech",
    isStudent:true,
};
console.log("Complete Object:",student);
console.log("Name2:",student.Name2);
console.log("Age1:",student.age1);
console.log("City1:",student.city1);
console.log("Qualification:",student.qualification);
console.log("isStudent",student.isStudent);

//Task 7 — Fruit Array
//Create an array containing 6 fruits.
//Apple
//Mango
//Orange
///Banana
//Grapes
//Papaya
//Print:
//First fruit
//Second fruit
//Last fruit
//Total number of fruits
//Hint:
//array.length
//array.length - 1
let fruits=["Apple","Mango","Orange","Banana","Grapes","Papaya"];
console.log("First fruit:",fruits[0]);
console.log("Second fruit:",fruits[1]);
console.log("Last fruit:",fruits[fruits.length-1]);
console.log("Total number of fruits:",fruits.length);

//Task 8 — Basic Calculator
//Create two numbers:
//let a = 20;
//let b = 5;
//Perform:
//Addition
//Subtraction
//Multiplication
//Division
//Modulus
//Exponentiation
//Print every result separately.
let a=20;
let b=5;
console.log("Addition:",a+b);
console.log("Subtraction:",a-b);
console.log("Multiplication:",a*b);
console.log("Division:",a/b);
console.log("Modulus:",a%b);
console.log("Exponentiation:",a**b);

//Task 9 — Shopping Bill
//Create:
//Shirt = 999
//Pant = 1499
//Shoes = 1999
//Calculate the total price.
//Expected:
//Total = 4497
let Shirt=999;
let Pant=1499;
let Shoes=1999;
let total=Shirt+Pant+Shoes;
console.log("Total:",total);

//Task 10 — Simple Marks Calculation
//Create marks for 3 subjects:
//Tamil = 80
//English = 75
//Maths = 90
//Calculate:
//Total marks
//Average marks
let Tamil=80;
let English=75;
let Maths=90;
let Total=Tamil+English+Maths;
let Average=Total/3;
console.log("Total:",Total);
console.log("Average Marks:",Average);

//Task 11 — Post Increment
//Predict the output before running the code:
let a1 = 10;
let b1 = a1++;
console.log(a1);
console.log(b1);
//Write your expected output first, then run it.
//The Expected output is 10,10.
//The Actual output is 11,10.

//Task 12 — Pre Increment
//Predict the output:
let a2 = 10;
let b2 = ++a2;
console.log(a2);
console.log(b2);
//The output is 11,11.

//Task 13 — Post Decrement
//Predict:
let a3 = 20;
let b3 = a3--;
console.log(a3);
console.log(b3);
//The Output is 19,20.

//Task 14 — Pre Decrement
//Predict:
let a4 = 20;
let b4 = --a4;
console.log(a4);
console.log(b4);
//The output is 19,19.

//Task 15 — Find the Final Values
//Without running the code, find the output:
let a5 = 5;
let b5 = a5++;
let c = ++a5;
let d = b5--;
console.log(a5);
console.log(b5);
console.log(c);
console.log(d);
//Students should write the answer first and then verify it.
//The Output is a=7,b=4,c=7,d=5

//Task 16 — Assignment Operators
//Given:
//let num = 10;
//Perform each operation separately:
//+=
//-=
//*=
///=
//%=
//**=
//Example:
//num += 5;
//console.log(num);
let num=10;
num+=5;
console.log("+=:",num);

num=10;
num-=5;
console.log("-=:",num);

num=10;
num*=5;
console.log("*=:",num);

num=10;
num/=5;
console.log("/=:",num);

num=10;
num%=5;
console.log("%=:",num);

num=10;
num**=5;
console.log("**=:",num);

// Task 17 — Mini Student Profile
//Create a student profile using:
//Variables
//Name
//Age
//City
//College
//Array
//Store 5 favorite subjects.
//Object
//Create an employee/student object containing:
//name
//age
//city
//subjects
//isStudent
//Then print:
//Student name
//Student age
//City
//First subject
//Last subject
//Total subjects
//Complete object
let name="Dharani";
let age=23;
let city="Hyderabad";
let college="Bhoj Reddy ENgineering COllege For Women";

let subjects=["Telugu","Hindi","English","Maths","Science"];

let student1={
    name:name,
    age:age,
    city:city,
    subjects:subjects,
    isStudent:true,
};

console.log("Student1 Name:",student1.name);
console.log("Student1 Age:",student1.age);
console.log("City:",student1.city);
console.log("First Subject:",student1.subjects[0]);
console.log("Last Subject:",student1.subjects[student1.subjects.length-1]);
console.log("Total Subjects:",student1.subjects.length);
console.log("Complete Object:",student1);


//Final Challenge — User + Calculator
//Get two numbers from the user using prompt().
//Perform:
//Addition
//Subtraction
//Multiplication
//Division
//Modulus
//Power
//Then display all results using console.log().
//Restriction: Use only the concepts you have taught so far:
//var, let, const, prompt(), console.log(), data types, arrays, objects, arithmetic operators, increment/decrement, and assignment operators.
let num1=prompt("Enter first number:");
let num2=prompt("Enter second number:");
num1=Number(num1);
num2=Number(num2);
let addition=num1+num2;
let substraction=num1-num2;
let multiplication=num1*num2;
let division=num1/num2;
let modulus=num1%num2;
let power=num1**num2;
console.log("Addition:",addition);
console.log("Substraction:",substraction);
console.log("Multiplication:",multiplication);
console.log("Division:",division);
console.log("Modulus:",modulus);
console.log("Power:",power);














































