// Task 44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function call provides,
//   and it should print a summary of the sandwich that is being ordered.
//  Call the function three times, using a different number of arguments each time.
console.log("task 44:")

function sandwitch(...items){
    console.log("task 44: sandwitch summary:")
    for(let item of items){
        console.log("-",item)
    }
}

sandwitch("olives","eggs","onions");

sandwitch("chili mayo","tomato","spicy spread");

sandwitch("ketup","chicken","pepperoni");