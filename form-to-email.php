<?php
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];
  
  #Filter user input
  function filter_email_header($form_field) {  
  return preg_replace('/[nr|!/<>^$%*&]+/','',$form_field);
  }

  $email_address  = filter_email_header($visitor_email);
  
  $to = "bking2415@gmail.com";

  #Send email
  $headers = "From: $email_addressn";
  $sent = mail($to, 'Feedback Form Submission', $feedback, $headers);

  #Thank user or notify them of a problem
  if ($sent) {

  ?><html>
  <head>
  <title>Thank You</title>
  </head>
  <body>
  <h1>Thank You</h1>
  <p>Thank you for your interest.</p>
  </body>
  </html>
  <?php

  } else {

  ?><html>
  <head>
  <title>Something went wrong</title>
  </head>
  <body>
  <h1>Something went wrong</h1>
  <p>We could not send your email. Please try again.</p>
  </body>
  </html>
  <?php
  }
?>
