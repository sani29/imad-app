//counter code

var button = document.getElementById("counter");

button.onclick = function(){
    //create a request object
     var request = XMLHttpRequest();
     
    //capture the response and store in a variable
     request.onreadystatechange = function(){
         if(request.readyState === XMLHttpRequest.DONE){
             //take some action
             if(request.status === 200){
              var counter = request.responseText;  
              var span = document.getElementById("count");
              span.innerHTML = counter.toString();
             }
         }
         //not done yet
     };
     //make the request
     request.open("GET","http://pushpsanidhya29.imad.hasura-app.io/counter",true);
     request.send(null);
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
