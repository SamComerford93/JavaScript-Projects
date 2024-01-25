// Function using a WHILE loop
function Call_Loop() {
    var digit = "";
    var num = 1;
    while (num < 11) {
        digit += "<br>" + num;
        num++;
    }
    document.getElementById("Loop").innerHTML = digit;
}

//Function using the string.length property
function get_length() {
    var my_string = "Hello World!";
    document.getElementById("length").innerHTML = my_string.length;
}

// Function using a FOR loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// Function using an array
function array_function() {
    var my_array = ["Apple", "Banana", "Pear", "Orange"];
    document.getElementById("Array").innerHTML = "The second fruit in my array is: " + my_array[1] + ".";
}

// Function using the const keyword
const customer = {firstName:"Jack", lastName:"Smith", age:30};
customer.lastName = "Cole";
customer.height = "180cm";
function constant_function() {
    document.getElementById("Constant").innerHTML = "The last name of this customer is " + customer.lastName + " and is " + customer.height + " tall.";
}

// Function using the let keyword
function let_function() {
    let X = "Hello!";
    document.getElementById("Keyword_Let").innerHTML = X;
}

// Function using the return statement
function add_two_numbers(num1, num2) {
    return num1 + num2;
}

document.getElementById("add_them").innerHTML = add_two_numbers(10, 5);

// Creating an object
let cat = {
    name: "Jude",
    color: "orange",
    gender: "male",
    age: 5,
    description : function() {
        return "This cat is called " + this.name + " and is a " + this.color + " " + this.gender + " who is " + this.age + " years old.";
    }
};

document.getElementById("cat_object").innerHTML = cat.description();

// Using the break keyword to break a loop
function break_the_loop() {
    let counter = "";
    for (let i = 0; i < 5; i++) {
        if (i === 3) break;
        counter += i + "<br>";
    }
    document.getElementById("loop_break").innerHTML = counter;
}

// Using the continue keyword to skip in a loop
function continue_the_loop() {
    let counter = "";
    for (let i = 0; i < 5; i++) {
        if (i === 3) continue;
        counter += i + "<br>";
    }
    document.getElementById("loop_continue").innerHTML = counter;
}