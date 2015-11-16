
window.onload = function() {
	document.getElementById("main_one").style.visibility = "hidden";
	document.getElementById("main_two").style.visibility = "hidden";
	document.getElementById("main_three").style.visibility = "hidden";
}

function selectAll(checked, total_checked) {
	for (i=0; i<total_checked; i++){
		if(checked){
			document.forms[0].chkBox[i].checked = true;
			document.forms[0].unChkBxAll.checked = false;
		} else {
			document.forms[0].chkBox[i].checked = false;
			document.forms[0].chkBxAll.checked = false;
		}
	}
}

function validate(){
	var result = document.getElementsByTagName("input");
	for( var i=0; i<result.length; i++){
		if(result[i].checked){
			alert(result[i].value);
		}
	}
}

var newLink = "http://www.pro-tekconsulting.com";
function checkURL(){
	var results = document.getElementsByTagName("a");
	var button = document.getElementById("ChkURL");
	for(var i=0; i < results.length; i++){
		if(results[i].getAttribute("href") == newLink){
			alert("Link is already there!");
			document.getElementById("AddURL").disabled = true
		} else {
			document.getElementById("AddURL").disabled = false;
		}
	}
}

function addLink() {
  var createURL= document.createElement("A");
    var txtNode = document.createTextNode("Pro_TekConsulting");
    createURL.setAttribute("href","http://www.pro-tekconsulting.com");
    createURL.appendChild(txtNode);
    document.body.appendChild(createURL);
  }