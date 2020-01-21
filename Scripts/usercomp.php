<?php
required_once("./php/myDBC.php");
if(isset($_SESSION['session']))
{
    header("location:principal.php");
    exit;
}
?>