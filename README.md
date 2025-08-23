# 🚀 Rishu's Vivid Portfolio

> A modern, responsive portfolio website built with cutting-edge web technologies

## 📱 Live Demo

- **Portfolio**: [rishus-vivid-folio.vercel.app](https://rishus-vivid-folio.vercel.app)

## 🎥 Video Preview

<p align="center">
  <kbd>
<img src="https://github.com/RishuBurnwal/Portfolio/blob/main/public/Portfolio.gif"></img>
  </kbd>
</p>

<video width="100%" controls>
  <source src="public/Portfolio.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## ✨ Features

- 🎨 **Modern Design System** - Clean, professional UI with smooth animations
- 🌙 **Dark/Light Mode** - Seamless theme switching with persistent preferences
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Performance Optimized** - Built with Vite for lightning-fast development
- 🎭 **Smooth Animations** - CSS animations and transitions for engaging UX
- 🔍 **SEO Optimized** - Meta tags and semantic HTML structure
- 📊 **Interactive Components** - Modern UI components with shadcn/ui
- 🎯 **Accessibility** - WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

### Frontend Framework
- **React 18** - Latest React with hooks and modern patterns
- **TypeScript** - Type-safe development experience
- **Vite** - Ultra-fast build tool and dev server

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library
- **CSS Custom Properties** - Dynamic theming system
- **Framer Motion** - Smooth animations and transitions

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
   Navigate to `http://localhost:8080`

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
│   │   ├── AchievementsSection.tsx   # Accomplishments
│   │   ├── ResumeSection.tsx         # Experience & education
│   │   ├── ContactSection.tsx        # Contact form
│   │   └── Footer.tsx                # Footer component
│   ├── pages/                        # Page components
│   ├── hooks/                        # Custom React hooks
│   ├── lib/                          # Utility functions
│   └── App.tsx                       # Main application component
├── public/                           # Static assets
├── assets/                           # Project assets
└── tailwind.config.ts                # Tailwind configuration
```

## 🎨 Design System

### Color Palette
- **Primary**: Deep Navy (#1e293b)
- **Accent**: Electric Blue (#3b82f6)
- **Secondary**: Purple (#8b5cf6)
- **Neutral**: Gray scale with proper contrast ratios

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300-900
- **Responsive scaling** for optimal readability

### Components
- **Navigation**: Sticky header with smooth scrolling
- **Hero**: Animated introduction with CTA buttons
- **Skills**: Interactive skill cards with progress indicators
- **Projects**: Portfolio showcase with filtering
- **Contact**: Functional contact form with validation

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel auto-detects the Vite configuration
3. Deploy with one click
4. Get automatic deployments on every push

### Netlify
1. Drag and drop the `dist` folder
2. Or connect your Git repository
3. Configure build settings if needed
4. Deploy and get a live URL

### GitHub Pages
1. Build the project: `npm run build`
2. Push the `dist` folder to `gh-pages` branch
3. Enable GitHub Pages in repository settings
4. Configure custom domain if desired

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for local development:

```env
VITE_API_URL=your_api_endpoint
VITE_GA_TRACKING_ID=your_google_analytics_id
```

### Tailwind Configuration
Customize colors, spacing, and animations in `tailwind.config.ts`:

```typescript
module.exports = {
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

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

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
