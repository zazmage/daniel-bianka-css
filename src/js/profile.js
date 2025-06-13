// Profile page functionality
export class ProfileManager {
  constructor() {
    this.isFollowing = false;
    this.init();
  }

  init() {
    this.bindEvents();
    this.initializeFeatures();
  }

  bindEvents() {
    // Follow button functionality
    const followBtn = document.querySelector('button');
    followBtn?.addEventListener('click', () => this.handleFollow());

    // Navigation
    this.bindNavigation();
  }

  bindNavigation() {
    // Handle navigation links
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href === '/') {
          // Logout
          window.location.href = '/';
        } else {
          window.location.href = href;
        }
      });
    });
  }

  handleFollow() {
    const followBtn = document.querySelector('button');
    const followersCountEl = document.querySelector('.text-xl.font-semibold');

    if (!this.isFollowing) {
      // Follow
      followBtn.textContent = 'Following';
      followBtn.classList.remove('bg-brand-600', 'hover:bg-brand-700');
      followBtn.classList.add('bg-gray-600', 'hover:bg-gray-700');

      // Update followers count
      const currentCount = followersCountEl.textContent;
      const numericCount = parseFloat(currentCount);
      if (currentCount.includes('k')) {
        followersCountEl.textContent = (numericCount + 0.001).toFixed(1) + 'k';
      } else {
        followersCountEl.textContent = (parseInt(currentCount) + 1).toString();
      }

      this.isFollowing = true;
      console.log('Followed user');
    } else {
      // Unfollow
      followBtn.textContent = 'Follow';
      followBtn.classList.remove('bg-gray-600', 'hover:bg-gray-700');
      followBtn.classList.add('bg-brand-600', 'hover:bg-brand-700');

      // Update followers count
      const currentCount = followersCountEl.textContent;
      const numericCount = parseFloat(currentCount);
      if (currentCount.includes('k')) {
        followersCountEl.textContent = (numericCount - 0.001).toFixed(1) + 'k';
      } else {
        followersCountEl.textContent = (parseInt(currentCount) - 1).toString();
      }

      this.isFollowing = false;
      console.log('Unfollowed user');
    }
  }

  initializeFeatures() {
    console.log('Profile page initialized');
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ProfileManager();
});
