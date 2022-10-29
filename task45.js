
// task 45: Cars: Write a function that stores information about a car in a Object.
//  The function should always receive a manufacturer and a model name. 
//  It should then accept an arbitrary number of keyword arguments.
//   Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
//  Print the Object that’s returned to make sure all the information was stored correctly.

function Car(manufacturer, model, color, price){
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;
    }
    
    console.log("task 45")
    let car1 = new Car("Toyota",2015,"blue",3000000);
    console.log(car1)
    
    let car2 = new Car("Suzuki",2011,"white",1000000);
    console.log(car2)
    
    let car3 = new Car("BMW",2017,"grey",9100000);
    console.log(car3)
    