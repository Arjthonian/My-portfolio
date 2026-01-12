# 🎨 Portfolio Customization Guide

## Quick Start Checklist

### 1. Update Your Personal Information

Open `src/main.ts` and modify the `portfolioData` object:

```typescript
const portfolioData = {
  hero: {
    name: 'YOUR NAME HERE',           // ← Change this
    tagline: 'Your professional tagline',  // ← Change this
  },
  about: {
    title: 'About Me',
    description: `Write your personal bio here...`,  // ← Change this
  },
  // ... continue with other sections
};
```

### 2. Update Contact Links

In the same `portfolioData` object, update your social links:

```typescript
contact: {
  links: [
    { icon: '📧', label: 'Email', url: 'mailto:your-email@example.com' },
    { icon: '💼', label: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile' },
    { icon: '🐙', label: 'GitHub', url: 'https://github.com/yourusername' },
    { icon: '🐦', label: 'Twitter', url: 'https://twitter.com/yourhandle' },
  ],
},
```

### 3. Add Your Projects

Replace the sample projects with your own:

```typescript
projects: [
  {
    title: 'Your Project Name',
    description: 'Brief description of what you built',
    image: 'your-project-image.png',  // Add image to /public folder
    tags: ['React', 'TypeScript', 'etc'],
  },
  // Add more projects...
],
```

### 4. Customize Skills

Update the skills section with your expertise:

```typescript
skills: [
  {
    name: 'Your Skill Category',
    icon: 'your-icon.png',  // Add icon to /public folder
    description: 'Technologies you use',
  },
  // Add more skills...
],
```

### 5. Change Color Scheme (Optional)

Edit `src/style.css` to modify the color palette:

```css
:root {
  /* Primary accent color */
  --color-accent-cyan: #00f0ff;  /* Change to your preferred color */
  
  /* Secondary accent color */
  --color-accent-purple: #a855f7;  /* Change to your preferred color */
  
  /* Background colors */
  --color-bg-primary: #0a0a0f;
  --color-bg-secondary: #12121a;
}
```

### 6. Add Your Images

1. Create or find images for your projects
2. Save them in the `/public` folder
3. Reference them in `portfolioData` using just the filename

Example:
```
/public/my-awesome-project.png  →  image: 'my-awesome-project.png'
```

### 7. Update Meta Tags

Edit `index.html` to update SEO information:

```html
<meta name="description" content="Your portfolio description" />
<meta name="author" content="Your Name" />
<title>Your Name - Portfolio</title>
```

## 🎨 Design Tips

### Color Combinations

Try these modern color palettes:

**Cyber Blue**
- Primary: `#00d4ff`
- Secondary: `#7b2cbf`

**Neon Green**
- Primary: `#39ff14`
- Secondary: `#ff006e`

**Sunset**
- Primary: `#ff6b35`
- Secondary: `#f7931e`

### Typography

Current fonts:
- **Headings**: Space Grotesk (bold, futuristic)
- **Body**: Inter (clean, readable)

To change fonts, update the Google Fonts import in `style.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;600;700&display=swap');
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `/dist` folder.

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Follow the prompts to deploy.

## 📱 Testing

### Local Testing

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### Production Preview

```bash
npm run build
npm run preview
```

## 🎯 Performance Tips

1. **Optimize Images**: Use WebP format for better compression
2. **Lazy Loading**: Images load as you scroll (already implemented)
3. **Code Splitting**: Vite handles this automatically
4. **Minimize Dependencies**: Keep the bundle size small

## 🐛 Troubleshooting

### 3D Elements Not Showing

- Check browser console for errors
- Ensure Three.js is installed: `npm install three`
- Try refreshing the page

### Images Not Loading

- Verify images are in `/public` folder
- Check file names match exactly (case-sensitive)
- Clear browser cache

### Animations Laggy

- Reduce number of 3D shapes in `three-scene.ts`
- Lower the `devicePixelRatio` in renderer settings
- Disable animations on mobile devices

## 📚 Resources

- [Three.js Documentation](https://threejs.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [CSS Tricks](https://css-tricks.com/)

---

**Need help? Check the main README.md for more details!**
