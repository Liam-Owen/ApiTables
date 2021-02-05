<?php

    ini_set('display_errors', 'on');
    error_reporting(E_ALL);

	$executionStartTime = microtime(true) / 1000;

	$url='api.geonames.org/oceanJSON?lat=' . $_REQUEST['latitude'] . '&lng=' . $_REQUEST['longitude'] .'&username=liamowen';

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
	$output['data'] = $decode['ocean'];
	
	header('Content-Type: application/json; charset=UTF-8');

	echo json_encode($output); 

?>