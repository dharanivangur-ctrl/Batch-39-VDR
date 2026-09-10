//Task 1 — Student Result Analyzer
//Create a program that accepts a student's:
//Name
//Department
//5 subject marks
//Requirements:
//Calculate total marks
//Calculate average
//Find pass/fail
//Assign grade:
//90+ → A
//75–89 → B
//60–74 → C
//50–59 → D
//Below 50 → Fail
//Display the result using console.log()
//Concepts: variables, arithmetic operators, if/else, functions.
function analyzeResult(name, department, mark1, mark2, mark3, mark4, mark5){
    let total=mark1+mark2+mark3+mark4+mark5;
    let average=total/5;

    let result;
    let grade;

    if(average >= 90){
        result="Pass";
        grade="A";
    } else if(average >=75){
        result="Pass";
        grade="B";
    } else if(average >=60){
        result="Pass";
        grade="C";
    } else if(average >=50){
        result="Pass";
        grade="D";
    } else{
        result="Fail";
        grade="Fail";
    }
    console.log("-------Student Result------");
    console.log("Name:", name);
    console.log("Department:", department);
    console.log("Subject1:", mark1);
    console.log("Subject2:", mark2);
    console.log("Subject3:", mark3);
    console.log("Subject4:", mark4);
    console.log("Subject5:", mark5);
    console.log("Total Marks:", total);
    console.log("Average:", average);
    console.log("Result:", result);
    console.log("Grade:", grade);
}
analyzeResult("Dharani","Information Technology",85,78,92,88,80);

//Task 2 — Employee Salary Calculator
//Create an employee object:
//{
//    name: "Arun",
//   role: "Developer",
//   salary: 45000,
//    experience: 2
//}
//Calculate:
//Basic salary
//10% bonus if experience ≥ 2
//15% bonus if experience ≥ 5
//Final salary
//Use a function:
//calculateSalary(employee)
//Concepts: objects, functions, conditions, arithmetic.
let employee1={
    name:"Dharani",
    role:"Engineer",
    salary:45000,
    experience:1
};

function calculateSalary(employee1){
    let basicSalary=employee1.salary;
    let bonus=0;
    if(employee1.experience >= 5){
        bonus=basicSalary * 0.15;
    } else if(employee1.experience >= 2){
        bonus=basicSalary * 0.10;
    }
    let finalSalary=basicSalary + bonus;
    console.log("----Employee Salary Details----");
    console.log("Name:", employee1.name);
    console.log("Role:", employee1.role);
    console.log("Experience:", employee1.experience, "years");
    console.log("Basic Salary:", basicSalary);
    console.log("Bonus:", bonus);
    console.log("Final Salary:", finalSalary);
}
calculateSalary(employee1);

//Task 3 — Product Filter System
//Create an array:
let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];
//Perform:
//Get products above ₹2,000
let above2000=products.filter(product => product.price > 2000);
//Get only electronics
let electronics=products.filter(product => product.category === "electronics");
//Find the first product below ₹1,000
let below1000=products.find(product => product.price < 1000);
//Calculate total price of all products
let totalPrice=products.reduce((total, product) => total + product.price, 0);
//Check whether any product costs more than ₹50,000
let moreThan50000=products.some(product => product.price > 50000);
//Check whether every product has a price above ₹500
let everyAbove500=products.every(product => product.price >500);
//Concepts: filter(), find(), reduce(), some(), every().
//Display results
console.log("Products above 2000:", above2000);
console.log("Electronics:", electronics);
console.log("First product below 1000:", below1000);
console.log("Total price:", totalPrice);
console.log("Any product above 50000:", moreThan50000);
console.log("Every product above 500:", everyAbove500);

//Task 4 — Employee Management
//Create an array of 6 employees.
//Each employee should have:
//{
//    id: 101,
//    name: "Kavin",
//    role: "Frontend Developer",
//    salary: 40000
//}
//Perform:
//Display all employee names
//Display employees earning above ₹40,000
//Find employee with ID 103
//Calculate total salary
//Find highest-paid employee
//Sort employees from highest salary to lowest
//Create a new array containing only employee names
//Concepts: objects, arrays, map(), filter(), find(), reduce(), sort().
let employees1=[
    {
        id:101,
        name:"Dharani",
        role:"Frontend",
        salary:40000
    },
    {
        id:102,
        name:"Kalpana",
        role:"Backend Developer",
        salary:55000
    },
    {
        id:103,
        name:"Rishitha",
        role:"Full Stack Developer",
        salary:65000
    },
    {
        id:104,
        name:"Krushika",
        role:"UX/UI Designer",
        salary:60000
    },
    {
        id:105,
        name:"Naveena",
        role:"Software Engineer",
        salary:65000
    },
    {
        id:106,
        name:"Nikitha",
        role:"Data Analyst",
        salary:70000
    }
];
let employeeNames=employees1.map(employee => employee.name);
console.log("Employee Names:", employeeNames);

let highSalaryEmployees1=employees1.filter(employee => employee.salary > 40000);
console.log("Employees earning above 40000:", highSalaryEmployees1);

let employee103=employees1.find(employee => employee.id === 103);
console.log("Employee with ID 103:", employee103);

let totalSalary=employees1.reduce((total, employee) => {
    return total + employee.salary;
}, 0);
console.log("TOtal Salary:", totalSalary);

let highestPaid=employees1.reduce((highest, employee) => {
    return employee.salary > highest.salary ? employee: highest;
});
console.log("Highest Paid Employee:", highestPaid);

let sortedEmployees=[...employees1].sort((a,b) => b.salary-a.salary);
console.log("Employees sorted by salary:");
console.log(sortedEmployees);

let namesOnly=employees1.map(employee => employee.name);
console.log("Names Only:", namesOnly);

//Task 5 — Shopping Cart
//Create:
let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];
//Calculate:
//Item total:
//price × quantity
//Then calculate:
//Total cart value
//10% discount if total > ₹50,000
//Final payable amount
//Create a function:
//calculateCart(cart)
//Concepts: objects, functions, reduce(), conditions.
function calculateCart(cart){
    cart.forEach(item => {
        item.itemTotal=item.price * item.quantity;
    });

    let totalCartValue=cart.reduce((total, item) => {
        return total + item.itemTotal;
    },0);

    let discount=0;
    if(totalCartValue > 50000){
        discount=totalCartValue * 0.10;
    }

    let finalAmount=totalCartValue-discount;

    console.log("----Shopping Cart----");
    cart.forEach(item => {
        console.log(item.name, "Price:", item.price, "Quantity:", item.quantity, "Item Total:", item.itemTotal);
    });
    console.log("Total Cart Value:", totalCartValue);
    console.log("Discount:", discount);
    console.log("Final Payable Amount:", finalAmount);
}
calculateCart(cart);

//Task 6 — Student Search System
//Create an array of students:
let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];
//Requirements:
//Display all student names
let studentNames=students.map(student => student.name);
console.log("Student Names:", studentNames);
//Display students who scored above 80
let above80=students.filter(student => student.mark > 80);
console.log("Students above 80:", above80);
//Find student named "Priya"
let priya=students.find(student => student.name === "Priya");
console.log("Student names Priya:", priya);
//Calculate average mark
let totalMarks=students.reduce((total, student) => {
    return total + student.mark;
},0);
let averageMark=totalMarks/students.length;
console.log("Average Mark:", averageMark);
//Check whether anyone failed
let anyoneFailed=students.some(student => student.mark < 50);
console.log("Anyone Failed:", anyoneFailed);
//Check whether everyone scored above 40
let everyoneAbove40=students.every(student => student.mark > 40);
console.log("Everyone scored above 40:", everyoneAbove40);
//Sort students by marks
let sortedStudents=[...students].sort((a,b) => b.mark-a.mark);
console.log("Students sorted by marks:", sortedStudents);

//Task 7 — Array Transformation Challenge
//Given:
let numbers = [12, 5, 8, 21, 44, 7, 30, 15];
//Perform:
//Create a new array containing numbers × 2
let doubledNumbers=numbers.map(number => number * 2);
console.log("Numbers * 2:",doubledNumbers);
//Get only even numbers
let evenNumbers=numbers.filter(number => number % 2 === 0);
console.log("Even Numbers:", evenNumbers);
//Get numbers greater than 15
let greaterThan15=numbers.filter(number => number > 15);
console.log("Numbers greater than 15:", greaterThan15);
//Find the first number greater than 20
let firstGreaterThan20=numbers.find(number => number > 20);
console.log("First number greater than 20:", firstGreaterThan20);
//Find total of all numbers
let total=numbers.reduce((sum,number) => sum + number, 0);
console.log("Total:", total);
//Check whether any number is greater than 40
let anyGreaterThan40=numbers.some(number => number > 40);
console.log("Any number greater than 40:", anyGreaterThan40);
//Check whether every number is positive
let everyPositive=numbers.every(number => number > 0);
console.log("Every number is positive:", everyPositive);
//Sort from highest to lowest
let sortedNumbers=[...numbers].sort((a,b) => b-a);
console.log("Highest to lowest:", sortedNumbers);
//Restriction: Use array higher-order methods wherever possible.

//Task 8 — String Analyzer
//Ask the user to enter a sentence.
//Example:
//"JavaScript is very powerful"
//Display:
//Total characters
//Uppercase sentence
//Lowercase sentence
//Whether it contains "JavaScript"
//First character
//Last character
//Number of words
//Replace "JavaScript" with "Python"
//Convert sentence into an array using split()
//Concepts: length, includes(), slice(), toUpperCase(), toLowerCase(), replace(), split().
let sentence=prompt("Enter a sentence:");
let totalCharacters=sentence.length;
let uppercase=sentence.toUpperCase();
let lowercase=sentence.toLowerCase();
let containsJavaScript=sentence.includes("JavaScript");
let firstCharacter=sentence.slice(0,1);
let lastCharacter=sentence.slice(-1);
let words=sentence.trim().split(" ");
let numberOfWords=words.length;
let replacedSentence=sentence.replace("JavaScript", "Python");
let sentenceArray=sentence.split(" ");

console.log("----String Analyzer----");
console.log("Original Sentence:", sentence);
console.log("Total Characters:", totalCharacters);
console.log("Uppercase:", uppercase);
console.log("Lowercase:", lowercase);
console.log("Contains Javascript:", containsJavaScript);
console.log("First Character:", firstCharacter);
console.log("Last Character", lastCharacter);
console.log("Number of Words:", numberOfWords);
console.log("After Replacement:", replacedSentence);
console.log("Sentence Array:", sentenceArray);

//Final Mini Project — Employee Dashboard
//This would be a good intermediate-level class project.
//Create an Employee Dashboard using JavaScript.
//Data
let employee = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];
//Students must implement
//1. Employee List
//Display all employees.
console.log("----EMPLOYEE LIST1----");
employee.forEach(employee => {
    console.log(
        "ID:", employee.id,
        "| Name:", employee.name,
        "| Department:", employee.department,
        "| Salary", employee.salary,
        "| Experience", employee.experience
    );
    
});

//2. Search
//Search employee by name.
let searchName="Priya";
let searchedEmployee=employee.find(employee =>
     employee.name.toLowerCase() === searchName.toLowerCase()
);
console.log("\n----SEARCH RESULT----");
console.log(searchedEmployee);
//3. Department Filter
//Filter employees by department.
let department="IT";
let departmentEmployee=employee.filter(employee => 
    employee.department === department
);
console.log("\n----IT EMPLOYEES----");
console.log(departmentEmployee);
//4. Salary Filter
//Show employees earning more than ₹50,000.
let highSalaryEmployee = employee.filter(employee => 
    employee.salary > 50000
);
console.log("\n----EMPLOYEE EARNING ABOVE 50000----");
console.log(highSalaryEmployee);
//5. Salary Calculation
//Calculate total company salary.
let totalSalary1=employee.reduce((total, employee) => {
    return total+employee.salary;
},0);
console.log("\nTotal Company Salary:" + totalSalary1);
//6. Highest Salary
let highestSalaryEmployee=employee.reduce((highest,employee) => {
    return employee.salary > highest.salary ? employee : highest;
});
console.log("\n----HIGHEST PAID EMPLOYEE----");
console.log(highestSalaryEmployee);
//Find the highest-paid employee.
//7. Experience
//Find employees with more than 3 years' experience.
let experiencedEmployee=employee.filter(employee => employee.experience > 3);
console.log("\n----EMPLOYEE WITH MORE THAN 3 YEARS EXPERIENCE----");
console.log(experiencedEmployee);
//8. Sorting
//Sort employees by salary:
//Low → High
let lowToHigh=[...employee].sort((a,b) => a.salary-b.salary);
console.log("\n----SALARY LOW - HIGH----");
console.log(lowToHigh);
//High → Low
let highToLow=[...employee].sort((a,b) => b.salary-a.salary);
console.log("\n----SALARY HIGH - LOW----");
console.log(highToLow);
//9. Statistics
let totalEmployee=employee.length;
let averageSalary=totalSalary1 / totalEmployee;
console.log("\n----EMPLOYEE STATISTICS----");
console.log("Total Employee:", totalEmployee);
console.log("Total Salary:", + totalSalary1);
console.log("Highest Salary:", + highestSalaryEmployee.salary);
console.log("Average Salary:" + Math.round(averageSalary));





//Display:
//Total Employees: 3
//Total Salary: ₹160000
//Highest Salary: ₹65000
//Average Salary: ₹53333



















