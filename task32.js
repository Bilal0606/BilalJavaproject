
// task 32: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username.
//  If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

console.log("task 32:")
var current_users = ['Saad', 'Ali', 'Bilal', 'Khadija', 'Maham']

var new_users = ['mahad', 'jawad', 'azeem', 'khadija', 'eisha']

let count = 0;

        while(count!=5){
                let caser = new_users[count].toUpperCase
                let caser2 = new_users[count].toLowerCase


            if(current_users.includes((new_users[count] ||caser2||caser))){
                console.log("username "+new_users[count] + " is unavailable. enter new username.")
            }else{
                console.log("Username " + new_users[count] + " is  available.")
            }
            count=count+1
        }