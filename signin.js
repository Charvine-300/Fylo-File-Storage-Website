function setUp () {
    var username = "";
    var myForm = document.forms.Form;
    var button = document.getElementById("next"); 
    var message = document.getElementById("error");
    var error = document.getElementById("message");
 

    function Tamers() {
        location.assign("FyloOne/fyloOne.html")
    }


    button.onmousedown = function() {
        next.style.width = "75px";
        next.style.height = "23px"
    }

    button.onmouseup = function() {
        next.style.width = "80px";
        next.style.height = "25px"
    }

    /*button.onclick = function(event) {
        event.preventDefault();
        username = myForm.user.value;
        console.log(username);
    }
    
    button.onclick(submit);*/
    


    myForm.onsubmit = function(event) {
        event.preventDefault();

        if (myForm.user.value == "" && myForm.password.value == "") {
            error.innerHTML = "*This field is required*";
            message.innerHTML = "*This field is required*";
            error.style.color = "#ff0000";
            message.style.color = "#ff0000";
        } 

        else if (myForm.user.value == "") {
            error.innerHTML = "";
            message.style.color = "#ff0000";
            message.innerHTML = "*This field is required*";
        }

        else if (myForm.password.value == "") {
            message.innerHTML = "";
            error.innerHTML = "*This field is required*"
            error.style.color = "#ff0000";
        }

        else {
            error.innerHTML = "";
            message.innerHTML = "";
            addEventListener("submit",  setTimeout(Tamers, 1000), true);
        }

       
    }

    myForm.onsubmit(submit);

}



window.onload = function() {
    setUp();
}