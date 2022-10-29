// task 16:More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15.
//  Add a print statement to the end of your program informing people that you found 
// a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

var guest = ["Jawad",  "Mahad", "Bilal", "Daniyal", "Eisha"]
guest.unshift("Mansoor");
console.log(`Hello ${guest[0]}, I would like to  invite in dinner at PC hotel tonight.`);
console.log(`Hello ${guest[1]}, I would like to  invite more indiviual in dinner at PC hotel tonight because bigger table is available.`);
guest.splice(2,0,"Ali");
console.log(`Hello ${guest[2]}, I would like to  invite in dinner at PC hotel tonight.`);
console.log(`Hello ${guest[3]}, I would like to  invite more indiviual in dinner at PC hotel tonight because bigger table is available.`);
console.log(`Hello ${guest[4]}, I would like to  invite more indiviual in dinner at PC hotel tonight because bigger table is available.`);
console.log(`Hello ${guest[5]}, I would like to  invite more indiviual in dinner at PC hotel tonight because bigger table is available.`);
console.log(`Hello ${guest[6]}, I would like to  invite more indiviual in dinner at PC hotel tonight because bigger table is available.`);
guest.splice(7,0,"Ahmed");
console.log(`Hello ${guest[7]}, I would like to  invite in dinner at PC hotel tonight.`);

