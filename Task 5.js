//Q1: What is the difference between var, let, and const?
//Difference between var, let and const are
//Feature                            var                             let                             const
//Scope                              Function-scoped                 Block-scoped                    Block-scoped
//Reassign value                     Yes                             Yes                             No
//Redeclare in same scope            Yes                             No                              No
//Hoisted                            Yes, intialized as undefined.   Yes, but TDZ                    Yes, but TDZ
//Must intialize immediately         No                              No                              Yes


//Q2: Can you re-declare a variable with var? What about let and const?
//var can be re-declared, while let and const cannot be re-declared in the same scope.

//Q3: What is the output of this code?
//```javascript
//var x = 5;
//let y = 10;
//const z = 15;
//x = 20;
//y = 25;
//z = 30;
//console.log(x, y, z);
//```
//The output is an error(TypeError:Assignement to constant variable.)

//Q4: What is the difference between declaring and initializing a variable?
//The Difference between declaring and intializing a variable:
//1.Declaring a variable:
//Declaration means creating a variable without neccessarily giving it a value.
//Ex.let age;
//Here age is declared, but it has no value yet.

//2.Intializing a variable:
//Intialization means giving a variable its first value.
//Ex:let x=20;
//Here x is declared and intialized at the same time.

//Q5: What will be the output?
//```javascript
let a;
console.log(a);
//```
//undefined because variable a is not assigned with any value.

//Q6: What is hoisting? Give an example.
//Hoisting is a Javascript behaviour where variable and function declarations are processed before the code is executed.
//Example:
//Before Hoisting:
//console.log(name);
//var name="Dharani";
//console.log(name);

//After Hoisting:
//var name;
//console.log(name); //undefined
//name-"Dharani";
//console.log(name); //Dharani

//Q7: What is the difference between null and undefined?
//The Difference between null and undefined are:
//Undefined                                                 //Null
//Variable is declared but no value is assigned.            Inyentionally set to have no value.
//Javascript usually gives i automatically                  Programmer assigns it manually
//Example:                                                  //Example
// let x;                                                   let x=null;
//console.log(x);                                           console,log(x);


//Q8: What will be the output?
//```javascript
//console.log(typeof null);         //Object
//console.log(typeof undefined);    //Undefined
//console.log(typeof []);           //Object
//console.log(typeof {});           //object
//```

//Q9: What is the difference between == and ===?
//The Difference between == and === are:
//==                                                         //===
//Loose equality                                             Strict equality
//Checks value after type conversion                         Checks value and data type
//Can convert types                                          Does not convert types
//Example:                                                   Example:
//console.log(5 == "5");                                     console.log(5 === "5");

//Q10: What is the difference between ++i and i++?
//The Difference between ++i and i++ are:
//++i-Pre-increment
//First increases the value, then uses it.
//i++-Post increment
//First uses the current value and then increases it.
//Example:
let i=10;
let a1=++i;    //a=1,i=11
let b1=i++;    //b=11,i=12

//Q11: What will be the output?
//```javascript
let x = 10;
let y = "5";
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
//```
//The output is
//105
//5
//50
//2

//Q12: What are logical operators? Explain with examples.
//Logical operators are used to combine or check multiple conditions. There are 3 main logical operators:
//1. &&-AND
//Returns the true value when both conditions are true.
//Example:
let age1=20;
console.log(age1 >= 18 && age1 <= 60); //True  //Both conditions are true.

//2. ||-OR
//Returns true when atleast one condition is true.
//Example:
let age2=16; 
console.log(age2 >= 18 || age2 == 16); //True  //One of the conditions is true.

//3. !-NOT
//Reverses the result: true becomes false, and false becomes true.
//Example:
let isStudent=true;
console.log(isStudent); //false   

//Q13: What will be the output?
//```javascript
console.log(5 > 3 && 10 > 5);  //Both the conditions are true-True
console.log(5 > 10 || 10 > 5); //First is false, second is true-True
console.log(!(5 > 3));         //5>3 is true, and ! reverse it-False
//```

//Q14: What is the ternary operator? Give an example.
//The ternary operator is a short way of writing an if...else statement.
//Syntax:
//condition ? valueIfTrue :
//valueIfFalse;
//Example:
let age3=20;
let result;
if(age3 >= 18){
    result="Eligible";
} else{
    result="Not Eligible";
}
console.log(result);

//Q15: What is the difference between implicit and explicit type casting?
//The DIfference between implicit and explicit type casting
//Implicit                                                 //Explicit
//Javascript converts automatically                        //Programmer convert manually
//No conversion function needed                            //Uses Number(),String(),Boolean(),etc..,
//"10"-5--5                                                //Number("10")-10

//Q16: What will be the output?
//```javascript
console.log(Number("123"));  //123
console.log(Number("hello"));  //NaN
console.log(Number(true));   //1
console.log(Number(false));  //0
console.log(Boolean(0));    //false
console.log(Boolean("hello"));   //true
//```

//Q17: What is NaN? Give an example.
//NaN means Not a Number-It is a special Javascript value that means a mathematical operation or number conversion did not produce a valid number.
//Example:
let x1=Number("hello");
console.log(x1);

//Q18: What is the difference between if-else and switch?
//if-else                                                //switch
//Used for conditions and ranges                         //Used mainly for matching specific values
//Good for complex conditions                            //Good when there are many fixed choices
//Can handle different types of conditions.              //Compares the expression against case values
//Example: if-else
let age6=20;
if(age6 >= 18){
    console.log("Adult");
} else{
    console.log("Minor");
    
}                          //Adult

//Example: switch
let day=2;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");     
}                                    //Tuesday

// Q19: What will be the output?
//```javascript
let age = 20;
if(age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
//```
//The output is Adult.

//Q20: What is nested if? Give an example.
//A nested if means having an if statement inside another if statement.
//Example:
let age4=20;
let hasID=true;
if(age4 >= 18){
    if(hasID){
        console.log("You can enter");
        
    }
}                                      //You can enter

//Q21: Write a program to check if a number is even or odd using ternary operator.
let number=10;
let result1=number % 2 ===0 ? "Even" : "Odd";
console.log(result1);

//Q22: What is the difference between while and do-while?
//The Difference between while and do-while are:
//while                                         //do-while
//Condition is checked before execution         //Condition is checked after execution
//May execute 0 times                           //Executes at least once
//Syntax starts wih while                       //Syntax starts with do
//Example: while:
let i1=5;
while(i<5){
    console.log(i1);
    i++;
}

//Example: do-while:
let i2=5;
do{
    console.log(i2);
    i++; 
} while(i<5);

//Q23: What will be the output?
//```javascript
for(let i = 1; i <= 5; i++) {
    console.log(i);
}
//```
//The output is 
//1
//2
//3
//4
//5

//Q24: What is the difference between for-of and for-in?
//The Difference between for-of and for-in is
//for-of                                        //for-in
//Loops through values                          //Loops through keys/indexes
//Commonly used with arrays, strings, etc..,    //Commonly used with objects
//Gives the actual element                      //Gives the property name or array index.
//Example: for-of
let fruits=["Apple","Banana","Mango"];
for(let fruit of fruits){
    console.log(fruit);
}                                          //Apple,Banana,Mango

//Example: for-in
let person={
    name:"Dharani",
    age:24
};
for(let key in person){
    console.log(key);
}                                         //name, age

//Q25: Write a program to find sum of numbers from 1 to 100.
let sum=0;
for(let i=1; i<=100;i++){
    sum=sum+i;
}
console.log(sum);

// Q26: What is the difference between slice and splice?
//The Difference between slice and splice is:
//slice                                                //Splice
//Does not change the original array                   //Changes the original array
//Used to extract/copy elements                        //Used to add, remove, or replace elememts
//Return a new array                                   //Returns the removed elements
//Example: slice()
let fruits1=["Apple","Banana","Mango","Orange"];
let result3=fruits1.slice(1,3);
console.log(result3);
console.log(fruits1);

//Example: splice()
let fruits2=["Apple","Banana","Mango","Orange"];
let result4=fruits2.splice(1,2);
console.log(result4);
console.log(fruits2);

//Q27: What will be the output?
//```javascript
let arr = [1, 2, 3];  //[1,2,3]
arr.push(4);          //[1,2,3,4]
arr.pop();            //[1,2,3]
arr.unshift(0);       //[0,1,2,3]
arr.shift();          //[1,2,3]
console.log(arr);
//```
//The Final output is [1,2,3]

//Q28: What is the difference between function declaration and function expression?
//The Difference between function declaration and function expression are:
//1.Function Declaration:                                                   
//A function is declared using the function keyword and a function name.
function greet(){
    console.log("Hello");
}
greet();                    //Hello
//Function declarations are hoisted, so you can call them before they appear in the code,
greet();
function greet(){
    console.log("Hello");
    
}                          //Hello

//2.Function Expression:
//A function is stored inside a variable.
const greet1=function(){
    console.log("Hello");
};                         //Hello
greet1();
//Function expressions cannot be called before the variables is intialized.
//greet2();
//const greet2=function(){
//    console.log("Hello");
//};                           //Error

//Q29: What is an arrow function? Give an example.
//An arrow function is a shorter way to write a function in Javascript.It uses the => symbol.
//Example:
const add=(a,b) => {
    return a+b;
};
console.log(add(10,5));              //15

//Q30: What will be the output?
//```javascript
function greet() {
    return "Hello";
}
let message = greet();
console.log(message);
//```
//The output is Hello.











