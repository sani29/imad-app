console.log('Loaded!');

//change the value of main-text div
var element= document.getElementById('main-text');

element.innerHTML="New Value";

//move the image
var img= document.getElementById('Madi');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft+10;
    img.style.marginLeft= marginLeft + 'px';
}
img.onclick = function(){
    var interval = setIntervel(moveRight, 100);
};

