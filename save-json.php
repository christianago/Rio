<?php

//$data = str_replace('&nbsp;', '', $_POST['data']);
$data = $_POST['data'];
file_put_contents('languages.json', $data);