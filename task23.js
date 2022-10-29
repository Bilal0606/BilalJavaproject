
// task 23: Conditional Tests: Write a series of conditional tests. 
//Print a statement describing each test and your prediction for the results of each test.
// Your code should look something like this:
//let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates
// to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and 
//another 5 tests evaluate to False

console.log("task 23:")
let car = 'subaru';
if(car == "subaru"){
    console.log("test 0: Is car == 'subaru'? I predict True.");

}
let numA = 77
let numB = 55
if (numA > numB) {
    console.log("test 1: True", "numA>numB")
}
if (numA => numB) {
    console.log("test 2: True", "numA=>numB")
}
if (numA < numB) {
    console.log("test 3: true")
}else{
    console.log("test 3: False", "numA!=numB")

} 
if (numA != numB) {
    console.log("test 4: true", "numA!=numB")
}else{
    console.log("test 4: False")

}
if (numA === numB) {
    console.log("test 5: true", "numA!==numB")
} else{
    console.log("test 5: False")

}
if (numA / numB > 5) {
    console.log("test6: true")
}else{
    console.log("test 6: False")

}
if (numA + numB > 100) {
    console.log("test 7: True", "numA+numB>100")
} else {
    console.log("test7: False")
}

if (numA - numB > numB) {
    console.log('test 8: true')
} else{
    console.log("test 8: False", "numA - numB > numB")

}

if(numA/2== numB){
console.log("test 9: true")
}else{
    console.log("test 9: False", "numA/2== numB")

}
if(car.length == 3){
console.log("true")
}else{
    console.log("test 10: false, 'car.length == 3'")

}