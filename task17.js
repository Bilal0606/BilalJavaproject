// task 17: Shrinking Guest List: You just found out that your new dinner table won’t 
//arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a 
//message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, print a message to that person letting 
// them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end of your program.
var guest = ["Bilal","Jawad", "Ali", "Noman", "Eisha", "Iqra", "Rukhsar", "Maham"];

console.log(`Hello ${guest[0]}, Sorry to say our bigger dinner table is not available. I can only invite two persons. Sorry for inconvinience.`)
guest.shift()
console.log(`Hello ${guest[1]}, Sorry to say our bigger dinner table is not available. I can only invite two persons. Sorry for inconvinience.`)
guest.shift()
console.log(`Hello ${guest[2]}, Sorry to say our bigger dinner table is not available. I can only invite two persons. Sorry for inconvinience.`)
guest.shift()
console.log(`Hello ${guest[3]}, Sorry to say our bigger dinner table is not available. I can only invite two persons. Sorry for inconvinience.`)
guest.shift()
console.log(`Hello ${guest[4]}, Sorry to say our bigger dinner table is not available. I can only invite two persons. Sorry for inconvinience.`)
guest.shift()
console.log(`Hello ${guest[5]}, Sorry to say our bigger dinner table is not available. I can only invite two persons. Sorry for inconvinience.`)
guest.shift()

console.log(`Hello ${guest[0]}, you are still invited.`)
console.log(`Hello ${guest[1]}, you are still invited.`)
console.log(guest)

guest.shift()
guest.shift()
console.log(guest);











