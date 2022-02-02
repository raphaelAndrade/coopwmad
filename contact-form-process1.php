

<?php
if (isset($_POST['Email'])) {

    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "event@ciccc.ca";
    $email_subject = "New form submissions from Coop Portal";

    function problem($error)
    {
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br><br>";
        echo $error . "<br><br>";
        echo "Please go back and fix these errors.<br><br>";
        die();
    }

    // validation expected data exists
    if (
        !isset($_POST['Name']) || 
        !isset($_POST['Email']) ||
        !isset($_POST['Message'])
    ) {
        problem('We are sorry, but there appears to be a problem with the form you submitted.');
    }

    $name = $_POST['Name']; // required
    $email = $_POST['Email']; // required
    $message = $_POST['Message']; // required

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if (!preg_match($email_exp, $email)) {
        $error_message .= 'The Email address you entered does not appear to be valid.<br>';
    }

    $string_exp = "/^[A-Za-z .'-]+$/";

    if (!preg_match($string_exp, $name)) {
        $error_message .= 'The Name you entered does not appear to be valid.<br>';
    }

    if (strlen($message) < 2) {
        $error_message .= 'The Message you entered do not appear to be valid.<br>';
    }

    if (strlen($error_message) > 0) {
        problem($error_message);
    }

    $email_message = "Form details below.\n\n";

    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }

    $email_message .= "Name: " . clean_string($name) . "\n";
    $email_message .= "Email: " . clean_string($email) . "\n";
    $email_message .= "Message: " . clean_string($message) . "\n";

    // create email headers
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);
?>

    <!-- include your success message below -->

    <!DOCTYPE html>
    <html>
    <head>
        <title>Contact Successfull</title>
       <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
   <link rel="stylesheet" type="text/css" href="css/style_main.css">
   <style>
     .positionFooter {
       position: absolute !important;
       bottom: 0 !important;
     }
   </style>
</head>


<body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">
<div class="container">
    <!-- Nav -->
    <div class="row">
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="index.html"><img src="Images/logowhite.jpg" class="logo"></a>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav mainMenu">
              <li>
                <a href="index.html" class="home">Home</a>
                <ul class="subMenu homeSubMenu">
                  <li><a href="career.html">Career Prep</a></li>
                  <li><a href="orientations.html">Co-op Orientation</a></li>
                  <li><a href="term.html">Co-op Term</a></li>
                  <li><a href="graduation.html">Graduation</a></li>
                </ul>
              </li>
              <li>
                <a href="docs.html" class="requiredDoc">Required Docs</a>
                <!-- <ul class="subMenu requiredSubMenu">
                  <li><a href="documents/dmshostagreement.pdf" download>Host Agreement</a></li>
                  <li>
                    <a href="documents/dmshostagreement.pdf" download>Performance Evaluation</a>
                  </li>
                  <li>
                    <a href="documents/dmsfinalreport.pdf" download>Final Report</a>
                  </li>
                </ul> -->
              </li>
              <li><a href="events.html">Events</a></li>
              <li><a href="faq.html">FAQ</a></li>
              <li>
                <a href="resources.html" class="resources">Resources</a>
                <ul class="subMenu resourceSubMenu">
                  <li><a href="resume.html" >Resume</a></li>
                  <li><a href="coverLetter.html">Cover Letter</a></li>
                  <li><a href="interview.html">Interview</a></li>
                  <li><a href="jobSearch.html">Job Search</a></li>
                  <li><a href="linkedin.html">Linkedin</a></li>
                  <li><a href="portifolio.html">Portfolio</a></li>
                </ul>
              </li>
              <li class="social"><a href="https://www.instagram.com/cicccvancouver/" target="_blank"
                  class="fa fa-instagram"></a>
              </li>
              <li class="social"><a href="https://www.facebook.com/cicccvancouver" target="_blank"
                  class="fa fa-facebook"></a></li>
              <li class="social"> <a
                  href="https://www.google.com/search?sxsrf=ALeKk02RabiqBJaqpEy1UfdJ-rsmKCta8w%3A1613597590693&source=hp&ei=lostYP2HJ4_O0PEPl6C_uAw&iflsig=AINFCbYAAAAAYC2ZpnHkSy3GxOzKcABbP0s9jLNL43FX&q=ciccc&oq=ciccc&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgjECcyCgguEMcBEK8BECcyAggAMgIIADICCAAyAggAMgQIABBDMgQIABAKMgIIADoKCC4QxwEQrwEQQzoFCC4QkQI6CwguELEDEMcBEKMCOg4ILhCxAxCDARDHARCjAjoICAAQsQMQgwE6CwguEMcBEK8BEJECOggILhCxAxCDAToFCAAQkQI6CAgAELEDEJECOgQILhBDOggILhDHARCvAVDqBFj9CGDlDmgAcAB4AIAB1wGIAfQEkgEFMi4yLjGYAQCgAQGqAQdnd3Mtd2l6&sclient=gws-wiz&ved=0ahUKEwj9qs257_HuAhUPJzQIHRfQD8cQ4dUDCAk&uact=5"
                  target="_blank" class="fa fa-google"></a></li>
              <li class="social"><a href="mailto:coop.advisor@ciccc.ca" class="fa fa-envelope"></a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
  <section class="banner eventBanner">
    <div class="overlay">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1> Thank you for contacting us</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="templates">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
        <h1>   Thank you for contacting us. We will be in touch with you very soon.</h1> 
        <button class="btn"><a href="index.html">Back</button> 
        </div>
      </div>
    </div>
  </section>
  <section class="footer positionFooter">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <footer class="text-center">
            <a href="#myPage" title="To Top">
              <span class="glyphicon glyphicon-chevron-up"></span>
            </a>
            <p>&copy; 2021 ciccc.com Powered by CICCC</a> </p>
          </footer>
        </div>
      </div>
    </div>
  </section>
</body>
    </html>
<?php
}
?>