alert("Welcome to my blog");
function convert() {
	if(!isNaN(document.getElementById("TempF").value)){
		var userAnswerCelsius = (document.getElementById("TempF").value - 32) * (5/9);
		document.getElementById("TempC").value = Math.round(userAnswerCelsius);
	}

	if(isNaN(document.getElementById("TempF").value)){
		document.getElementById("TempF").className = "error";
		alert("Please enter the Numeric Value");
	}	
}

function hideElement() {
	document.getElementById("question").style.visibility = "hidden"
}

function displayElement() {
	document.getElementById("question").style.visibility = "visible"
}

function resetForm() {
	document.getElementById("form").reset();    
}