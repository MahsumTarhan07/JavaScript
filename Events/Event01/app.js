var form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    var username = form.elements["username"].value;
    var password = form.elements["password"].value;

    alert("Username :" + username + "\nPassword :" +password);

  });