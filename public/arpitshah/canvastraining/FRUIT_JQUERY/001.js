$(document).ready(function() {
    $("#myFruit").on("change", 'input[type="checkbox"]', function() {
        var $chkBoxFruit = $(this);
        //console.log($chkBoxFruit);
        if ($chkBoxFruit.is(':checked')) {
            var fruitValue = $(this).attr('id');
            $("#myFruitCart").append("<span>" + fruitValue + "</span></br>");
        } else {
            var removeFruitArray = $('#myFruitCart').find('span');
            //console.log(removeFruitArray);
            for (var i = 0; i < removeFruitArray.length; i++) {
                //console.log(removeFruitArray[i].innerHTML);
                if (this.id == removeFruitArray[i].innerHTML) {
                    $(removeFruitArray[i]).remove();
                }
            }
        }
    });
    $("#addFruit").on("click", function(){
        var userFruit = prompt("Please enter your choice of fruit");
        var result = $('<input/>', {type: 'checkbox', id: userFruit, name: "fruit"}).appendTo("#myFruit");
        $("#myFruit").append(userFruit);
    });
});
