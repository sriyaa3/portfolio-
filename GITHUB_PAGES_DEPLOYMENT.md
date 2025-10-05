# 🚀 GitHub Pages Deployment Guide

## Overview

This guide shows how to deploy your portfolio frontend to GitHub Pages while keeping the backend on Render or another hosting service.

## 📋 Deployment Architecture

```
┌─────────────────┐    ┌─────────────────┐
│   GitHub Pages  │    │     Render      │
│   (Frontend)    │◄──►│   (Backend)     │
│                 │    │                 │
│ • React App     │    │ • FastAPI       │
│ • Static Files  │    │ • REST APIs     │
│ • Free Hosting  │    │ • Database      │
└─────────────────┘    └─────────────────┘
```

## 🔧 Setup Steps

### 1. **Automatic Deployment (Recommended)**

The project includes GitHub Actions workflow that automatically deploys to GitHub Pages on every push to main branch.

**Setup:**
1. Push your code to GitHub
2. Go to your repository settings
3. Navigate to **Pages** section
4. Select **GitHub Actions** as source
5. The deployment will trigger automatically

### 2. **Manual Deployment**

```bash
# Navigate to frontend
cd frontend

# Build and deploy
npm run deploy
```

## 🌐 **Your Portfolio URLs:**

- **Frontend**: `https://sriyaa3.github.io/portfolio-/`
- **Backend**: Deploy separately on Render using `render.yaml`

## ⚙️ **Configuration Details:**

### **Package.json Updates:**
```json
{
  "homepage": "https://sriyaa3.github.io/portfolio-/",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

### **GitHub Actions Workflow:**
- **File**: `.github/workflows/deploy.yml`
- **Triggers**: Push to main branch
- **Process**: Install → Build → Deploy

## 🔗 **Backend Integration:**

### **Option 1: Keep Render Backend**
1. Deploy backend using [render.yaml](../render.yaml)
2. Update CORS settings in backend
3. Frontend will connect to Render API

### **Option 2: Serverless Backend**
1. Use Vercel Functions or Netlify Functions
2. Convert FastAPI endpoints to serverless functions
3. Deploy alongside frontend

## 🎯 **Benefits of GitHub Pages:**

✅ **Free hosting** for static sites  
✅ **Custom domain** support  
✅ **HTTPS** by default  
✅ **Global CDN** for fast loading  
✅ **Automatic deployments** with GitHub Actions  

## 🔒 **Environment Variables:**

For production, update API URLs in your React app:

```javascript
// In your frontend code
const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-backend.onrender.com'
  : 'http://localhost:8002';
```

## 🚀 **Deploy Now:**

1. **Commit changes:**
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment configuration"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Select "GitHub Actions" as source

3. **Access your portfolio:**
   - Visit: `https://sriyaa3.github.io/portfolio-/`

## 📝 **Notes:**

- GitHub Pages only hosts static sites (no backend)
- Backend must be deployed separately (Render, Heroku, etc.)
- Custom domains are supported (optional)
- Free tier includes 1GB storage and 100GB bandwidth

Your portfolio will be live and automatically updated on every push! 🎉