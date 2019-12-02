$(document).ready(function () {
  $("#b1").click(function () {
    let uname = $("#username").val()
    let password = $("#password").val()
    validateLogin(uname, password, function (f) {
      if (f == 1) {
        window.location.href = "index.html"
      }
      else if (f == 0) {
        alert("Invalid username or password");
      }
    });
  });
  function validateLogin(u1, p1, c) {
    var flag = 0;
    if (u1 == "admin" && p1 == "1234") {
      flag = 1;
      c(flag);

    }
    else {
      flag = 0;
      c(flag);

    }
  }

});



