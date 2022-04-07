http://localhost/atlas/app/pages/contact/contacts.php
<?php
header("Access-Control-Allow-Origin: *"); //add this CORS header to enable any domain to send HTTP requests to these endpoints:
$host = "localhost"; 
$user = "root"; 
$password = ""; 
$dbname = "atlas"; 
$id = '';
 
$con = mysqli_connect($host, $user, $password,$dbname);
 
$method = $_SERVER['REQUEST_METHOD'];
 
 
if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}

 
switch ($method) {
    case 'GET':
      if(isset($_GET["id_c"])){
        $id = $_GET['id_c'];  
      }     
      $sql = "select * from contacts".($id?" where id_c=$id":''); 
      break;
    case 'POST':
        if(isset($_GET["id"])){
            $id = $_GET['id'];  
            $f_name = $_POST["f_name"];
            $l_name = $_POST["l_name"];
            $email = $_POST["email"];
            $sql = "UPDATE contacts SET f_name='$f_name', l_name='$l_name', email='$email' WHERE id = $id"; 
        }else if(isset($_GET["delete"])){
            $delete = $_GET['delete'];  
            $sql = "DELETE FROM contacts WHERE id = $delete"; 
        }else{  
          $f_name = $_POST["f_name"];
          $l_name = $_POST["l_name"];
          $email = $_POST["email"];
 
          $sql = "insert into contacts (f_name, l_name, email) values ('$f_name', '$l_name', '$email')"; 
        }
      break;
}
 
// run SQL statement
$result = mysqli_query($con,$sql);
 
// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($con));
}
 
if ($method == 'GET') {
    if (!$id) echo '[';
      for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
        echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
      }
    if (!$id) echo ']';
} elseif ($method == 'POST') {
    echo json_encode($result);
} else {
    echo mysqli_affected_rows($con);
}
 
$con->close();