# 🚀 Portfolio - Brian Jaén Medina

A modern, responsive portfolio website built with Next.js 13+, TypeScript, and Tailwind CSS. This portfolio showcases my projects, skills, and experience as a Full-Stack Developer based in Barcelona, Spain.

[![Deployed on Custom Server](https://img.shields.io/badge/Deployed-Live-brightgreen)](https://portfolio.brianjaen.com)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js%2013+-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2+-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3+-06B6D4)](https://tailwindcss.com/)

## 🌐 Live Demo

Visit the live portfolio: **[portfolio.brianjaen.com](https://portfolio.brianjaen.com)**

## ✨ Features

- **🎨 Modern Design**: Clean and professional interface with smooth animations
- **🌙 Dark/Light Mode**: Toggle between themes with persistent preference storage
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **⚡ Fast Performance**: Built with Next.js 13+ App Router for optimal loading speeds
- **🎯 SEO Optimized**: Meta tags and structured data for better search visibility
- **♿ Accessible**: WCAG compliance with proper semantic markup
- **🚀 Auto Deployment**: CI/CD pipeline with GitHub Actions
- **🔧 Type Safety**: Full TypeScript implementation for robust development

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 13.5+ (App Router)
- **Language**: TypeScript 5.2+
- **Styling**: Tailwind CSS 3.3+
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode

### Development Tools
- **Linting**: ESLint with Next.js config
- **Package Manager**: npm
- **Version Control**: Git & GitHub

### Deployment & Infrastructure
- **CI/CD**: GitHub Actions
- **Process Manager**: PM2
- **Web Server**: Nginx with SSL/TLS
- **Hosting**: Custom VPS with Docker support

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jaendev/portfolio-jaendev.git
   cd portfolio-jaendev
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Type checking
npx tsc --noEmit     # TypeScript type checking
```

## 🏗️ Project Structure

```
portfolio-jaendev/
├── app/                    # Next.js 13+ App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page component
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── navbar.tsx        # Navigation component
│   ├── footer.tsx        # Footer component
│   ├── theme-provider.tsx # Theme context provider
│   └── theme-toggle.tsx  # Dark/Light mode toggle
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/              # Static assets
│   └── images/          # Image assets
├── .github/             # GitHub Actions workflows
│   └── workflows/       # CI/CD pipelines
├── components.json      # shadcn/ui configuration
├── next.config.js       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## 🚀 Deployment

This portfolio is deployed using a custom CI/CD pipeline with GitHub Actions:

### Automatic Deployment
1. **Push to main branch** triggers the deployment workflow
2. **Build process** runs on GitHub Actions runners
3. **Artifacts** are uploaded and deployed to the production server
4. **PM2** manages the application process with zero-downtime deployments

### Manual Deployment
```bash
# Build the application
npm run build

# Deploy to production server (requires SSH access)
# Handled automatically via GitHub Actions
```

## 🎨 Customization

### Updating Content
- **Projects**: Edit the `projects` array in `app/page.tsx`
- **Skills**: Modify the skill arrays (frontend, backend, etc.) in `app/page.tsx`
- **Personal Info**: Update contact information and bio in `app/page.tsx`

### Styling
- **Colors**: Modify the color scheme in `tailwind.config.ts`
- **Components**: Customize UI components in the `components/ui/` directory
- **Layout**: Adjust layout and spacing in component files

### Adding New Sections
1. Create new components in the `components/` directory
2. Import and use them in `app/page.tsx`
3. Update navigation if needed in `components/navbar.tsx`

## 📧 Contact

**Brian Jaén Medina**  
Full-Stack Developer | Barcelona, Spain 🇪🇸

- **Email**: [infobrian03@gmail.com](mailto:infobrian03@gmail.com)
- **LinkedIn**: [brian-jaén-medina](https://www.linkedin.com/in/brian-ja%C3%A9n-medina-513272252)
- **GitHub**: [@jaendev](https://github.com/jaendev)
- **Portfolio**: [portfolio.brianjaen.com](https://portfolio.brianjaen.com)

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome! Feel free to:

1. **Open an issue** for bugs or suggestions
2. **Fork the repository** to use as a template
3. **Submit a pull request** for improvements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**⭐ If you found this portfolio helpful, please consider giving it a star on GitHub!**

Built with ❤️ in Barcelona by [Brian Jaén Medina](https://github.com/jaendev)
