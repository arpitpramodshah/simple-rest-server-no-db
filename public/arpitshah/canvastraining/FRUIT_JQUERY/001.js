$(document).ready(function() {
    $("#myFruit").on("change", 'input[type="checkbox"]', function() {
        var $chkBoxFruit = $(this);
        //console.log(this);
        if ($chkBoxFruit.is(':checked')) {
            var fruitValue = $(this).attr('id');
            $("#myFruitCart").append("<div>" + fruitValue + "</div>");
        } else {
            var removeFruitArray = $('#myFruitCart').find('div');
            //console.log(removeFruitArray);
            for (var i = 0; i < removeFruitArray.length; i++) {
                //console.log(removeFruitArray[i].innerHTML);
                if (this.id === removeFruitArray[i].innerHTML) {
                    $(removeFruitArray[i]).remove();
                    //console.log(myFruitCart.innerHTML);
                }
            }
        }
    });

    $("#myFruit").on("click", 'span', function() {
        var $chkBoxFruitSpan = $(this).html();
        var $previousCheckBox = $(this).prev();
        //console.log($previousCheckBox.prop("checked"));
        if ($previousCheckBox.prop("checked") == false) {
            $previousCheckBox.prop("checked", true);
            $("#myFruitCart").append("<div>" + $chkBoxFruitSpan + "</div>");
        } else if ($previousCheckBox.prop("checked") == true) {
            $previousCheckBox.prop("checked", false);
            var removeFruitArraySpan = $('#myFruitCart').find('div');
            for (var j = 0; j < removeFruitArraySpan.length; j++) {
                if ($(this).html() === removeFruitArraySpan[j].innerHTML) {
                    $(removeFruitArraySpan[j]).remove();
                }
            }
        }
    });

    $("#addFruit").on("click", function() {
        var userFruit = prompt("Please enter your choice of fruit");
        var result = $('<input/>', {
            type: 'checkbox',
            id: userFruit,
            name: "fruit"
        }).appendTo("#myFruit");
        $("#myFruit").append("<span>" + userFruit + "</span>");
    });
});
