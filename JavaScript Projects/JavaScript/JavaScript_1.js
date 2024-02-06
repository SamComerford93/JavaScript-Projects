// Function using the switch statement
function car_function() {
    var car_output;
    var car = document.getElementById("car_choice").value;
    var car_string = " is a great car brand!";
    switch(car) {
        case "Audi":
            car_output = "Audi" + car_string;
        break;
        case "BMW":
            car_output = "BMW" + car_string;
        break;
        case "VW":
            car_output = "VW" + car_string;
        break;
        case "Ford":
            car_output = "Ford" + car_string;
        break;
        case "Hyundai":
            car_output = "Hyundai" + car_string;
        break;
        case "Toyota":
            car_output = "Toyota" + car_string;
        break;
        default:
        car_output = "Please enter a car brand exactly as written on the above list.";
    }
    document.getElementById("output").innerHTML = car_output;
}

// Function using the getElementByClassName() method
function change_by_class() {
    var X = document.getElementsByClassName("class_name");
    X[0].innerHTML = "Hello! I have changed!";
}

// Adding a graphic within the canvas
var c = document.getElementById("first_canvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(250, 250, 200, 0, 2 * Math.PI);
ctx.stroke();

// Gradient color background within a canvas
const canvas = document.getElementById("second_canvas");
const ctx1 = canvas.getContext("2d");

// Create a Gradient
const grd = ctx1.createLinearGradient(0, 0, 400, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

// Draw a filled Rectangle
ctx1.fillStyle = grd;
ctx1.fillRect(20, 20, 460, 460);
