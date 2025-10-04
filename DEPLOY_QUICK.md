# 🚀 Quick Render Deployment

## Prerequisites
- [ ] Code pushed to GitHub
- [ ] Render account created

## Deploy with render.yaml (Easiest)
1. **Push code**: `git push origin main`
2. **Create Blueprint** on Render Dashboard
3. **Connect GitHub** repository
4. **Deploy**: Click "Create Services"
5. **Update CORS**: Add frontend URL to backend CORS_ORIGINS

## Manual Deployment
### Backend (FastAPI)
```
Runtime: Python 3
Build: cd backend && pip install -r requirements_simple.txt
Start: cd backend && uvicorn server:app --host 0.0.0.0 --port $PORT
```

### Frontend (React)
```
Build: cd frontend && npm install --legacy-peer-deps && npm run build
Publish: frontend/build
Rewrite: /* → /index.html
```

## Environment Variables
**Backend**: `CORS_ORIGINS=https://your-frontend.onrender.com`

## 🎉 Done!
Your portfolio will be live at:
- Frontend: `https://portfolio-frontend-xxx.onrender.com`
- Backend API: `https://portfolio-backend-xxx.onrender.com`