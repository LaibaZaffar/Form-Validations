
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("SignIN");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");


    document.getElementById("submitButton").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission
        validateInputs();
    });

    const setError = (element, message) => {
        const inputControl = element.parentElement; //input bar
        const errorDisplay = inputControl.querySelector('.error');
    
        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success')
    }

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
        var specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/; // Add more special characters as needed

        if(usernameValue === '') {
            setError(username, 'Username is required');
        } else {
            setSuccess(username);
        }  
    
        if(passwordValue === '') {
            setError(password, 'Password is required');
        } else if (passwordValue.length < 8 ) {
            setError(password, 'Password must be at least 8 character.');
        } else if(!specialCharRegex.test(passwordValue)){
            setError(password, 'Password must contain at least 1 special character.');
        }
        else {
            setSuccess(password);
        }

        // Check for success for both inputs
    const isUsernameSuccess = username.parentElement.classList.contains('success');
    const isPasswordSuccess = password.parentElement.classList.contains('success');

    if (isUsernameSuccess && isPasswordSuccess) {
        alert('Login successful!');
    }
};
});
