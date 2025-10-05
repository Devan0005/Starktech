# 🦾 Stark Tech Suit Builder

A futuristic **React-based Suit Builder** inspired by Marvel's Stark technology interfaces from Spider-Man: Far From Home and Tony Stark's lab. Build and customize **Iron Man** and **Spider-Man** suits with real-time 3D previews, holographic UI effects, and cinematic animations.

![Stark Tech Interface](https://img.shields.io/badge/Tech-Stark%20Industries-blue?style=for-the-badge&logo=marvel)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Three.js](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white)

## ✨ Features

### 🎮 Core Functionality
- **Hero Selection**: Choose between Iron Man and Spider-Man suits with holographic scanning effects
- **Real-time 3D Viewer**: Interactive 3D suit models built with Three.js and react-three-fiber
- **Live Customization**: Instant color changes and part swapping with nanotech assembly animations
- **Cinematic Camera**: Smooth camera transitions when switching between heroes

### 🎨 Stark Tech UI Design
- **Holographic Panels**: Floating glass-like panels with neon glow effects
- **Animated Backgrounds**: Dynamic gradients, particle effects, and scanning grids
- **Neon Typography**: Orbitron font with customizable glow effects
- **Arc Reactor Elements**: Pulsing energy indicators and power displays

### 🛠️ Suit Customization
#### Iron Man Features:
- Color picker for primary/secondary suit colors
- Helmet variants (Classic, Stealth, Mark 85)
- Arc Reactor types (Mark 50, Vibranium Enhanced, Nanotech Core)
- Repulsor configurations (Standard, Enhanced Output, Pulse Cannons)

#### Spider-Man Features:
- Web-shooter types (Mechanical, Stark Tech, Nanotech)
- Mask styles (Classic Spider, Tech Enhanced, Stealth Suit)
- Logo variants (Spider Symbol, Stark Enhanced, Iron Spider)
- Color schemes with preset combinations

### 📊 Advanced Analytics
- **Real-time Stats**: Dynamic suit metrics (Strength, Agility, Intelligence, Technology)
- **System Monitoring**: Live status displays for suit components
- **Combat Readiness**: Threat level assessment and deployment status

### 🚀 Export & Sharing
- **Screenshot Capture**: High-quality suit image exports using html2canvas
- **Hero Profile Generation**: JSON-based character cards with stats and configuration
- **Social Sharing**: Built-in sharing capabilities for custom designs

## 🏗️ Tech Stack

- **Frontend**: React 18 with Vite
- **3D Graphics**: Three.js + @react-three/fiber + @react-three/drei
- **Styling**: Pure CSS with CSS Custom Properties (no Tailwind)
- **Animations**: CSS animations + Three.js frame loops
- **Export**: html2canvas for image generation

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd suit-builder
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
   ```
   Navigate to http://localhost:5173
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── SuitViewer3D.jsx          # Main 3D scene with suit models
│   ├── HeroSelector.jsx          # Floating hero selection menu
│   ├── CustomizationPanel.jsx    # Color and part customization
│   ├── StatsPanel.jsx            # Live suit metrics display
│   ├── ExportPanel.jsx           # Screenshot and sharing tools
│   └── LoadingScreen.jsx         # Stark tech loading animation
├── App.jsx                       # Main application layout
├── index.css                     # Global Stark tech styling
└── main.jsx                      # React root
```

## 🎨 CSS Architecture

### Custom Properties (CSS Variables)
```css
:root {
  --stark-blue: #00d4ff;
  --stark-gold: #ffd700;
  --stark-red: #ff1744;
  --neon-blue: rgba(0, 212, 255, 0.8);
  --glass-bg: rgba(255, 255, 255, 0.05);
}
```

### Key Design Classes
- `.glass-panel` - Holographic glass effect with backdrop blur
- `.stark-button` - Animated buttons with neon glow on hover
- `.neon-glow-*` - Color-coded glow effects (blue, gold, red)
- `.text-glow-*` - Glowing text effects for different states
- `.floating` - Subtle floating animation for panels
- `.pulse` - Pulsing animation for active elements

## 🎮 Usage Guide

### 1. Hero Selection
- Click the **"HERO SELECT"** button on the left sidebar
- Choose between **Iron Man** or **Spider-Man**
- Watch the holographic scanning animation during transitions

### 2. Suit Customization
- Use the **"COLORS"** tab to modify primary and secondary colors
- Switch to **"COMPONENTS"** tab to change suit parts and accessories
- All changes apply instantly to the 3D model

### 3. Monitoring Stats
- View real-time suit metrics in the **Stats Panel**
- Monitor system status and power levels
- See how customizations affect performance ratings

### 4. Export Your Design
- Enter a custom hero name in the **Export Panel**
- Click **"CAPTURE SUIT"** for high-quality screenshots
- Generate **"HERO PROFILE"** cards with detailed specifications
- Use **"SHARE DESIGN"** to post on social media

## 🔧 Customization

### Adding New Heroes
1. Add hero data to the `heroes` array in `HeroSelector.jsx`
2. Create corresponding 3D model component in `SuitViewer3D.jsx`
3. Define customization options in `CustomizationPanel.jsx`
4. Update stats in `StatsPanel.jsx`

### Creating Custom Parts
```javascript
const newParts = {
  partType: [
    { 
      id: 'unique-id', 
      name: 'Display Name', 
      description: 'Part description' 
    }
  ]
}
```

### Modifying Color Schemes
Update preset colors in the `CustomizationPanel.jsx` component:
```javascript
<button 
  className="preset-color"
  style={{ backgroundColor: '#YOUR_COLOR' }}
  onClick={() => handleColorChange('primary', '#YOUR_COLOR')}
/>
```

## 🎯 Performance Optimization

- **Suspense Boundaries**: 3D components wrapped in React.Suspense
- **Component Memoization**: Prevents unnecessary re-renders
- **Efficient Animations**: CSS transforms and GPU-accelerated properties
- **Texture Optimization**: Compressed textures for better loading

## 🐛 Troubleshooting

### Common Issues

**3D Models Not Loading**
- Check browser WebGL support
- Ensure proper Three.js dependencies

**Performance Issues**
- Reduce particle count in CSS animations
- Lower 3D model complexity
- Disable post-processing effects on mobile

**Export Problems**
- Grant camera/download permissions
- Check browser CORS policies
- Verify html2canvas compatibility

## 📝 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ⚠️ Mobile browsers (reduced effects)

## 🎨 Design Inspiration

This project recreates the iconic **Stark Industries** interface design from:
- **Spider-Man: Far From Home** - Plane scene suit selection
- **Iron Man movies** - Tony Stark's holographic lab interfaces
- **Marvel's futuristic UI aesthetics** - Clean, technological, and sophisticated

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Marvel Studios** for the incredible Stark Tech design inspiration
- **Three.js community** for powerful 3D graphics tools
- **React community** for excellent ecosystem and tools

---

**Built with ⚡ by Stark Industries Technology Division**

*"Sometimes you gotta run before you can walk." - Tony Stark*