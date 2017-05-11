/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = 
    {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

//
//Registration form
//

$(document).on("pagecreate", "#register", function()
    {   
    
           
    $.validator.addMethod("good_password", function(value, element) //method for a strong password 
        {
            return this.optional(element) || value.length >= 6 //longer than 6
            && /\d/.test(value)         //one digit
            && /[a-z]/i.test(value);      //one character
        }, "Your password must be at least 6 characters long and contain at least one number and character.");
    
    $("#register_form").validate(
        {
            rules: 
                {   
                    email: 
                        {
                            required: true,
                            email: true,
                            remote: "http://localhost:3000/"
                        },
                    
                    reg_password:
                        {
                            required: true,
                            good_password: true  //calls the good_password method
                        },
                    
                    reg_password_c:   //Same password
                        {
                            required: true,
                            equalTo: "#reg_password"
                         }
                }
        });
    
    });


//
//Generating country info and the list
//

$(document).on("pagecreate", "#trip", function()
    {
        var $countryinfo = $("#countryinfo");  //Populates the tips section
        
        
        //retrieve the country selected and send a get request
        $(document).on("click", "li", function()
            {
            
                var country = $(this).text()
                        
                $.ajax(
                    {
                        type: 'GET',
                        url: "https://restcountries.eu/rest/v2/name/" + country,

                        success: function(countryinfos)
                            {   //Select a specific info from the countryinfos
                                $.each(countryinfos, function(i, info)     //for each countryinfos array 
                                       {
                                            $countryinfo.empty()  //If they click again
                                    
                                            $countryinfo.append(
                                            "<li> Capital: " + info.capital + "</li>" +
                                            "<li> Time zone: " + info.timezones + "</li>" +
                                            "<li> Country code: +" + info.callingCodes + "</li>" +
                                            "<li> Currency: " + info.currencies + "</li>"
                                            );
                                            console.log(countryinfos)

                                        });     

                                }
            
                        }); 
            });
    
    });


//
//Camera
//

$(function()  //self-executing function
    {
    
        function cameraSuccess(photo)
            {
                $("#profile_img").attr("src", photo); //src = where it is on my phone when taken
                
               
            }
        function cameraError(error)
            {
                alert(error);
            }
    
        function accessCamera()
            {
                var cam_options =   {
                                    destionationType: Camera.DestinationType.FILE_URI,
                                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY
                                    };
                
                navigator.camera.getPicture(cameraSuccess, cameraError, cam_options);
            }
    
        $("#photoupload").on("click", accessCamera);
    });