# replit.md

## Overview

This is a personal portfolio website for Akash Mahajan, a Backend Developer with 4+ years of experience specializing in PHP Laravel and Next.js. The portfolio showcases his professional skills, projects, experience, and contact information through a modern, responsive single-page application. The website serves as a digital resume and professional showcase to attract potential employers and clients.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Single-Page Application (SPA)**: Built using vanilla HTML5, CSS3, and JavaScript without any framework dependencies
- **Responsive Design**: Mobile-first approach with flexible grid layouts and media queries for cross-device compatibility
- **Progressive Enhancement**: Core functionality works without JavaScript, with enhanced interactions layered on top
- **Component-Based Structure**: Organized into logical sections (hero, about, skills, projects, experience, contact) for maintainability

### Styling and UI Framework
- **Custom CSS Architecture**: Modular CSS with component-based styling approach
- **Design System**: Consistent color palette, typography, and spacing using CSS custom properties
- **Animation Framework**: CSS transitions and transforms for smooth user interactions
- **Icon Integration**: Font Awesome 6.0.0 CDN integration for scalable vector icons

### Navigation and User Experience
- **Smooth Scrolling**: JavaScript-powered smooth scrolling between sections
- **Mobile Navigation**: Hamburger menu implementation for mobile devices
- **Intersection Observer**: Fade-in animations triggered by scroll position
- **Dynamic Navbar**: Background opacity changes based on scroll position

### Performance Optimization
- **Minimal Dependencies**: Only essential external resources (Font Awesome) to reduce load times
- **Optimized Assets**: Compressed images and efficient CSS/JS bundling
- **SEO Optimization**: Semantic HTML structure with proper meta tags and descriptions

## External Dependencies

### Content Delivery Networks (CDNs)
- **Font Awesome 6.0.0**: Icon library hosted via CloudFlare CDN for scalable vector icons
- **Google Fonts**: Web font loading for typography enhancement (referenced in CSS)

### Third-Party Services
- **Resume Download**: External resume hosting service for downloadable PDF
- **Contact Form**: Potential integration with email services or form handling platforms
- **Analytics**: Ready for Google Analytics or similar tracking service integration

### Development Tools
- **Version Control**: Git repository structure for collaborative development
- **Code Organization**: Separation of concerns with distinct HTML, CSS, and JavaScript files
- **Asset Management**: Dedicated assets folder for images, documents, and media files