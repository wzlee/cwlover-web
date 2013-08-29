package com.wzlee.cwl.controller;


import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.geo.Point;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.wzlee.cwl.domain.Person;
import com.wzlee.cwl.repositories.PersonRepository;
import com.wzlee.cwl.repositories.VarietyRepository;
import com.wzlee.cwl.view.JSONData;
import com.wzlee.cwl.view.MessageResult;
import com.wzlee.cwl.view.VerifyResult;

@Controller
@RequestMapping(value = "/public")
@SessionAttributes("person")
public class PublicController extends BaseController {
	private static final Logger logger = LoggerFactory.getLogger(PublicController.class);
	@Autowired
	MongoOperations mongoOperations;
	@Autowired
	GridFsOperations operations;
	@Autowired
	private VarietyRepository varietyRepository;
	@Autowired
	private PersonRepository personRepository;
	
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public void loginPerson(@RequestParam("userName")String userName,@RequestParam("password")String password,@RequestParam("longitude")double longitude,@RequestParam("latitude")double latitude,@RequestParam("callback")String callback,HttpServletRequest request,HttpServletResponse response) {
			List<Person> persons = personRepository.findPersonByUserName(userName);
			if(persons.isEmpty()){
				this.outJson(response, new VerifyResult(false, "username", "帐号不存在!"));
			}else{
				Person person = persons.get(0);
				if(person.getPassword().equals(password)){
					if(person.getStatus().equals("已激活")){
						person.setOnline(true);
						person.setLoginDate(new Date());
						person.setLocation(new double[] { longitude, latitude });
						personRepository.save(person);
						request.getSession().setAttribute("person", person);
						logger.info(person+"在["+request.getRemoteHost()+"]登陆成功!");
						this.outJsonP(response,callback ,new VerifyResult(true,person.getNickName(),"登陆成功!"));
					}else{
						this.outJsonP(response,callback, new VerifyResult(false,"userName","帐号"+person.getStatus()+"!"));
					}
				}else{
					this.outJsonP(response,callback, new VerifyResult(false, "password", "密码有误!"));
				}
			}
	}
	
	@RequestMapping(value = "/logout", method = RequestMethod.POST)
	public void logoutPerson(@RequestParam("callback")String callback,HttpServletRequest request,HttpServletResponse response) {
		Person person = (Person) request.getSession().getAttribute("person");
		if(person==null){
			this.outJsonP(response, callback,new MessageResult(false, "Session未创建或已过期!"));
		}else{
			request.getSession().removeAttribute("person");
			this.outJsonP(response, callback,new MessageResult(true, "Session登录信息清除成功!"));
		}
	}
	
	@RequestMapping(value = "/near", method = RequestMethod.POST)
	public void findNearer(@RequestParam("callback")String callback,HttpServletRequest request,HttpServletResponse response) {
		Person person = (Person) request.getSession().getAttribute("person");
		if(person==null){
			this.outJsonP(response, callback,new MessageResult(false, "Session未创建或已过期!"));
		}else{
			Point point = new Point(person.getLocation()[0],person.getLocation()[1]);
			List<Person> persons = mongoOperations.find(new Query(Criteria.where("location").nearSphere(point).maxDistance(0.003712240453784)),Person.class);
			this.outJsonP(response, callback,new JSONData<Person>(true, persons,persons.size()));
		}
	}
	
	@RequestMapping(value = "/variety", method = RequestMethod.GET)
	public void loadPerson(@RequestParam("callback")String callback,HttpServletRequest request,HttpServletResponse response){
		this.outJsonP(response,callback,varietyRepository.findAll());
	}
}
