<%@ page language="java" pageEncoding="UTF-8" 
%><%@ page import="com.rbipt.RB" 
%><%@ page import="java.util.ArrayList" 
%><%@ page import="java.util.HashMap" 
%><%@ page import="com.rbipt.service.EventService" 
%>
<meta http-equiv="content-type" content="text/html;charset=utf-8"/>

<%
	EventService service = new EventService();
    request.setCharacterEncoding("utf-8");
	int dupleChk = service.getCnt(request);
	
    if(dupleChk > 0){
        %>
     <script>
     alert("중복으로 참여하실 수 없습니다.");
     window.close();
     </script>   
        
    <%}else{
        service.insert(request);   
     %>
        
     <script>
     alert("이벤트에 응모하였습니다.");
     window.close();
     </script>
        
         <%
    }
    
		
	
	
	
%>
<!DOCTYPE html>
<html lang="ko">
<head>


</head>
<body class="main">

</body>
</html>