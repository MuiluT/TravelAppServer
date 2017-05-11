package com.hh.TravelApp.controller;

import java.util.ArrayList;
import java.util.List;
 
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
 
import com.hh.TravelApp.message.Response;
import com.hh.TravelApp.model.User;
 
@RestController
public class RestWebController {
 
    List<User> cust = new ArrayList<User>();
 
    @RequestMapping(value = "/getuser", method = RequestMethod.GET)
    public Response getResource() {
        Response response = new Response("Done", cust);
        return response;
    }
 
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public Response postUser(@RequestBody User user) {
        cust.add(user);
        // Create Response Object
        Response response = new Response("Done", user);
        return response;
    }
    
}
