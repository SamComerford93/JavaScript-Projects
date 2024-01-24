// Connecting multiple strings using the concat() method
function make_sentence() {
    var part_1 = "This sentence ";
    var part_2 = "has been ";
    var part_3 = "made using ";
    var part_4 = "the .concat() method.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}

// Using the slice() method to display a section of a string
function string_slice() {
    var my_string = "Congratulations to Christoper for winning the prize!";
    var winner_name = my_string.slice(19,29);
    document.getElementById("slice").innerHTML = winner_name;
}

// Using the toUpperCase() to make string all caps
function all_caps() {
    var hb_string = "happy birthday!";
    var shout_hb = hb_string.toUpperCase();
    document.getElementById("upper").innerHTML = shout_hb;
}

// Using the search() to search a string
function search_string() {
    var string_1 = "The party will be held on Wednesday!";
    var is_in_string = string_1.search("Wednesday");
    document.getElementById("string_check").innerHTML = is_in_string;
}

// Using the toString() method
function string_method() {
    var num = 50;
    document.getElementById("num_to_string").innerHTML = num.toString();
}

// Using the toPrecision() method
function precision_method() {
    var long_num = 12734.1983473564;
    document.getElementById("precise").innerHTML = long_num.toPrecision(10);
}

// Using the toFixed() method
function fixed_method() {
    var decimal_num = 3.6789;
    document.getElementById("decimal_places").innerHTML = decimal_num.toFixed(2);
}

// Using the valueOf() method
function value_method() {
    var string = "Hello World!";
    document.getElementById("primitive").innerHTML = string.valueOf();
}