# Portfolio Website - Abdulmumuni Ajoge

A modern, responsive portfolio website built with Next.js, featuring smooth animations, dark/light theme support, and a professional design.

<!-- ![Portfolio Preview](https://via.placeholder.com/1200x600/3B82F6/FFFFFF?text=Alex+Johnson+Portfolio) -->

## 🚀 Live Demo

[View Live Portfolio](#)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional layout with smooth animations
- 🌓 **Theme Support** - Light, dark, and system theme modes
- 📱 **Fully Responsive** - Optimized for all device sizes
- ⚡ **Performance** - Built with Next.js 14 for optimal speed
- 🎬 **Smooth Animations** - Framer Motion powered transitions
- ♿ **Accessible** - WCAG compliant with keyboard navigation
- 🔍 **SEO Optimized** - Meta tags, sitemap, and structured data
- 📧 **Contact Form** - Functional contact form with validation
- 🛡️ **Error Handling** - Custom 404 page and error boundaries

## 🛠️ Tech Stack

### Frontend

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS
- **UI Components:** ShadCN/UI
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Font:** Inter

### Development

- **Language:** JavaScript (ES6+)
- **Package Manager:** npm
- **Version Control:** Git
- **Deployment:** Netlify

## 📁 Project Structure

```
my-portfolio/
├── src/
│   ├── app/
│   │   ├── (portfolio)/          # Main portfolio pages
│   │   │   ├── layout.jsx        # Portfolio layout (header + footer)
│   │   │   └── page.jsx          # Home page
│   │   ├── globals.css           # Global styles
│   │   ├── layout.jsx            # Root layout
│   │   ├── not-found.jsx         # 404 page
│   │   ├── robots.txt            # SEO robots file
│   │   └── sitemap.js            # SEO sitemap
│   ├── components/
│   │   ├── animations/           # Reusable animation components
│   │   │   ├── FadeUp.jsx        # Scroll-triggered fade up
│   │   │   ├── FadeIn.jsx        # Simple fade in
│   │   │   ├── ScaleIn.jsx       # Scale animation
│   │   │   ├── StaggerChildren.jsx # Staggered children
│   │   │   ├── Typewriter.jsx    # Typewriter effect
│   │   │   ├── HoverScale.jsx    # Hover scale animation
│   │   │   ├── LazyLoad.jsx      # Lazy loading wrapper
│   │   │   ├── PageLoader.jsx    # Page loading animation
│   │   │   └── index.js          # Animation exports
│   │   ├── layout/               # Layout components
│   │   │   ├── Header.jsx        # Navigation header
│   │   │   ├── Footer.jsx        # Site footer
│   │   │   ├── SmoothScroll.jsx  # Smooth scrolling
│   │   │   ├── ScrollProgress.jsx # Scroll progress indicator
│   │   │   └── ErrorBoundary.jsx # Error handling
│   │   ├── sections/             # Page sections
│   │   │   ├── Hero.jsx          # Hero section
│   │   │   ├── About.jsx         # About section
│   │   │   ├── Projects.jsx      # Projects section
│   │   │   ├── Experience.jsx    # Experience section
│   │   │   ├── Contact.jsx       # Contact section
│   │   │   └── index.js          # Section exports
│   │   └── ui/                   # UI components
│   │       ├── button.jsx        # ShadCN button
│   │       ├── card.jsx          # ShadCN card
│   │       ├── input.jsx         # ShadCN input
│   │       ├── textarea.jsx      # ShadCN textarea
│   │       ├── badge.jsx         # ShadCN badge
│   │       ├── avatar.jsx        # ShadCN avatar
│   │       ├── dropdown-menu.jsx # ShadCN dropdown
│   │       ├── sheet.jsx         # ShadCN sheet
│   │       ├── switch.jsx        # ShadCN switch
│   │       └── OptimizedImage.jsx # Custom image component
│   ├── contexts/
│   │   └── ThemeContext.jsx      # Theme management
│   ├── hooks/
│   │   ├── useReducedMotion.js   # Reduced motion preference
│   │   └── useIntersectionObserver.js # Intersection observer
│   ├── lib/
│   │   └── utils.js              # Utility functions
│   └── constants/
│       └── data.js               # Portfolio content data
├── public/                       # Static assets
│   ├── images/                   # Project images
│   └── favicon.ico               # Site favicon
├── tailwind.config.js            # Tailwind CSS configuration
├── components.json               # ShadCN configuration
├── package.json                  # Dependencies and scripts
└── README.md                     # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/ajogious/my-portfolio.git
cd my-portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open your browser**
   Navigate to http://localhost:3000

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start

# Export static files (for Netlify)
npm run export
```

## 🎨 Customization

### Updating Personal Information

Edit `src/constants/data.js` to update:

- Personal information (name, bio, contact details)
- Work experience
- Projects and skills
- Social media links

```javascript
// Example: Update personal info
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... other fields
};
```

### Styling and Themes

The project uses CSS variables for theming. Colors can be customized in:

- `src/app/globals.css` - CSS variables for light/dark themes
- `tailwind.config.js` - Extended color palette and animations

### Adding New Sections

1. Create new section component in `src/components/sections/`
2. Export from `src/components/sections/index.js`
3. Import and add to main page in `src/app/(portfolio)/page.jsx`

### Custom Animations

Add new animation components in `src/components/animations/` following the existing patterns.

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🎯 Performance Optimizations

- **Image Optimization:** Custom OptimizedImage component with lazy loading
- **Code Splitting:** Automatic with Next.js
- **Animation Performance:** Reduced motion support and efficient Framer Motion usage
- **Bundle Optimization:** Tree shaking and minimal dependencies

## 🔧 Configuration Files

### Next.js Configuration (next.config.js)

- Static export enabled
- Image optimization configured
- Security headers
- SWC minification

### Tailwind CSS (tailwind.config.js)

- Custom color system
- Animation keyframes
- Container configuration
- Dark mode support

## 📊 SEO Features

- **Meta Tags:** Dynamic title and description
- **Open Graph:** Social media sharing optimization
- **Structured Data:** JSON-LD for rich snippets
- **Sitemap:** Automatic XML sitemap generation
- **Robots.txt:** Search engine guidance

## 🐛 Error Handling

- **404 Page:** Custom not-found page with helpful navigation
- **Error Boundary:** React error boundary for graceful error handling
- **Form Validation:** Contact form with comprehensive validation
- **Image Fallbacks:** Graceful image loading and error states

## 📈 Analytics (Optional)

To add Google Analytics:

1. Add your tracking ID to environment variables
2. Create `src/components/analytics/GoogleAnalytics.jsx`
3. Import and use in your layout

## 🚀 Deployment

### Netlify Deployment

1. **Connect Repository**

   - Push code to GitHub
   - Connect repository in Netlify dashboard

2. **Build Settings**

   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Environment Variables (Optional)**

   - `NODE_VERSION`: 18
   - `NEXT_PUBLIC_SITE_URL`: Your domain

4. **Custom Domain (Optional)**
   - Add custom domain in Netlify settings
   - Configure DNS records

### Manual Testing Checklist

- [ ] All navigation links work
- [ ] Responsive design on all screen sizes
- [ ] Theme switching functions
- [ ] Contact form submits correctly
- [ ] Images load properly
- [ ] No console errors
- [ ] 404 page displays for invalid routes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [ShadCN/UI](https://ui.shadcn.com/) - UI components
- [Lucide](https://lucide.dev/) - Beautiful icons

## 📞 Support

If you have any questions or need help with customization:

- Create an issue
- Email: abdulmumuniajoge@gmail.com
- LinkedIn: [Abdulmumuni Ajoge Adavize](#)

---

Built with ❤️ by Abdulmumuni Ajoge
