<?php

    ini_set('display_errors', 'on');
    error_reporting(E_ALL);

	$executionStartTime = microtime(true) / 1000;

	$url='http://api.geonames.org/postalCodeSearchJSON?maxRows=10&postalcode=' . $_REQUEST['postalCode'] . '&username=liamowen';

	$curl = curl_init();
	curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($curl, CURLOPT_URL,$url);

	$result=curl_exec($curl);

	curl_close($curl);

	$decode = json_decode($result,true);	

	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "mission saved";
	$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
	$output['data'] = $decode['postalCodes'];
	
	header('Content-Type: application/json; charset=UTF-8');

	echo json_encode($output); 

?>
