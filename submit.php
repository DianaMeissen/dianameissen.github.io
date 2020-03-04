<?php

if ($_REQUEST['Email']) {
//    var_dump($_REQUEST);
//    $r = file_get_contents("mail/index.php?t=" . $_REQUEST['Email']);
//    file_get_contents("mail/indexa.php?e=" . $_REQUEST['Email'] . "&n=" . $_REQUEST['Name'] . "&c=" . $_REQUEST['Textarea'] . "&t=" . $_REQUEST['Phonenumber']);
    require('mail/index.php');
    require('mail/indexa.php');
}
