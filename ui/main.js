console.log('Loaded!');

//change the value of main-text div
var element= document.getElementById('main-text');

element.innerHTML="New Value";

//move the image
var img= document.getElementById('Madi');
img.onclick = function(){
    img.style.marginLeft = "100px";
};

