package com.experiments.demos.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController{

    @RequestMapping(value={"", "/", "home"})
    public String Home() {
        return "home";
    } 


    @RequestMapping(value="one")
    public String One() {
        return "one";
    } 
    
    @RequestMapping(value="two")
    public String Two() {
        return "two";
    } 

    @RequestMapping(value="three")
    public String Three() {
        return "three";
    } 

    @RequestMapping(value="four")
    public String Four() {
        return "four";
    } 

}