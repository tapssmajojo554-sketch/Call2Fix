# Vercel Deployment Guide - Call2Fix Website

## Quick Start (5 Minutes)

### Step 1: Prepare Your Repository

1. **Extract the zip file** to your local machine
2. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Call2Fix website"
   ```

3. **Create a GitHub repository**:
   - Go to https://github.com/new
   - Create a new repository named `call2fix-website`
   - Follow GitHub's instructions to push your code

### Step 2: Deploy on Vercel

1. **Visit Vercel**:
   - Go to https://vercel.com
   - Sign in with your GitHub account (or create one)

2. **Import Your Project**:
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Search for and select your `call2fix-website` repository
   - Click "Import"

3. **Configure Build Settings**:
   - **Framework Preset**: Select "Other" (it's a static site)
   - **Build Command**: Leave empty or use `echo "Static site"`
   - **Output Directory**: `.` (current directory)
   - **Install Command**: Leave empty
   - Click "Deploy"

4. **Wait for Deployment**:
   - Vercel will automatically deploy your site
   - You'll see a live URL like `call2fix-website.vercel.app`
   - Your site is now live! 🎉

---

## Build Settings Reference

### vercel.json Configuration

Your project includes a `vercel.json` file with these settings:

```json
{
  "buildCommand": "echo 'Static site - no build needed'",
  "outputDirectory": ".",
  "cleanUrls": true,
  "trailingSlash": false,
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**What each setting does:**
- **buildCommand**: No build needed (it's pre-built static files)
- **outputDirectory**: Serves files from the root directory
- **cleanUrls**: Removes `.html` extensions from URLs
- **trailingSlash**: Removes trailing slashes from URLs
- **rewrites**: Routes all requests to `index.html` for SPA routing

---

## File Structure Explanation

```
call2fix-static/
├── index.html              # Main HTML file (pre-built React SPA)
├── assets/
│   ├── index-Be3lOdH8.js   # Minified JavaScript bundle
│   └── index-tyDmBSYY.css  # Minified CSS bundle
├── images/                 # All website images
│   ├── hero-bg.jpg
│   ├── service-leak.jpg
│   ├── service-drain.jpg
│   └── ... (other images)
├── package.json            # Project metadata
├── vercel.json             # Vercel configuration
└── README.md               # Project information
```

---

## Custom Domain Setup

### Option 1: Use Vercel's Free Domain

1. In Vercel Dashboard → Your Project → Settings → Domains
2. Add a domain like `call2fix.vercel.app`
3. It's automatically configured

### Option 2: Connect Your Own Domain

1. **Purchase a domain** (GoDaddy, Namecheap, etc.)
2. **In Vercel Dashboard**:
   - Go to Settings → Domains
   - Click "Add Domain"
   - Enter your domain (e.g., `call2fix.co.za`)
   - Follow Vercel's DNS configuration instructions
   - Update your domain registrar's nameservers to point to Vercel

3. **Wait for DNS propagation** (5-48 hours)

---

## Environment Variables (Optional)

If you need to add API keys or secrets:

1. Go to **Settings → Environment Variables**
2. Click "Add New"
3. Enter key and value
4. Select which environments (Production/Preview/Development)
5. Click "Save"
6. Redeploy for changes to take effect

---

## Monitoring & Analytics

### View Your Site Stats

1. **Dashboard**: See deployment history and status
2. **Analytics**: Monitor visitor traffic (requires Vercel Analytics)
3. **Logs**: Check deployment logs for errors
4. **Monitoring**: Set up alerts for downtime

### Enable Analytics (Optional)

1. Go to Settings → Analytics
2. Enable "Web Analytics" 
3. Your site will track visitor metrics automatically

---

## Troubleshooting

### Issue: Site shows 404 errors on page refresh

**Solution**: The `vercel.json` rewrites rule should handle this. If not:
1. Verify `vercel.json` is in the root directory
2. Redeploy the project
3. Clear browser cache (Ctrl+Shift+Delete)

### Issue: Images not loading

**Solution**:
1. Check that the `images/` folder is included in your zip
2. Verify image paths in HTML are correct (should be `/images/filename.jpg`)
3. Check browser console for 404 errors

### Issue: Styles not applied

**Solution**:
1. Verify `assets/` folder contains CSS file
2. Check that CSS file path in HTML is correct
3. Clear browser cache and do a hard refresh (Ctrl+Shift+R)

### Issue: Google Analytics not tracking

**Solution**:
1. Verify gtag script is in the `<head>` section
2. Check your Google Analytics conversion ID is correct (AW-17910996546)
3. Wait 24 hours for data to appear in Google Analytics dashboard
4. Check browser console for any JavaScript errors

---

## Performance Optimization

Your site is already optimized with:
- ✅ Minified CSS and JavaScript
- ✅ Optimized images
- ✅ Vercel's global CDN for fast delivery
- ✅ Automatic HTTPS/SSL
- ✅ Gzip compression

**Expected Performance**:
- Page load time: < 2 seconds
- Lighthouse score: 85+
- Core Web Vitals: Good

---

## Redeployment

### When to Redeploy

- After updating content
- After changing environment variables
- After DNS/domain changes
- After bug fixes

### How to Redeploy

**Option 1: Automatic (Recommended)**
- Push changes to GitHub
- Vercel automatically redeploys

**Option 2: Manual**
1. Go to Vercel Dashboard
2. Select your project
3. Click "Redeploy" button
4. Select the deployment to redeploy from

---

## Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Vercel Support**: https://vercel.com/support
- **GitHub Issues**: Report bugs in your repository
- **Call2Fix Support**: support@call2fix.co.za

---

## Next Steps

1. ✅ Deploy to Vercel (follow Step 1-2 above)
2. ✅ Set up custom domain
3. ✅ Enable Google Analytics
4. ✅ Test all functionality (buttons, forms, links)
5. ✅ Monitor performance in Vercel dashboard

---

## Deployment Checklist

- [ ] Repository created on GitHub
- [ ] Code pushed to GitHub
- [ ] Vercel project created and deployed
- [ ] Site is live and accessible
- [ ] Custom domain configured (if applicable)
- [ ] Google Analytics tracking verified
- [ ] All buttons and links tested
- [ ] Images loading correctly
- [ ] Mobile responsiveness verified
- [ ] Performance monitored

---

**Your site is production-ready! Deploy with confidence.** 🚀
