<?php
$servername = "mysq"; // Change if using a live server
$username = "root"; // Default for XAMPP/WAMP
$password = ""; // Default is empty for local servers
$database = "my_website_db"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
