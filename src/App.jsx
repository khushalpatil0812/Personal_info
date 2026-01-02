import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Award,
  Code,
  Briefcase,
  GraduationCap,
  BookOpen,
  Calendar,
  MessageSquare,
  Send,
  ExternalLink,
  Clock,
  CheckCircle,
  AlertCircle,
  Youtube
} from 'lucide-react';

// ============================================
// EDITABLE DATA ARRAYS - MODIFY THESE TO UPDATE CONTENT
// ============================================

const freelanceProjects = [
  {
    id: 1,
    title: "Industrial Automation & Control Solutions",
    client: "SCADA PL",
    description: "Contributed to building a cutting-edge automation solutions platform for industrial operations. Developed features to revolutionize manufacturing processes and boost productivity with AI-driven innovation. Created responsive web interfaces and integrated backend services.",
    tech: ["React", "Spring Boot", "AI Integration", "Industrial IoT"],
    duration: "2025",
    status: "Completed",
    link: "https://scadpl.com/"
  },
  {
    id: 2,
    title: "Cold Consult",
    client: "Cold Consult",
    description: "Developed a professional consulting platform providing comprehensive business solutions and strategic advisory services. Built responsive user interfaces and integrated client management systems.",
    tech: ["React", "JavaScript", "Responsive Design"],
    duration: "2024-2025",
    status: "Completed",
    link: "https://coldconsult.com/"
  },
  {
    id: 3,
    title: "Robofye",
    client: "Robofye",
    description: "Created an innovative robotics and automation showcase platform. Implemented interactive features and modern design patterns to highlight cutting-edge robotic solutions and technology demonstrations.",
    tech: ["React", "Modern UI/UX", "Animation"],
    duration: "2024-2025",
    status: "Completed",
    link: "https://robofye.com/"
  },
  {
    id: 4,
    title: "Future Tech Career",
    client: "Future Tech Career",
    description: "Built a comprehensive career guidance and technology education platform. Developed features for career exploration, tech skill development resources, and interactive learning modules to help students navigate their future in technology.",
    tech: ["React", "Next.js", "Vercel", "Educational Tech"],
    duration: "2024-2025",
    status: "Completed",
    link: "https://futuretechcareer.vercel.app/"
  }
];

const blogPosts = [
  {
    id: 1,
    title: "My AlgoZenith Bootcamp Journey: Strengthening Foundations & Stepping Ahead in DSA",
    excerpt: "Over the past few weeks, I had the incredible opportunity to be part of the AlgoZenith Bootcamp — a program that not only helped me revise my fundamentals but also pushed me to strengthen my problem-solving skills in Data Structures and Algorithms.",
    date: "Jul 12, 2024",
    readTime: "5 min read",
    tags: ["DSA", "Bootcamp", "Learning"],
    image: "🎯",
    link: "https://medium.com/@khushalpatil183"
  },
  {
    id: 2,
    title: "Unlock Your Potential: A Student's Guide to the GitHub Student Developer Pack",
    excerpt: "Level Up Your Skills with the GitHub Student Developer Pack. Discover how students can access premium developer tools and resources for free to enhance their learning journey and build real-world projects.",
    date: "Apr 10, 2024",
    readTime: "4 min read",
    tags: ["GitHub", "Student Resources", "Development"],
    image: "🎓",
    link: "https://medium.com/@khushalpatil183"
  },
  {
    id: 3,
    title: "The Impact of Remote Work Tools on Productivity: Zoom, Slack, and Beyond",
    excerpt: "Remote work has become a fundamental part of modern workplaces, and the tools we use play a crucial role in shaping productivity. Platforms like Zoom and Slack have transformed how teams collaborate and communicate.",
    date: "Feb 9, 2024",
    readTime: "6 min read",
    tags: ["Remote Work", "Productivity", "Technology"],
    image: "💼",
    link: "https://medium.com/@khushalpatil183"
  },
  {
    id: 4,
    title: "Evolving Minds: The Shift in Coders' Mentality and Its Impact on Development",
    excerpt: "The Changing Mentality of Coders: A Fundamental Shift. Exploring how modern developers approach problem-solving differently and how this evolution impacts software development practices and innovation.",
    date: "Dec 7, 2024",
    readTime: "7 min read",
    tags: ["Coding Culture", "Development", "Technology Trends"],
    image: "🧠",
    link: "https://medium.com/@khushalpatil183"
  }
];

// ============================================
// MAIN PORTFOLIO COMPONENT
// ============================================

function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  // Navigation sections
  const sections = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'freelance', label: 'Freelance' },
    { id: 'blog', label: 'Blog' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ type: 'sending', message: 'Sending...' });

    try {
      // Using Web3Forms - Free form to email service
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '5261d7d9-1169-4ccd-aeda-eda90ea7a1a1', // Get free key from https://web3forms.com
          name: contactForm.name,
          email: contactForm.email,
          message: contactForm.message,
          subject: `Portfolio Contact from ${contactForm.name}`
        })
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
        setContactForm({ name: '', email: '', message: '' });
        
        // Clear status after 5 seconds
        setTimeout(() => {
          setFormStatus({ type: '', message: '' });
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }

    } catch (error) {
      setFormStatus({ type: 'error', message: 'Failed to send message. Please email me directly at khushalpatil183@gmail.com' });
      console.error('Error sending message:', error);
    }
  };

  // Scroll to section
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* ============================================ */}
      {/* HEADER / NAVIGATION */}
      {/* ============================================ */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <Code className="text-blue-600" size={24} />
              <span className="text-lg md:text-xl font-bold text-gray-900">
                Khushal Patil
              </span>
              <span className="px-2 md:px-3 py-1 text-xs bg-green-50 text-green-700 rounded-full border border-green-300 font-medium">
                Available for Hire
              </span>
              <a 
                href="https://medium.com/@khushalpatil183" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-2 md:px-3 py-1 text-xs bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all font-medium flex items-center gap-1"
              >
                <BookOpen size={12} />
                Medium
              </a>
              <a 
                href="https://youtube.com/@codewithkhush-x8x?si=Br8CS6xq5oTuN9Jw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-2 md:px-3 py-1 text-xs bg-red-600 text-white rounded-full hover:bg-red-700 transition-all font-medium flex items-center gap-1"
              >
                <Youtube size={12} />
                YouTube
              </a>
            </div>
            
            <nav className="flex gap-1 md:gap-2 flex-wrap justify-center">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-3 md:px-4 py-2 rounded-lg transition-all font-medium text-xs md:text-sm ${
                    activeSection === section.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* ============================================ */}
      {/* ABOUT SECTION */}
      {/* ============================================ */}
      <section id="about" className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero */}
          <div className="text-center mb-16">
            {/* Profile Picture */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-5xl md:text-6xl font-bold text-white shadow-lg border-4 border-white">
                  <img 
                    src="/PROFILE.jpeg" 
                    alt="Khushal Patil"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerText = 'KP';
                    }}
                  />
                </div>
                <div className="absolute bottom-2 right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-white flex items-center justify-center shadow-md">
                  <CheckCircle className="text-white" size={20} />
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 px-4">
              Full Stack Java Developer
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-blue-600 mb-6 font-medium px-4">
              Specializing in Spring Boot & React | Building Scalable Enterprise Solutions
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 text-sm md:text-base mb-4">
              Recent MCA graduate from MIT World Peace University passionate about crafting efficient and scalable software solutions. 
              Strong expertise in Spring Boot, React, and full-stack development with focus on building robust backends and scalable web applications. 
              Quick learner with hands-on experience in real-world projects, system design, and microservices architecture.
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 text-sm md:text-base">
              Currently seeking opportunities as a <span className="text-blue-600 font-semibold">fresher full-stack developer</span> and available for freelance projects. 
              Open to collaborate on Java & Spring Boot projects, backend-heavy web applications, and open source contributions. 
              <span className="italic">"I believe every error is just a misunderstood feature."</span> ☕
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4 mb-12">
            <a href="mailto:khushalpatil183@gmail.com" className="flex items-center gap-3 p-3 md:p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all">
              <Mail className="text-blue-600 flex-shrink-0" size={18} />
              <div className="text-sm min-w-0">
                <div className="text-gray-500 font-medium text-xs">Email</div>
                <div className="text-gray-900 text-xs truncate">khushalpatil183@gmail.com</div>
              </div>
            </a>
            <a href="tel:+919022268764" className="flex items-center gap-3 p-3 md:p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all">
              <Phone className="text-blue-600 flex-shrink-0" size={18} />
              <div className="text-sm">
                <div className="text-gray-500 font-medium text-xs">Phone</div>
                <div className="text-gray-900 text-xs">+91 9022268764</div>
              </div>
            </a>
            <div className="flex items-center gap-3 p-3 md:p-4 bg-white border-2 border-gray-200 rounded-lg">
              <MapPin className="text-blue-600 flex-shrink-0" size={18} />
              <div className="text-sm">
                <div className="text-gray-500 font-medium text-xs">Location</div>
                <div className="text-gray-900 text-xs">Pune, India</div>
              </div>
            </div>
            <a href="https://linkedin.com/in/khushalpatil183" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 md:p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all">
              <Linkedin className="text-blue-600 flex-shrink-0" size={18} />
              <div className="text-sm">
                <div className="text-gray-500 font-medium text-xs">LinkedIn</div>
                <div className="text-gray-900 text-xs">khushalpatil183</div>
              </div>
            </a>
            <a href="https://github.com/khushalpatil0812" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 md:p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all">
              <Github className="text-blue-600 flex-shrink-0" size={18} />
              <div className="text-sm">
                <div className="text-gray-500 font-medium text-xs">GitHub</div>
                <div className="text-gray-900 text-xs">khushalpatil0812</div>
              </div>
            </a>
          </div>

          {/* Education */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900 justify-center md:justify-start">
              <GraduationCap className="text-blue-600" />
              Education
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="p-4 md:p-6 bg-white rounded-lg border-2 border-blue-200 hover:border-blue-500 hover:shadow-lg transition-all">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Master of Computer Applications</h3>
                <p className="text-sm md:text-base text-gray-600 mb-2">🏛️ MIT World Peace University, Pune</p>
                <div className="flex justify-between text-xs md:text-sm text-gray-600 mb-2">
                  <span className="flex items-center gap-1"><Calendar size={14} /> 2022 - 2024</span>
                  <span className="text-blue-600 font-semibold">CGPA: 8.12</span>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-600"><span className="font-semibold">Focus:</span> Backend Dev, System Design, Microservices</p>
                </div>
              </div>
              <div className="p-4 md:p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Bachelor of Computer Science</h3>
                <p className="text-sm md:text-base text-gray-600 mb-2">🏛️ Moolji Jaitha College, Jalgaon</p>
                <div className="flex justify-between text-xs md:text-sm text-gray-600 mb-2">
                  <span className="flex items-center gap-1"><Calendar size={14} /> 2021 - 2024</span>
                  <span className="text-blue-600 font-semibold">CGPA: 8.48</span>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-600"><span className="font-semibold">Foundation:</span> Programming, DSA, Web Development</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900 justify-center md:justify-start">
              <Briefcase className="text-blue-600" />
              What I Offer
            </h2>
            <div className="p-4 md:p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {[
                  { text: 'Spring Boot Backend Development', icon: '✅' },
                  { text: 'REST API Development', icon: '🔌' },
                  { text: 'React & Next.js Applications', icon: '⚛️' },
                  { text: 'Database Design & Optimization', icon: '💾' },
                  { text: 'Microservices Architecture', icon: '🏛️' },
                  { text: 'Open Source Contributions', icon: '🌟' }
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="flex-shrink-0">{service.icon}</span>
                    <span className="text-gray-700 text-sm md:text-base">{service.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 md:mt-6 pt-4 border-t border-blue-300">
                <p className="text-center text-gray-700 text-sm md:text-base mb-2">
                  🎓 <span className="font-semibold">Fresh Graduate</span> | 💻 Active Open Source Developer | 💪 Open to Collaborate
                </p>
                <p className="text-center text-gray-600 text-xs md:text-sm italic">
                  "I once debugged a critical bug at 2 AM with coffee in one hand and Stack Overflow in the other."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PERSONAL PROJECTS SECTION */}
      {/* ============================================ */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-3 text-center text-gray-900">
            Personal Projects
          </h2>
          <p className="text-center text-gray-600 mb-12">Showcasing my development work and technical expertise</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-blue-500 transition-all hover:shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">AI-Driven Email Automation Platform</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Full-stack platform using Spring Boot and React to automate contextual email responses 
                with Gemini Pro API integration.
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 40% faster response time</li>
                  <li>• Chrome Extension integration</li>
                  <li>• Real-time AI suggestions</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Spring Boot', 'React', 'Gemini API'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium border border-blue-200">
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href="https://github.com/khushalpatil0812" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
              >
                <Github size={16} />
                View on GitHub
              </a>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-blue-500 transition-all hover:shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">CodeScroll</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Micro-learning platform for 100-word technical posts with AI-powered content enhancement 
                and grammar correction.
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Role-based access control</li>
                  <li>• Admin moderation dashboard</li>
                  <li>• AI grammar correction</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Next.js', 'Spring Boot', 'JWT', 'Google Genkit AI'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium border border-blue-200">
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href="https://github.com/khushalpatil0812" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
              >
                <Github size={16} />
                View on GitHub
              </a>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-blue-500 transition-all hover:shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">E-Commerce Shopping Cart System</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Complete e-commerce web application with user authentication, product management, 
                and order processing capabilities.
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Email notifications</li>
                  <li>• Optimized SQL queries</li>
                  <li>• Cart management</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Java', 'JSP', 'Servlets', 'MySQL'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium border border-blue-200">
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href="https://github.com/khushalpatil0812" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
              >
                <Github size={16} />
                View on GitHub
              </a>
            </div>

            {/* Project 4 - Walmart Sparkathon */}
            <div className="bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-blue-500 transition-all hover:shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">AI-Powered Food Waste Solution</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Walmart Sparkathon 2025 project: AI dashboard to reduce retail food waste with demand forecasting and automated recommendations.
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 88.5% forecasting accuracy</li>
                  <li>• 35% waste reduction</li>
                  <li>• $900K+ cost savings</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Python', 'Machine Learning', 'AI/ML', 'Analytics'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium border border-blue-200">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                <a 
                  href="https://github.com/khushalpatil0812" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <span className="text-gray-400">•</span>
                <a 
                  href="https://lnkd.in/g3hyPxKY" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 font-medium text-sm transition-colors"
                >
                  <ExternalLink size={16} />
                  Demo
                </a>
                <span className="text-gray-400">•</span>
                <a 
                  href="https://lnkd.in/gkZE8UTy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors"
                >
                  <ExternalLink size={16} />
                  Details
                </a>
              </div>
            </div>

            {/* Project 5 - Data Structure Visualizer */}
            <div className="bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-blue-500 transition-all hover:shadow-lg">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900">Data Structure Visualizer 🌲</h3>
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Interactive web-based tool for visualizing common data structures and their operations in real-time. 
                Visual representation of searching, sorting, graph algorithms, and more.
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Sorting & Searching visualizations</li>
                  <li>• Trees, Graphs, and Hash Tables</li>
                  <li>• Step-by-step algorithm animations</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {['TypeScript', 'HTML5', 'CSS3', 'Animations'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium border border-blue-200">
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href="https://github.com/khushalpatil0812/datastructure_visualizer-" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
              >
                <Github size={16} />
                View on GitHub
              </a>
            </div>

            {/* Project 6 - Employee Development Tracker */}
            <div className="bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-blue-500 transition-all hover:shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Employee Development Tracker (IDP)</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Python-based HR management application to track employee Individual Development Plans (IDP) and monitor personal development progress.
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Track employee development goals</li>
                  <li>• Progress monitoring dashboard</li>
                  <li>• HR analytics and reporting</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Python', 'HTML', 'Database', 'HR Analytics'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium border border-blue-200">
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href="https://github.com/khushalpatil0812/I_D_P" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
              >
                <Github size={16} />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FREELANCE SECTION */}
      {/* ============================================ */}
      <section id="freelance" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-3 text-center text-gray-900">
            Freelance Work
          </h2>
          <p className="text-center text-gray-600 mb-12">Professional projects and client collaborations</p>

          {freelanceProjects.length > 0 ? (
            <div className="space-y-6 mb-12">
              {freelanceProjects.map(project => (
                <div key={project.id} className="bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-blue-500 hover:shadow-md transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{project.title}</h3>
                      <p className="text-gray-600">Client: {project.client}</p>
                    </div>
                    <div className="flex gap-3 items-center flex-wrap">
                      <span className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                        project.status === 'Completed' 
                          ? 'bg-green-50 text-green-700 border-2 border-green-300' 
                          : 'bg-yellow-50 text-yellow-700 border-2 border-yellow-300'
                      }`}>
                        {project.status}
                      </span>
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <Calendar size={16} />
                        {project.duration}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-sm font-medium border border-blue-200">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all"
                      >
                        {project.client === "Walmart Sparkathon 2025" ? "GitHub Repo" : "Visit Website"}
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {project.demoLink && (
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all"
                      >
                        Demo Video
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {project.detailsLink && (
                      <a 
                        href={project.detailsLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-all"
                      >
                        Project Details
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 mb-12">
              <Briefcase className="mx-auto mb-4 text-gray-400" size={48} />
              <p className="text-gray-600 text-lg">No freelance projects yet. Check back soon!</p>
            </div>
          )}

          {/* CTA Section */}
          <div className="bg-blue-50 rounded-lg p-8 text-center border-2 border-blue-200">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Looking for a Passionate Developer?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              I'm a fresh graduate with hands-on experience in Spring Boot, React, and modern web technologies. 
              Ready to bring fresh perspectives and dedication to your team or project. Let's build something amazing together!
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all flex items-center gap-2 mx-auto"
            >
              Get In Touch
              <ExternalLink size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* BLOG SECTION */}
      {/* ============================================ */}
      <section id="blog" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-3 text-center text-gray-900">
            Blog & Articles
          </h2>
          <p className="text-center text-gray-600 mb-12">Insights and experiences shared on Medium</p>

          {blogPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map(post => (
                <div key={post.id} className="bg-white rounded-lg overflow-hidden border-2 border-gray-200 hover:border-blue-500 hover:shadow-md transition-all">
                  <div className="bg-blue-600 p-8 text-center">
                    <div className="text-6xl mb-2">{post.image}</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{post.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium border border-blue-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-all"
                    >
                      Read on Medium
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="mx-auto mb-4 text-gray-400" size={48} />
              <p className="text-gray-600 text-lg">No blog posts yet. Stay tuned for updates!</p>
            </div>
          )}
        </div>
      </section>

      {/* ============================================ */}
      {/* SKILLS SECTION */}
      {/* ============================================ */}
      <section id="skills" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-3 text-center text-gray-900">
            Skills & Technologies
          </h2>
          <p className="text-center text-gray-600 mb-12">Technical expertise and proficiency</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: 'Programming Languages',
                skills: ['Java', 'Python', 'JavaScript', 'SQL', 'Bash'],
                icon: '💻'
              },
              {
                category: 'Frameworks & Libraries',
                skills: ['Spring Boot', 'React', 'Next.js', 'Hibernate', 'JPA'],
                icon: '🚀'
              },
              {
                category: 'Databases',
                skills: ['MySQL', 'Oracle', 'PostgreSQL', 'MongoDB'],
                icon: '💾'
              },
              {
                category: 'Tools & Platforms',
                skills: ['Git', 'Linux', 'Jira', 'VS Code', 'IntelliJ', 'Postman', 'Docker'],
                icon: '🛠️'
              },
              {
                category: 'Cloud & DevOps',
                skills: ['AWS', 'Azure', 'CI/CD', 'GitHub Actions'],
                icon: '☁️'
              },
              {
                category: 'Concepts & Methodologies',
                skills: ['REST APIs', 'Microservices', 'OOP', 'DSA', 'DBMS', 'Agile'],
                icon: '📚'
              }
            ].map((skillGroup, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{skillGroup.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map(skill => (
                    <span key={skill} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-all cursor-default font-medium border border-blue-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* ACHIEVEMENTS SECTION */}
      {/* ============================================ */}
      <section id="achievements" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-3 text-center text-gray-900">
            Achievements
          </h2>
          <p className="text-center text-gray-600 mb-12">Recognition and accomplishments</p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Achievement 1 */}
            <div className="bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-blue-500 hover:shadow-md transition-all">
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">TCS CodeVita 2025</h3>
              <p className="text-gray-700">
                Global Rank <span className="font-bold text-blue-600">837</span> out of 
                <span className="font-bold"> 537,000+</span> participants
              </p>
            </div>

            {/* Achievement 2 */}
            <div className="bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-blue-500 hover:shadow-md transition-all">
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Research Publication</h3>
              <p className="text-gray-700">
                "IoT-Powered Real-Time Cattle Health Monitoring System" published in 
                <span className="font-bold"> ICT4SD 2025</span> (Springer Nature)
              </p>
            </div>

            {/* Achievement 3 */}
            <div className="bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-blue-500 hover:shadow-md transition-all">
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Walmart Sparkathon 2025</h3>
              <p className="text-gray-700">
                Built <span className="font-bold">AI-Powered Food Waste Solution</span> with 88.5% forecasting accuracy. 
                Received <span className="font-bold">Appreciation Certificate</span> for innovative retail tech solution. 
                Projected 35% waste reduction & $900K+ savings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CONTACT SECTION */}
      {/* ============================================ */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-3 text-center text-gray-900">
            Get In Touch
          </h2>
          <p className="text-center text-gray-600 mb-12">Let's discuss your project or opportunity</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-900">
                <MessageSquare className="text-blue-600" />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900 resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                {/* Status Messages */}
                {formStatus.message && (
                  <div className={`flex items-center gap-2 p-3 rounded-lg ${
                    formStatus.type === 'success' 
                      ? 'bg-green-50 text-green-700 border-2 border-green-300' 
                      : formStatus.type === 'error'
                      ? 'bg-red-50 text-red-700 border-2 border-red-300'
                      : 'bg-blue-50 text-blue-700 border-2 border-blue-300'
                  }`}>
                    {formStatus.type === 'success' && <CheckCircle size={20} />}
                    {formStatus.type === 'error' && <AlertCircle size={20} />}
                    <span className="font-medium">{formStatus.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus.type === 'sending'}
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus.type === 'sending' ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info Card */}
            <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold mb-1 text-gray-900">Email</div>
                    <a href="mailto:khushalpatil183@gmail.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                      khushalpatil183@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold mb-1 text-gray-900">Phone</div>
                    <a href="tel:+919022268764" className="text-gray-700 hover:text-blue-600 transition-colors">
                      +91 9022268764
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold mb-1 text-gray-900">Location</div>
                    <p className="text-gray-700">Pune, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Linkedin className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold mb-1 text-gray-900">LinkedIn</div>
                    <a href="https://linkedin.com/in/khushalpatil183" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
                      linkedin.com/in/khushalpatil183
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Github className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold mb-1 text-gray-900">GitHub</div>
                    <a href="https://github.com/khushalpatil0812" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
                      github.com/khushalpatil0812
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-blue-300">
                <p className="text-gray-700 text-sm leading-relaxed">
                  Available for freelance projects, full-time opportunities, and consulting work. 
                  I typically respond within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FOOTER */}
      {/* ============================================ */}
      <footer className="py-8 px-4 bg-white border-t-2 border-gray-200">
        <div className="container mx-auto max-w-6xl text-center text-gray-600">
          <p className="font-medium">© 2025 Khushal Patil. All rights reserved.</p>
          <p className="mt-2 text-sm">Full Stack Java Developer | Open for Opportunities</p>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
