


document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email === '' || password === '') {
        alert('Please fill in all fields');
    } else {
        
        console.log('Sign in successful');
    }
});

