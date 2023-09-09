document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmpassword");
  const phone = document.getElementById("Phone");
  const email = document.getElementById("Email");
  const genderInputs = document.querySelectorAll('input[name="gender"]');
  const dob = document.getElementById("DOB");
  const resume = document.getElementById("Resume");

  // Function to toggle password visibility
  function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  }

  // Function to validate the form
  function validateForm() {
    let isValid = true;

    // Username should not be empty
    if (username.value.trim() === "") {
      isValid = false;
      alert("Username cannot be empty");
    }

    // Password should not be empty and match the confirmation
    if (password.value.trim() === "") {
      isValid = false;
      alert("Password cannot be empty");
    } else if (password.value !== confirmPassword.value) {
      isValid = false;
      alert("Passwords do not match");
    }

    // Phone should be in a valid format (you can add more validation)
    const phonePattern = /^(\+\d{1,3}-)?\d{10}$/;
    if (!phonePattern.test(phone.value)) {
      isValid = false;
      alert("Invalid phone number");
    }

    // Email should be in a valid format (you can add more validation)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email.value)) {
      isValid = false;
      alert("Invalid email address");
    }

    // Gender should be selected
    let selectedGender = false;
    genderInputs.forEach((input) => {
      if (input.checked) {
        selectedGender = true;
      }
    });
    if (!selectedGender) {
      isValid = false;
      alert("Please select your gender");
    }

    // Date of Birth should not be empty
    if (dob.value.trim() === "") {
      isValid = false;
      alert("Date of Birth cannot be empty");
    }

    // Resume file should be selected
    if (!resume.value) {
      isValid = false;
      alert("Please upload your resume");
    }

    return isValid;
  }

  // Function to calculate age from Date of Birth
  function calculateAge() {
    const birthDate = new Date(dob.value);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    document.getElementById("ageResult").innerText = `Age: ${age} years`;
  }

  // Function to display uploaded file information
  function displayFileInfo() {
    const fileInfo = document.getElementById("fileInfo");
    const fileName = resume.files[0].name;
    const fileSize = (resume.files[0].size / 1024).toFixed(2); // in KB
    fileInfo.innerText = `Uploaded File: ${fileName} (${fileSize} KB)`;
  }

  // Event listeners
  document
    .getElementById("showPassword")
    .addEventListener("click", togglePasswordVisibility);
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
    }
  });
  dob.addEventListener("change", calculateAge);
  resume.addEventListener("change", displayFileInfo);
});
