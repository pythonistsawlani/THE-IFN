# IFN - ICFAI Founders Network

A comprehensive incubator management platform designed for startups, founders, mentors, and administrators.

## Overview

IFN (ICFAI Founders Network) is a complete web application for managing a startup incubator ecosystem. It includes features for idea validation, team building, mentorship, and community engagement.

## Features

### 🔐 Authentication
- User login and registration
- Secure authentication flow
- Profile management

### 📊 Dashboard
- Overview of platform activity
- Quick stats and metrics
- Recent activity feed
- Upcoming events calendar

### 📝 Feed & Posts
- Create and share startup ideas
- Like, comment, and bookmark posts
- Tag-based categorization
- Trending content

### 🚀 Idea Pipeline (6-Gate System)
1. **Ideation** - Initial concept phase
2. **Validation** - Market research and validation
3. **Prototyping** - Building the MVP
4. **Testing** - User testing and feedback
5. **Launch Ready** - Preparation for launch
6. **Launched** - Live product

### 💡 Problem Hub
- Browse real-world problems
- Upvote and comment on problems
- Find inspiration for new ideas
- Category-based filtering

### 👥 Team Board
- Find co-founders and team members
- Post job openings
- View team opportunities
- Skill-based matching

### 📚 Autopsy Library
- Learn from failed startups
- Understand common mistakes
- Share your own learnings
- Anonymous submissions supported

### 🗓️ Calendar & Events
- View upcoming events
- Workshop scheduling
- Mentor connect sessions
- Demo day preparation

### 👤 Profile Management
- Personal profile pages
- Portfolio of ideas and posts
- Activity tracking
- Edit profile information

### 🔍 Search
- Global search across platform
- Search posts, ideas, people, problems
- Trending searches
- Category filters

### 🔔 Notifications
- Real-time activity updates
- Email notifications
- Customizable preferences
- Mark as read functionality

### ⚙️ Settings
- Account information
- Notification preferences
- Privacy settings
- Profile customization

### 🛡️ Admin Panel
- User management
- Content moderation
- Tag management
- Pipeline approval workflow
- Platform analytics

## Design System

### Brand Colors
- **Red**: `#E8002D` - Primary accent, CTAs
- **Blue**: `#0033A0` - Primary brand color
- **White**: `#FFFFFF` - Background, clean UI

### Typography
- **Headings**: Space Grotesk (700, 800)
- **Body**: Inter (400, 500, 600)

### Style
- Modern, clean, startup-grade UI
- Inspired by Notion, Product Hunt, and Y Combinator
- Responsive design (desktop-first)
- Consistent spacing and component system

## Tech Stack

- **Framework**: React 18.3.1
- **Routing**: React Router 7.13.0
- **Styling**: Tailwind CSS 4.1.12
- **UI Components**: Radix UI, shadcn/ui
- **Icons**: Lucide React
- **Build Tool**: Vite 6.3.5
- **Package Manager**: pnpm

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── common/           # Shared components (Header, Sidebar)
│   │   ├── layouts/          # Layout components (MainLayout, AuthLayout)
│   │   ├── ui/               # UI component library
│   │   └── wireframes/       # Original wireframe components (preserved)
│   ├── pages/                # All application pages
│   │   ├── auth/             # Authentication pages
│   │   ├── posts/            # Post-related pages
│   │   ├── pipeline/         # Pipeline management pages
│   │   └── admin/            # Admin panel pages
│   └── App.tsx               # Main app with routing
├── styles/
│   ├── fonts.css             # Font imports
│   ├── theme.css             # Design tokens and theme
│   └── tailwind.css          # Tailwind configuration
└── imports/                  # Figma imports (if any)
```

## Key Pages

### Public Routes
- `/login` - User login
- `/register` - User registration

### Protected Routes
- `/dashboard` - Main dashboard
- `/feed` - Browse posts and ideas
- `/posts/create` - Create new post
- `/posts/:id` - View post details
- `/calendar` - Events and workshops
- `/profile` - User profile
- `/pipeline` - Idea pipeline overview
- `/pipeline/submit` - Submit new idea
- `/pipeline/:id` - Idea details
- `/problems` - Problem hub
- `/team-board` - Find team members
- `/autopsy` - Autopsy library
- `/admin` - Admin panel
- `/admin/tags` - Tag management
- `/admin/pipeline` - Pipeline approvals
- `/notifications` - Notification center
- `/search` - Global search
- `/settings` - User settings

## Navigation

### Header
- Logo and branding
- Global search bar
- Notifications icon
- User profile menu

### Sidebar
- Dashboard
- Feed
- Calendar
- Idea Pipeline
- Problems Hub
- Team Board
- Autopsy Library
- Admin Panel (for admins)
- Settings

## Component Highlights

### Reusable Components
- **Cards**: Consistent card design across the platform
- **Badges**: Tag and category badges
- **Buttons**: Multiple variants (primary, outline, ghost)
- **Forms**: Input fields, textareas, select dropdowns
- **Navigation**: Tabs, breadcrumbs, sidebar navigation
- **Feedback**: Alerts, toasts, loading states

### Layout Components
- **MainLayout**: Standard layout with header and sidebar
- **AuthLayout**: Centered layout for authentication pages

## Responsive Design

The application is designed with a desktop-first approach but includes responsive breakpoints:
- Mobile: 375px and up
- Tablet: 768px and up
- Desktop: 1024px and up
- Large Desktop: 1280px and up

## Development

### Prerequisites
- Node.js 18+
- pnpm

### Getting Started

Note: This is a Figma Make project. The development server is automatically managed.

DO NOT run:
- `npm run build` or `vite build`
- `npm run dev` or `vite`
- Manual server starts

The preview is automatically available through the Figma Make interface.

### Key Development Notes
- Use pnpm for package management
- Follow the existing component patterns
- Maintain consistent styling with the design system
- Use the IFN brand colors for all CTAs and primary elements
- Keep components modular and reusable

## Future Enhancements

Potential areas for expansion:
- Real-time collaboration features
- Video conferencing integration
- Advanced analytics dashboard
- AI-powered matching for teams
- Integration with external APIs (LinkedIn, GitHub)
- Mobile app version
- Advanced permission system
- Multi-language support

## Contributing

When contributing to this project:
1. Follow the existing code style
2. Use the established component library
3. Maintain consistency with the design system
4. Test responsive behavior
5. Document new features

## License

Private project for ICFAI Founders Network.

---

Built with ❤️ for the startup community
