function my_dictionary() {
    var Animal = {
        Species:"Cat",
        Color:"Black",
        Breed:"British Short Hair",
        Age: 5,
        Sound:"Meow"
    }; // dictionary of KVP related to an Animal 
    delete Animal.Species // Removes Species KVP from dictionary
    document.getElementById("Dictionary").innerHTML = Animal.Species; // Calls Species KVP to display on page
}