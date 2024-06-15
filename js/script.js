/* Burger-menu */

$(document).ready(function () {
  $(".header_burger").click(function (event) {
    $(".header_burger,.burger_menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
  $(".burger_link").click(function () {
    $(".header_burger, .burger_menu").removeClass("active");
    $("body").removeClass("lock");
  });
});

// Плавный переход на другую страницу

/* $(document).ready(function () {
  $(".resume").click(function (event) {
    event.preventDefault();
    var href = $(this).attr("href");
    $("body").fadeOut(500, function () {
      window.location = href;
    });
  });
}); */

// Form

//E-mail Ajax Send

/* $(document).ready(function () {
  $(".discussion-form").submit(function () {
    //Change
    var th = $(this);
    var redirectUrl = "/thank_you.html";
    $.ajax({
      type: "POST",
      url: "/mail.php",
      data: th.serialize(),
    })
      .done(function (response) {
        setTimeout(function () {
          window.location.href = redirectUrl;
          th.trigger("reset");
          th.trigger(".r");
        }, 0);
      })
      .fail(function () {
        alert("Помилка відправки форми");
      });
    return false;
  });
}); */


