// task 42: Great Magicians: Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
//  Call show_magicians() to see that the list has actually been modified.
console.log("task 42:")
var magic=["Bilal","Jawad","Mahad"];
function make_great(a){
    a.forEach((element, index) =>{
        a[index]="The Great "+element;
    }) 
    console.log(a);
}
make_great(magic);