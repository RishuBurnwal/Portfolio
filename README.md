# 🚀 Rishu Kumar's Portfolio

> A modern, responsive, and fully static portfolio website built with React and TypeScript

## 📱 Live Demo

- **Portfolio**: [https://rishuburnwal.github.io/Portfolio/](https://rishuburnwal.github.io/Portfolio/)

## 🎥 Preview

![Portfolio Preview](https://github.com/RishuBurnwal/Portfolio/raw/main/public/Portfolio.gif)

## ✨ Features

- 🎨 **Modern Design System** - Clean, professional UI with smooth animations
- 🌙 **Dark/Light Mode** - Seamless theme switching with persistent preferences
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Performance Optimized** - Static site with Vite for lightning-fast loading
- 🎭 **Smooth Animations** - CSS animations and transitions for engaging UX
- 🔍 **SEO Optimized** - Meta tags and semantic HTML structure
- 📧 **Contact Form** - Simple mailto form for easy communication
- 🎯 **Accessibility** - WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

### Frontend
- **React 18** - Latest React with hooks and modern patterns
- **TypeScript** - Type-safe development experience
- **Vite** - Ultra-fast build tool and dev server

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library
- **CSS Custom Properties** - Dynamic theming system
- **Lucide Icons** - Clean and consistent icon set

### Development Tools
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic vendor prefixing

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RishuBurnwal/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5176` (or the port shown in the terminal)

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── components/                   # Reusable UI components
│   │   ├── ui/                       # shadcn/ui components
│   │   ├── Navigation.tsx            # Navigation bar
│   │   ├── HeroSection.tsx           # Hero section
│   │   ├── SkillsSection.tsx         # Skills showcase
│   │   ├── ProjectsSection.tsx       # Portfolio projects
│   │   ├── AchievementsSection.tsx   # Certifications and awards
│   │   ├── ResumeSection.tsx         # Experience & education
│   │   ├── ContactSection.tsx        # Contact form with email
│   │   └── Footer.tsx                # Footer component
│   ├── pages/                        # Page components
│   ├── hooks/                        # Custom React hooks
│   │   ├── use-mobile.tsx            # Mobile detection hook
│   │   └── use-toast.ts              # Toast notification hook
│   ├── lib/                          # Utility functions
│   └── App.tsx                       # Main application component
├── public/                           # Static assets and favicons
└── tailwind.config.ts                # Tailwind configuration
```

## 🎨 Design System

### Color Palette
- **Primary**: Deep Navy (#1e293b)
- **Accent**: Electric Blue (#3b82f6)
- **Secondary**: Purple (#8b5cf6)
- **Neutral**: Gray scale with proper contrast ratios
- **Dark/Light**: System preference aware theming

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300-900
- **Responsive scaling** for optimal readability

### Components
- **Navigation**: Sticky header with smooth scrolling
- **Hero**: Animated introduction with CTA buttons
- **Skills**: Interactive skill cards with progress indicators
- **Projects**: Portfolio showcase with modal details
- **Contact**: Simple mailto form for easy communication

## 🌐 Deployment

### GitHub Pages (Recommended)
1. Build the project: `npm run build`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy script to package.json:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run `npm run build` then `npm run deploy`
5. Enable GitHub Pages in repository settings (use gh-pages branch)

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel auto-detects the Vite configuration
3. Deploy with one click
4. Get automatic deployments on every push to main branch

### Netlify
1. Drag and drop the `dist` folder
2. Or connect your Git repository
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy site

## 🔧 Configuration

### Tailwind Configuration
Customize colors, spacing, and animations in `tailwind.config.ts`:

```typescript
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette
      },
      animation: {
        // Custom animations
      }
    }
  }
}
```

### Vite Configuration
Customize build settings in `vite.config.ts`:

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## ♿ Accessibility

- **WCAG 2.1 AA** compliance
- **Keyboard navigation** support
- **Screen reader** friendly
- **High contrast** mode support
- **Focus indicators** for all interactive elements

## 🤝 Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Vite](https://vitejs.dev/) for the amazing build tool
- [Lucide Icons](https://lucide.dev/) for the icon set

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **shadcn/ui** for the beautiful component library
- **Tailwind CSS** for the utility-first CSS framework
- **Vite** for the lightning-fast build tool
- **React Team** for the amazing framework

## 📞 Contact

- **Portfolio**: [Click here](https://rishus-vivid-folio.vercel.app)
- **GitHub**: [@RishuBurnwal](https://github.com/yourusername)
- **LinkedIn**: [RishuBurnwal](https://www.linkedin.com/in/rishuburnwal/)
- **Email**: [Email](rishukumarburnwal9525@gmail.com)

---

⭐ **Star this repository if you found it helpful!**
