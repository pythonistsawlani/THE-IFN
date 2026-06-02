# IFN Platform - Information Architecture

## Site Map

```
IFN Platform
│
├── Public Pages
│   ├── Login (/login)
│   └── Register (/register)
│
└── Authenticated Pages
    │
    ├── Dashboard (/dashboard)
    │   ├── Quick Stats
    │   ├── Recent Activity
    │   ├── Upcoming Events
    │   └── Quick Actions
    │
    ├── Feed (/feed)
    │   ├── All Posts
    │   ├── Trending
    │   ├── Following
    │   └── Post Detail (/posts/:id)
    │       ├── Post Content
    │       ├── Comments
    │       ├── Reactions
    │       └── Share Options
    │
    ├── Content Creation
    │   └── Create Post (/posts/create)
    │       ├── Title & Description
    │       ├── Tag Selection
    │       └── Draft System
    │
    ├── Idea Pipeline (/pipeline)
    │   ├── Pipeline Overview
    │   │   ├── Gate 1: Ideation
    │   │   ├── Gate 2: Validation
    │   │   ├── Gate 3: Prototyping
    │   │   ├── Gate 4: Testing
    │   │   ├── Gate 5: Launch Ready
    │   │   └── Gate 6: Launched
    │   │
    │   ├── Submit Idea (/pipeline/submit)
    │   │   ├── Idea Details
    │   │   ├── Problem Statement
    │   │   ├── Solution Description
    │   │   ├── Target Market
    │   │   └── Category Selection
    │   │
    │   └── Idea Detail (/pipeline/:id)
    │       ├── Idea Overview
    │       ├── Current Gate Status
    │       ├── Milestones
    │       ├── Team Information
    │       └── Progress Tracking
    │
    ├── Problem Hub (/problems)
    │   ├── Browse Problems
    │   ├── Upvote System
    │   ├── Comments
    │   ├── Category Filters
    │   └── Post Problem
    │
    ├── Team Board (/team-board)
    │   ├── Browse Openings
    │   ├── Role Filters
    │   ├── Skill Tags
    │   ├── Location Filters
    │   └── Apply to Teams
    │
    ├── Autopsy Library (/autopsy)
    │   ├── Browse Autopsies
    │   ├── Failure Reasons
    │   ├── Lessons Learned
    │   ├── Category Filters
    │   └── Share Autopsy
    │
    ├── Calendar & Events (/calendar)
    │   ├── Month View
    │   ├── Upcoming Events
    │   ├── Event Details
    │   ├── Registration
    │   └── Create Event
    │
    ├── Profile (/profile)
    │   ├── User Information
    │   ├── Posts Tab
    │   ├── Ideas Tab
    │   ├── Activity Tab
    │   └── Edit Profile
    │
    ├── Search (/search)
    │   ├── Global Search
    │   ├── Trending Searches
    │   ├── Results by Type
    │   │   ├── Posts
    │   │   ├── Ideas
    │   │   ├── People
    │   │   └── Problems
    │   └── Filters
    │
    ├── Notifications (/notifications)
    │   ├── All Notifications
    │   ├── Unread Notifications
    │   ├── Notification Types
    │   │   ├── Likes
    │   │   ├── Comments
    │   │   ├── Team Activity
    │   │   ├── Pipeline Updates
    │   │   └── Mentions
    │   └── Mark as Read
    │
    ├── Settings (/settings)
    │   ├── Account Information
    │   ├── Notification Preferences
    │   ├── Privacy Settings
    │   └── Danger Zone
    │
    └── Admin Panel (/admin)
        ├── Dashboard (/admin)
        │   ├── Platform Stats
        │   ├── Quick Actions
        │   └── Recent Activity
        │
        ├── Tag Management (/admin/tags)
        │   ├── View Tags
        │   ├── Add Tags
        │   ├── Edit Tags
        │   └── Delete Tags
        │
        └── Pipeline Management (/admin/pipeline)
            ├── Pending Submissions
            ├── Approve Ideas
            ├── Reject Ideas
            └── View Details
```

## User Flows

### 1. New User Onboarding
```
Register → Email Verification → Login → Dashboard → Explore Features
```

### 2. Submitting an Idea
```
Dashboard → Pipeline → Submit Idea → Fill Form → Submit → Idea Detail → Track Progress
```

### 3. Creating a Post
```
Dashboard/Feed → Create Post → Add Content → Select Tags → Publish → Post Detail
```

### 4. Finding Team Members
```
Dashboard → Team Board → Browse Openings → Filter by Skills → Apply → Wait for Response
```

### 5. Exploring Problems
```
Dashboard → Problem Hub → Browse Problems → Upvote → Comment → Get Inspired
```

### 6. Learning from Failures
```
Dashboard → Autopsy Library → Read Autopsies → Learn Lessons → Apply to Own Ideas
```

### 7. Admin Workflow
```
Login as Admin → Admin Panel → Review Submissions → Approve/Reject → Manage Tags → Monitor Activity
```

## Navigation Structure

### Primary Navigation (Sidebar)
1. Dashboard
2. Feed
3. Calendar
4. Idea Pipeline
5. Problems Hub
6. Team Board
7. Autopsy Library
8. Admin Panel (Admin only)
9. Settings

### Secondary Navigation (Header)
- Global Search
- Notifications
- User Profile Menu

### Quick Actions
- Create Post (CTA in multiple locations)
- Submit Idea
- Post Problem
- Post Opening
- Share Autopsy

## Content Hierarchy

### Level 1: Main Sections
- Dashboard, Feed, Pipeline, Problems, Team Board, Autopsy Library, Calendar

### Level 2: Detail Pages
- Post Detail, Idea Detail, Profile, Event Detail

### Level 3: Forms & Actions
- Create Post, Submit Idea, Edit Profile, Register for Event

### Level 4: Modals & Overlays
- Comments, Reactions, Share, Filters

## Data Relationships

```
User
├── Posts (1:N)
├── Ideas (1:N)
├── Comments (1:N)
├── Problems (1:N)
├── Team Listings (1:N)
└── Autopsies (1:N)

Post
├── Author (N:1)
├── Comments (1:N)
├── Likes (N:N)
└── Tags (N:N)

Idea
├── Owner (N:1)
├── Team Members (N:N)
├── Current Gate (N:1)
├── Milestones (1:N)
└── Tags (N:N)

Problem
├── Author (N:1)
├── Comments (1:N)
├── Upvotes (N:N)
└── Category (N:1)

Team Listing
├── Poster (N:1)
├── Required Skills (N:N)
├── Applications (1:N)
└── Team Members (N:N)
```

## Component Architecture

### Layout Components
- **MainLayout**: Header + Sidebar + Content
- **AuthLayout**: Centered content for auth pages

### Page Components
Each page is self-contained with its own:
- State management
- Data fetching logic
- Sub-components
- Navigation handlers

### Shared Components
- Header
- Sidebar
- Cards
- Buttons
- Forms
- Badges
- Navigation elements

### UI Component Library
All UI components follow Radix UI patterns for accessibility and consistency.

## State Management

Currently using React built-in state management:
- `useState` for local component state
- Props for data passing
- React Router for routing state

Future consideration: Add global state management (Context API, Redux, Zustand) if needed.

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1280px
- **Large Desktop**: > 1280px

## Accessibility Features

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus management
- Color contrast compliance
- Screen reader support (via Radix UI)

## Performance Considerations

- Code splitting per route
- Lazy loading of heavy components
- Optimized images and assets
- Minimal bundle size
- Fast navigation with React Router

---

Last Updated: June 2, 2026
