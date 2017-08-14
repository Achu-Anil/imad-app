console.log('Loaded A');

//Change the text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML = 'New Value';


var img = document.getElementById('madi');
//Move an image
function moveRight() {
    marginLeft += 10;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function() {
    var interval = setInterval(moveRight,100);
};