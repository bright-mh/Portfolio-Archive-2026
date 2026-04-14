<%@page contentType="text/html;charset=UTF-8"
%><%
    /****************************************************************
     * FileName : findZipCodeRead.jsp
     * Version : 1.0
     * Auther : Ghost
     * Details : 우편번호 검색처리 페이지
    
     * Date : 2007.08.20
     * Update History :
     *****************************************************************
      Copyright (c) 2007 CKinterDream Co.,Ltd. All rights reserved. */
  
%><%@page contentType="text/html;charset=UTF-8"
%><%@page import="java.util.*, java.sql.*"
%><%@page import="com.ckinterdream.common.*"
%><%@page import="com.ckinterdream.common.db.*"
%><%@page import="org.apache.commons.lang.*"
%><%
    //request.setCharacterEncoding("utf-8");
    ResourceBundle bundle = ResourceBundle.getBundle("application");
    String DB_NAME  =   bundle.getString("DB_NAME");
    String d = "";

    //개발 서버와 운영서버에서 한글 깨짐을 해결하기 위한 방법이 다르다
    //tomcat 설정 차이 같음.
    RequestUtil req = new RequestUtil(request);
    d = req.getParameter("dong");
 

    StringBuffer sb = new StringBuffer();
    ArrayList list = null;
    Connection conn = null;

    try {
    conn = DBHandler.getConnection();
    //list = DBUtil.select(conn, "select zipcode, sido, gugun, dong, bldg from zipcode_2005v3 where dong like '%" + StringEscapeUtils.escapeSql(d) + "%' order by zipcode");
    list = DBUtil.select(conn, "select zipcode, sido, gugun, dong, bldg from zipcode_2005v3 where sido like '%" +d +"%' or gugun like '%" +d +"%' or dong like '%" +d +"%'");
    int total = (null!=list) ? list.size() : 0;
    if(total>0) {
        sb.append("<ul>");
        
        for(int i=0; i<total; i++) {
            HashMap row = (HashMap)list.get(i);
            String zipcode = StringUtils.defaultString((String)row.get("zipcode"));
            String sido = (String)row.get("sido");
            String gugun = (String)row.get("gugun");
            String dong = (String)row.get("dong");
            String bldg = StringUtils.defaultString((String)row.get("bldg"));
            String address = (sido + " " + gugun + " " + dong + " " + bldg).trim();
            sb.append("<li><a href=\"#\" ><span class=\"zip_address\">"+address+"</span><span class=\"zip_num\">"+zipcode.substring(0, 3)+"-"+zipcode.substring(3, 6)+"</span></a><li>");
            //sb.append("<li><a href=\"#\" ><span class=\"zip_address\">"+address+"</span><span class=\"zip_num\">"+zipcode+"</span></a><li>");
            //sb.append("<li><a href=\"#\" onclick=\"selectAddress('"+address+"' , '"+zipcode+ "');\"><span class=\"zip_address\">"+address+"</span><span class=\"zip_num\">"+zipcode+"</span></a><li>");
            
        }  
        sb.append("</ul>");
        /*
        <ul>
        <li>
            <a href="#link">
                <span class="zip_address">서울특별시 강서구 염창동</span>
                <span class="zip_num">157-040</span>
            </a>
        </li>
        
        */
        
        
    }else{
        //sb.append("검색된 내용이 없습니다.");
        
        }
        
    } catch(Exception e) {

    } finally {
    DBUtil.close(conn);
    }
    
%><%= sb.toString()%>