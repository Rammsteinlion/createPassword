document.addEventListener("DOMContentLoaded", function () {
  // Tu código JavaScript aquí
  const passwordInput = document.querySelector(".pass-field input");
  const eyeIcon = document.querySelector(".pass-field i");
  const requirementList = document.querySelectorAll(".requirement-list li");

  /**An array of password requirements with corresponding
   * regular expression and index of the requirement list item
   */

  const requirements = [
    { regex: /.{8,}/, index: 0 }, //Minimum of 8 characters
    { regex: /[0-9]/, index: 1 }, //At least one number
    { regex: /[a-z]/, index: 2 }, //At least one lowercase letter
    { regex: /[^A-Za-z0-9]/, index: 3 }, //At least one special character
    { regex: /[A-Z]/, index: 4 }, //At least one uppercase letter
  ];

  passwordInput.addEventListener("keyup", (event) => {
    requirements.forEach(item => {

      //Check if the password matches the requirement regex
      const isValid = item.regex.test(event.target.value);
      const requirementsItem = requirementList[item.index];

      if (isValid) {
        requirementsItem.firstElementChild.className =
          "fa-solid fa-check";
          requirementsItem.classList.add("valid");
      } else {
        requirementsItem.firstElementChild.className =
        "fa-solid fa-circle";
        requirementsItem.classList.remove("valid");
      }


    });


  });

  eyeIcon.addEventListener("click", () => {
    // Toggle the password input type between text and password
    passwordInput.type =
      passwordInput.type === "password" ? "text" : "password";

    //Uptdate eye
    eyeIcon.className = `fa-solid fa-eye${
      passwordInput.type === "password" ? "" : "-slash"
    }`;
  });
});
