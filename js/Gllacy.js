var link = document.querySelector(".popup-modal");
    var popup = document.querySelector(".feedback-window");
    var overlay = document.querySelector(".overlay");
    var close = popup.querySelector(".modal-close");

    var form = popup.querySelector(".feedback-window form");
    var login = popup.querySelector("[name=youname]");
    var password = popup.querySelector("[name=your-email]");
    var comment = popup.querySelector("[name=your-comment]");



    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");
      overlay.classList.add("modal-show");
      login.focus();
    });

    close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      overlay.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    });

    form.addEventListener("submit", function (evt) {
      if (!login.value || !password.value || !comment.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        console.log("Нужно ввести логин и пароль");
        popup.classList.add("modal-error");
      } else {
        if (isStorageSupport) {
          localStorage.setItem("login", login.value);
        }
      }

    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
          overlay.classList.remove("modal-show");
          popup.classList.remove("modal-show");
          popup.classList.remove("modal-error");
        }
      }
    });
