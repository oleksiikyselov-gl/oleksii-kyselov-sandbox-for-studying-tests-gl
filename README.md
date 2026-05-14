# React Monorepo Sandbox (for studying tests)

A study-focused React + TypeScript monorepo demonstrating testing patterns and architectural practices.

## Features

- **Monorepo Structure**: Managed via Turbo, separating applications (`apps/web`) from shared libraries (`libs/ui`, `libs/services`).
- **Testing**:
  - Jest + JSDOM environment.
  - React Testing Library + user-event for realistic user interactions.
  - Mocking strategies (`jest.mock` & Mock-libraries).
  - 100% test coverage for UI components and services.
- **Styling**: CSS Modules with global theme variables.
- **CI/CD**: Automatic deployment to GitHub Pages via GitHub Actions.

## Getting Started

### Prerequisites

- Node.js >= 22.21.1

### Setup

```bash
npm install
```

### Development

```bash
# Start the web application
npm run dev
```

### Testing

```bash
# Run all tests
npm run test

# Run tests with coverage report
npm run test:coverage
```

## Architecture

- `apps/web`: The main React application.
- `libs/ui`: Shared reusable React components, styled with CSS Modules.
- `libs/services`: Business logic and API services (e.g., authorization).
- `packages/`: Shared infrastructure (ESLint configs, Jest presets, TS configs).

## Key Patterns Learned

- **Mock-Library Pattern**: Centralized mocks for service layers.
- **Async Testing**: Using `findBy*` and `jest.mock` for stable integration tests.
- **CSS Modules**: Scoped styling for better maintainability.
- **Monorepo Workflow**: Efficient dependency management and modular design.
