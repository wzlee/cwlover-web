package com.wzlee.cwl.domain;

import java.io.Serializable;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Reference;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Pet implements Serializable {

	private static final long serialVersionUID = 1702775342069014883L;
	
	@Id
	private String id;
	private String nickName;
	private Integer age;
	private String sex;
	private String photos;
	private String description;
	@Reference
	private Variety variety;
	@Reference
	private Person parent;
	private Integer fans;
	public Pet() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Pet(String nickName, Integer age, String sex, String photos,
			String description, Variety variety, Person parent, Integer fans) {
		super();
		this.nickName = nickName;
		this.age = age;
		this.sex = sex;
		this.photos = photos;
		this.description = description;
		this.variety = variety;
		this.parent = parent;
		this.fans = fans;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getNickName() {
		return nickName;
	}
	public void setNickName(String nickName) {
		this.nickName = nickName;
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
	public String getPhotos() {
		return photos;
	}
	public void setPhotos(String photos) {
		this.photos = photos;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Variety getVariety() {
		return variety;
	}
	public void setVariety(Variety variety) {
		this.variety = variety;
	}
	public Person getParent() {
		return parent;
	}
	public void setParent(Person parent) {
		this.parent = parent;
	}
	public Integer getFans() {
		return fans;
	}
	public void setFans(Integer fans) {
		this.fans = fans;
	}
	@Override
	public String toString() {
		return "Pet [id=" + id + ", nickName=" + nickName + ", age=" + age
				+ ", sex=" + sex + ", photos=" + photos + ", description="
				+ description + ", variety=" + variety + ", parent=" + parent
				+ ", fans=" + fans + "]";
	}
	
}
