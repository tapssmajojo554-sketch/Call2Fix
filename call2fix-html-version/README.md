# Call2Fix Plumbing & Electrical - HTML/CSS/JS Version

A complete, professional website for Call2Fix Plumbing & Electrical services in Cape Town. Built with pure HTML, CSS, and JavaScript - no frameworks required!

## 🚀 Quick Start

### Option 1: Open Directly (Easiest)
1. Extract the zip file
2. Double-click `index.html` to open in your browser
3. Done! The website is ready to use

### Option 2: Run with a Local Server (Recommended)

#### Using Python (if installed):
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open: `http://localhost:8000`

#### Using Node.js (if installed):
```bash
# Install http-server globally (one time)
npm install -g http-server

# Run the server
http-server
```

Then open: `http://localhost:8080`

#### Using PHP (if installed):
```bash
php -S localhost:8000
```

Then open: `http://localhost:8000`

## 📁 Project Structure

```
call2fix-html-version/
├── index.html              # Main entry point
├── css/
│   └── style.css          # All styling
├── js/
│   └── main.js            # All functionality
├── pages/
│   ├── home.html          # Home page
│   ├── services.html      # Services page
│   ├── emergency.html     # Emergency page
│   ├── areas.html         # Service areas page
│   ├── about.html         # About us page
│   └── contact.html       # Contact page
├── images/                # All images and logo
└── README.md             # This file
```

## ✨ Features

✅ **6 Complete Pages**
- Home with hero section and service checker
- Services with detailed offerings
- Emergency page with 24/7 support info
- Service Areas with coverage details
- About Us with company information
- Contact with form and FAQ

✅ **WhatsApp Integration**
- Floating buttons (chat & emergency)
- Live chat widget connected to WhatsApp
- WhatsApp links on all CTA buttons
- Pre-filled messages for easy communication

✅ **Visitor Tracking**
- Built-in visitor counter
- Page view analytics
- Export data as CSV
- Console commands for admin

✅ **Mobile Responsive**
- Works perfectly on all devices
- Touch-friendly buttons
- Optimized layouts

✅ **No Dependencies**
- Pure HTML/CSS/JavaScript
- No frameworks or build tools needed
- Works offline
- Fast loading

## 🎨 Customization

### Change Colors
Edit `css/style.css` and modify the CSS variables at the top:
```css
:root {
  --primary: #003da5;        /* Blue */
  --secondary: #dc143c;      /* Red */
  --dark: #1a1a1a;
  --light: #f5f5f5;
  /* ... more colors ... */
}
```

### Update Contact Information
Edit `index.html` and search for:
- `+27740642297` - Sales number
- `+27676095679` - Emergency number
- `tapssmajojo554@gmail.com` - Email address

### Add/Edit Content
- Edit HTML files in `pages/` folder
- Update text, images, and links
- Changes take effect immediately

### Replace Logo
1. Replace `images/call2fix-logo.png` with your logo
2. Keep the same filename or update references in `index.html`

### Add More Pages
1. Create new HTML file in `pages/` folder
2. Add navigation link in `index.html`
3. Add page handler in `js/main.js`

## 📊 Visitor Tracking

### View Statistics
Open browser console (F12) and type:
```javascript
getVisitorStats()
```

Returns:
- Total visits
- Unique pages
- Page view breakdown
- Recent visit details

### Export Data
```javascript
exportVisitorData()
```
Downloads visitor data as CSV file

### Clear Data
```javascript
clearVisitorData()
```
Resets all visitor tracking

## 🌐 Deployment Options

### Option 1: Manus Hosting (Recommended)
- Upload to Manus for free hosting
- Custom domain support
- Built-in analytics
- Automatic SSL/HTTPS

### Option 2: Web Server
1. Upload all files to your web server
2. Configure web server to serve `index.html` for all routes
3. Ensure `.html` files are accessible

### Option 3: Static Hosting (GitHub Pages, Netlify, Vercel)
1. Push files to GitHub
2. Enable GitHub Pages or connect to Netlify/Vercel
3. Deploy automatically

### Option 4: Local Network
1. Run with local server (see Quick Start)
2. Access from other devices on same network
3. Share IP address with team

## 🔧 Browser Compatibility

✅ Chrome/Chromium
✅ Firefox
✅ Safari
✅ Edge
✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 WhatsApp Integration Details

The website uses WhatsApp Web links:
- Format: `https://wa.me/{number}?text={message}`
- Numbers must include country code (+27 for South Africa)
- Messages are URL-encoded automatically
- Works on desktop and mobile

## 🔒 Security Notes

- No sensitive data is stored locally
- Visitor data is stored in browser's localStorage only
- All WhatsApp links are secure
- No external API calls required

## 📝 Content Tips

### Service Cards
- Use high-quality images (600x400px recommended)
- Keep descriptions concise
- Include key benefits as bullet points
- Add pricing information

### Call-to-Action Buttons
- Use clear, action-oriented text
- Make buttons large and visible
- Use contrasting colors
- Place prominently on pages

### Contact Information
- Keep phone numbers consistent
- Use clickable links (tel: and mailto:)
- Display email prominently
- Show response times

## 🐛 Troubleshooting

### Pages not loading?
- Check that all files are in correct folders
- Ensure `pages/` folder contains all HTML files
- Check browser console for errors (F12)

### Images not showing?
- Verify images are in `images/` folder
- Check image filenames match references
- Use correct image paths in HTML

### WhatsApp links not working?
- Verify phone numbers include country code (+27)
- Check WhatsApp is installed on device
- Try opening in different browser

### Visitor tracking not working?
- Check browser allows localStorage
- Try in different browser
- Clear browser cache and try again

## 📞 Support

For issues or questions:
1. Check the FAQ section in Contact page
2. Review the code comments
3. Test in different browser
4. Check browser console for errors

## 📄 License

This website is created for Call2Fix Plumbing & Electrical. All content and design are proprietary.

## ✅ Checklist Before Going Live

- [ ] All contact information is correct
- [ ] Logo displays properly
- [ ] All pages load correctly
- [ ] WhatsApp links work on mobile
- [ ] Images display correctly
- [ ] Mobile view looks good
- [ ] Visitor tracking works
- [ ] Forms submit correctly
- [ ] All links work (internal and external)
- [ ] SSL certificate installed (if on custom domain)

## 🎉 You're Ready!

Your Call2Fix website is ready to go live. Share the link with customers and start receiving inquiries through WhatsApp!

For questions or updates, simply edit the HTML files and refresh the browser. No build process needed!

---

**Built with ❤️ for Call2Fix Plumbing & Electrical**
