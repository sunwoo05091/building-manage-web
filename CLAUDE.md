# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**엄지** is a responsive landing page for a building management mobile application. Built with Next.js 16, TypeScript, and Tailwind CSS, it showcases the app's features and provides download links for iOS (App Store) and Android (Google Play).

## Development Commands

```bash
# Start development server (port 3000)
npm run dev

# Build for production
npm run build

# Run production server
npm start

# Run ESLint
npm run lint

# Fix ESLint issues
npm run lint --fix
```

## Project Structure

### Core Application
- **`src/app/`** - Next.js App Router pages and layouts
  - **`layout.tsx`** - Root layout with metadata, fonts (Noto Sans KR), and global styles
  - **`page.tsx`** - Main landing page (hero, features, screenshots, download section, footer)
  - **`privacy/page.tsx`** - Privacy policy page
  - **`terms/page.tsx`** - Terms of service page
- **`src/app/globals.css`** - Global styles using Tailwind CSS v4 and CSS custom properties for theming
- **`public/`** - Static assets
  - **`images/`** - Background images, logos, app mockups
  - **`icons/`** - SVG icons for feature cards

### Configuration Files
- **`tsconfig.json`** - TypeScript configuration with `@/*` path alias pointing to `src/`
- **`next.config.ts`** - Next.js configuration (currently minimal)
- **`package.json`** - Dependencies and scripts

## Technology Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 16.0.5 | React framework with App Router |
| React | 19.2.0 | UI library |
| TypeScript | ^5 | Type safety |
| Tailwind CSS | ^4 | Utility-first styling |
| Noto Sans KR | - | Korean font via Google Fonts |
| ESLint | ^9 | Code linting |

## Key Architectural Decisions

### Styling Strategy
- **Tailwind CSS v4** with `@import "tailwindcss"` directive in `globals.css`
- Custom CSS variables defined in `:root` for brand colors (blue primary, dark blue secondary)
- Korean typography: Noto Sans KR imported from Google Fonts with weights 400, 500, 600, 700
- Applied globally via `--font-noto-sans-kr` CSS variable

### Language & Metadata
- Application is Korean-language focused (`lang="ko"` in HTML root)
- All visible text (features, navigation) is in Korean
- Meta descriptions and OG tags are in Korean

### Page Structure
The main landing page (`page.tsx`) uses semantic HTML sections:
1. **Header** - Fixed navigation with logo and feature links
2. **Hero Section** - Gradient background with app intro and mockup
3. **Features Section** - 4-column grid showcasing key features (민원 관리, 출퇴근 관리, 입주민 관리, 공지사항)
4. **Screenshots Section** - Horizontal scrollable gallery of app mockups
5. **Download Section** - Call-to-action with App Store and Google Play links
6. **Footer** - Logo, legal links, copyright

### Image Handling
- Uses Next.js `Image` component for optimization
- Mockup images located in `public/images/webDesign/`
- Icon SVGs in `public/icons/`
- Images use `priority` attribute on above-the-fold images (hero mockup, home background)

## Important Implementation Notes

### Download Links
App Store and Google Play links are currently placeholder (`href="#"`) and should be updated in `page.tsx` with actual app store URLs.

### Custom Theme Colors
Update the CSS custom properties in `globals.css` to change the app's color scheme:
```css
--primary: #2563eb;        /* Blue accent */
--primary-dark: #1d4ed8;   /* Darker blue */
--secondary: #1e3a5f;      /* Dark blue for sections */
```

### Font Configuration
The Noto Sans KR font is configured in `layout.tsx`. Adjust weights or subsets if needed in the `Noto_Sans_KR()` call.

### SEO & Metadata
- OG tags configured in `layout.tsx` metadata object
- Update `title`, `description`, and `keywords` for SEO changes
- All metadata is bilingual-ready (currently Korean)

## Deployment

This project is configured for Vercel deployment (see `.vercel/project.json`). The build and start scripts follow standard Next.js conventions. Static export is possible by modifying `next.config.ts` if needed.
