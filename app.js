
function addFunction(){
	var num1 = document.getElementById("number1").value;
	var num2 = document.getElementById("number2").value;
	var result;
	if (isNaN(num1) || isNaN(num2)){
		alert("Enter a valid number");
	}
	else{
		result = Number(num1) + Number(num2);
	}
	document.getElementById("result").innerHTML="The Result is " + result;

} 
function subFunction(){
	var num1 = document.getElementById("number1").value;
var num2 = document.getElementById("number2").value;
var result;
	if (isNaN(num1) || isNaN(num2)){
		alert("Enter a valid number");
	}
	else{
		result = num1 - num2;
	}
	document.getElementById("result").innerHTML = "The Result is " + result;
} 
function mulFunction(){
	var num1 = document.getElementById("number1").value;
var num2 = document.getElementById("number2").value;
var result;
	if (isNaN(num1) || isNaN(num2)){
		alert("Enter a valid number");
	}
	else{
		result = num1 * num2;
	}
	document.getElementById("result").innerHTML = "The Result is " + result;
} 
function divFunction(){
	var num1 = document.getElementById("number1").value;
var num2 = document.getElementById("number2").value;
var result;
	if (isNaN(num1) || isNaN(num2)){
		alert("Enter a valid number");
	}
	else{
		result = num1 / num2;
	}
	document.getElementById("result").innerHTML ="The Result is " + result;
} 

