<%--
  Created by IntelliJ IDEA.
  User: PC
  Date: 9/21/2022
  Time: 6:09 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>$Title$</title>
</head>
<body>
<form action="/calculator" method="post">
    <h2>calculator</h2>

    <p>usd</p>
    <input type="number" placeholder="List Price" name="usd">

    <button type="submit">Calculate Discount</button>
    <c:if test="${mess != null}">
        <p>${mess}</p>
    </c:if>
</form>
</body>
</html>
