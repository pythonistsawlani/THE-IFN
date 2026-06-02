# Deployment Guide - IFN Platform

## Overview

This document provides guidance for deploying the IFN (ICFAI Founders Network) platform.

## Important Notes

⚠️ **This is a Figma Make Project**

This application is built using Figma Make and has special deployment considerations:

- **DO NOT** run standard build commands (`npm run build`, `vite build`)
- **DO NOT** manually start development servers (`npm run dev`, `vite`)
- The application is automatically managed by the Figma Make runtime

## Technology Stack

- **Frontend Framework**: React 18.3.1
- **Routing**: React Router 7.13.0
- **Styling**: Tailwind CSS 4.1.12
- **UI Components**: Radix UI + shadcn/ui
- **Build Tool**: Vite 6.3.5
- **Package Manager**: pnpm

## Environment Requirements

### Development
- Node.js 18 or higher
- pnpm (package manager)
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Production
- Node.js 18+ runtime
- Static file hosting or Node.js server
- HTTPS enabled (recommended)

## Pre-Deployment Checklist

### 1. Code Quality
- ✅ All TypeScript errors resolved
- ✅ No console errors in browser
- ✅ All routes working correctly
- ✅ Responsive design tested
- ✅ Cross-browser compatibility checked

### 2. Performance
- ✅ Images optimized
- ✅ Code splitting implemented
- ✅ Lazy loading configured
- ✅ Bundle size optimized

### 3. Security
- ✅ Environment variables secured
- ✅ API endpoints protected
- ✅ Authentication implemented
- ✅ XSS protection in place
- ✅ CSRF tokens configured

### 4. SEO & Metadata
- ✅ Meta tags configured
- ✅ Open Graph tags added
- ✅ Favicon set
- ✅ robots.txt configured
- ✅ sitemap.xml generated

## Deployment Options

### Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

**Configuration (vercel.json)**
```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Option 2: Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy

# Production deployment
netlify deploy --prod
```

**Configuration (netlify.toml)**
```toml
[build]
  command = "pnpm build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 3: AWS Amplify
1. Connect your Git repository
2. Configure build settings:
   - Build command: `pnpm build`
   - Output directory: `dist`
3. Deploy

### Option 4: Custom Server
```bash
# Build the application
pnpm build

# Serve with a static file server
npx serve -s dist -l 3000
```

## Environment Variables

Create a `.env.production` file:

```env
# API Configuration
VITE_API_URL=https://api.yourplatform.com
VITE_API_KEY=your_api_key_here

# Authentication
VITE_AUTH_DOMAIN=auth.yourplatform.com
VITE_AUTH_CLIENT_ID=your_client_id

# Analytics
VITE_GA_TRACKING_ID=UA-XXXXXXXXX-X

# Feature Flags
VITE_ENABLE_ADMIN=true
VITE_ENABLE_NOTIFICATIONS=true
```

## Post-Deployment Verification

### 1. Smoke Tests
- [ ] Homepage loads correctly
- [ ] Login/Register works
- [ ] Navigation functions properly
- [ ] All main pages accessible
- [ ] Forms submit correctly
- [ ] Search works
- [ ] Responsive design intact

### 2. Performance Tests
- [ ] Lighthouse score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3s
- [ ] No JavaScript errors
- [ ] No console warnings

### 3. Security Tests
- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] No exposed secrets
- [ ] API endpoints protected
- [ ] Authentication working

## Monitoring & Maintenance

### Recommended Tools

**Analytics**
- Google Analytics 4
- Mixpanel
- Amplitude

**Error Tracking**
- Sentry
- LogRocket
- Bugsnag

**Performance Monitoring**
- Vercel Analytics
- Google Lighthouse CI
- Web Vitals

**Uptime Monitoring**
- UptimeRobot
- Pingdom
- StatusCake

## Rollback Strategy

If deployment issues occur:

1. **Immediate Rollback**
   ```bash
   # Vercel
   vercel rollback
   
   # Netlify
   netlify rollback
   ```

2. **Git Revert**
   ```bash
   git revert HEAD
   git push origin main
   ```

3. **Manual Rollback**
   - Restore from previous build
   - Redeploy stable version

## Continuous Deployment

### GitHub Actions Example
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install pnpm
        run: npm install -g pnpm
        
      - name: Install dependencies
        run: pnpm install
        
      - name: Build
        run: pnpm build
        
      - name: Deploy
        run: pnpm deploy
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
```

## Domain Configuration

### Custom Domain Setup

1. **DNS Configuration**
   ```
   A Record: @ → [Your Server IP]
   CNAME: www → [Your Platform Domain]
   ```

2. **SSL Certificate**
   - Most platforms (Vercel, Netlify) provide automatic SSL
   - For custom servers, use Let's Encrypt

3. **Subdomain Setup**
   ```
   api.yourplatform.com → API Server
   admin.yourplatform.com → Admin Panel
   cdn.yourplatform.com → Static Assets
   ```

## Performance Optimization

### Production Build Optimizations

1. **Code Splitting**
   - Implemented via React Router
   - Lazy loading for heavy components

2. **Asset Optimization**
   - Images compressed
   - Fonts subset
   - SVG optimization

3. **Caching Strategy**
   ```
   Cache-Control: public, max-age=31536000, immutable (static assets)
   Cache-Control: no-cache (HTML files)
   ```

## Scaling Considerations

### Horizontal Scaling
- Use CDN for static assets
- Implement load balancing
- Database read replicas
- Caching layer (Redis)

### Vertical Scaling
- Increase server resources
- Optimize database queries
- Implement connection pooling

## Support & Troubleshooting

### Common Issues

**Issue**: Build fails
**Solution**: Check Node.js version, clear cache, reinstall dependencies

**Issue**: Routing not working
**Solution**: Configure server rewrites for SPA

**Issue**: Environment variables not loaded
**Solution**: Ensure `.env` file exists and variables prefixed with `VITE_`

**Issue**: Performance degradation
**Solution**: Enable caching, optimize bundle size, implement CDN

### Getting Help
- Check application logs
- Review error tracking dashboard
- Contact development team
- Review documentation

## Backup & Recovery

### Backup Strategy
- Daily database backups
- Weekly full system backups
- Version control (Git)
- Environment configuration backups

### Recovery Process
1. Identify issue
2. Restore from backup
3. Verify data integrity
4. Test functionality
5. Monitor for issues

---

**Last Updated**: June 2, 2026  
**Version**: 1.0.0  
**Maintained by**: IFN Development Team
