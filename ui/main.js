//submit username/password to login

var submit = document.getElementById("submit_btn");
submit.onclick = function(){
    
    //create a request object
     var request = new XMLHttpRequest();
     
    //capture the response and store in a variable
     request.onreadystatechange = function(){
         if(request.readyState === XMLHttpRequest.DONE){
             //take some action
             if(request.status === 200){
              alert('Login successfully');
             } else if(request.status === 403){
                 alert('username/password is incorrect');
             } else if(request.status === 500){
                 alert('something went wrong on the server');
             }
         }
         //not done yet
     };
     //make the request
     var username = document.getElementById('username').value;
     var password = document.getElementById('password').value;
     console.log(username);
     console.log(password);
     request.open('POST','http://pushpsanidhya29.imad.hasura-app.io/login' , true);
     request.setRequestHeader('Content-Type','application/json');
     request.send(JSON.stringify({username:username , password:password}));
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
