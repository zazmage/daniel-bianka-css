# SocialApp

A modern social media web application built with HTML, CSS (Tailwind), and JavaScript using Vite as the build tool.

## Features

- **Authentication System**: Sign in and sign up functionality
- **Social Feed**: View and create posts with images
- **User Profiles**: Personal profile pages with user posts
- **Search & Sort**: Search posts and sort by latest, oldest, or popular
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS
- **Modern UI**: Clean and intuitive user interface

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **Development**: Hot reload and fast builds

## Project Structure

```
├── index.html          # Authentication page (login/signup)
├── feed/
│   └── index.html      # Main social feed
├── profile/
│   └── index.html      # User profile page
├── src/
│   ├── main.js         # Main entry point
│   ├── style.css       # Global styles and Tailwind config
│   └── js/
│       ├── auth.js     # Authentication logic
│       ├── feed.js     # Feed functionality
│       └── profile.js  # Profile functionality
└── public/
    └── vite.svg        # App icon
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository or download the project files

2. Install dependencies:
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

### Building for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Pages

- **`/`** - Authentication page (Sign in/Sign up)
- **`/feed/`** - Main social feed with posts
- **`/profile/`** - User profile page

## Features Overview

### Authentication
- Toggle between Sign In and Sign Up forms
- Form validation with required fields
- Password confirmation for registration

### Feed
- Create new posts with text and images
- Search functionality for posts
- Sort posts by different criteria
- View posts from multiple users with travel content

### Profile
- User profile information
- Following/Followers count
- Personal posts timeline
- Profile picture and user details

## Development

The project uses:
- **Vite** for fast development and building
- **Tailwind CSS v4** for utility-first styling
- **ES6 modules** for JavaScript organization
- **Responsive design** principles for mobile compatibility

