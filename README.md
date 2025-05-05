# ApprentieMalin - AI-Powered Academic Support

ApprentieMalin is a modern web application built with Next.js, TypeScript, and TailwindCSS that provides AI-powered academic support for primary and middle school students via WhatsApp.

## Features

- **AI Tutor on WhatsApp**: Connect with our AI tutor directly through WhatsApp for academic help
- **Personalized Learning**: Get tailored explanations for homework and study materials
- **Multiple Subjects**: Support for math, science, language arts, history, and more
- **Child Safety**: Built-in content moderation and age-appropriate responses
- **Interactive Learning**: Engage with practice exercises and quizzes
- **Parent Dashboard**: Monitor learning progress and activity
- **Multilingual Support**: Available in multiple languages

## Tech Stack

- **Frontend**: Next.js 14+ with App Router, TypeScript, TailwindCSS
- **Animation**: Framer Motion for smooth UI animations
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Performance Optimized**: Core Web Vitals focused implementation
- **Accessibility**: WCAG compliant UI components
- **TypeScript**: Strong typing for better code quality

## Project Structure

```
app/
├── components/           # Reusable UI components
│   ├── ui/               # Base UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Section.tsx
│   │   └── ...
│   ├── Header.tsx        # Site header
│   └── Footer.tsx        # Site footer 
├── sections/             # Page sections
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   └── ...
├── hooks/                # Custom React hooks
│   └── useAnimationVariants.ts
├── types/                # TypeScript type definitions
│   └── index.ts
├── globals.css          # Global styles and Tailwind directives
├── layout.tsx           # Root layout component
└── page.tsx             # Main landing page
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/apprentiemalin.git
   cd apprentiemalin
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build and Deployment

```bash
# Build for production
npm run build
# or
yarn build

# Start production server
npm run start
# or
yarn start
```

## Code Style and Best Practices

- **Component Structure**: Functional components with TypeScript interfaces
- **State Management**: React hooks for local state
- **Styling**: TailwindCSS with global utility classes
- **Animations**: Framer Motion for declarative animations
- **Accessibility**: Proper ARIA attributes and keyboard navigation
- **Performance**: Optimized images, code splitting, and minimal dependencies

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please contact us at support@apprentiemalin.com
