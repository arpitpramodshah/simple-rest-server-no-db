var fruitName = document.getElementById('myFruit').children;
for(i=0; i<fruitName.length; i++){
	fruitName[i].addEventListener("click", function(){
		if(this.checked){
			var createInput = document.createElement("div");
			var newTextValue = document.createTextNode(this.nextSibling.innerHTML);
				//console.log(newTextValue);
			var finalCart = createInput.appendChild(newTextValue);
			var finalCartId = document.getElementById("myFruitCart");
			var finalCartFruit = finalCartId.appendChild(createInput);
			//document.getElementById("myFruitCart").innerHTML +=  + "</br>";
		} else if (this.checked == false){
			var FinalFruit = document.getElementsByTagName("div");
        		for(var i=0;i<FinalFruit.length;i++) {
            		if(this.nextSibling.innerHTML === FinalFruit[i].innerHTML) {
                		document.getElementById("myFruitCart").removeChild(FinalFruit[i]);
						//document.getElementById("myFruitCart").innerHTML = null;
		}	
	}
}
})
}

