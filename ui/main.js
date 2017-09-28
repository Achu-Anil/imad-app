//Submit username and password
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    //Make a request to the server and send the name
    //Create a request object
    var request = new XMLHttpRequest();
    
    
    //Capture the response and store it in a variable.
    request.onreadystatechange = function() {
        //Above line is used to detect the state of the request
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                // Perfect!
                console.log('user logged in');
                alert('logged in successfully');
            }
            else if(request.status === 403) {
                alert('username/password is incorrect');
            }
            else if(request.status === 500) {
                alert('Something went wrong on the server');
            }
            // There was a problem with the request.
            // For example, the response may have a 404 (Not Found)
            // or 500 (Internal Server Error) response code.
        // Everything is good, the response was received.
        } 
        // Not ready yet.
    }
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log('username: '+username);
    console.log('password: '+password);
    //Make the request
    request.open('POST', 'http://achuanilsms.imad.hasura-app.io/login', true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username: username, password: password}));
};