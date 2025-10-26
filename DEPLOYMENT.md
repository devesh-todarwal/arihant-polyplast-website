# Deployment Guide

This guide will help you deploy your Arihant Polyplast website to various hosting platforms.

## Quick Start - Local Development

1. **Start Development Server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:5173` to see your site.

2. **Build for Production**
   ```bash
   npm run build
   ```
   This creates an optimized build in the `dist` folder.

3. **Preview Production Build**
   ```bash
   npm run preview
   ```
   Preview the production build locally before deploying.

---

## Deployment Options

### Option 1: Vercel (Recommended - Free & Easy)

Vercel is perfect for React/Vite projects and offers automatic deployments from Git.

1. **Prerequisites**
   - GitHub account
   - Push your code to a GitHub repository

2. **Deploy Steps**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

3. **Custom Domain** (Optional)
   - After deployment, go to Project Settings → Domains
   - Add your custom domain (e.g., arihantpolyplast.com)
   - Follow DNS configuration instructions

**Advantages:**
- ✅ Free for personal/commercial use
- ✅ Automatic deployments on Git push
- ✅ Free SSL certificate
- ✅ Global CDN
- ✅ Zero configuration needed

---

### Option 2: Netlify (Great Alternative)

Similar to Vercel, Netlify is also excellent for React apps.

1. **Deploy Steps**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Build settings are auto-detected:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

2. **Custom Domain**
   - Go to Site settings → Domain management
   - Add custom domain and configure DNS

**Advantages:**
- ✅ Free tier available
- ✅ Automatic deployments
- ✅ Form handling (useful for contact forms)
- ✅ Free SSL

---

### Option 3: GitHub Pages (Free)

1. **Install gh-pages package**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add these scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Update vite.config.js**
   Add base URL:
   ```js
   export default defineConfig({
     base: '/arihant-polyplast-website/',
     plugins: [react()],
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: gh-pages branch
   - Your site will be at: `username.github.io/arihant-polyplast-website`

---

### Option 4: Traditional Web Hosting (cPanel/Shared Hosting)

If you have traditional web hosting with cPanel:

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Upload Files**
   - Using FTP/SFTP client (FileZilla, Cyberduck)
   - Upload ALL contents of the `dist` folder to `public_html` or `www` directory
   - **Important**: Upload the contents of dist folder, not the dist folder itself

3. **Configure .htaccess** (for React Router)
   Create a `.htaccess` file in the root with:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteCond %{REQUEST_FILENAME} !-l
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## Custom Domain Setup

### For Vercel/Netlify:
1. Add domain in platform settings
2. Update DNS records at your domain registrar:
   - Add A record or CNAME as instructed
3. Wait for DNS propagation (up to 48 hours)

### Common DNS Records:
```
Type: A
Name: @
Value: [Provider's IP address]

Type: CNAME
Name: www
Value: [your-site.vercel.app or your-site.netlify.app]
```

---

## Environment Variables

If you need to add environment variables (e.g., for form submission APIs):

### Vercel:
- Project Settings → Environment Variables
- Add variables with prefix `VITE_`

### Netlify:
- Site Settings → Build & Deploy → Environment
- Add variables with prefix `VITE_`

### Local Development:
Create `.env` file:
```env
VITE_API_KEY=your_api_key
VITE_FORM_ENDPOINT=your_endpoint
```

Access in code:
```js
const apiKey = import.meta.env.VITE_API_KEY
```

---

## Performance Optimization Tips

1. **Optimize Images**
   - Use WebP format where possible
   - Compress images before uploading
   - Recommended tools: TinyPNG, Squoosh

2. **Enable Caching**
   - Vercel/Netlify handle this automatically
   - For traditional hosting, add to `.htaccess`:
   ```apache
   <IfModule mod_expires.c>
     ExpiresActive On
     ExpiresByType image/jpg "access plus 1 year"
     ExpiresByType image/jpeg "access plus 1 year"
     ExpiresByType image/png "access plus 1 year"
     ExpiresByType text/css "access plus 1 month"
     ExpiresByType application/javascript "access plus 1 month"
   </IfModule>
   ```

3. **Monitor Performance**
   - Use Google PageSpeed Insights
   - Check GTmetrix for loading times
   - Aim for 90+ scores

---

## SSL Certificate

### Vercel/Netlify:
- SSL is automatic and free

### cPanel Hosting:
- Use Let's Encrypt (free) via cPanel SSL/TLS tool
- Or install SSL certificate from your provider

---

## Troubleshooting

### Issue: Blank page after deployment
**Solution**: Check browser console for errors. Usually related to base URL configuration.

### Issue: 404 on page refresh
**Solution**: Configure server for SPA routing (see .htaccess above)

### Issue: Images not loading
**Solution**: Check image paths are correct and case-sensitive

### Issue: Slow loading
**Solution**: 
- Optimize images
- Check build size (`npm run build` will show)
- Enable gzip compression

---

## Monitoring & Analytics

Add Google Analytics:

1. Get tracking ID from Google Analytics
2. Add to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## Support

If you need help with deployment:
- Check platform documentation
- Platform support forums
- Contact your web hosting provider

---

## Recommended Deployment

**For best results, we recommend Vercel:**
- Fastest deployment
- Best performance
- Automatic SSL & CDN
- Free for commercial use
- Perfect for React/Vite

**Steps:**
1. Push code to GitHub
2. Connect to Vercel
3. Deploy (takes 2 minutes)
4. Add custom domain
5. Done!

Your website will be live with automatic deployments whenever you push updates to GitHub.

