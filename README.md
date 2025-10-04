# 🚀 Sriyaa's Portfolio

> A modern, full-stack portfolio showcasing AI/ML projects, web development skills, and professional experience.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://your-portfolio.onrender.com)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/sriyaa/portfolio)
[![Render](https://img.shields.io/badge/Deploy-Render-purple?style=for-the-badge&logo=render)](https://render.com)

## 🎯 Overview

This is a comprehensive portfolio website built with modern technologies to showcase my journey as an AI/ML Engineer and Full-Stack Developer. The application features a React frontend with a FastAPI backend, designed for optimal performance and user experience.

### ✨ Key Features

- **🤖 AI/ML Projects**: Showcase of machine learning and AI projects
- **💼 Professional Experience**: Detailed work history and achievements  
- **🛠️ Technical Skills**: Comprehensive skill set visualization
- **🎓 Education & Leadership**: Academic background and leadership roles
- **📱 Responsive Design**: Optimized for all devices
- **🚀 Fast Performance**: Optimized React components and lazy loading
- **🎨 Modern UI**: Clean, professional design with smooth animations

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React.js      │────│   FastAPI       │────│   In-Memory     │
│   Frontend      │    │   Backend       │    │   Storage       │
│                 │    │                 │    │                 │
│ • Components    │    │ • REST APIs     │    │ • Status Checks │
│ • Routing       │    │ • CORS Config   │    │ • Demo Data     │
│ • State Mgmt    │    │ • Validation    │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🛠️ Technology Stack

### Frontend
- **Framework**: React 19.0.0
- **Build Tool**: Create React App with CRACO
- **UI Components**: Radix UI + Custom Components
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Hooks

### Backend
- **Framework**: FastAPI 0.110.1
- **Server**: Uvicorn
- **Validation**: Pydantic
- **CORS**: FastAPI Middleware
- **Storage**: In-Memory (Demo)

### Development & Deployment
- **Version Control**: Git
- **Deployment**: Render
- **CI/CD**: Automated via Render
- **Environment**: Docker-ready

## 📂 Project Structure

```
portfolio--main/
├─ 📁 backend/                 # FastAPI Backend
│   ├─ server.py              # Main server file
│   ├─ requirements_simple.txt # Python dependencies
│   ├─ build.sh               # Build script
│   ├─ start.sh               # Start script
│   └─ .env                   # Environment variables
├─ 📁 frontend/               # React Frontend
│   ├─ 📁 public/             # Static assets
│   ├─ 📁 src/                # Source code
│   │   ├─ 📁 components/     # React components
│   │   │   ├─ 📁 ui/         # Reusable UI components
│   │   │   ├─ Contact.jsx    # Contact section
│   │   │   ├─ Experience.jsx # Experience section
│   │   │   ├─ Projects.jsx   # Projects showcase
│   │   │   └─ ...           # Other components
│   │   ├─ 📁 data/          # Mock data
│   │   ├─ 📁 hooks/         # Custom hooks
│   │   └─ 📁 lib/           # Utilities
│   ├─ package.json          # Node dependencies
│   └─ build.sh              # Build script
├─ render.yaml               # Render deployment config
├─ RENDER_DEPLOYMENT.md      # Deployment guide
├─ DEPLOY_QUICK.md          # Quick deployment reference
└─ README.md                # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- Python 3.11+
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/sriyaa/portfolio.git
   cd portfolio--main
   ```

2. **Backend Setup**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements_simple.txt
   python server.py
   ```
   Backend will run on `http://localhost:8002`

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install --legacy-peer-deps
   npm start
   ```
   Frontend will run on `http://localhost:3000`

4. **Access the Application**
   - Portfolio: `http://localhost:3000`
   - API Documentation: `http://localhost:8002/docs`

## 🌍 Deployment

### Deploy to Render (Recommended)

This project is configured for easy deployment on Render using the included `render.yaml` blueprint.

#### Option 1: Blueprint Deployment
```bash
# 1. Push to GitHub
git add .
git commit -m "Deploy to Render"
git push origin main

# 2. Create Blueprint on Render Dashboard
# 3. Connect GitHub repository
# 4. Deploy automatically
```

#### Option 2: Manual Deployment
See [RENDER_DEPLOYMENT.md](./RENDER_DEPLOYMENT.md) for detailed manual deployment instructions.

#### Quick Reference
See [DEPLOY_QUICK.md](./DEPLOY_QUICK.md) for a quick deployment checklist.

## 📊 Features Overview

### 🏠 Hero Section
- Professional introduction
- Animated typing effect
- Call-to-action buttons
- Social media links

### 💼 Experience
- Timeline view of work experience
- Detailed job descriptions
- Technology stacks used
- Key achievements

### 🚀 Projects (7 Featured Projects)
1. **Stock Price Predictor** - LSTM-based prediction system
2. **EV Route Optimization** - AI-powered route planning
3. **AI Meeting Assistant** - Automated transcription & summarization
4. **Movie Recommendation System** - Content-based filtering
5. **Fake News Detection** - NLP classification system
6. **AI Travel Agent** - Multi-agent travel planning
7. **AI Customer Support** - Intelligent query handling

### 🛠️ Skills
- Programming Languages
- AI/ML Technologies
- Web Development
- Databases
- Cloud Platforms

### 🎓 Education & Leadership
- Academic background
- Leadership roles
- Achievements
- Testimonials

### 📞 Contact
- Contact form
- Social media integration
- Professional links

## 🔌 API Endpoints

The backend provides the following API endpoints:

```
GET  /api/           # Health check
POST /api/status     # Create status check
GET  /api/status     # Get status checks
GET  /docs           # Interactive API documentation
```

## 🔧 Configuration

### Environment Variables

**Backend (.env)**
```env
PORT=8002
HOST=0.0.0.0
CORS_ORIGINS=http://localhost:3000,https://your-frontend.onrender.com
```

**Frontend**
```env
REACT_APP_API_URL=http://localhost:8002
```

### Customization

1. **Personal Information**: Update `src/data/mock.js`
2. **Styling**: Modify Tailwind classes in components
3. **Components**: Add/edit components in `src/components/`
4. **API**: Extend backend endpoints in `server.py`

## 🧑‍💻 Development

### Available Scripts

**Frontend**
```bash
npm start      # Development server
npm test       # Run tests
npm run build  # Production build
npm run eject  # Eject from CRA
```

**Backend**
```bash
python server.py              # Start development server
uvicorn server:app --reload   # Start with auto-reload
pip freeze > requirements.txt # Update dependencies
```

### Code Quality

- **Linting**: ESLint for JavaScript
- **Formatting**: Prettier (recommended)
- **Type Checking**: PropTypes for React components
- **API Validation**: Pydantic models

## 📈 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: Optimized with code splitting
- **Loading Time**: < 3 seconds on 3G
- **Images**: Optimized and lazy-loaded

## 🔒 Security

- **CORS**: Properly configured for production
- **Input Validation**: Pydantic models for API
- **Environment Variables**: Sensitive data in env files
- **HTTPS**: Enforced in production

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 About Me

**Sriyaa S** - AI/ML Engineer & Full-Stack Developer

- 🎓 BTech CSE (AI & Robotics) at VIT Chennai
- 💼 Experience at Ford Business Solutions & Nicola Foundation
- 🌟 Passionate about AI/ML, Cloud Technologies, and Innovation
- 📧 Contact: sriyaa2004@gmail.com

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat&logo=linkedin)](https://linkedin.com/in/sriyaa)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=flat&logo=github)](https://github.com/sriyaa)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-green?style=flat&logo=web)](https://your-portfolio.onrender.com)

---

<div align="center">
  <p>Made with ❤️ using React, FastAPI, and modern web technologies</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>