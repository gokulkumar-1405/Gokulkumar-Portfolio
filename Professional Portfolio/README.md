# Gokul Kumar - Portfolio Website

A modern, responsive portfolio website with a dark theme and cyan accents, inspired by professional portfolio designs.

## Features

- 🎨 **Modern Dark Theme** - Sleek dark background with cyan/teal accents
- 📱 **Fully Responsive** - Works perfectly on all devices
- ✨ **Smooth Animations** - Fade-in effects and smooth scrolling
- 🎯 **Multiple Sections**:
  - Home/Hero section with profile image
  - About section
  - Education with CGPA display
  - Skills showcase
  - Ventures/Projects
  - Achievements
  - Contact with social media links

## Technologies Used

- HTML5
- CSS3 (with CSS Variables and Animations)
- JavaScript (Vanilla JS)
- Font Awesome Icons

## Setup Instructions

1. **Add Your Profile Image**
   - Add your profile photo as `profile.jpg` in the root directory
   - Recommended size: 400x400px or larger (square format)
   - If no image is added, a placeholder will be shown

2. **Customize Your Information**
   - Open `index.html` and update:
     - Your name (replace "Gokul Kumar")
     - Your subtitle/tagline
     - Your description
     - Social media links (GitHub, LinkedIn, WhatsApp, Instagram)
     - Education details (college name, location, CGPA)
     - Skills
     - Ventures/Projects
     - Achievements
     - Contact information

3. **Update Social Links**
   - Replace all instances of:
     - `yourusername` with your actual username
     - `1234567890` with your phone number

4. **Run the Website**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

## Customization

### Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-color: #00d9ff;      /* Main cyan color */
    --secondary-color: #00a8cc;    /* Secondary cyan */
    --dark-bg: #0a0e27;            /* Background */
    --card-bg: #0f1729;            /* Card background */
}
```

### Sections
- Add or remove sections by editing `index.html`
- Update navigation menu accordingly
- Sections are automatically detected by the scroll script

### Fonts
- Currently using system fonts (Segoe UI)
- To use custom fonts, add Google Fonts in the `<head>` section

## File Structure

```
GOKUL PORTFOLIO/
│
├── index.html          # Main HTML file
├── style.css           # All styles and animations
├── script.js           # JavaScript for interactions
├── README.md           # This file
└── profile.jpg         # Your profile image (add this)
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## Tips

1. **Profile Image**: Use a professional photo with good lighting
2. **Content**: Keep descriptions concise and impactful
3. **Links**: Make sure all social media links are correct
4. **CGPA**: Update with your actual semester grades
5. **Achievements**: Add your real accomplishments

## Deployment

You can deploy this website on:
- **GitHub Pages** (Free)
- **Netlify** (Free)
- **Vercel** (Free)
- **Any web hosting service**

### GitHub Pages Deployment:
1. Create a new repository on GitHub
2. Push your code
3. Go to Settings > Pages
4. Select main branch
5. Your site will be live at `https://yourusername.github.io/repository-name`

## License

Free to use and modify for personal purposes.

## Credits

Built with passion and innovation 🚀

---

**Note**: Remember to update all placeholder content with your actual information before deploying!
