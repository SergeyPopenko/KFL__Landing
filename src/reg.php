<?php

include_once $_SERVER['DOCUMENT_ROOT'].'/.php/global.php';

if (isset($_POST)) {

	$p = $_POST;
	$url = 'kfl site';
	$subj = 'kfl subsccribe';

	$data = array(
		'email' => $p['email'],
		'name' => $p['name'],
		'message' => $p['message']
	);

		sendTestMail($url, $subj, $data);
		echo "ok";
	//header('Location: /', true);
}

?>