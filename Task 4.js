//Task 1 — For Loop
//Print numbers from 1 to 10 using a for loop.
//Expected:
//1
//2
//3
//...
//10
for(let i=1;i<=10;i++){
    console.log(i);
}

//Task 2 — Reverse Number
//Print numbers from 10 to 1 using a for loop.
for(let i=10;i>=1;i--){
    console.log(i);
}

//Task 3 — Even Numbers
//Print all even numbers from 1 to 20.
//2
//4
//6
//8
//...
//20
for(let i=2;i<=20;i+=2){
    console.log(i);
}

// Task 4 — Odd Numbers
//Print all odd numbers from 1 to 20.
for(let i=1;i<=20;i+=2){
    console.log(i);
}

//Task 5 — Multiplication Table
//Get a number from the user.
//Print its multiplication table from 1 to 10.
//Example:
//5 x 1 = 5
//5 x 2 = 10
//5 x 3 = 15
//...
//5 x 10 = 50
let num=Number(prompt("Enter a number:"));
for(let i=1;i<=10;i++){
    console.log(num + "x" + i + "=" +(num*i));
}

//Task 6 — Countdown
//Using while, print:
//10
//9
//8
//7
//6
//5
//4
//3
//2
//1
let i=10;
while(i>=1){
    console.log(i);
    i--;
}

//Task 7 — Sum of Numbers
//Using while, calculate:
//1 + 2 + 3 + ... + 10
//Expected:
//55
let i1=1;
let sum=0;
while(i1<=10){
    sum=sum+i;
    i++;
}
console.log(sum);

//Task 8 — Print Numbers
//Use do...while to print:
//1
//2
//3
//4
//5
let i2=1;
do{
    console.log(i);
    i++;
}while(i<=5);

//Task 9 — Do While Understanding
//What is the output?
let a = 10;
do {
    console.log(a);
    a++;
} while (a <= 5);
//Important: Explain why the output occurs even though the condition is false.
//Why?: A do..while loop runs the code once before checking the condition.

//Task 10 — String Characters
let name = "javascript";
//Print every character using for...of.
for(let char of name){
    console.log(char);
}

//Task 11 — Array Values
let fruits = ["apple", "orange", "banana", "mango", "grapes"];
//Use for...of to print every fruit.
for(let fruit of fruits){
    console.log(fruit);
}

//Task 12 — Student Names
//Create an array of 5 student names.
//Use for...of to print:
//Student: Arun
//Student: Priya
//...
let students=["Arun","Priya","Aravind","Rishitha","Reethu"];
for(let student of students){
    console.log("Student: " +student);
}

//Task 13 — Employee Object
//Create:
let employee = {
    name1: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};
//Use for...in to print:
//name Arun
//age 25
//role Developer
//city Chennai
for(let key in employee){
    console.log(key+ " "+employee[key]);
}


//Task 14 — Product Object
//Create:
//productName
//price
//brand
//category
//stock
//Use for...in to print every key and value.
let product={
    productName:"Laptop",
    price:50000,
    brand:"Dell",
    category:"Electronics",
    stock:10,
};
for(let key in product){
    console.log(key + " " +product[key]); 
}

//Task 15 — Simple Function
//Create a function called welcome().
//It should print:
//Welcome to JavaScript
//Call the function 3 times.
function welcome(){
    console.log("Welcome to Javascript");  
}

welcome();
welcome();
welcome();

//Task 16 — Function With Parameter
//Create:
function greet(name) {
    console.log("Hello" + name);
}
//Call:
greet("Naveen");
greet("Arun");
greet("Priya");
//Expected:
//Hello Naveen
//Hello Arun
//Hello Priya

//Task 17 — Multiple Parameters
//Create a function:
//student(name, age, department)
//Print all three values.
//Call it with 3 different students.
//Your syllabus specifically covers parameters and arguments.
function student(name,ae,department){
    console.log("Name: " + name);
    console.log("Age: " +age);
    console.log("Department: " +department);
}

student("Arun",25,"IT");
student("Priya",22,"CSE");
student("Naveen",24,"ECE");

//Task 18 — Addition Function
//Create:
function add(a, b) {
     return a+b;
}
//Call:
let result = add(10, 20);
console.log(result);
//Expected:
//30

//Task 19 — Salary
//Create:
function salary(amount) {
    return amount;
}
//Store the returned value in a variable and print it.
let result1=salary(25000);
console.log(result1);

//Task 20 — Bonus Calculator
//Create:
function bonus(salary, bonusAmount){
    return salary+bonusAmount;
}
//Return:
//salary + bonusAmount
//Example:
//Salary = 50000
//Bonus = 5000
//Total = 55000
let total=bonus(50000,5000);
console.log(total);

//Task 21
//Create:
function employee1(name, role = "Developer") {
    console.log(name);
    console.log(role);
}
//Call:
//employee("Arun");
//employee("Priya", "Designer");
//Find the output.
//This follows the default-parameter concept in your notes.
employee1("Arun");
employee1("Priya","Designer");

//Task 22 — Named Function
//Create a named function:
function square(number) {
    return number * number;
}
//Call it with 5 different numbers.
console.log(square(2));
console.log(square(5));
console.log(square(10));
console.log(square(7));
console.log(square(12));

//Task 23 — Anonymous Function
//Create an anonymous function and store it in a variable.
let calculate = function(a, b) {
    return a + b;
};
//Call it and print the result.
let result2=calculate(10,20);
console.log(result2);

//Task 24 — Arrow Function
//Create an arrow function that accepts two numbers and returns their multiplication.
let multiply = (a, b) => {
    return a * b;
};
let result4=multiply(5,6);
console.log(result4);

//Task 25 — Predict the Output
//function test() {

    //if (true) {

        //var a = 10;
        //let b = 20;
        //const c = 30;

        //console.log(a);
        //console.log(b);
        //console.log(c);
    //}

    //onsole.log(a);
    //console.log(b);
    //console.log(c);
//}

//test();
//Before running it, identify which values can be accessed.
//Your notes demonstrate var versus let/const inside a function and block.
//Inside  the if block the values will be same as declared like 10,20,30 and the logging
//Statements outside the if block elements will through a error since let and const asre block scope.

//Task 26 — Predict
//console.log(a1);
//var a1 = 10;
//What happens?
//No error occurs because var a1 is  hoisted.

//Task 27
//Predict:
//console.log(b);
//let b = 20;
//Reference error-It does not print undefined.

//Task 28
//Predict:
//console.log(c);
//const c = 30;
//Then explain the difference between the three.
//var=function scoped and can be accessed before declaration as undefined.
//let=block-scoped and cannot be accessed before initialization.
//const=blocl-scoped and cannot be accessed before initialization, it also cannot be reassigned.

//Task 29 — Self Invoking Function
//Create an IIFE that immediately prints:
//Welcome to JavaScript
//Then create another IIFE that accepts:
//product
//discount
//and prints the discount message.
//Your notes demonstrate an IIFE using product and discount parameters.
//IIFE1
(function(){
    console.log("Welcome to Javascript");
})();

//IIFE2
(function(product,discount){
    console.log(product+ "has a" + discount + "% discount");
})("Laptop",20);

//Task 30
//Create:
function welcome() {
    console.log("Welcome");
}

function execute(callback) {
    callback();
}
execute(welcome);
//Understand which function is the callback and which function is the higher-order function.
//welcome=This is the callback function because it is passed as an argument to another function.
//execute=This is the higher-order function because it accepts another function(callback)as an argument.
//execute(welcome)=passes the welcome function to execute.
//callback()=Calls the welcome function.

//Task 31 — Cashback
//Create a generator:
function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}
//Create the generator object and print all values using for...of.
//This matches the generator approach in your syllabus.
let cashbackGenerator=cashback();
for(let value of cashbackGenerator){
    console.log(value);
}

// FINAL MINI PROJECT
//Task 32 — Employee Management Console
//Create a simple Employee Management System using only the concepts you've learned.
//Employee data
//Create an array containing employee objects:
//Name
//Age
//Department
//Role
//Salary
//Example:
let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    }
];
//equirements
//Use:
//1. for...of
//Print every employee.
console.log("=== Employee List===");
for(let employee of employees){
    console.log(employee);
}

//2. for...in
//Print each employee's keys and values.
console.log("=== Employee Betails ===");
for(let employee of employees){
    for(let key in employee){
        console.log(key + ": " +employee[key]);
    }
console.log("------------------");
}

//3. Function
//Create a function to display employee information.
//4. Function parameters
//Pass employee information to the function.
function displayEmployee(name,age,department,role,salary){
    console.log("Name: " +name);
    console.log("Age: " +age);
    console.log("Department: " +department);
    console.log("Role: " +role);
    console.log("Salary: "+salary);
}
console.log("===Employee Information===");
for(let employee of employees){
    displayEmployee(
        employee.name,
        employee.age,
        employee.department,
        employee.role,
        employee.salary
    );
console.log("----------------");

}

//5. Return
//Create a function that returns an employee's salary.
function getSalary(employee){
    return employee.salary;
}
console.log("===Salaries ===");
for(let employee of employees){
    let salary=getSalary(employee);
    console.log(employee.name + ":Rs" +salary);   
}

//6. Condition
//Check:
//Salary >= 40000
console.log("===Salary checl===");
for(let employee of employees){
    if(employee.salary >= 40000){
        console.log(employee.name + "earns Rs40000 or more.");
    } else{
        console.log(employee.name + "earns below Rs40000.");  
    }
}

//7. Arrow function
//Create an arrow function for another simple calculation.
let calculateBonus=(salary) => {
    return salary * 10/100;
};

console.log("===Bonus Calculation===");
for(let employee of employees){
    let bonus=calculateBonus(employee.salary);
    console.log(employee.name + "bonus: Rs" +bonus);
}

//8. Generator
//Create a generator that produces employee benefits:
//Medical Insurance
//Transport
//Food Allowance
//Bonus
function* employeeBenefits(){
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}
let benefits=employeeBenefits();
console.log("===Employee Benefits===");
for(let benefit of benefits){
    console.log(benefits);
}


jjnn
