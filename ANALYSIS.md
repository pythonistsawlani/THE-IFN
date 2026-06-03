# IFN Platform — Pre-Implementation Analysis Findings

### 0.1 — Codebase Scan Checklist

- **Identify the exact router used**: `react-router` (version 7.13.0) using standard client-side components (`BrowserRouter`, `Routes`, `Route`, `Navigate`) in `src/app/App.tsx`.
- **Identify the auth library already present**: None. We are using standard Zustand store state (`src/store/useAppStore.ts`) and will implement mock authentication.
- **Identify the existing color palette**: 
  - Primary blue: `#0033A0`
  - Primary red: `#E8002D`
  - Border: `rgba(0, 0, 0, 0.1)`
  - Cards, backgrounds, etc., configured via standard CSS variables in `src/styles/theme.css`.
- **Identify the post data model**:
  - Defined in `src/store/useAppStore.ts` as `Post` type.
  - Fields: `id`, `author`, `avatar`, `title`, `content`, `tags`, `likes`, `comments`, `time`, `trending`, `likedByMe?`, `bookmarkedByMe?`.
- **Identify the PostCard component**:
  - Found inline within `src/app/pages/Feed.tsx` as `function PostCard`.
- **Identify the Profile page component**:
  - `src/app/pages/Profile.tsx` (displays user details and a list of posts author matches `Sarah Chen`).
- **Identify the Calendar component**:
  - `src/app/pages/Calendar.tsx` (using local React rendering with a grid of 30 days and list of events). No external UI calendar libraries like FullCalendar or React-Calendar are present; it uses custom rendering.
- **Identify the state management pattern**:
  - Zustand (`src/store/useAppStore.ts` using `useAppStore` store).
- **Identify where posts are currently stored/fetched**:
  - Mocked state initially in `src/store/useAppStore.ts` (`initialPosts`).
- **Check if a `status` field already exists on Post**:
  - No `status` or `statusTag` field currently exists on `Post` in `src/store/useAppStore.ts`.
- **Check if an `editHistory` or `subthreads` array already exists on Post**:
  - No, neither exists.
- **List all existing navigation items so new ones can be added consistently**:
  - Nav items are typically loaded in sidebar/layout. Let's inspect `src/app/components/common/Sidebar.tsx` to verify.
- **Confirm current typography stack**:
  - Font families: Space Grotesk (headings), Inter (body/text) as defined in `PROJECT_SUMMARY.md` / `src/styles/fonts.css`.

### 0.2 — Affected Files Map

**MODIFIED files:**
- `src/app/App.tsx` [add login/register routes, auth guard wrapping of layout]
- `src/store/useAppStore.ts` [extend types, initial state, and actions for Auth, Posts, and Calendar Events]
- `src/app/pages/Feed.tsx` [modify `PostCard` to apply status styles and badges]
- `src/app/pages/Profile.tsx` [apply status backgrounds to the user profile's posts list]
- `src/app/pages/posts/PostDetail.tsx` [integrate edit history subthreads and "Edited" marker]
- `src/app/pages/Calendar.tsx` [update grid rendering to color-code event category indicators, handle categories in new event form and detail modal]
- `src/styles/theme.css` [add new CSS design tokens for post statuses and calendar event categories]

**CREATED files:**
- `src/app/components/auth/AuthGuard.tsx` [route protection component]
- `src/app/pages/auth/Login.tsx` [login screen layout]
- `src/app/pages/auth/Register.tsx` [signup/registration layout]
- `src/app/components/posts/EditSubthreadList.tsx` [list display for version history]
- `src/app/components/calendar/EventTypeLegend.tsx` [color legend for calendar dashboard]
