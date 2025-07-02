# Copilot Instructions for Thunder & Lightning Website

**IMPORTANT: User validation is done through the website interface. Coding agent validation should be done through code analysis and programmatic tests.**

## Development Environment Setup

### Prerequisites
1. **Install pnpm** (if not already installed):
   ```bash
   npm install -g pnpm
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

### Running the Website
- **Development server**: `pnpm run dev` - Starts Vite dev server with hot reload
- **Build project**: `pnpm run build` - TypeScript compilation + Vite build
- **Preview build**: `pnpm run preview` - Preview the built application
- **Run tests**: `pnpm run test` - Execute Vitest test suite

## Project Structure & Architecture

### Core Technology Stack
- **Framework**: Vanilla TypeScript with Vite
- **UI Library**: ENGIE Fluid Design System (`@engie-group/fluid-design-system`)
- **Design Tokens**: ENGIE Fluid Design Tokens (`@engie-group/fluid-design-tokens`)
- **Testing**: Vitest with jsdom environment
- **Build Tool**: Vite
- **Package Manager**: pnpm

### Main Application Entry Point
- **`src/main.ts`**: Main application entry point that:
  - Imports design system styles
  - Assembles page fragments into the DOM
  - Initializes internationalization
  - Sets up interactive features (dark mode, site navigation)

### Directory Structure

#### `/src/fragments/` - Page Sections
Main page building blocks that get assembled in `main.ts`:
- **`header.ts`**: Top navigation and branding
- **`hero.ts`**: Main hero section with primary messaging
- **`post.ts`**: Main content sections with company story
- **`delivered.ts`**: Success metrics and achievements
- **`sites.ts`**: Grid of city/monument cards
- **`contact.ts`**: Contact information and forms
- **`footer.ts`**: Site footer

#### `/src/components/` - Reusable UI Components
- **`site-card.ts`**: Card component for city/monument displays
- **`data-card.ts`**: Data visualization cards
- **`contact-card.ts`**: Contact information cards
- **`post-part.ts`**: Content section components

#### `/src/scripts/` - Business Logic
- **`index.ts`**: Main script orchestration and utilities
- **`translate.ts`**: Internationalization system with dynamic language loading
- **`types.ts`**: TypeScript type definitions for supported languages

#### `/src/data/` - Static Data
- **`cities.json`**: City data including:
  - Monument information
  - Electricity generation metrics (MWh)
  - Lightning strike statistics
  - Carbon footprint data
  - Household connection data

#### `/src/translations/` - Internationalization
- **`en.json`**: English translations (complete structure)
- Translation keys are hierarchical (e.g., `"hero.title"`, `"post.part1.title"`)
- Uses `data-translate-key` attributes for automatic translation

#### `/src/styles/` - Styling
- **`style.css`**: Global styles and layout
- **`components.css`**: Component-specific styling
- Relies heavily on ENGIE Fluid Design System classes

#### `/src/tests/` - Testing
- **`index.test.ts`**: Main test suite using Vitest

#### `/public/` - Static Assets
- **`sites/`**: City/monument images (paris.jpg, london.jpg, etc.)
- **`logo.svg`**: Application logo
- **`vite.svg`**: Vite branding

## Key Features & Functionality

### Internationalization System
- Dynamic language loading via `translate.ts`
- Elements with `data-translate-key` attributes are automatically translated
- Falls back to English if translation file not found
- Supports nested translation keys using dot notation

### Interactive Features
- **Dark mode toggle**: Implemented in `scripts/index.ts`
- **Site card navigation**: Previous/next navigation for city cards
- **Responsive design**: Uses ENGIE Fluid Design System responsive classes

### Data Visualization
- City performance metrics displayed via data cards
- Lightning strike statistics and energy generation data
- Carbon footprint and household connection metrics

## Development Guidelines

### File Naming Conventions
- **Fragments**: `kebab-case.ts` (e.g., `hero.ts`, `post.ts`)
- **Components**: `kebab-case.ts` (e.g., `site-card.ts`)
- **Scripts**: `camelCase.ts` (e.g., `translate.ts`)

### Component Pattern
Components export functions that return HTML strings:
```typescript
export const componentName = (props: ComponentProps) => {
    return `<div>...</div>`
}
```

### Translation Pattern
Use `data-translate-key` attributes:
```html
<h1 data-translate-key="hero.title"></h1>
```

### Styling Approach
- Use ENGIE Fluid Design System classes (e.g., `nj-card`, `nj-button`)
- Custom CSS in `/src/styles/` for specific adjustments
- Follow design system conventions

## Business Context
This is a **Thunder & Lightning** company website showcasing:
- Lightning-to-electricity conversion technology
- Monument-based energy capture systems
- Global city implementations
- Environmental impact metrics
- Clean energy innovation story

The site serves as both a marketing tool and data dashboard for T&L's lightning energy harvesting business across major world cities.

## Testing Strategy
- Use Vitest for unit and integration tests
- Test environment configured with jsdom for DOM testing
- Focus on component rendering, data processing, and user interactions
- Validate translation system functionality
