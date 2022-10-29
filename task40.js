// Album: Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
//  Use the function to make three dictionaries representing different albums.
//   Print each return value to show that Objects are storing the album information correctly.
//    Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
//    If the calling line includes a value for the number of tracks, add that value to the album’s Object.
//  Make at least one new function call that includes the number of tracks on an album.
console.log("task 40:") 
function make_album(artistNam, albumbTit) {
    var a = {
        artistNam,
        albumbTit
    }
return a;
}
var results = make_album("atif", "chana");
console.log(results)
function make_album2(artistNam2, albumbTit2, trackNo) {
    var a2 = {
        artistNam2,
        albumbTit2
    }
    if(trackNo){
        a2.trackNo=trackNo;
    }
    return a2;
}
var result2= make_album2("nusrat","Qalandar",5);
console.log(result2)

