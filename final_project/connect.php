<?php
$server = 'localhost:3306';
$user = 'root';
$password = '12345678';
$dbname = 'test';

$conn = mysql_connect($server, $user, $password);
$dbconn = mysql_select_db($dbname);

$result = mysql_query($conn, $dbconn);

if($result){echo "<h2>connect</h2>";}
else{echo "<h2>fail</h2>";}
?>