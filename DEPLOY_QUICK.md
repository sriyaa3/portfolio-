# 🚀 Quick Render Deployment

## Prerequisites
- [ ] Code pushed to GitHub
- [ ] Render account created

## Deploy Backend (render.yaml)
1. **Push code**: `git push origin main`
2. **Create Blueprint** on Render Dashboard
3. **Connect GitHub** repository
4. **Deploy**: Click "Create Services" (deploys backend only)

## Deploy Frontend (Separate Static Site)
1. **Create Static Site** on Render Dashboard
2. **Connect same GitHub** repository
3. **Configure**:
   ```
   Build Command: cd frontend && npm install --legacy-peer-deps && npm run build
   Publish Directory: frontend/build
   ```
4. **Deploy**

## Update CORS
**Backend**: Update `CORS_ORIGINS` with actual frontend URL

## 🎉 Done!
Your portfolio will be live at:
- Frontend: `https://portfolio-frontend-xxx.onrender.com`
- Backend API: `https://portfolio-backend-xxx.onrender.com`