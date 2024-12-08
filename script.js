function submitForm() {
    // Get the form values
    const name = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
  
    // Display the submitted information
    document.getElementById("displayName").innerText = name;
    document.getElementById("displayEmail").innerText = email;
    document.getElementById("displayPhone").innerText = phone;
    document.getElementById("displayDOB").innerText = dob;
    document.getElementById("displayGender").innerText = gender;
  
    // Show the result section
    document.getElementById("result").classList.remove("hidden");
  }
  