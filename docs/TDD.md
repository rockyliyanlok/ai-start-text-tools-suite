# Technical Design Document (TDD)
## Text Tools Suite

**Version**: 1.0  
**Date**: July 2025  
**Technical Lead**: Development Team  

---

## 🏗️ Architecture Overview

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Browser (Client)                     │
├─────────────────────────────────────────────────────────┤
│  React Components (UI Layer)                           │
│  ├── Layout Components (Header, Sidebar, Footer)       │
│  ├── Tool Components (Case Converter, Counter, etc.)   │
│  └── Shared Components (Button, Input, Card, etc.)     │
├─────────────────────────────────────────────────────────┤
│  State Management Layer                                 │
│  ├── Jotai (Global State)                            │
│  ├── TanStack Query (Server State)                    │
│  └── Local Storage (Persistence)                      │
├─────────────────────────────────────────────────────────┤
│  Business Logic Layer                                  │
│  ├── Text Processing Utils                            │
│  ├── Validation Functions                             │
│  └── Helper Functions                                 │
├─────────────────────────────────────────────────────────┤
│  TanStack Start (Framework)                           │
│  ├── File-based Routing                              │
│  ├── SSR/SSG Support                                 │
│  └── Build Optimization                              │
└─────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────┐
│                 Vercel (Deployment)                    │
│  ├── Edge Functions                                   │
│  ├── CDN Distribution                                 │
│  └── Analytics & Monitoring                          │
└─────────────────────────────────────────────────────────┘
```

### Technology Stack

#### Frontend Framework
- **TanStack Start**: Modern React framework with file-based routing
- **React 18**: Component library with concurrent features
- **TypeScript**: Type safety and developer experience
- **Vite**: Fast build tool and development server

#### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality, accessible component library
- **Radix UI**: Headless UI primitives for complex components
- **Lucide React**: Consistent icon library

#### State Management
- **Jotai**: Atomic state management for global state
- **TanStack Query**: Server state management and caching
- **Local Storage**: Client-side persistence for user preferences

#### Development Tools
- **ESLint**: Code linting and style enforcement
- **Prettier**: Code formatting
- **Husky**: Git hooks for quality gates
- **Vitest**: Unit testing framework
- **React Testing Library**: Component testing utilities
## 🗺️ Component Map

### Layout Components

```typescript
// Component Hierarchy
App
├── RootLayout
│   ├── Header
│   │   ├── Logo
│   │   ├── Navigation
│   │   └── ThemeToggle
│   ├── Sidebar
│   │   ├── ToolCategory
│   │   ├── ToolLink
│   │   └── FavoritesList
│   ├── MainContent
│   │   └── [Tool Pages]
│   └── Footer
└── ErrorBoundary
```

### Tool Components

```typescript
// Generic Tool Structure
ToolPage
├── ToolHeader
│   ├── ToolTitle
│   ├── ToolDescription
│   └── FavoriteButton
├── ToolContent
│   ├── InputSection
│   │   ├── TextArea
│   │   └── InputOptions
│   ├── ActionPanel
│   │   ├── PrimaryAction
│   │   └── SecondaryActions
│   └── OutputSection
│       ├── ResultDisplay
│       └── OutputControls
└── ToolFooter
    ├── HelpText
    └── AdSpace
```

### Shared Components

```typescript
// Reusable Components
ui/
├── Button
├── Card
├── Dialog
├── DropdownMenu
├── Input
├── Label
├── Sheet
├── Switch
├── Tabs
├── TextArea
├── Toast
└── Tooltip
```
## 🌐 API Strategy

### Client-Side Processing

Text Tools Suite is primarily a client-side application with no backend API requirements for the MVP phase. All text processing happens in the browser using JavaScript/TypeScript utilities.

### Future API Considerations

For post-MVP phases, we may consider implementing the following APIs:

1. **Analytics API**
   - Purpose: Track anonymous usage statistics
   - Implementation: Lightweight endpoint for event logging
   - Data: Tool usage, performance metrics

2. **Preferences API**
   - Purpose: Store user preferences across devices (optional)
   - Implementation: Simple CRUD operations with user authentication
   - Data: Tool favorites, UI preferences, recent tools

3. **Advanced Processing API**
   - Purpose: Handle resource-intensive operations
   - Implementation: Serverless functions for complex processing
   - Examples: Large file processing, advanced regex operations

## 🧩 State Management Design

### Global State (Jotai)

```typescript
// Store structure
interface AppState {
  // Theme
  theme: 'light' | 'dark' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  
  // Favorites
  favorites: string[]; // Tool IDs
  addFavorite: (toolId: string) => void;
  removeFavorite: (toolId: string) => void;
  
  // Recent Tools
  recentTools: string[]; // Tool IDs
  addRecentTool: (toolId: string) => void;
  clearRecentTools: () => void;
}
```

### Local Storage Persistence

```typescript
// Keys for local storage
const STORAGE_KEYS = {
  THEME: 'text-tools-theme',
  FAVORITES: 'text-tools-favorites',
  RECENT_TOOLS: 'text-tools-recent',
  TOOL_HISTORY: 'text-tools-history', // Per tool input history
};

// Persistence middleware for Jotai
const persistMiddleware = (config) => (set, get, api) => config(
  (...args) => {
    set(...args);
    const state = get();
    localStorage.setItem(STORAGE_KEYS.THEME, state.theme);
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(state.favorites));
    localStorage.setItem(STORAGE_KEYS.RECENT_TOOLS, JSON.stringify(state.recentTools));
  },
  get,
  api
);
```

### Tool-Specific State

Each tool will manage its own state using local React state (useState/useReducer) for:
- Input values
- Processing options
- Output results
- UI state (loading, error messages)
## 📁 Folder Structure Conventions

### Project Structure

```
text-tools-suite/
├── .github/                  # GitHub workflows and templates
├── docs/                     # Documentation files
├── public/                   # Static assets
│   ├── favicon.ico
│   ├── robots.txt
│   └── site.webmanifest
├── src/                      # Source code
│   ├── components/           # UI components
│   ├── lib/                  # Utilities and helpers
│   ├── routes/               # Application routes
│   ├── styles/               # Global styles
│   └── types/                # TypeScript type definitions
├── .eslintrc.js              # ESLint configuration
├── .gitignore                # Git ignore file
├── .prettierrc               # Prettier configuration
├── package.json              # Dependencies and scripts
├── README.md                 # Project overview
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── vite.config.ts            # Vite configuration
```

### Component Structure

Each component should follow this structure:

```
ComponentName/
├── index.ts                  # Re-export for cleaner imports
├── ComponentName.tsx         # Main component code
├── ComponentName.test.tsx    # Component tests
└── ComponentName.types.ts    # Component-specific types
```

### Tool Implementation Structure

Each tool should be organized as follows:

```
routes/tools/[tool-name]/
├── page.tsx                  # Main page component
├── components/               # Tool-specific components
│   ├── ToolOptions.tsx
│   └── ResultDisplay.tsx
└── utils/                    # Tool-specific utilities
    └── processing.ts
```

## 🎨 Styling Strategy

### Design Reference

The visual design for this project is based on preliminary mockups available in [Loveable](https://lovable.dev/projects/916fdc85-e4b9-437b-bcb7-bf37e802fa43). These mockups should be referenced for UI component styling, layout decisions, and overall visual direction.

### Tailwind CSS

Tailwind CSS will be used as the primary styling solution with the following configuration:

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand colors
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        // Additional color palette
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
```

### shadcn/ui Components

The project will leverage shadcn/ui components which are built on:
- Radix UI for accessibility and behavior
- Tailwind CSS for styling
- Class Variance Authority (CVA) for component variants

### Global Styles

Global styles will be minimal and focused on:
- CSS variables for theming
- Base element styles
- Utility classes not covered by Tailwind

### Theming

The application will support light and dark themes using CSS variables:

```css
:root {
  /* Light theme variables */
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  /* Additional variables */
}

.dark {
  /* Dark theme variables */
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 217.2 91.2% 59.8%;
  --primary-foreground: 222.2 47.4% 11.2%;
  /* Additional variables */
}
```
## 🚀 Performance & Security Notes

### Performance Optimization

#### Bundle Size
- Use code splitting via dynamic imports for tool-specific code
- Tree-shake unused components and utilities
- Optimize and lazy-load images and icons
- Monitor bundle size with tools like `import-cost` and `webpack-bundle-analyzer`

#### Runtime Performance
- Implement virtualization for large text inputs/outputs
- Debounce real-time processing operations
- Memoize expensive calculations with `useMemo` and `useCallback`
- Optimize re-renders with React.memo and proper key usage

#### Loading Strategy
- Implement progressive loading patterns
- Prioritize critical CSS and JS
- Use skeleton loaders for perceived performance
- Preload critical assets

### Security Considerations

#### Client-Side Processing
- All text processing happens client-side, minimizing data exposure
- No data transmission to servers for core functionality
- Input validation to prevent XSS and other injection attacks

#### Local Storage
- No sensitive data stored in local storage
- Clear option for user data
- Encryption for any potentially sensitive preferences

#### Third-Party Dependencies
- Regular security audits of dependencies
- Minimize use of third-party libraries
- Keep dependencies updated to latest secure versions

#### Content Security Policy
```
Content-Security-Policy: 
  default-src 'self';
  script-src 'self' https://www.googletagmanager.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https://www.google-analytics.com;
  connect-src 'self' https://www.google-analytics.com;
  font-src 'self';
  object-src 'none';
  media-src 'none';
  frame-src 'none';
```

## 🧪 Testing Strategy

### Unit Testing
- Test all utility functions with Vitest
- Focus on text processing algorithms
- Aim for >80% coverage of utility functions

### Component Testing
- Test UI components with React Testing Library
- Verify accessibility with axe-core
- Test component interactions and state changes

### Integration Testing
- Test complete tool workflows
- Verify data flow between components
- Test persistence mechanisms

### End-to-End Testing
- Basic smoke tests with Playwright
- Test critical user journeys
- Cross-browser compatibility testing

## 📱 Responsive Design

### Breakpoints
```typescript
const breakpoints = {
  xs: '320px',   // Small mobile
  sm: '640px',   // Mobile
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
  '2xl': '1536px' // Extra large screens
};
```

### Mobile Adaptations
- Sidebar collapses to bottom navigation
- Tool options move to modal dialogs
- Input/output areas stack vertically
- Touch-friendly controls with larger tap targets

### Progressive Enhancement
- Core functionality works without JavaScript
- Basic styling with CSS only
- Enhanced features with JavaScript enabled
- Optimized for various device capabilities

## 🚢 Deployment Strategy

### Vercel Configuration
```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "routes": [
    { "handle": "filesystem" },
    { "src": "/tools/.*", "dest": "/index.html" },
    { "src": "/(.*)", "dest": "/index.html" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=0, must-revalidate"
        }
      ]
    },
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### CI/CD Pipeline
- GitHub Actions for automated testing
- Vercel Preview Deployments for PRs
- Automated lighthouse scoring
- Bundle size monitoring
