# Shipping Loads Frontend

A React application for managing and filtering shipping loads with a responsive table interface.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Dependencies

- **React** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **React Hot Toast** - Toast notifications

## Architecture Decisions

- **Generic Table Component** - Reusable with render functions for custom cell content
- **Separated Concerns** - Data fetching, presentation, and UI logic separated
- **Minimal Dependencies** - Only essential libraries added
- **TypeScript First** - Full type safety throughout

## Improvements & Optimizations

- Fix UI flickering during loading
- Use proper keys for table rows (especially for edit/delete actions)
- Add tooltips for truncated table cells
- React Query for API response caching
- Unit tests for components and hooks
- CSV/Excel export functionality
