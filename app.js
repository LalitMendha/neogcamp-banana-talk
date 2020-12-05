// Vanilla js is the pure js which does not include any framework like react, angular and jquery.
// react, redux and react router - you can make any app.
// write clean code.
// give good name for variables and function name.
//what is API - if you want to program an Application use this interface.
// ________________ Start _______________________________
//Get a refrence of button
//query selector - A way to tell browser that i need this element
//Make a CLI game for querySelector

var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#outputDiv");
//Add an event listener to button
//The function is called as callback function and we can extract it also.
// The only difference between normal function and callback function is it is given as an input to a function.
btnTranslate.addEventListener("click", clickHandler);
function clickHandler() {
    //If i want to write something inside the output div we can use .innerText
    //outputDiv.innerText is not a function remeber that it is an attribute which you are setting.
    outputDiv.innerText = "Hello World !!";
};

//How to fetch from server
var url = "http://lessonfour.tanaypratap.repl.co/translate/yoda.json?text=I am Iron Man !!"
fetch(url)
.then(response=> response.json())
.then(json=> console.log(json)) // instead of console.log add outputDiv.innerText
.catch(error);//This is used to catch the error message when the server is down.

//or
// .catch(errorHandler);
function errorHandler(error) {
    alert("Something went wrong with the server !! Try after some time")
}
//catch is similar to below code

// function catch(callbafn){
//     //do something
//     callbafn (error);
// }

//Arrow function "=>" in javascript is same as function
// fetch (url)
// .then(function responseHandler(response){ return response.json(); })
// .then(function logJSON(json) { return console.log(json); })
//Promise is something like it will get the date from server for you but only when server is up.
//Once i bring the data tell me what you want to do "then".
//If i dont use "then" it will always show pending response


