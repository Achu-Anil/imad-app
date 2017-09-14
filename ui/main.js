//Counter code
var button = document.getElementById('counter');
//var counter = 0;
button.onclick = function() {
    
    //Create a request object
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

    //Make the request
    request.open('GET', 'http://achuanilsms.imad.hasura-app.io/counter', true);
    request.send(null);
};

//Submit name
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    //Make a request to the server and send the name
    //Create a request object
    var request = new XMLHttpRequest();
    
    
    //Capture the response and store it in a variable.
    request.onreadystatechange = function() {
        //Above line is used to detect the state of the request
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                // Perfect!
                //Capture a list of names and render it as a list
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for(var i=0; i<names.length; i++){
                    list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
            }
            // There was a problem with the request.
            // For example, the response may have a 404 (Not Found)
            // or 500 (Internal Server Error) response code.
        // Everything is good, the response was received.
        } 
        // Not ready yet.
    }

    //Make the request
    request.open('GET', 'http://achuanilsms.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null);
};