function validate(form) {
    function preventForm(event) {
        event.preventDefault();
    }
    var userFirstName = document.getElementById('firstName').value;
    var userLastName = document.getElementById('lastName').value;
    var userGender = document.getElementsByName('Gender');
        
    var userState = document.getElementById('selectState').value;
    //var userCondition = document.getElementById('ckBoxIAccept').value;
    if (userFirstName == "" || userFirstName == null || !isNaN(userFirstName)) {
        document.getElementById("firstName").className = "error";
        alert("Please Enter Your Correct First Name");
    }
    if (userLastName == "" || userLastName == null || !isNaN(userLastName)) {
        document.getElementById("lastName").className = "error";
        alert("Please enter your Correct Last Name");
    }
    if ((form.Gender[0].checked == false) && (form.Gender[1].checked == false)) {
        alert("Please choose your Gender");
    }
    if (userState == "") {
        alert("Please select the state");
    }
    if (!form.ckBoxIAccept.checked) {
        alert("Please accept the terms & conditions");
    }
    document.getElementById("form").reset();

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        console.log(xhttp.readyState);
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("userConfirmation").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("POST", "/users", true);
    xhttp.send("firstName=Arpit&lastName=Shah");
}

function resetForm() {
    document.getElementById("form").reset();
}
