package com.codegym.controller;

import com.codegym.service.IBlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class BlogController {

    @Autowired
    private IBlogService iBlogService;

    @RequestMapping("")
    public String goHome(Model model){
        model.addAttribute("list",iBlogService.findAll());
        return "home";
    }

    
}
