// Authentication page functionality
export class AuthManager {
  constructor() {
    this.init();
  }

  init() {
    // Initialize default tab
    this.switchTab('signin');

    // Add event listeners
    this.bindEvents();
  }

  bindEvents() {
    // Tab switching
    document.getElementById('signin-tab')?.addEventListener('click', () => this.switchTab('signin'));
    document.getElementById('signup-tab')?.addEventListener('click', () => this.switchTab('signup'));

    // Form submissions
    document.getElementById('signin-form')?.addEventListener('submit', (e) => this.handleSignIn(e));
    document.getElementById('signup-form')?.addEventListener('submit', (e) => this.handleSignUp(e));

    // Password confirmation validation
    document.getElementById('signup-confirm-password')?.addEventListener('input', (e) => this.validatePasswordConfirmation(e));
  }

  switchTab(tab) {
    const signinTab = document.getElementById('signin-tab');
    const signupTab = document.getElementById('signup-tab');
    const signinForm = document.getElementById('signin-form');
    const signupForm = document.getElementById('signup-form');

    if (tab === 'signin') {
      signinTab.classList.add('bg-white', 'text-brand-600', 'shadow-sm');
      signinTab.classList.remove('text-gray-500');
      signupTab.classList.remove('bg-white', 'text-brand-600', 'shadow-sm');
      signupTab.classList.add('text-gray-500');
      signinForm.classList.remove('hidden');
      signupForm.classList.add('hidden');
    } else {
      signupTab.classList.add('bg-white', 'text-brand-600', 'shadow-sm');
      signupTab.classList.remove('text-gray-500');
      signinTab.classList.remove('bg-white', 'text-brand-600', 'shadow-sm');
      signinTab.classList.add('text-gray-500');
      signupForm.classList.remove('hidden');
      signinForm.classList.add('hidden');
    }
  }

  handleSignIn(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    // Basic validation
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    if (password.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }

    // Simulate authentication (in real app, this would be an API call)
    console.log('Sign in attempt:', { email, password });

    // Navigate to profile page
    window.location.href = '/profile/';
  }

  handleSignUp(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const firstname = formData.get('firstname');
    const lastname = formData.get('lastname');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirm-password');

    // Basic validation
    if (!firstname || !lastname || !email || !password || !confirmPassword) {
      alert('Please fill in all fields');
      return;
    }

    if (password.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Simulate registration (in real app, this would be an API call)
    console.log('Sign up attempt:', { firstname, lastname, email, password });

    // Navigate to profile page
    window.location.href = '/profile/';
  }

  validatePasswordConfirmation(e) {
    const password = document.getElementById('signup-password').value;
    const confirmPassword = e.target.value;

    if (password !== confirmPassword) {
      e.target.setCustomValidity('Passwords do not match');
    } else {
      e.target.setCustomValidity('');
    }
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new AuthManager();
});
