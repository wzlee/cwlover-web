package com.wzlee.cwl.view;

import java.io.Serializable;

public class Profile implements Serializable {
	private static final long serialVersionUID = -1250669770406289698L;
	
	private String id;
	private String label;
	private String text;
	private boolean leaf = false;
	private String xtype;
	
	public Profile(String id, String label, String text, boolean leaf,
			String xtype) {
		super();
		this.id = id;
		this.label = label;
		this.text = text;
		this.leaf = leaf;
		this.xtype = xtype;
	}
	public Profile() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public boolean isLeaf() {
		return leaf;
	}
	public void setLeaf(boolean leaf) {
		this.leaf = leaf;
	}
	public String getLabel() {
		return label;
	}
	public void setLabel(String label) {
		this.label = label;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public String getXtype() {
		return xtype;
	}
	public void setXtype(String xtype) {
		this.xtype = xtype;
	}
	
}
