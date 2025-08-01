# Text Tools Suite

A comprehensive web-based text processing toolkit built with modern technologies for developers, writers, and content creators.

## 🚀 Tech Stack

- **Framework**: [TanStack Start](https://start.tanstack.com/)
- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS + [shadcn/ui](https://ui.shadcn.com/)
- **Deployment**: Vercel
- **State Management**: TanStack Query + Jotai
- **Testing**: Vitest + React Testing Library

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ 
- pnpm
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rockyliyanlok/ai-start-text-tools-suite.git
cd ai-start-text-tools-suite
```

2. Install dependencies:
```bash
pnpm install
```

3. Start development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production
```bash
pnpm build
pnpm start
```

## 📁 Folder Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── layout/         # Layout components (Header, Sidebar)
│   └── tools/          # Tool-specific components
├── lib/                # Utility functions and configurations
│   ├── utils/          # Text processing utilities
│   └── constants/      # App constants and configs
├── routes/             # TanStack Start routes
│   ├── tools/          # Individual tool pages
│   └── _layout.tsx     # Root layout
├── styles/             # Global styles and Tailwind config
└── types/              # TypeScript type definitions
```

## 🧰 Available Tools

### MVP Tools
- **Case Converter**: Transform text between different cases (uppercase, lowercase, camelCase, etc.)
- **Word/Character Counter**: Count words, characters, paragraphs, and reading time
- **Base64 Encoder/Decoder**: Encode and decode Base64 strings

### Planned Tools
- URL Encoder/Decoder
- JSON Formatter/Validator
- Hash Generator (MD5, SHA1, SHA256)
- Lorem Ipsum Generator
- Text Diff Checker
- And many more...

## 🌟 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Dark/Light Mode**: Toggle between themes
- **Favorites System**: Save frequently used tools
- **Recent Tools**: Quick access to recently used tools
- **Copy to Clipboard**: One-click copying of results
- **Download Results**: Save processed text as files
- **SEO Optimized**: Fast loading and search engine friendly

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
