# Babak Rahimi - Personal Website

A minimalist personal website built with Astro and Tailwind CSS, featuring smooth animations and a clean design.

## 🚀 Live Site

Visit the live site at: [babakrahimi.com](https://babakrahimi.com)

## 🛠️ Tech Stack

- **[Astro](https://astro.build)** - Static site generator
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **TypeScript** - Type safety and better developer experience
- **CSS Animations** - Smooth fade-in and hover effects

## ✨ Features

- **Responsive Design** - Works perfectly on all devices
- **Fast Loading** - Optimized static site generation
- **Smooth Animations** - CSS-based animations for better performance
- **Social Links** - Connect via GitHub, LinkedIn, Twitter, Instagram, and email
- **Clean Typography** - JetBrains Mono font for a professional look
- **Dark Mode Ready** - SVG favicon adapts to system theme

## 🏗️ Development

### Prerequisites

- Node.js 18.17.0 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/babakrahimi/babakrahimi.github.io.git
cd babakrahimi.github.io

# Install dependencies
npm install
```

### Development Server

```bash
# Start development server
npm run dev

# Open http://localhost:4321 in your browser
```

### Build & Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## 📁 Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   └── pages/
│       └── index.astro
├── .github/
│   └── workflows/
│       └── deploy.yml
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🚀 Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions. Every push to the `master` branch triggers a new deployment.

### Manual Deployment

If you need to deploy manually:

1. Build the site: `npm run build`
2. The built files will be in the `dist/` directory
3. Deploy the contents of `dist/` to your hosting platform

## 🎨 Customization

### Colors & Styling

The site uses a monochromatic color scheme with black and white. To customize:

1. Update colors in `src/pages/index.astro`
2. Modify Tailwind classes for different styling
3. Add custom CSS in the `<style>` section

### Content

Update the personal information in `src/pages/index.astro`:

- Name and title
- Description text
- Social media links
- Email address

### Animations

The site includes several CSS animations:

- **Fade In**: Text and elements fade in on page load
- **Expand Width**: Horizontal line animation
- **Hover Effects**: Social icons scale and change color on hover

## 🔧 Configuration

### Astro Configuration

See `astro.config.mjs` for Astro settings including:
- Tailwind CSS integration
- Build output configuration

### Tailwind Configuration

See `tailwind.config.mjs` for Tailwind settings including:
- Content paths
- Custom font family (JetBrains Mono)

## 📱 Browser Support

The site is tested and works in:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this repository and customize it for your own use. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📧 Contact

- **Website**: [babakrahimi.com](https://babakrahimi.com)
- **GitHub**: [@babakrahimi](https://github.com/babakrahimi)
- **LinkedIn**: [babakrahimi](https://linkedin.com/in/babakrahimi)
- **Email**: babak@rahimi.co

---

Built with ❤️ using Astro and Tailwind CSS