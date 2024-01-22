// Global variable
var x = 10;

// Function using global variable
function add_5() {
    document.write(x + 5 + "<br>");
}

// Function with a local variable 
function add_10() {
    var y = 20;
    document.write(y + 10 + "<br>");
}

add_5();
add_10();

// Function trying to use a local variable form another function
function add_20() {
    console.log(y + 20 + "<br>");
}

add_20();

// Function using an IF statement
function morning() {
    if (new Date().getHours() < 12) {
        document.getElementById("morning_greeting").innerHTML = "Good Morning!";
    }
}

// Function with IF and Else statement
function rent_check() {
    Age = document.getElementById("age").value;
    if (Age >= 25) {
        rent = "You are old enough to rent a car!";
    }
    else {
        rent = "You are not old enough to rent a car!";
    }
    document.getElementById("can_rent").innerHTML = rent;
}

// Function with Else If statement
function Time_function() {
    var Time = new Date().getHours() ;
    var Reply;
    if (Time < 12 == Time > 0) {
         Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}