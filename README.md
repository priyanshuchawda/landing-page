
# ⏰ TIMELEAP - Temporal Displacement Services

[![Status](https://img.shields.io/badge/Timeline-A%20%7C%20B-brightgreen)]()
[![Reality](https://img.shields.io/badge/Reality-Stable-blue)]()
[![Paradox Level](https://img.shields.io/badge/Paradox%20Level-0%25-success)]()
[![Deployment](https://img.shields.io/badge/Netlify-Deployed-00C7B7)]()

> *"Your past is calling. We have the answer."*

## 🚀 Live Demo
🌐 **Live Site**: [Deployed on Netlify](https://landing-page-timeleap.netlify.app)
📱 **GitHub Repository**: [https://github.com/priyanshuchawda/landing-page.git](https://github.com/priyanshuchawda/landing-page.git)

## 🛠️ Tech Stack
- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Shadcn/ui Components
- **Deployment**: Netlify (Auto-deploy from GitHub)
- **Version Control**: Git + GitHub

## 🌀 Project Overview

**TimeLeap** is a fictional time travel service landing page that showcases advanced web development techniques, creative copywriting, and unique design philosophy. This project demonstrates how to break away from generic AI-generated aesthetics and create a truly memorable digital experience.

### 🎯 Design Philosophy
- **Retro-Futuristic Cyberpunk Aesthetic**: Terminal interfaces, matrix effects, and CRT styling
- **Interactive Storytelling**: Users can switch between timelines and interact with terminal commands
- **Performance-First**: Optimized animations that degrade gracefully on mobile devices
- **Accessibility-Focused**: Screen reader friendly with proper ARIA labels and semantic HTML

## ✨ Features

### 🖥️ Core Experience
- **Dual Timeline System**: Switch between Timeline A (optimistic) and Timeline B (corrupted)
- **Interactive Terminal**: Type commands like `sudo leap`, `help`, `timeline`, and `clear`
- **Real-time Effects**: Matrix rain, glitch text, and mouse-responsive parallax
- **CRT Mode Toggle**: Authentic retro monitor effects with scan lines and curvature
- **Ambient Audio**: Optional CRT humming sound effects

### 📱 Mobile Optimizations
- **Adaptive Animations**: Reduced particle counts and simplified effects for mobile
- **Touch-Friendly Interface**: Optimized for touch interactions
- **Performance Scaling**: Dynamic quality adjustment based on device capabilities
- **Responsive Typography**: Scales appropriately across all screen sizes

### ♿ Accessibility Features
- **Semantic HTML**: Proper heading hierarchy and landmark regions
- **ARIA Labels**: Screen reader support for interactive elements
- **High Contrast**: Maintained readability in both timeline modes
- **Keyboard Navigation**: Full functionality without mouse/touch
- **Reduced Motion**: Respects user preferences for motion sensitivity

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone [repository-url]
cd timeleap

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
npm run build
npm run preview
```

## 🚀 Deployment Guide

### Automatic Deployment via Netlify

This project is configured for automatic deployment to Netlify via GitHub integration:

1. **GitHub Repository**: [https://github.com/priyanshuchawda/landing-page.git](https://github.com/priyanshuchawda/landing-page.git)
2. **Auto-deploy**: Every push to the `main` branch triggers automatic deployment
3. **Build Settings**: 
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18

### Manual Netlify Deployment

If you want to deploy manually:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Go to [Netlify](https://netlify.com)
   - Drag and drop the `dist` folder
   - Or connect your GitHub repository for automatic deployments

### Environment Configuration

The project includes a `netlify.toml` file with:
- Build settings
- Redirect rules for SPA routing
- Environment variables configuration

### Other Deployment Options

**Vercel**:
```bash
npm install -g vercel
vercel --prod
```

**GitHub Pages**:
```bash
npm run build
# Deploy the dist folder to gh-pages branch
```

## 🎮 Interactive Commands

Open the terminal interface and try these commands:

| Command | Effect |
|---------|--------|
| `help` | Display available commands |
| `sudo leap` | Trigger quantum leap animation |
| `timeline` | Switch between Timeline A and B |
| `clear` | Clear terminal output |
| `konami` | Alternative secret command |

## 🛠️ Tech Stack

### Frontend Framework
- **React 18** with TypeScript
- **Vite** for lightning-fast development
- **Tailwind CSS** for utility-first styling

### UI Components
- **Shadcn/ui** component library
- **Lucide React** for icons
- **Radix UI** primitives for accessibility

### Animation & Effects
- **Canvas API** for matrix rain effect
- **CSS Animations** with Tailwind
- **Web Audio API** for ambient sounds
- **Custom React hooks** for state management

## 📂 Project Structure

```
src/
├── components/
│   └── ui/              # Shadcn/ui components
├── pages/
│   └── Index.tsx        # Main landing page
├── lib/
│   └── utils.ts         # Utility functions
└── hooks/               # Custom React hooks
```

## 🎨 Timeline Configurations

### Timeline A - "Optimistic Future"
- **Theme**: Clean, stable, successful time travel
- **Colors**: Green matrix theme
- **Effects**: Subtle glitches, stable interface
- **Messaging**: Professional, confident tone

### Timeline B - "Corrupted Reality"
- **Theme**: Degraded, unstable, compromised system
- **Colors**: Red warning theme
- **Effects**: Heavy glitches, distorted text
- **Messaging**: Corrupted, error-prone interface

## 🔧 Customization

### Adding New Terminal Commands
```typescript
const handleTerminalCommand = (command: string) => {
  const cmd = command.toLowerCase().trim();
  
  if (cmd === "your-command") {
    // Add your custom command logic here
    setTerminalLines(prev => [...prev, `> ${command}`, "Your response here"]);
  }
};
```

### Creating New Timeline Themes
```typescript
const timelineConfig = {
  C: {
    theme: "your-theme",
    primaryColor: "text-blue-400",
    bgColor: "bg-slate-900",
    glitchChance: 0.90,
    title: "YOUR_TITLE"
  }
};
```

## 🎬 Demo & Portfolio

Perfect for showcasing:
- **Frontend Development Skills**: Modern React patterns and performance optimization
- **Creative Problem Solving**: Unique design solutions that stand out
- **User Experience Design**: Thoughtful interactions and accessibility
- **Technical Writing**: In-character documentation and creative copywriting

## 🏆 Performance Optimizations

- **Mobile-First Design**: Optimized for performance on low-end devices
- **Lazy Loading**: Components and effects load only when needed
- **Canvas Optimization**: Dynamic quality scaling based on device capabilities
- **Memory Management**: Proper cleanup of intervals and event listeners
- **Bundle Optimization**: Tree-shaking and code splitting

## 📱 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Graceful Degradation**: Animations disable automatically on low-power devices

## 🤝 Contributing

This is a portfolio/demonstration project, but suggestions and improvements are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Credits & Inspiration

### Design Inspiration
- **The Matrix** (1999) - Green code rain effect
- **Blade Runner 2049** - Retro-futuristic UI design
- **Cyberpunk 2077** - Terminal aesthetics and glitch effects
- **Classic CRT Monitors** - Authentic phosphor glow and scan lines

### Technical Resources
- **Shadcn/ui** - Beautiful, accessible component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Spring** - Animation inspiration
- **Web Audio API** - Ambient sound implementation

### Typography
- **Monospace Fonts** - System fonts for authentic terminal feel
- **Glitch Effect Algorithms** - Custom text corruption implementations

---

*Built with ⚡ by Priyanshu Chawda | Timeline Status: STABLE | Paradox Level: 0%*

**⚠️ DISCLAIMER**: TimeLeap Corp is not responsible for temporal paradoxes, existential crises, or running into your past self at the grocery store. Use of time travel services may result in butterfly effects, grandfather paradoxes, or spontaneous timeline convergence. Always travel responsibly.

*© 3024 TimeLeap Corp. All rights reserved across all timelines.*
