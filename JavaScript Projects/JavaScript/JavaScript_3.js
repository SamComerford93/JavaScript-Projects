function displayModel(brand) {
    var brandModel = brand.getAttribute("data-car-model");
    alert(brandModel + " is a model from the car brand " + brand.innerHTML + "!");
}