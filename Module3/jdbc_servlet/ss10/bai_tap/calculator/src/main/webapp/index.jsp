<%--
  Created by IntelliJ IDEA.
  User: PC
  Date: 8/19/2022
  Time: 7:23 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>$Title$</title>
</head>
<body>
<h3>Simple Calculator</h3>
<label>Calculator</label>
<form action="/list" method="get">
    <table>
        <tr>
            <th>First operand:</th>
            <td><input type="number" name="first"></td>
        </tr>
        <tr>
            <th>Operator</th>
            <td>
                <select>
                <option>Add</option>
                <option>multiplication</option>
                <option>division</option>
                </select>
            </td>
        </tr>
        <tr>
            <th>Second operator: </th>
            <td><input type="number" name="second"></td>
        </tr>
        <tr>
            <th></th>
            <th><button type="submit">Calculate</button></th>
        </tr>
    </table>
</form>
</body>
</html>
