// let name = prompt("enter student name");
// let subject1 = Number(prompt("enter english marks:"));
// let subject2 = Number(prompt("enter urdu marks:"));
// let subject3 = Number(prompt("enter computer marks:"));
// let totalMarks = 300;
// let obtainedMarks = subject1 + subject2 + subject3;
// let percentage = (obtainedMarks / totalMarks) * 100;
// function checkresult(percentage) {
//     if (percentage >= 40) {
//         return "pass";
//     } else {
//         return "fail";
//     }
// }
// function calculateGrade(percentage) {
//     if (percentage >= 80) {
//         return "A+";
//     } 
//     else if (percentage >= 70) {
//         return "A";
//     } 
//     else if (percentage >= 60) {
//         return "B";
//     } 
//     else if (percentage >= 50) {
//         return "C";
//     } 
//     else if (percentage >= 40) {
//         return "D";
//     } 
//     else {
//         return "F";
//     }
// }
// let result = checkresult(percentage);
// let grade = calculateGrade(percentage);
// document.write("<h2>STUDENT MARKSHEET</h2>");
// document.write("Student Name: " + name + "<br>");
// document.write("English Marks: " + subject1 + "/100<br>");
// document.write("Urdu Marks: " + subject2 + "/100<br>");
// document.write("Computer Marks: " + subject3 + "/100<br>");
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Obtained Marks: " + obtainedMarks + "<br>");
// document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
// document.write("Result: " + result + "<br>");
// document.write("Grade: " + grade);
 

task02

// document.write(`<h1>basic calculator</h1>`)

// var firstNumber=parseFloat(prompt("enter the number one"));
// var operator=prompt("enter the oerator");
// var secondNumber=parseFloat(prompt("enter the number two"));
// document.write(firstNumber,operator,secondNumber,"=")
// function add(a,b){
//     return a+b;
// }
// function add(a,b){
//     return a+b;
// }
// function sub(a,b){
    
//     return a-b;
// }
// function multiply(a,b){
//      if (b === 0) {
//     return "Cannot divided by zero";
//   }
//     return a*b;
// }
// function divide(a,b){
//      if (b === 0) {
//     return "Cannot divided by zero";
//   }
//     return a/b;
// }
// var result ;
// switch(operator){
//     case "+":
//         result = add (firstNumber,secondNumber)
//         break;
//         case "-":
//         result = sub (firstNumber,secondNumber)
//         break;
//         case "*":
//         result = multiply (firstNumber,secondNumber)
//         break;

// case "/":
//         result = divide(firstNumber,secondNumber)
// break;
// default:
// result= "invalid value"
// break;

// }
// document.write(result)

  
task03

// document.write(`<h1>basic calculator for even odd calculation</h1>`)
// var value =parseFloat(prompt("emter first number"))
// function even(){
//     return "even";}
// function odd(){
//     return "odd";
// }
// var result;
// if (value%2===0){
//   result ="even" 
   
// }
// else{
//       result ="odd" 
// }
// document.write(result)

task03

// var leapyear =parseFloat(prompt("enter a year "));
// function leap(){
//     if(leapyear%400===0)
//   return "leapyear";
//  if(leapyear%100===0) 
//  return "notleapyear";
// if(leapyear%4===0) 
// return "leapyear";
// return "not a leap year";
// }

// document.write(leap())  



task04


// var number =parseFloat(prompt("enter a number"))
// function factorial(n){
//     var result=1;
// for (let i=2;i<=n ;i++){
//     result *=i;

// }
// return result;
// }
// if (number < 0) {
//     document.write("invalid number")
// }
// else{
//     document.write(`${number}!=${factorial(number)}`)
// }





task05

// var student=["Abdul moiz","Adyan","Zainab","Madiha","Ali"];
// document.write("indexing of Zainab is ",student.indexOf("Zainab"),"<br>","length of this array is",student.length,"<br>");
// student.forEach(function (student,index){
//      document.write( `${index + 1}. ${student}<br>`);
 
     
// })
