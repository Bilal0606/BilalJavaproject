
// task 18: Seeing the World: Think of at least five places in the world you’d like to visit.
// Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

var places = ["MAKKAH", 'MADINA', 'Falasteen', "Islamabad", 'Turkey', 'Australia']
console.log("part a: printing \n")
for (let i = 0; i < places.length; i++) {
    console.log(places[i])
}
console.log("\n part b: sorting \n")
places.sort();
for (let i = 0; i < places.length; i++) {
    console.log(places[i])
}
console.log("\n Orignal  \n ")
var places = ["MAKKAH", 'MADINA', 'Falasteen', "Islamabad", 'Turkey', 'Australia']
for (let i = 0; i < places.length; i++) {
    console.log(places[i])
}
console.log("\n part c: reverse \n")
let reversePlaces = places.reverse();
for (let i = 0; i < places.length; i++) {

    console.log(places[i])
}

places.reverse();
console.log("\n part d: printing \n")

for (let i = 0; i < places.length; i++) {
    console.log(places[i])
}
console.log("\n part e: sorting \n")

places.sort();
for (let i = 0; i < places.length; i++) {
    console.log(places[i])
}
console.log("\n part e: printing \n")

var places = ["MAKKAH SHARIF", 'MADINA SHARIF', 'BAIT ul MUQADAS', "Hunza", 'Sillicon VAlley', 'Azad Kashmir']
for (let i = 0; i < places.length; i++) {
    console.log(places[i])
}

