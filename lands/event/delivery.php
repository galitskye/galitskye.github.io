<?php

$recepient = "galitsky.e.o@yandex.ru";
$sitename = "eventsender.ru";

$tarif = trim($_POST["tarif"]);
$name = trim($_POST["tar_name"]);
$phone = trim($_POST["tar_tel"]);
$email = trim($_POST["tar_email"]);
$numb = trim($_POST["numb"]);
$month = trim($_POST["month"]);
$year = trim($_POST["year"]);
$time = trim($_POST["time"]);
$sentText = trim($_POST["sent_text"]);
$sentLink = trim($_POST["sent_link"]);
$sentCom = trim($_POST["sent_comment"]);

$message = "Тариф: Имя: $name \nТелефон: $phone \nEmail: $email \nДата: \n	Число - $numb \n	Месяц - $month \n	Год - $year \n	Время - $time \nТекст для рассылки: $sentText \nСсылки на материалы: $sentLink \nДополнительная информация: $sentCom";

$pagetitle = "Хочу заказать рассылку с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");