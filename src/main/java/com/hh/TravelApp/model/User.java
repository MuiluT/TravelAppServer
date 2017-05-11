package com.hh.TravelApp.model;

public class User 
{
	
	private String firstname;
    private String lastname;
    private String password;
    private String email;
      
    public User(){}
      
    public User(String firstname, String lastname, String password, String email){
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
        this.email = email;
    }
      
    // firstname
    public String getFirstname() {       return firstname;    }
    public void setFirstname(String firstname) {     this.firstname = firstname;    }
      
    // lastname
    public String getLastname() {      return lastname;    }
    public void setLastname(String lastname) {        this.lastname = lastname;    }
	
    //password
    public String getPassword() {	return password;	}
    public void setPassword(String password)	{	this.password = password; }
    
    //email
    public String getEmail() {	return email;	}
    public void setEmail(String email)	{	this.email = email; }
}