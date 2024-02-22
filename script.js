document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("SignIN");
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    const form1 = document.getElementById("SignUP");
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const contact = document.getElementById("contact");
    const address = document.getElementById("address");
    const age = document.getElementById("age");
    const email = document.getElementById("email");
    const username1 = document.getElementById("username1");
    const password1 = document.getElementById("password1");

    document.getElementById("SignINsubmit").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission
        validateInputs();
    });

    document.getElementById("SignUPsubmit").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission
        validateSignUpInputs();
    });

    const setError = (element, message) => {
        const inputControl = element.parentElement; // input bar
        const errorDisplay = inputControl.querySelector('.error');
    
        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    };

    const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
    
        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    };

    const validateInputs = () => {
        const usernameValue = username.value.trim();
        const passwordValue = password.value.trim();
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/; // Add more special characters as needed

        if (usernameValue === '') {
            setError(username, 'Username is required');
        } else {
            setSuccess(username);
        }  
    
        if (passwordValue === '') {
            setError(password, 'Password is required');
        } else if (passwordValue.length < 8) {
            setError(password, 'Password must be at least 8 characters.');
        } else if (!specialCharRegex.test(passwordValue)) {
            setError(password, 'Password must contain at least 1 special character.');
        } else {
            setSuccess(password);
        }

        // Check for success for both inputs
        const isUsernameSuccess = username.parentElement.classList.contains('success');
        const isPasswordSuccess = password.parentElement.classList.contains('success');

        if (isUsernameSuccess && isPasswordSuccess) {
            alert('Login successful!');
        }
    };

    const validateSignUpInputs = () => {
        const fnameValue = fname.value.trim();
        const lnameValue = lname.value.trim();
        const contactValue = contact.value.trim();
        const addressValue = address.value.trim();
        const ageValue = age.value.trim();
        const emailValue = email.value.trim();
        const usernameValue1 = username1.value.trim();
        const passwordValue1 = password1.value.trim();
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/; // Add more special characters as needed
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        // Validation for First Name
        if (fnameValue === '') {
            setError(fname, 'First Name is required');
        } else {
            setSuccess(fname);
        }
    
        // Validation for Last Name
        if (lnameValue === '') {
            setError(lname, 'Last Name is required');
        } else {
            setSuccess(lname);
        }
    
        // Validation for Contact
        if (contactValue === '') {
            setError(contact, 'Contact is required');
        } else {
            setSuccess(contact);
        }
    
        // Validation for Address
        if (addressValue === '') {
            setError(address, 'Address is required');
        } else {
            setSuccess(address);
        }
    
        // Validation for Age
        if (ageValue === '') {
            setError(age, 'Age is required');
        } else {
            setSuccess(age);
        }
    
        // Validation for Email
        if (emailValue === '') {
            setError(email, 'Email is required');
        } else if (!emailRegex.test(emailValue)) {
            setError(email, 'Invalid email format');
        } else {
            setSuccess(email);
        }
    
        if (usernameValue1 === '') {
            setError(username1, 'Username is required');
        } else {
            setSuccess(username1);
        }  
    
        if (passwordValue1 === '') {
            setError(password1, 'Password is required');
        } else if (passwordValue1.length < 8) {
            setError(password1, 'Password must be at least 8 characters.');
        } else if (!specialCharRegex.test(passwordValue1)) {
            setError(password1, 'Password must contain at least 1 special character.');
        } else {
            setSuccess(password1);
        }
    
        // Check for success for all inputs
        const isFnameSuccess = fname.parentElement.classList.contains('success');
        const isLnameSuccess = lname.parentElement.classList.contains('success');
        const isContactSuccess = contact.parentElement.classList.contains('success');
        const isAddressSuccess = address.parentElement.classList.contains('success');
        const isAgeSuccess = age.parentElement.classList.contains('success');
        const isEmailSuccess = email.parentElement.classList.contains('success');
        const isUsernameSuccess = username1.parentElement.classList.contains('success');
        const isPasswordSuccess = password1.parentElement.classList.contains('success');
    
        if (isFnameSuccess && isLnameSuccess && isContactSuccess && isAddressSuccess &&
            isAgeSuccess && isEmailSuccess && isUsernameSuccess && isPasswordSuccess) {
            alert('Sign Up successful!');
        }
    };
    
});
