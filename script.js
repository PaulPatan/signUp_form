
function validateForm() {
    let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,30}$/;

    if (!regex.test(password)) {
        alert("Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be between 8 and 30 characters long.");
        return false;
    }
  }