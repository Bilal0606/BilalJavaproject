// More Conditional Tests: You don’t have to limit the number of tests you create to 10.
// If you want to try more comparisons, write more tests.
// Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, 
// greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

 let nameUp = "HIRA HASAN"
 let nameTitle = "Hira Hasan"
 if(nameUp == nameTitle){
    console.log("test1: true")
 }else{
    console.log("test1: false")


 }
 if(nameUp != nameTitle){
    console.log("test2: true")
 }else{
    console.log("test2: false")


 }
 nameUp = "HIRA HASAN"
 nameTitle = "Hira Hasan"
if(nameUp.toLowerCase().length >30){
    console.log('test3: pass')
}else{
    console.log('test3: fail')  
}
 let marks = 70;
 let marks2 = 70;
 let totalMarks = 100;
 let passingMarks = 40;
 
 if (marks > passingMarks){
 
     console.log("test4: You are passed")
 }
 
 if (marks >= passingMarks){
 
     console.log("test5: You are passed")
 }
 
if (marks <= totalMarks){

    console.log("test6: marks are less than total marks")
}else{
    console.log("false")
}
if (marks < totalMarks){

    console.log("test7: marks are less than total marks")
}else{
    console.log("false")
}
if (marks != passingMarks){

    console.log("test8: You are passed")
}else{
    console.log("test 8: false")
}
if (marks == passingMarks){

    console.log("test9: You are passed")
}else{
    console.log("test 9: false")
}

if(marks==marks2 && true ){
    console.log("test10: true")
}else{
    console.log("test10: false")
}
if(marks!=marks2 && true ){
    console.log("test111: true")
}else{
    console.log("test11: false")
}
if(marks==marks2 | true ){
    console.log("test12: true")
}else{
    console.log("test12: false")
}
if(marks!=marks2 | false ){
    console.log("test13: true")
}else{
    console.log("test13: false")
}

let a = [4,7,23,5];
if(a[0]==4){
    console.log("test14: index value of array is equal 4")
}else{
    console.log("test14: index value of array is not equal 4")
}
if(a[3]==4){
    console.log("test15: index value of array is equal 4")
}else{
    console.log("test15: index value of array is not equal 4")
}








