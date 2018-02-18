// Your code here!


// PgP 2/5/2018  write the following values on all webpages
// this was activated by event in <body class="container-fluid"   onload ="setVariables()"> ; but it is not working, had to put <script> tags into individual file

function setVariables() {
    document.getElementById("email").value = xeMail;
    document.getElementById("FirstName").value = xFirstName;
    document.getElementById("LastName").value = xLastName;
    document.getElementById("pin").value = xStarID;

    document.getElementById("semester").value = xSemester;
    document.getElementById("class").value = xClass;
    document.getElementById("section").value = xSection;


    document.getElementById("xLicense").innerHTML = ccLicense;
    document.getElementById("xfooter").innerHTML = Date();
}




