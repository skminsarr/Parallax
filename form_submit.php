<?php

$db = mysqli_connect('localhost', 'root', '1234', 'parallax_db');
if (mysqli_connect_errno()){
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}else{
    //   echo "db_connected";
}

if (isset($_POST['signup'])) {
    echo "Hello User. email: ".$_POST['email'];
    
    $name = mysqli_real_escape_string($db, $_POST['name']);
    $email = mysqli_real_escape_string($db, $_POST['email']);
    $phone_number = mysqli_real_escape_string($db, $_POST['phone']);
    $age = mysqli_real_escape_string($db, $_POST['age']);

    if (empty($name)) { array_push($errors, "name is required"); }
    if (empty($email)) { array_push($errors, "email is required"); }
    if (empty($phone_number)) { array_push($errors, "phone_number is required"); }
    if (empty($age)) { array_push($errors, "age is required"); }

    if (count($errors) == 0) {
        $query = "INSERT INTO users (name, email, phone_number, age) 
                VALUES('$name', '$email', '$phone_number', '$age')";
        mysqli_query($db, $query);
        header('location: /');
    }

}

?>