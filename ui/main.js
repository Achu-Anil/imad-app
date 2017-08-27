//Counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
    
    //Make a request to the counter endpoint
    var request = new XMLHttpRequest();
    
    
    //Capture the response and store it in a variable.
    request.onreadystatechange = function() {
        //Above line is used to detect the state of the request
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
        // Everything is good, the response was received.
        } else {
         // Not ready yet.
        }
    }
    //Render the variable in the correct span
    counter++;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};