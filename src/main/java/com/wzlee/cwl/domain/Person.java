package com.wzlee.cwl.domain;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.PersistenceConstructor;
import org.springframework.data.annotation.Reference;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Person implements Serializable {

	private static final long serialVersionUID = 1702775342069014883L;

	@Id
	private String id;
	private String userName;
	private String password;
	private String nickName;
	private String headshot;
	private Integer age;
	private String sex;
	@Reference
	private List<Pet> pets;
	private String province;
	private String city;
	private String district;
	private String village;
	private double[] location;
	private boolean online = false;
	private Date loginDate = new Date();
	private String status = "未激活";
	private Date registerDate = new Date(); 

	public Person() {
		super();
		// TODO Auto-generated constructor stub
	}
	@PersistenceConstructor
	Person(String userName, String password, String nickName,
			String headshot, Integer age, String sex, List<Pet> pets,
			String province, String city, String district, String village,
			double[] location) {
		super();
		this.userName = userName;
		this.password = password;
		this.nickName = nickName;
		this.headshot = headshot;
		this.age = age;
		this.sex = sex;
		this.pets = pets;
		this.province = province;
		this.city = city;
		this.district = district;
		this.village = village;
		this.location = location;
	}

	public Person(String userName, String password, String nickName,
			String headshot, Integer age, String sex, List<Pet> pets,
			String province, String city, String district, String village,double x, double y) {
		super();
		this.userName = userName;
		this.password = password;
		this.nickName = nickName;
		this.headshot = headshot;
		this.age = age;
		this.sex = sex;
		this.pets = pets;
		this.province = province;
		this.city = city;
		this.district = district;
		this.village = village;
		this.location = new double[] { x, y };
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getNickName() {
		return nickName;
	}

	public void setNickName(String nickName) {
		this.nickName = nickName;
	}

	public String getHeadshot() {
		return headshot;
	}

	public void setHeadshot(String headshot) {
		this.headshot = headshot;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public List<Pet> getPets() {
		return pets;
	}

	public void setPets(List<Pet> pets) {
		this.pets = pets;
	}

	public String getProvince() {
		return province;
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public String getVillage() {
		return village;
	}

	public void setVillage(String village) {
		this.village = village;
	}

	public double[] getLocation() {
		return location;
	}

	public void setLocation(double[] location) {
		this.location = location;
	}

	public boolean isOnline() {
		return online;
	}
	public void setOnline(boolean online) {
		this.online = online;
	}
	public Date getLoginDate() {
		return loginDate;
	}
	public void setLoginDate(Date loginDate) {
		this.loginDate = loginDate;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Date getRegisterDate() {
		return registerDate;
	}
	public void setRegisterDate(Date registerDate) {
		this.registerDate = registerDate;
	}
	@Override
	public String toString() {
		return "Person [id=" + id + ", userName=" + userName + ", password="
				+ password + ", nickName=" + nickName + ", headshot="
				+ headshot + ", age=" + age + ", sex=" + sex + ", pets=" + pets
				+ ", province=" + province + ", city=" + city + ", district="
				+ district + ", village=" + village + "]";
	}

}
