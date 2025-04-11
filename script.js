document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Basic validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Here you would typically make an API call to your backend
    console.log('Login attempt with:', { email, password });
    
    // For now, we'll just show a success message
    alert('Login successful! Redirecting to dashboard...');
    // In a real application, you would redirect to the dashboard page
    // window.location.href = '/dashboard';
}); 