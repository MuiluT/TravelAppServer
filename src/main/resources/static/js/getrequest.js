$( document ).ready(function() {
     
	var url = "http://localhost:8080";  //?
     
    //get
    $("#getBtn").click(function(event){
        event.preventDefault();
        ajaxGet();
    });
     
   
    function ajaxGet(){
        $.ajax({
            type : "GET",
            url : url + "/getuser",
            success: function(result){
                if(result.status == "Done"){
                    var userList = "";
                    $.each(result.data, function(i, user){
                        var user = "User " + i + ": Firstname = " + user.firstname + " , Lastname =" + user.lastname + "<br>"
                        + "Password =" + user.password + " , Email = " + user.email;
                        $("#getResultdiv").append("<li>" + user + "</li>")
                    });
                    console.log("Success: ", result);
                }else{
                    $("#getResultDiv").html("Error");
                    console.log("Fail: ", result);
                }
            },
            error : function(e) {
                $("#getResultDiv").html("Error");
                console.log("ERROR: ", e);
            }
        }); 
    }
})