# Khushal Patil - Portfolio Website

A modern, professional React portfolio website showcasing projects, blog posts, achievements, and contact information.

## 🚀 Features

- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Dark Theme**: Modern dark theme with blue and purple accents
- **7 Main Sections**:
  - About (with profile picture)
  - Personal Projects
  - Freelance Work
  - Blog Posts (linked to Medium)
  - Skills & Technologies
  - Achievements
  - Contact Form

## 🛠️ Tech Stack

- React 18
- Vite
- Tailwind CSS
- Lucide React Icons

## 📦 Installation

```bash
npm install
```

## 🎯 Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173/` (or the next available port).

## 🏗️ Build for Production

```bash
npm run build
```

## 📝 Customization

### Adding Your Profile Picture

1. Save your profile picture as `profile.jpg`
2. Place it in the `public` folder: `public/profile.jpg`
3. The image will automatically display on the About section

### Adding Freelance Projects

Edit the `freelanceProjects` array at the top of `src/App.jsx`:

```javascript
const freelanceProjects = [
  {
    id: 1,
    title: "Project Name",
    client: "Client Name",
    description: "Project description...",
    tech: ["Spring Boot", "React", "MySQL"],
    duration: "2024",
    status: "Completed",
    link: "https://project-url.com"
  }
];
```

### Adding Blog Posts

Edit the `blogPosts` array at the top of `src/App.jsx`:

```javascript
const blogPosts = [
  {
    id: 1,
    title: "Blog Post Title",
    excerpt: "Brief summary...",
    date: "Dec 30, 2024",
    readTime: "5 min read",
    tags: ["Tag1", "Tag2"],
    image: "🚀",
    link: "https://medium.com/@khushalpatil/your-post"
  }
];
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Vite and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [netlify.com/drop](https://app.netlify.com/drop)

### Deploy to GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Then run:
```bash
npm run deploy
```

## 📧 Contact Form Backend Integration

The contact form currently logs to console. To integrate with a Spring Boot backend:

1. Create a REST endpoint: `POST /api/contact`
2. Update the form submission code in `src/App.jsx` (see comments in the code)
3. Replace `YOUR_API_URL` with your backend URL

Example Spring Boot Controller:
```java
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class ContactController {
    
    @PostMapping("/contact")
    public ResponseEntity<String> submitContact(@RequestBody ContactForm form) {
        // Process form data
        // Send email notification
        return ResponseEntity.ok("Message sent successfully");
    }
}
```

## 📄 License

MIT License - Feel free to use this portfolio template for your own projects!

## 👨‍💻 Author

**Khushal Patil**
- Email: khushalpatil183@gmail.com
- LinkedIn: [linkedin.com/in/khushalpatil183](https://linkedin.com/in/khushalpatil183)
- GitHub: [github.com/khushalpatil0812](https://github.com/khushalpatil0812)
- Medium: [@khushalpatil](https://medium.com/@khushalpatil)

---

⭐ If you like this portfolio template, please star the repository!
