$(document).ready(function() {
    $("#Submit").click(function(event) {
        event.preventDefault();
        var userInput = {
            userFirstName: $("#firstName").val(),
            userLastName: $("#lastName").val(),
            userGender: $("input[type=radio]:checked").val(),
            userSelectedState: $("#selectState option:selected").text(),
            userTermsAcceptance: $("input[type='checkbox']:checked").val(),
        }
        $.ajax({
            type: "post",
            url: "/users",
            data: userInput,
            success: function(data) {
                // $("#").append("<div>First Name: " + data.userFirstName + "</div>");
                // $("#").append("<div>Last Name: " + data.userLastName + "</div>");
                // $("#").append("<div>Gender: " + data.userGender + "</div>");
                // $("#").append("<div>State: " + data.userSelectedState + "</div>");
                // $("#").append("<div>Terms and Condition: " + data.userTermsAcceptance + "</div></br>");
                $.ajax({
                    type: "GET",
                    url: "/users",
                    dataType: "json",
                    success: function(data) {
                        var getAllUsers = [];
                        $.each(data, function(key, val) {
                            getAllUsers.push(
                                "<div>" + val.id +
                                "</br>First Name: " + val.userFirstName +
                                "</br> Last Name: " + val.userLastName +
                                "</br> Gender: " + val.userGender +
                                "</br> State: " + val.userSelectedState +
                                "</br> Terms & Conditions: " + val.userTermsAcceptance +
                                "</div></br>"
                            );
                        });
                        $("<div/>", {
                            html: getAllUsers.join("")
                        }).appendTo("#userConfirmation");
                    }
                });
            }
        });
    });


    $("#Reset").click(function() {
        $("input[type=text], textarea").val("");
        $('.Gender').prop('checked', false);
        $('#selectState').val(" ");
        $('input:checkbox').removeAttr('checked');
    });
});
