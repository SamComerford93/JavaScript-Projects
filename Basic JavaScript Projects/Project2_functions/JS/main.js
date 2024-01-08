// Function with 2 variables

function  My_First_Function() {
    var str1 = "This is the first half of the string, "
    var str2 = "this is the second half of the string"
    document.getElementById("sentence").innerHTML = str1 + str2;
}

// Function using += operator

function use_operator() {
    var sent = "This sentence has been concatenated using "
    sent += "the += operator"
    document.getElementById("concat").innerHTML = sent
}