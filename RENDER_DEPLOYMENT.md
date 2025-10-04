# Render Deployment Guide

This guide will help you deploy your full-stack portfolio application on Render.

## Prerequisites

1. **GitHub Repository**: Ensure your code is pushed to a GitHub repository
2. **Render Account**: Sign up at [render.com](https://render.com)

## Deployment Options

### Option 1: Using render.yaml (Recommended)

This option deploys both frontend and backend using a single configuration file.

#### Steps:

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Add Render deployment configuration"
   git push origin main
   ```

2. **Create New Blueprint on Render**:
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New" > "Blueprint"
   - Connect your GitHub repository
   - Select the repository containing your portfolio
   - Render will automatically detect the `render.yaml` file

3. **Configure Environment Variables**:
   - After deployment starts, update the CORS_ORIGINS in backend service
   - Replace `https://your-frontend-app.onrender.com` with actual frontend URL

4. **Deploy**: Click "Create Services" and wait for deployment to complete

### Option 2: Manual Service Creation

#### Deploy Backend (FastAPI):

1. **Create Web Service**:
   - Go to Render Dashboard
   - Click "New" > "Web Service"
   - Connect GitHub repository
   - Select your repository

2. **Configure Backend Service**:
   ```
   Name: portfolio-backend
   Region: Oregon (US West)
   Branch: main
   Runtime: Python 3
   Build Command: cd backend && pip install -r requirements_simple.txt
   Start Command: cd backend && uvicorn server:app --host 0.0.0.0 --port $PORT
   ```

3. **Set Environment Variables**:
   ```
   PORT: 10000
   HOST: 0.0.0.0
   CORS_ORIGINS: https://your-frontend-url.onrender.com,http://localhost:3000
   ```

#### Deploy Frontend (React):

1. **Create Static Site**:
   - Click "New" > "Static Site"
   - Connect GitHub repository
   - Select your repository

2. **Configure Frontend Service**:
   ```
   Name: portfolio-frontend
   Branch: main
   Build Command: cd frontend && npm install --legacy-peer-deps && npm run build
   Publish Directory: frontend/build
   ```

3. **Add Rewrites for SPA**:
   ```
   Source: /*
   Destination: /index.html
   ```

## Environment Variables

### Backend Variables:
- `PORT`: 10000 (automatically set by Render)
- `HOST`: 0.0.0.0
- `CORS_ORIGINS`: Your frontend URL

### Frontend Variables (Optional):
- `REACT_APP_API_URL`: Your backend URL (if you need to make API calls)

## Post-Deployment Steps

1. **Update CORS Origins**:
   - Once frontend is deployed, copy its URL
   - Update backend CORS_ORIGINS environment variable
   - Redeploy backend service

2. **Test Your Application**:
   - Visit your frontend URL
   - Verify all features work correctly
   - Test API endpoints via frontend

## Custom Domain (Optional)

To use a custom domain:

1. **Frontend**: Add custom domain in Static Site settings
2. **Backend**: Add custom domain in Web Service settings
3. **Update CORS**: Include custom domains in CORS_ORIGINS

## Troubleshooting

### Common Issues:

1. **Build Failures**:
   - Check build logs for specific errors
   - Ensure all dependencies are in package.json/requirements.txt

2. **CORS Errors**:
   - Verify CORS_ORIGINS includes frontend URL
   - Check for trailing slashes in URLs

3. **API Connection Issues**:
   - Ensure backend URL is correct in frontend
   - Check network requests in browser dev tools

### Render-Specific Tips:

- **Free Tier Limitations**: Services sleep after 15 minutes of inactivity
- **Build Time**: First build may take longer; subsequent builds are faster
- **Logs**: Use Render dashboard to view detailed logs
- **Auto-Deploy**: Push to main branch triggers automatic redeployment

## File Structure After Setup

```
portfolio--main/
├── backend/
│   ├── server.py (updated for production)
│   ├── requirements_simple.txt
│   ├── build.sh
│   ├── start.sh
│   └── .env
├── frontend/
│   ├── build.sh
│   ├── package.json
│   └── src/
├── render.yaml (main config)
├── .env.example
└── RENDER_DEPLOYMENT.md
```

## Support

- **Render Documentation**: https://render.com/docs
- **Render Community**: https://community.render.com

## Cost Information

- **Free Tier**: 
  - Static sites: Unlimited
  - Web services: 750 hours/month
- **Paid Plans**: Start at $7/month for web services

Your portfolio is now ready for deployment on Render! 🚀