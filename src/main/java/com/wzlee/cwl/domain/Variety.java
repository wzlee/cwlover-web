package com.wzlee.cwl.domain;

import java.io.Serializable;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Variety implements Serializable {

	private static final long serialVersionUID = 1702775342069014883L;
	
	@Id
	private String id;
	private String varietyName;
	private String picture;
	private String introduction;
	private String tips;
	private String category;
	public Variety(String varietyName, String picture, String introduction,
			String tips, String category) {
		super();
		this.varietyName = varietyName;
		this.picture = picture;
		this.introduction = introduction;
		this.tips = tips;
		this.category = category;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getVarietyName() {
		return varietyName;
	}
	public void setVarietyName(String varietyName) {
		this.varietyName = varietyName;
	}
	public String getPicture() {
		return picture;
	}
	public void setPicture(String picture) {
		this.picture = picture;
	}
	public String getIntroduction() {
		return introduction;
	}
	public void setIntroduction(String introduction) {
		this.introduction = introduction;
	}
	public String getTips() {
		return tips;
	}
	public void setTips(String tips) {
		this.tips = tips;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	@Override
	public String toString() {
		return "Variety [id=" + id + ", varietyName=" + varietyName
				+ ", picture=" + picture + ", introduction=" + introduction
				+ ", tips=" + tips + ", category=" + category + "]";
	}
	
}
