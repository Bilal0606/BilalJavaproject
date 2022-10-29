// Task 41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.

console.log("task 41:")
var magic=["Bilal","Jawad","Mahad"]
function show_magicians(magic) {
    for (let i = 0; i < magic.length; i++) {
        console.log(`task 41:  ${magic[i]} `)
    }  
}
show_magicians(magic)