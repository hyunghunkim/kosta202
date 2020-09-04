<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%
	request.setCharacterEncoding("utf-8");
	String id = request.getParameter("id");
	String pass = request.getParameter("pass");
	
	String m_id = "kosta";
	String m_pass = "1234";
	
	String result = "";
	
	if(id.equals(m_id)&&pass.equals(m_pass)){
		result = m_id+"´Ô ¹Ý°©½À´Ï´Ù.";
	}else{
		result = "È¸¿øÀÌ ¾Æ´Õ´Ï´Ù.";
	}












%>
