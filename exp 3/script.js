// script.js

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;

    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const phoneNumber = document.getElementById('phoneNumber');
    const dob = document.getElementById('dob');
    const address = document.getElementById('address');

    // Full name validation (letters and spaces only)
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(fullName.value)) {
        fullName.classList.add('is-invalid');
        valid = false;
    } else {
        fullName.classList.remove('is-invalid');
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        email.classList.add('is-invalid');
        valid = false;
    } else {
        email.classList.remove('is-invalid');
    }

    // Password validation (minimum 8 characters, at least 1 uppercase, 1 lowercase, and 1 number)
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password.value)) {
        password.classList.add('is-invalid');
        valid = false;
    } else {
        password.classList.remove('is-invalid');
    }

    // Phone number validation (digits only, length 10-15)
    const phoneRegex = /^\d{10,15}$/;
    if (!phoneRegex.test(phoneNumber.value)) {
        phoneNumber.classList.add('is-invalid');
        valid = false;
    } else {
        phoneNumber.classList.remove('is-invalid');
    }

    // Date of Birth validation (not empty)
    if (dob.value === '') {
        dob.classList.add('is-invalid');
        valid = false;
    } else {
        dob.classList.remove('is-invalid');
    }

    // Address validation (not empty)
    if (address.value === '') {
        address.classList.add('is-invalid');
        valid = false;
    } else {
        address.classList.remove('is-invalid');
    }

    // If valid, display a success message or proceed with form submission
    if (valid) {
        alert('Registration successful!');
        // You can add form submission logic here
    }
});
