// task 3:  Name Cases: Store a person’s name in a variable,
// and then print that person’s name in lowercase, uppercase, and titlecase

let personName = "Bilal Ahmed"

console.log(personName.toLowerCase());
console.log(personName.toUpperCase());

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function (txt) { 
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
};

console.log(personName.toProperCase());


