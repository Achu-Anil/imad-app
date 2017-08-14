console.log('Loaded Again!');

//Change the text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML = 'New Value';


var img = document.getElementById('madi');

img.onClick = function() {
    img.style.marginLEft = '100px';
};