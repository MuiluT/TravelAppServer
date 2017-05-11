$( document ).ready(function() {
     
    var url = "http://localhost:8080";  // ?
     
    // SUBMIT FORM
    $("#register_form").submit(function(event) {
        // Prevent the form from submitting via the browser.
        event.preventDefault();
        ajaxPost();
    });
     
     
    function ajaxPost(){
         
        // Prepare form
        var formData = {
            firstname : $("#firstname").val(),
            lastname :  $("#lastname").val(),
            password : $("#password").val(),
            email : $("#email").val()
        };
         
        $.ajax({
            type : "POST",
            contentType : "application/json",
            url : url + "/register",
            data : JSON.stringify(formData),
            dataType : 'json',
            success : function(result) {
                if(result.status == "Done"){
                    $("#postResultDiv").html("Posted info: Firstname = "
                            + result.data.firstname + " , Lastname = " + result.data.lastname + 
                            "<br>Password = " + result.data.password + " , Email = " + result.data.email);
                }else{
                    $("#postResultDiv").html("Error");
                }
                console.log(result);
            },
            error : function(e) {
                alert("Error!")
                console.log("ERROR: ", e);
            }
        });
         
        // Reset FormData after Posting
        resetData();
 
    }
     
    function resetData(){
        $("#firstname").val("");
        $("#lastname").val("");
        $("#password").val("");
        $("#email").val("");
    }
})