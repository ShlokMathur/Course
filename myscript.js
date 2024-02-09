// alert("Welcome to bank account");
// // var deposit = prompt("Enter :")
// // var amount =  prompt("Enter the amount to deposit :");
// // var total = parseInt(deposit + amount);


// var lbs = prompt("Enter:");
// var kg = lbs * 0.45
// alert(kg);
// console.log("hello World!")


var age = prompt("Enter the age: ")
var firstName = prompt("Enter your First Name: ")
var lastname = prompt("Enter your last Name: ")
var height = prompt("Enter your height: ")


var nameCond = null;
var ageCond = null;
var heightCond = null;



if (age > 20 && age < 30){
    ageCond = true;
}
else{
    ageCond = false;
}
if (firstName[0] ===  lastname[0]){
    nameCond = true;
}
else{
    nameCond = false;
}
if (heightCond > 150){
    heightCond = true;
}
else{
    heightCond = false;
}

if (ageCond && nameCond && heightCond){
    console.log("Welcome spy")
}
else{
    console.log("Bye Bye")
}
