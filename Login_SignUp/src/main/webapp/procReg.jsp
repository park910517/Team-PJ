<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>    
<!DOCTYPE html>
<html>
<head>
<link rel="shortcut icon" href="favicon.ico">
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
	String id = request.getParameter("id");
	String pw = request.getParameter("pw");
	String re_pw = request.getParameter("re_pw");
	String userName = request.getParameter("userName");
	String email = request.getParameter("email");
	

	Connection con = null;
	Statement stmt = null;
	//ResultSet rs = null;
	try {	
		Class.forName("oracle.jdbc.OracleDriver");
		con=DriverManager.getConnection("jdbc:oracle:thin:@127.0.0.1:1521:orcl","catdrip","catdrip");
		System.out.println("성공");
		
		stmt=con.createStatement();
		
		int resultCount = stmt.executeUpdate("INSERT INTO SignUp (id,pw,re_pw,userName,email) values('"+id+"','"+pw+"','"+re_pw+"','"+userName+"','"+email+"')");
		System.out.println("행 1이 나와야 정상:"+resultCount);
		
		stmt.close();
		con.close();
		//rs.close();
		
	} catch (SQLException e){	
		System.out.println("sql 익셉션:"+e);
	} catch (Exception e) {	
		System.out.println("익셉션:"+e);
	}	
%>
</body>
</html>