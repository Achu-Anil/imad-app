//Counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
    
    //Make a request to the counter endpoint
    var request = new XMLHttpRequest();
    
    
    //Capture the response and store it in a variable.
    request.onreadystatechange = function() {
        //Above line is used to detect the state of the request
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                // Perfect!
                var counter = request.responseText;
                 var span = document.getElementById('count');
                 span.innerHTML = counter.toString();
            }
            // There was a problem with the request.
            // For example, the response may have a 404 (Not Found)
            // or 500 (Internal Server Error) response code.
        // Everything is good, the response was received.
        } 
        // Not ready yet.
    }
};