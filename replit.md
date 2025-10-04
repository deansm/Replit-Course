# Luxe Hair Studio - Hair Salon Booking Application

## Overview

Luxe Hair Studio is a modern hair salon web application built with a glassmorphism design aesthetic. The application allows customers to browse services, view team members, explore a gallery, book appointments, and contact the salon. The application features a React-based frontend with a Node.js/Express backend, using PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- React 18 with TypeScript for type safety
- Vite as the build tool and development server
- Client-side routing using Wouter (lightweight React router)
- Component co-location pattern: pages and reusable components are separated

**UI Component Strategy**
- Shadcn/ui component library (Radix UI primitives with Tailwind styling)
- Custom glassmorphism components (`GlassCard`, `Header`, etc.) built on top of base UI components
- Consistent design system defined in `design_guidelines.md` with specific color palettes for light/dark modes
- Theme toggle functionality with localStorage persistence

**State Management**
- TanStack Query (React Query) for server state management and API data fetching
- Local component state with React hooks for UI state
- Custom hooks for reusable logic (e.g., `use-toast`, `use-mobile`)

**Styling Approach**
- Tailwind CSS with custom configuration for glassmorphism effects
- CSS variables for theming (light/dark mode support)
- Google Fonts (Inter) loaded via CDN
- Custom backdrop-blur and transparency effects for glass aesthetic

**Form Handling**
- React Hook Form with Zod validation
- Form schemas defined using `drizzle-zod` for consistency with backend validation

### Backend Architecture

**Server Framework**
- Express.js with TypeScript
- ESM module system
- Custom middleware for request logging and error handling
- RESTful API design pattern

**Database Layer**
- Drizzle ORM for type-safe database operations
- PostgreSQL database via Neon serverless (WebSocket connection)
- Schema-first approach with Zod validation
- Migrations managed through Drizzle Kit

**Data Models**
- Users: Basic authentication structure (username/password)
- Appointments: Customer booking data (name, email, phone, service, date, time, notes, status)
- Foreign key relationship: appointments reference users

**API Structure**
- `/api/appointments` - CRUD operations for appointment management
  - POST: Create new appointment
  - GET: Retrieve all appointments or filter by userId
  - GET /:id: Retrieve specific appointment
- Storage abstraction layer (`IStorage` interface) for database operations

**Session Management**
- Express session with PostgreSQL store (connect-pg-simple)
- Session-based authentication pattern (implementation incomplete - marked with TODO comments)

### Application Pages

1. **Home** - Hero section with call-to-action, featured services, team preview
2. **Services** - Comprehensive service catalog with pricing and duration
3. **Team** - Stylist profiles with specialties and ratings
4. **Gallery** - Portfolio of work organized by category
5. **Appointments** - View and manage bookings
6. **Contact** - Contact form and salon information

### Development Workflow

**Build Process**
- Development: `tsx` for running TypeScript directly
- Production: Vite builds client, esbuild bundles server
- Type checking: `tsc` without emit
- Database migrations: `drizzle-kit push`

**Project Structure**
- `/client` - React frontend application
- `/server` - Express backend services
- `/shared` - Shared TypeScript types and schemas
- `/migrations` - Database migration files

### Notable Design Decisions

**Glassmorphism Implementation**
- Three intensity levels (light, medium, heavy) for glass cards
- Backdrop blur with semi-transparent white overlays
- Gradient backgrounds (purple to pink/magenta spectrum)
- Border highlights for depth perception

**Authentication Strategy**
- User model exists but authentication is not fully implemented
- Placeholder mock functionality in UI components (marked with TODO comments)
- userId in appointments is nullable, allowing anonymous bookings

**API Error Handling**
- Zod schema validation on request bodies
- Try-catch blocks with appropriate HTTP status codes
- Error logging to console for debugging

**Mobile Responsiveness**
- Mobile menu toggle in header
- Responsive grid layouts for services and team
- Tailwind breakpoint system for adaptive design

## External Dependencies

### Third-Party Services

**Database**
- Neon Serverless PostgreSQL (via `@neondatabase/serverless`)
- Requires `DATABASE_URL` environment variable
- WebSocket-based connection using `ws` library

**Payment Processing**
- Stripe integration via `@stripe/stripe-js` and `@stripe/react-stripe-js`
- PaymentForm component exists but integration is not complete

**Development Tools**
- Replit-specific plugins for development environment
  - `@replit/vite-plugin-runtime-error-modal`
  - `@replit/vite-plugin-cartographer`
  - `@replit/vite-plugin-dev-banner`

### UI Component Libraries

**Radix UI Primitives** (Unstyled, accessible components)
- Dialog, Dropdown Menu, Popover, Select, Toast, and 20+ other components
- Provides accessibility and keyboard navigation out of the box

**Utility Libraries**
- `class-variance-authority` - Type-safe component variants
- `clsx` and `tailwind-merge` - Conditional className utilities
- `date-fns` - Date manipulation and formatting
- `lucide-react` - Icon library

### Key Dependencies

- React ecosystem: `react`, `react-dom`, `react-hook-form`
- Routing: `wouter`
- State management: `@tanstack/react-query`
- Form validation: `zod`, `@hookform/resolvers`
- ORM: `drizzle-orm`, `drizzle-kit`
- Session: `express-session`, `connect-pg-simple`