function clearField(field) {
    if (field.defaultValue === field.value) {
        field.value = '';
    }
}

function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    
    if (name === "" || name === "Enter your name") {
        alert("Please enter your name.");
        return false;
    }
    if (email === "" || email === "Enter your email") {
        alert("Please enter your email.");
        return false;
    }


    return true;
}
