package com.wzlee.cwl.controller;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.wzlee.cwl.repositories.VarietyRepository;

@Controller
@RequestMapping(value = "/public")
@SessionAttributes("passport")
public class PublicController extends BaseController {
	private static final Logger logger = LoggerFactory.getLogger(PublicController.class);
	@Autowired
	GridFsOperations operations;
	@Autowired
	private VarietyRepository varietyRepository;
	
	@RequestMapping(value = "/variety", method = RequestMethod.GET)
	public void loadPassport(@RequestParam("callback")String callback,HttpServletRequest request,HttpServletResponse response){
		this.outJsonP(response,callback,varietyRepository.findAll());
	}
}
