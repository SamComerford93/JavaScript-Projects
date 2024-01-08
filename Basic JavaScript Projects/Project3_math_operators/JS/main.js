// Function using addition
function addition_function() {
    var addition = 2 + 2;
    document.getElementById("Add").innerHTML = "2 + 2 = " + addition;
}

// Function using subtraction
function subtraction_function() {
    var subtraction = 2 - 2;
    document.getElementById("Subtract").innerHTML = "2 - 2 = " + subtraction;
}

// Function using multiplication
function multiplication_function() {
    var multiplication = 2 * 2;
    document.getElementById("Multiply").innerHTML = "2 * 2 = " + multiplication;
}

// Function using division
function division_function() {
    var division = 2 / 2;
    document.getElementById("Divide").innerHTML = "2 / 2 = " + division;
}

// Function using multiple operators
function multiple_operator_function() {
    var answer = (2 + 2) * 10 - (6 / 2);
    document.getElementById("Complex").innerHTML = "(2 + 2) * 10 - (6 / 2) = " + answer;
}

// Function using modulus
function modulus_function() {
    var modulus = 20 % 6;
    document.getElementById("Modulo").innerHTML = "20 % 6 = " + modulus;
}

// Function using negation operator
function negation_operator() {
    var x = 25;
    document.getElementById("Negative").innerHTML = -x;
}

// Function using increment
function increment_function() {
    var a = 5;
    a++;
    document.getElementById("Increment").innerHTML = a;
}

// Function using decrement
function decrement_function() {
    var a = 5;
    a--;
    document.getElementById("Decrement").innerHTML = a;
}

// Function using Math.random
function random_number() {
    var num = Math.random() * 100;
    document.getElementById("Random_Num").innerHTML = num;
}

// Function using Math.round
function rounded_random_number() {
    var rnum = Math.round(Math.random() * 100);
    document.getElementById("Round_Random_Num").innerHTML = rnum;
}