var fruitName = document.getElementById('myFruit').children;
for(i=0; i<fruitName.length; i++){
	fruitName[i].addEventListener("click", function(){
		if(this.checked){
			var createInput = document.createElement("div");
			//console.log(createInput);
			var newTextValue = document.createTextNode(this.value);
			//console.log(newTextValue);
			var finalCart = createInput.appendChild(newTextValue);
			//console.log(finalCart);
			var finalCartId = document.getElementById("myFruitCart");
			//console.log(finalCartId);
			var finalCartFruit = finalCartId.appendChild(createInput);
			//console.log(finalCartFruit);
			//document.getElementById("myFruitCart").innerHTML +=  + "</br>";
		} else if (this.checked == false){
			var FinalFruit = document.getElementsByTagName("div");
        		for(var i=0;i<FinalFruit.length;i++) {
            		if(this.value === FinalFruit[i].innerHTML) {
                		document.getElementById("myFruitCart").removeChild(FinalFruit[i]);
						//document.getElementById("myFruitCart").innerHTML = null;
		}	
	}
}
})
}

