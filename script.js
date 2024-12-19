$(document).ready(function() {
    $('#registrationForm').on('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        const fullName = $('#fullName').val();
        const email = $('#email').val();
        const password = $('#password').val();
        const confirmPassword = $('#confirmPassword').val();
        const phone = $('#phone').val();
        const dob = $('#dob').val();
        const gender = $('#gender').val();
        const address = $('#address').val();

        // Validate that passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        // Ensure all fields are filled
        if (fullName && email && password && phone && dob && gender && address) {
            $(this).unbind('submit').submit(); // Allow form submission if all fields are filled
        } else {
            alert('Please fill all fields.');
        }
    });
});