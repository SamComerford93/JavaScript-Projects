// Using typeof to show type of variable
document.write(typeof "Hello");

// Adding two different data types (type coercion)
document.write("10" + 5);

// Use an expression to show NaN
function show_nan() {
    document.getElementById("Nan").innerHTML = 0/0;
}

// Using isNaN to show true
function string_nan() {
    document.getElementById("String").innerHTML = isNaN("Hello");
}

// Using isNaN to show false
function num_nan() {
    document.getElementById("Num").innerHTML = isNaN(75);
}

// Show infinity
function show_infinity() {
    document.getElementById("Infinity").innerHTML = 2E310;
}

// Show negative infinity
function show_neg_infinity() {
    document.getElementById("Neg_Infinity").innerHTML = -2E310;
}

// Show true boolean
function true_bool() {
    document.getElementById("is_true").innerHTML = 10 > 5;
}

// Show false boolean
function false_bool() {
    document.getElementById("is_false").innerHTML = 10 < 5;
}

// Display the answer to the expression in the console
console.log(5 + 5);

// Display false in the console
console.log(25 < 10);

// Using == to show true
function equal_true() {
    document.getElementById("equal_t").innerHTML = (10 + 5) == 15;
}

// Using == to show false
function equal_false() {
    document.getElementById("equal_f").innerHTML = (20 + 5) == 50;
}

// Using === return true
function triple_equal_true() {
    document.getElementById("t_equal_true").innerHTML = 10 === 10;
}

// Using === return false with different data type and different value
function triple_equal_false1() {
    document.getElementById("t_equal_false1").innerHTML = 10 === "Hello";
}

// Using === return fasle with different data type but same value for both
function triple_equal_false2() {
    document.getElementById("t_equal_false2").innerHTML = 20 === "20";
}

// Using === return false with same data type but differnt value for both
function triple_equal_false3() {
    document.getElementById("t_equal_false3").innerHTML = "Hello" === "Goodbye";
}

// Using AND operator to display true
function and_true() {
    document.getElementById("t_and").innerHTML = (5 < 10 && 20 > 15);
}

// Using AND operator to display false
function and_false() {
    document.getElementById("f_and").innerHTML = (5 < 10 && 20 < 15);
}

// Using OR operator to display true
function or_true() {
    document.getElementById("t_or").innerHTML = (5 < 10 || 20 < 15);
}

// Using OR operator to display false
function or_false() {
    document.getElementById("f_or").innerHTML = (5 > 10 || 20 < 15);
}

// Using NOT operator to display true
function not_true() {
    document.getElementById("t_not").innerHTML = !(10 < 5);
}

// Using NOT operator to display false
function not_false() {
    document.getElementById("f_not").innerHTML = !(10 > 5);
}