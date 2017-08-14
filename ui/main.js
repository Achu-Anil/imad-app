console.log('Loaded');

//Change the text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML = 'New Value';


var img = document.getElementById('madi');
//Move an image
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}

function moveLeft() {
    marginLeft = marginLeft - 1;
    img.style.marginLeft = marginLeft + 'px';
}

var i = 0;
img.onclick = function() {
    if(i<=3){
        i++;
        console.log(i);
        var interval = setInterval(moveRight,10);
    }
    else{
        interval = setInterval(moveLeft,10);
    }
};