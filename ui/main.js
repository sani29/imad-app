//counter code

var button = document.getElementById("counter");
var counter = 0;

button.onclick = function(){
    //make a request to counter endpoint
    
    //capture the response and store in a variable
    
    //render the variable in correct span
    counter = counter + 1;
    var span = document.getElementById("count");
    span.innerHTML = counter.toString();
};












//moving image code
/*console.log('Loaded!');

//change the value of main-text div
var element= document.getElementById('main-text');

element.innerHTML="New Value";

//move the image
var img= document.getElementById('Madi');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 1;
    img.style.marginLeft= marginLeft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight, 100);
};
*/
