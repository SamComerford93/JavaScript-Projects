// Fumction using a ternary operator for ride height
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// Function using a ternary operator for age to vote
function age_check() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not":"You are";
    document.getElementById("vote").innerHTML = Can_vote + " old enough to vote.";
}

// Constuctor function using the this and new keywords
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

// Constructor function using the this and new keywords
function Cat(Breed, Color, Age, Name) {
    this.Cat_Breed = Breed;
    this.Cat_Color = Color;
    this.Cat_Age = Age;
    this.Cat_Name = Name;
}

var Mike = new Cat("British Short Hair", "Black", 4, "Tommy");
var John = new Cat("Scottish Fold", "Grey", 6, "Smoky");
var Jane = new Cat("Maine Coon", "Brown", 7, "Pearl");

function cat_function() {
    document.getElementById("New_and_This").innerHTML = "John has a " + John.Cat_Color + " " + John.Cat_Breed + " called " + John.Cat_Name + " who is " + John.Cat_Age + " years old.";
}

// Function using a nested function
function count_down_function() {
    document.getElementById("Nested_Function").innerHTML = count();
    function count() {
        var strating_point = 10;
        function minus_one() {strating_point -= 1;}
        minus_one();
        return strating_point;
    }
}