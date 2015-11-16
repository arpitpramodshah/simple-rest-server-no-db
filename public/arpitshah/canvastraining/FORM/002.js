function validate(form) {
	var userFirstName = document.getElementById('firstName').value;
	var userLastName = document.getElementById('lastName').value;
	var userState = document.getElementById('selectState').value;
	//var userCondition = document.getElementById('ckBoxIAccept').value;
	
	if(userFirstName == "" || userFirstName == null || !isNaN(userFirstName)){
		document.getElementById("firstName").className = "error";
	}

	if(userLastName == "" || userLastName == null || !isNaN(userLastName)){
		document.getElementById("lastName").className = "error";
	}

	if((form.Gender[0].checked == false) && (form.Gender[1].checked == false)) {
		alert ("Please choose your Gender");
	}

	if(userState == ""){
		alert("Please select the state");
	}

	if(!form.ckBoxIAccept.checked) {
		alert("Please accept the terms & conditions");
	}
}

function resetForm() {
    document.getElementById("form").reset();
}