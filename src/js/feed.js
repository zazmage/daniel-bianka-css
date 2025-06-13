// Feed page functionality
export class FeedManager {
  constructor() {
    this.init();
  }

  init() {
    this.bindEvents();
    this.initializeFeatures();
  }

  bindEvents() {
    // Search functionality
    const searchInput = document.querySelector('input[placeholder="Search posts..."]');
    searchInput?.addEventListener('input', (e) => this.handleSearch(e.target.value));

    // Sort functionality
    const sortSelect = document.querySelector('select');
    sortSelect?.addEventListener('change', (e) => this.handleSort(e.target.value));

    // New post form
    const postForm = document.querySelector('.card form');
    postForm?.addEventListener('submit', (e) => this.handleNewPost(e));

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

  handleSearch(query) {
    console.log('Searching for:', query);

    const posts = document.querySelectorAll('.space-y-6 > .card');
    posts.forEach(post => {
      const text = post.textContent.toLowerCase();
      const matches = text.includes(query.toLowerCase());
      post.style.display = matches ? 'block' : 'none';
    });
  }

  handleSort(sortType) {
    console.log('Sorting by:', sortType);

    const postsContainer = document.querySelector('.space-y-6');
    const posts = Array.from(postsContainer.querySelectorAll('.card'));

    // Simple sorting simulation (in real app, this would fetch sorted data)
    posts.forEach((post, index) => {
      post.style.order = sortType === 'Sort by: Oldest' ? posts.length - index : index;
    });
  }

  handleNewPost(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const textarea = e.target.querySelector('textarea');
    const fileInput = e.target.querySelector('input[type="file"]');

    const content = textarea.value.trim();

    if (!content) {
      alert('Please write something before posting');
      return;
    }

    // Simulate posting (in real app, this would be an API call)
    console.log('New post:', { content, file: fileInput.files[0] });

    // Create new post element
    this.addNewPost(content, fileInput.files[0]);

    // Reset form
    textarea.value = '';
    fileInput.value = '';
  }

  addNewPost(content, file) {
    const postsContainer = document.querySelector('.space-y-6');
    const newPost = document.createElement('div');
    newPost.className = 'card';

    const imageHtml = file ? `<img src="${URL.createObjectURL(file)}" alt="Post image" class="w-full h-64 object-cover rounded-lg mb-4">` : '';

    newPost.innerHTML = `
      <div class="flex items-start space-x-3 mb-4">
        <img src="https://picsum.photos/40/40?random=user" alt="User avatar" class="w-10 h-10 rounded-full">
        <div>
          <h3 class="font-semibold text-gray-900">You</h3>
          <p class="text-sm text-gray-500">Just now</p>
        </div>
      </div>
      <p class="text-gray-800 mb-4">${content}</p>
      ${imageHtml}
    `;

    // Insert at the beginning
    postsContainer.insertBefore(newPost, postsContainer.firstChild);
  }

  initializeFeatures() {
    console.log('Feed page initialized');
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new FeedManager();
});
