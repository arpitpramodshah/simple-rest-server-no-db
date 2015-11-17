document.getElementById("btnSave").addEventListener("click", function(){
	var firstName = document.getElementById("txtFN").value;
	var lastName = document.getElementById("txtLN").value;
	var selectState = document.getElementById("selectedState").value;
	document.getElementById("viewDiv").innerHTML += "First Name: " + firstName + "</br>";
	document.getElementById("viewDiv").innerHTML += "Last Name: " + lastName + "</br>";
	document.getElementById("viewDiv").innerHTML += "State: " + selectState + "</br>";
	document.getElementById("txtFN").value = "";
	document.getElementById("txtLN").value = "";
	document.getElementById("selectedState").value = "";
	document.getElementById("btnEdit").style.visibility = "visible";
	console.log(this)
    }
);

var reset = function(){
	document.getElementById("txtFN").value = ;
	document.getElementById("txtLN").value = ;
	document.getElementById("selectedState").value = ;
}
