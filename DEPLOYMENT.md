# Production Deployment Guide

## Environment Variables Setup

1. Copy `.env.example` to your production environment
2. Set the following variables in your Vercel dashboard:

### Required Environment Variables

```
NEXT_PUBLIC_API_URL=https://shh-mode.vercel.app
UPSTASH_REDIS_URL=<your-redis-url>
UPSTASH_REDIS_TOKEN=<your-redis-token>
NEXT_PUBLIC_UPSTASH_REALTIME_URL=<your-realtime-url>
NEXT_PUBLIC_UPSTASH_REALTIME_TOKEN=<your-realtime-token>
```

## Vercel Configuration Steps

1. **Connect Repository**: Push code to GitHub and connect to Vercel
2. **Add Environment Variables**:
   - Go to Settings → Environment Variables
   - Add all variables from `.env.example`
3. **Deploy**:
   - Vercel automatically builds and deploys on git push
   - Build command: `next build`
   - Start command: `next start`
   - Output directory: `.next`

## Pre-deployment Checklist

- ✅ API URL uses environment variables (NEXT_PUBLIC_API_URL)
- ✅ Security headers configured in next.config.ts
- ✅ Redis and Realtime credentials in environment variables
- ✅ .env.local and sensitive files ignored in .gitignore
- ✅ Build command configured: `npm run build`
- ✅ React Compiler enabled for better performance

## Build & Test Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Test production build
npm run build
npm start
```

## Performance Optimizations Applied

- React Compiler enabled
- Security headers (HSTS, CSP, X-Frame-Options)
- Image optimization with AVIF and WebP
- Gzip compression enabled
- Removed X-Powered-By header

## Key Files Modified

- `src/lib/client.ts` - Environment-based API URL
- `next.config.ts` - Production optimizations & security headers
- `.env.local` - Development environment variables
- `.env.example` - Template for environment variables

## Monitoring

After deployment, monitor:
- Console errors in browser DevTools
- Network tab for API calls to `NEXT_PUBLIC_API_URL`
- Vercel Analytics Dashboard for performance metrics
- Real-time functionality with Upstash
