This document contains a complete series of AI prompts to build the IFN (ICFAI Founders Network) frontend from scratch. Each prompt covers one module or page of the platform, with full specifications for layout, features, design, and API integration.

Target Users: ICFAI University students building startups
Tech Stack: React + Tailwind CSS + React Router v6
Design Palette: Antigravity — Red (#E8002D) · Blue (#0033A0) · White (#FFFFFF)
Fonts: Space Grotesk (headings) + Inter (body)
Responsive: Mobile (375px) and Desktop (1280px)

Use the Master System Prompt at the top of every new conversation before starting a module prompt. Then follow prompts 1–14 in order for a cohesive, complete frontend.

Quick Reference — All 14 Prompts

#	Prompt Title	Pages / Routes
1	Project Setup & Design System	Config, Components, AppLayout
2	Authentication Pages	/login, /register
3	Top Navbar & Sidebar Layout	AppLayout (global)
4	Feed Page	/feed
5	Create Post & Draft System	/posts/create, /posts/drafts
6	Post Detail Page	/posts/:id
7	Calendar & Event Scheduler	/calendar
8	Profile Page	/profile
9	Idea Pipeline (6-Gate)	/pipeline, /pipeline/submit, /pipeline/:id
10	Problem Hub & Team Board	/problems, /team-board
11	Idea Autopsy Library	/autopsy-library
12	Admin Panel	/admin, /admin/tags, /admin/pipeline, /admin/duplicates
13	Notifications & Global Search	Drawer + /search
14	Final Polish & Responsive Fixes	All pages

Master System Prompt
Paste this at the start of every new AI conversation before any module prompt:

You are building IFN (ICFAI Founders Network) — a startup incubator platform for
ICFAI University students.
 
Design System:
  Color Palette: Antigravity — Primary Red (#E8002D), Primary Blue (#0033A0),
  White (#FFFFFF), light grays for backgrounds
  Typography: Space Grotesk (700, 800) display + Inter (400, 500, 600) body
  Style: Modern, clean, startup-grade UI. Card-based layouts. Bold CTAs.
  Think Notion + Product Hunt + YC vibes.
 
Tech Stack: React + Tailwind CSS + React Router v6
Responsive: All components must work on mobile (375px) and desktop (1280px)
Target Users: University students building startups
Backend: No backend yet — use mock/dummy data for all API calls.
          Wrap all calls in /services/api.js for easy swap later.

  PROMPT 1    Project Setup & Design System

Target users: University students building startups
Tech stack: React, Tailwind CSS, React Router v6
Pages needed: Config, /components/ui/, /layouts/, /routes/, /services/
Design style: Red #E8002D · Blue #0033A0 · White · Space Grotesk + Inter
Responsive: Mobile 375px and Desktop 1280px

Prompt
Set up the IFN (ICFAI Founders Network) React + Tailwind project:
 
1. tailwind.config.js with custom colors:
   ifn-red (#E8002D), ifn-blue (#0033A0), ifn-white (#FFFFFF),
   ifn-gray-50/100/200
 
2. Global CSS importing Google Fonts: Space Grotesk (700, 800) + Inter (400, 500, 600)
 
3. /components/ui/ folder with reusable components:
   - Button (variants: primary-red, primary-blue, outline, ghost, danger)
   - Badge (red, blue, gray, green, orange — for supertags and statuses)
   - Card (with hover effect, shadow)
   - Avatar (initials fallback if no image)
   - Tag/Chip (removable and static versions)
   - Toast/SnackBar (success, error, warning — slide in, auto-dismiss 4s)
   - Modal (confirm dialog and form dialog)
   - Spinner (loading state)
 
4. /layouts/ folder with:
   - AuthLayout (centered card, logo top)
   - AppLayout (top navbar + left sidebar + main content area)
 
5. /routes/index.jsx with React Router setup for all pages (placeholders ok)
 
6. /services/api.js mock service with placeholder functions for all modules:
   feed, posts, calendar, profile, pipeline
   All functions return mock data with realistic 5-10 sample entries.
   Wrap in a 1 second simulated delay using setTimeout.
 
Integrate with: /services/api.js (mock only at this stage)

  PROMPT 2    Authentication Pages

Target users: Students logging in or signing up
Pages needed: /login, /register
Layout: Split layout — gradient left panel, white form right (desktop); stacked (mobile)
Features: Login form, Register form, inline validation, loading states
Design style: Red CTAs, Blue links, White card, IFN two-tone logo
Responsive: Mobile 375px and Desktop 1280px
Integrate with: /services/api.js — loginUser(), registerUser()

Prompt
Build the Login and Register pages for IFN:
 
Login Page (/login):
  - Email + Password fields
  - Forgot Password link
  - Red Login button (shows spinner while loading)
  - Link to Register page
  - On success: redirect to /feed
 
Register Page (/register):
  - Fields: Full Name, Email, Password, Confirm Password,
    Role dropdown (Student/Mentor/Admin), College Branch, Year of Study
  - On success: toast 'Account created! Please log in.' + redirect to /login
 
Validation (both forms):
  - All fields required
  - Email format check
  - Password minimum 8 characters
  - Passwords must match (register)
  - Inline red error messages
  - Submit button disabled until form is valid
 
Layout: Centered card on white background.
        Left panel: red-to-blue gradient with IFN tagline (desktop only).
        IFN logo top-left: 'IFN' in Space Grotesk, red+blue two-tone.
 
Integrate with: /services/api.js — loginUser(), registerUser()
Mock: return success after 1s delay with loading spinner on button.

  PROMPT 3    Top Navbar & Sidebar Layout

Target users: All logged-in users
Pages needed: AppLayout (wraps all authenticated pages)
Layout: 64px top navbar + 240px left sidebar + scrollable main content
Features: Profile dropdown, nav links, hamburger menu on mobile
Design style: White navbar, red active states, blue hover states
Responsive: Sidebar collapses to drawer on mobile

Prompt
Build the main AppLayout for IFN:
 
Top Navbar (full width, white, 64px height):
  Left:   IFN logo — 'IFN' in Space Grotesk, red+blue two-tone
  Center: Search bar (placeholder: 'Search ideas, people, events...')
  Right:  Notification bell icon (red dot badge if unread)
          Profile avatar circle (initials or photo)
          Clicking avatar opens dropdown:
          View Profile | My Posts | My Drafts | Logout
 
Left Sidebar (240px, white, border-right):
  Nav links with icons:
    - Feed (home icon)
    - My Posts
    - My Drafts
    - Calendar
    - Idea Pipeline
    - Problem Hub
    - Team Board
    - Idea Autopsy Library
  Active link: red left border + red text + light red background
  Use React Router NavLink for active detection
 
Behavior:
  - Hamburger on mobile toggles sidebar drawer (slide in from left)
  - Profile dropdown closes on outside click or Escape key
  - Logout: clears session, redirects to /login
 
Integrate with: /services/api.js — getCurrentUser(), logoutUser()

  PROMPT 4    Feed Page

Target users: Students browsing startup ideas
Pages needed: /feed
Layout: Centered feed column max-width 720px, sort bar + filter bar at top
Features: Sort (Newest/Top/By Supertag), filter by supertag, upvote/downvote, pinned posts, trending badge
Design style: White cards, gray background, bold titles, color-coded supertag chips
Responsive: Single column on mobile, same on desktop with padding
Integrate with: /services/api.js — getFeed(), upvotePost(), downvotePost()

Prompt
Build the Feed Page for IFN (/feed):
 
Sort Bar (3 toggle buttons, top of feed):
  Newest | Top | By Supertag
  Active button: red background + white text
 
Filter Bar:
  Supertag dropdown. Active filter shown as blue chip with x to remove.
  'Clear Filter' button. Tags with no posts must not appear in dropdown.
 
Post Card (each post):
  - Startup name (small, gray)
  - Post title (bold, large)
  - Problem statement preview (2 lines, truncated with 'Read more')
  - Supertag chips:
      Normal tags = blue chip
      IdeaAutopsy = red | Success = green | IdeaValidation = orange | Failure = gray
  - 'Trending' badge if momentum score > 50
  - Pinned posts: pin icon + light yellow background, always at top
  - Bottom row: Upvote (count), Downvote (count), Comments (count), Share
  - Upvote button turns blue when active, downvote turns red
  - Optimistic update: count changes instantly, rolls back on API fail
 
States:
  Empty: 'No posts yet — be the first to share your idea!' + red CTA
  Error: 'Failed to load feed' + retry button
  New posts banner: '3 new posts — tap to refresh' (no auto-insert)
  Loading: 3 skeleton card shimmer loaders
 
Mock data: 8 sample posts with varied supertags, votes, and authors.
Integrate with: /services/api.js — getFeed(sort, supertag), upvotePost(id), downvotePost(id)

  PROMPT 5    Create Post & Draft System

Target users: Students creating and saving startup idea posts
Pages needed: /posts/create, /posts/drafts
Layout: Centered form max-width 680px; drafts as card list
Features: Multi-field post form, supertag chips, draft save, pagination, delete confirm
Design style: Clean form, red/blue accent, chip tags, green success toast
Responsive: Full-width fields on mobile, centered on desktop
Integrate with: /services/api.js — createPost(), saveDraft(), getDrafts(), deleteDraft()

Prompt
Build the Create Post page and My Drafts page for IFN:
 
CREATE POST (/posts/create):
Fields (all required unless noted):
  1. Startup Name (text input)
  2. Post Title (text input, max 100 chars, show char counter)
  3. Problem Statement (textarea, max 1000 chars)
  4. Solution (textarea, max 1000 chars)
  5. Supertags (type + Enter to add chips, max 10, no duplicates)
     'Tag already added' warning on duplicate
  6. Hardcoded Supertag request (checkbox group):
     IdeaValidation / Success / Failure / IdeaAutopsy
     Note below: 'Will be sent for admin approval'
 
Buttons:
  Save as Draft (blue outline) — saves privately, no publish
  Submit (red filled) — validates, shows spinner, publishes to feed
  Cancel (ghost) — confirms before closing ('Are you sure?')
 
Behavior:
  Submit disabled until all required fields are filled
  Loading spinner on submit
  Green toast: 'Post published successfully' on success
  Red inline errors on validation fail
  Yellow banner 'Draft auto-saved locally' on network loss
 
MY DRAFTS (/posts/drafts):
  Card per draft: Title (or 'Untitled'), creation date, 'Draft' status chip
  Edit button (pen icon) — opens create form pre-filled
  Delete button (trash icon, red) — shows confirm modal before delete
  Pagination: 10 per page
  Empty state: 'No drafts yet'
 
Integrate with: /services/api.js — createPost(), saveDraft(), getDrafts(), deleteDraft()

  PROMPT 6    Post Detail Page

Target users: Students reading, commenting on, and sharing a startup idea
Pages needed: /posts/:id
Layout: Centered column max-width 720px: main post → sub-threads → comments
Features: Full post view, sub-threads, idea autopsy form, share modal, comments
Design style: Red-accented autopsy sub-threads, blue updates, white cards
Responsive: Single column, modal becomes bottom sheet on mobile
Integrate with: /services/api.js — getPost(id), addSubThread(), addComment(), sharePost()

Prompt
Build the Post Detail page for IFN (/posts/:id):
 
MAIN POST BLOCK:
  - Startup name, title, full problem statement, full solution
  - All supertag chips (priority order: IdeaAutopsy > Success > IdeaValidation > Failure)
  - 'Pending verification' yellow chip on unapproved hardcoded tags
  - Upvote / Downvote / Comments / Share buttons (same as feed)
  - 'Add Idea Autopsy' button — only visible to post creator
  - 'Add New Detail' button — opens sub-thread input inline
 
SUB-THREADS SECTION (label: 'Updates' with count):
  Each sub-thread: author, timestamp, text, own upvote/delete controls
  Autopsy sub-threads: red left border, red 'Autopsy' badge,
  Structured sections: What went wrong / Lessons learned / Advice for others
 
IDEA AUTOPSY FORM MODAL (opens on 'Add Idea Autopsy'):
  Fields: What went wrong? / What would you do differently? / Advice for students?
  Auto-requests #IdeaAutopsy tag on submit
  Submit Autopsy button → sends to admin for approval
 
SHARE MODAL:
  Copy Link (shows 'Copied!' toast on click)
  WhatsApp, LinkedIn, Email (each opens correct URL or app)
  Each share adds +2 to Momentum Score (API call)
 
COMMENTS SECTION:
  Textarea + Submit button to add comment
  Comment list: avatar, name, text, relative timestamp
 
Integrate with: /services/api.js
  getPost(id), addSubThread(), addComment(), sharePost(), submitAutopsy()

  PROMPT 7    Calendar & Event Scheduler

Target users: Students, mentors, and admins managing events
Pages needed: /calendar
Layout: Full-width calendar + right sidebar upcoming list (desktop)
Features: Month/Week/Day views, color-coded events, create/edit/delete, conflict detection, invitees
Design style: Color-coded event blocks, red today highlight, white modal overlays
Responsive: Calendar adjusts columns, modals are bottom sheets on mobile
Integrate with: /services/api.js — getEvents(), createEvent(), editEvent(), deleteEvent(), getMentors()

Prompt
Build the Calendar & Event Scheduler page for IFN (/calendar):
 
CALENDAR VIEWS (toggle: Month | Week | Day):
  Month: 7-col grid, events as color-coded chips in date cells
  Week: hourly time slots 7am–9pm, events as blocks
  Day: single day hourly slots
  Color codes: Workshop=blue, Mentorship=green, Deadline=red, Other=gray
  Multi-day events: banner spanning across cells
  Today's date: highlighted with red circle
  Events are clickable → opens Event Detail modal
 
EVENT DETAIL MODAL:
  Title, type badge, date/time, host mentor, description, invitees list
  Buttons: Edit (pencil), Delete (red trash), 'Add to Google Calendar' link, Close
 
CREATE/EDIT EVENT FORM (modal):
  Fields: Title (required), Type dropdown, Date, Start Time, End Time,
          Host Mentor dropdown, Description (optional),
          Invitees (searchable multi-select, shows as chips)
  Conflict detection: same mentor + overlapping time → red error
  End before start → red error
  Save disabled until required fields are filled
  After save: info banner 'Event also posted to Feed with #Event tag'
 
DELETE: Confirmation dialog before deleting. Cancellation notification sent to invitees.
 
INVITEES FIELD:
  Searchable dropdown of all members (name + role + avatar)
  Selected as removable chips. Prevent duplicates.
 
Mock data: 6 sample events across different types and dates.
Integrate with: /services/api.js
  getEvents(), createEvent(), editEvent(), deleteEvent(), getMentors()

  PROMPT 8    Profile Page

Target users: Students viewing and editing their own profile
Pages needed: /profile
Layout: Two-column desktop (identity left, activity right); stacked mobile
Features: View mode, edit mode, avatar upload, activity snapshot, recent posts
Design style: Clean card sections, red avatar background, role badges
Responsive: Stacked on mobile, two-column on desktop
Integrate with: /services/api.js — getProfile(), updateProfile(), uploadAvatar()

Prompt
Build the Profile Page for IFN (/profile):
 
VIEW MODE (default):
Left column:
  - Large avatar circle (initials fallback, red background)
  - Full Name (bold, large, Space Grotesk)
  - Role badge chip: Founder=red, Student=blue, Mentor=green, Admin=gray
  - Bio/tagline (italic, gray)
  - LinkedIn button (blue, opens in new tab)
  - Startup name (if any)
  - Academic info: College, Branch, Year
  - Skills chips (blue) and Interests chips (blue outline)
 
Right column:
  - 4 stat cards: Posts, Drafts, Upvoted, Comments (white cards, number in red/blue)
  - Recent posts: last 5 posts as mini cards (title + date + supertag chips)
 
'Edit Profile' button top-right (red)
 
EDIT MODE (toggle, same page layout):
  Editable: Name, Bio, Phone, LinkedIn URL, Branch, Year, Startup Name,
            Skills (chip input), Interests (chip input), Profile Picture (file upload)
  Read-only (lock icon): Email, Role
  Profile picture: preview on select, JPG/PNG, max 5MB, error if unsupported
  Save Changes (red) / Cancel (ghost)
  Validation: name required, phone format, URL format for LinkedIn
  Green toast: 'Profile updated successfully'
  Network error: keep in edit mode, show error
 
Integrate with: /services/api.js — getProfile(), updateProfile(), uploadAvatar()

  PROMPT 9    Idea Pipeline (6-Gate System)

Target users: Students tracking startup ideas through incubator validation
Pages needed: /pipeline, /pipeline/submit, /pipeline/:id
Layout: List page → form page → detail page with gate progress bar
Features: Submission form, gate progress bar, status chips, history timeline, resubmit
Design style: Color-coded gate status chips, prominent red progress bar, timeline
Responsive: Mobile cards for table rows, full layout on desktop
Integrate with: /services/api.js — getMyPipeline(), submitIdea(), getPipelineDetail(id), resubmitIdea(id)

Prompt
Build the Idea Pipeline pages for IFN:
 
PIPELINE LIST (/pipeline):
  Header: 'My Idea Pipeline' + 'Submit New Idea' red button (top right)
  Each idea as a status card:
    Idea title, submission date, current gate (G1–G6),
    Status chip, assigned mentor name
  Status chip colors:
    New=gray | In Review=blue | Revision Requested=orange | Prototyping=purple
    Demo Ready=yellow | Validated=green | Notified=teal | Incubating=dark green
    Declined=red
  Empty state: 'No ideas submitted yet — start your journey!' with CTA
 
SUBMIT IDEA FORM (/pipeline/submit):
  Required fields:
    1. Idea / Startup Name
    2. Problem Statement (100–1000 chars with counter)
    3. Target Users
    4. Solution Hypothesis (textarea)
    5. Market Size Estimate
    6. Team Composition (repeatable rows: Name + Role + Skills, add/remove)
    7. Tests Done So Far (optional textarea)
  Submit (red, spinner) → success redirects to /pipeline
 
IDEA DETAIL (/pipeline/:id):
  Top: title, status chip, submission date, assigned mentor
  6-gate progress bar (G1–G6 step indicator, current gate in red)
  Gate history timeline: date + action + mentor feedback per gate
  Mentor feedback section (latest feedback card)
  'Post Progress Update' button → opens sub-thread textarea
  Notification log: list of all emails sent (gate + date + status)
  Revision banner: yellow banner if status='Revision Requested' + Resubmit button
 
Integrate with: /services/api.js
  getMyPipeline(), submitIdea(), getPipelineDetail(id), resubmitIdea(id)

  PROMPT 10    Problem Hub & Team Board

Target users: Students finding problems to solve and teams to join
Pages needed: /problems (Problem Hub), /team-board (Team Matching)
Layout: Feed-style list (problems); card grid (team board)
Features: Post problem/role modals, domain filter chips, express interest, Submit Solution CTA
Design style: Blue domain chips, red deadlines, green funded badge, card hover lift
Responsive: Single column on mobile, 2-col grid on desktop for team board
Integrate with: /services/api.js — getProblems(), postProblem(), getRoles(), postRole()

Prompt
Build the Problem Hub and Team Board pages for IFN:
 
PROBLEM HUB (/problems):
  'Post a Problem' red button (top right, faculty/admin only)
  Domain filter chips: All, AgriTech, Healthcare, FinTech, EdTech, etc.
  Problem Card:
    Title (bold), description (3 lines, 'Read more' expands),
    Domain chips (blue), posted by (name + role badge),
    Deadline (red text if within 7 days)
    'Submit Solution' button (blue outline)
       → redirects to /pipeline/submit with problem pre-filled
  Post Problem Modal:
    Fields: Title, Description, Domain Tags (chip input), Deadline (optional)
    Posted by auto-filled from logged-in user
  Empty state: 'No problems posted yet'
 
TEAM BOARD (/team-board):
  'Post a Role' red button (top right)
  Filter chips: Developer, Designer, Marketer, Finance, Legal, etc.
  Role Card (2-col grid on desktop):
    Role Title (bold), Skills chips (blue),
    Startup name + stage badge (Idea=gray / Prototype=blue / Revenue=green),
    Time commitment tag + Compensation tag,
    Posted by: founder name + avatar
    'Express Interest' button (blue) → shows contact info or DM form
  Post Role Modal:
    Fields: Role Title, Skills (chip input), Time Commitment,
            Stage dropdown, Compensation (text), Contact/Apply info
  Empty state: 'No roles posted yet'
 
Integrate with: /services/api.js
  getProblems(), postProblem(), getRoles(), postRole()

  PROMPT 11    Idea Autopsy Library

Target users: Students learning from real startup failure case studies
Pages needed: /autopsy-library
Layout: Red hero banner + filter bar + 2-col card grid
Features: Domain filter, search, autopsy detail modal, upvote, share
Design style: Red badges, dark red borders on autopsy blocks, serious but accessible
Responsive: Single column on mobile, 2-col grid on desktop
Integrate with: /services/api.js — getAutopsyPosts(), getAutopsyById(id)

Prompt
Build the Idea Autopsy Library page for IFN (/autopsy-library):
 
HEADER:
  Title: 'Idea Autopsy Library'
  Subtitle: 'Learn from real startup failures'
  Red + white hero banner strip at top (not full bleed)
 
FILTER BAR:
  Domain tag chips (filter by category)
  Sort: Newest / Most Upvoted
  Search input: search by startup name or keyword
 
AUTOPSY CARD (2-col grid desktop, 1-col mobile):
  Red 'Autopsy' badge top-left
  Startup name (bold, large)
  One-line summary of what went wrong (truncated)
  Domain + supertag chips
  Founder name + approval date
  Upvote count + Comment count (small, gray)
  'Read Full Autopsy' button → opens detail modal
 
AUTOPSY DETAIL MODAL (or /posts/:id scroll to autopsy section):
  Clearly labeled sections:
    What was the startup?
    What went wrong?
    What would you do differently?
    Advice for new students
  Red left border on each section block
  Upvote button, comment textarea, share button
  Back button to library
 
Empty state: 'No autopsy posts yet — be the first to share a learning.'
 
Mock data: 4-5 sample autopsy entries with realistic failure stories.
Integrate with: /services/api.js — getAutopsyPosts(), getAutopsyById(id)

  PROMPT 12    Admin Panel

Target users: Super admins managing the IFN incubator platform
Pages needed: /admin, /admin/tags, /admin/pipeline, /admin/duplicates
Layout: Admin sidebar + main content; tables, cards, and charts
Features: KPI dashboard, supertag approval, pipeline management, duplicate review
Design style: Data-dense, table layouts, recharts in brand colors, colored status chips
Responsive: Tables become cards on mobile
Integrate with: /services/api.js — all admin functions (mock)

Prompt
Build the Admin Panel for IFN (/admin/*):
 
ADMIN DASHBOARD (/admin):
  4 KPI stat cards: Ideas Submitted, Mentor Sessions, Students at Gate 3+, Demo Day Teams
  Two recharts charts:
    Bar chart: Pipeline Stage Distribution (x=gate, y=count, color ifn-blue)
    Line chart: Weekly Post Activity (x=week, y=posts, color ifn-red)
  Quick-action buttons: 'Review Pending Tags', 'Review Duplicates', 'View Pipeline'
 
SUPERTAG APPROVALS (/admin/tags):
  Tabs: Pending | Approved | Rejected
  Each row: Student name, Post title (link), Requested tag chip, Date
  Buttons: View Post (new tab), Approve (green), Reject (red → reason modal)
 
PIPELINE MANAGEMENT (/admin/pipeline):
  Table: Startup Name, Student, Gate, Status chip, Assigned Mentor, Last Updated
  Row actions: Assign Mentor (dropdown), Advance Gate (button),
               Add Feedback (text modal), Mark as Declined
  Filters: by Gate, by Status, by Mentor
  Mobile: rows become expandable cards
 
DUPLICATE REVIEW (/admin/duplicates):
  Each flagged pair shown side-by-side:
    Post A (title + 2-line description) vs Post B (title + 2-line description)
    Similarity score badge (e.g. '85% similar')
  Buttons:
    'Mark as Reviewed – No Action' (gray)
    'Suggest Collaboration' (blue → sends notification to both students)
    'Mark as Not Duplicate' (green)
 
Integrate with: /services/api.js
  getPendingTags(), approveTag(id, reason), rejectTag(id, reason),
  getPipeline(), assignMentor(), advanceGate(), getDuplicates(), resolveDispute()

  PROMPT 13    Notifications & Global Search

Target users: Students staying updated on activity across the platform
Pages needed: Notification drawer (global), /search (results page)
Layout: Right-side slide-in drawer; search dropdown in navbar; full results page
Features: Typed notifications by event, mark all read, debounced search, categorized results
Design style: Clean drawer, unread blue border, category labels, smooth slide animation
Responsive: Drawer full-height; search expands to full page on mobile
Integrate with: /services/api.js — getNotifications(), markAllRead(), searchAll(query)

Prompt
Build the Notifications panel and Global Search for IFN:
 
NOTIFICATIONS DRAWER:
  Trigger: Bell icon in navbar → right-side drawer, 380px wide, full height
  Slide-in animation from right
  Header: 'Notifications' + 'Mark all as read' link (blue)
 
  Each notification item:
    Type icon + bold title + subtitle + relative timestamp ('2 hours ago')
    Unread: light blue left border + slightly darker background
    Clicking: marks read + navigates to relevant page
 
  Notification types and icons:
    Post upvoted: red thumbs-up icon
    Comment on your post: blue chat icon
    Hardcoded tag approved/rejected: label icon
    Pipeline gate advanced: green rocket icon
    New event on calendar: blue calendar icon
    Duplicate idea flagged: orange warning icon
    Mentor assigned: teal person icon
    Collaboration suggested: purple handshake icon
 
  Empty state: 'You're all caught up!'
  'Mark all as read' clears all unread badges
 
GLOBAL SEARCH:
  Trigger: Search bar in navbar (desktop) or search icon (mobile)
  On focus: dropdown appears below
  As user types (debounce 300ms), show results in categories:
    Posts (title match) | Events | People | Pipeline Ideas
  Each result: icon + title + subtitle + type chip
  'Press Enter for full results' → /search?q=... (full results page)
 
  Full Results Page (/search):
    Tabs: Posts | Events | People | Ideas
    Paginated list per tab
    Search bar pre-filled with query
 
Mock data: 8-10 varied notification types.
Integrate with: /services/api.js
  getNotifications(), markAllRead(), searchAll(query)

  PROMPT 14    Final Polish, Animations & Responsive Fixes

Target users: All users on both mobile and desktop
Pages needed: All pages audit
Layout: Final responsive audit across all breakpoints
Features: Animations, skeleton loaders, empty states, 404 page, color consistency
Design style: Smooth transitions, not flashy. Consistent Red+Blue+White system.
Responsive: Final audit: mobile 375px and desktop 1280px

Prompt
Do a final polish pass on the entire IFN platform:
 
1. ANIMATIONS (Tailwind transition/animation on all):
   Button hover: scale(1.02) + shadow increase
   Card hover: translateY(-2px) + shadow increase
   Sidebar drawer: slide-in from left on mobile
   Notification drawer: slide-in from right
   Modals: fade + scale-in (transform origin center)
   Toast notifications: slide in from bottom-right, auto-dismiss 4s
   Page transitions: fade-in on route change
 
2. EMPTY STATES (check every list, feed, and table):
   Each has: centered SVG or emoji illustration + descriptive message + CTA button
   Pages: Feed, My Drafts, Pipeline, Problem Hub, Team Board,
          Autopsy Library, Notifications, all Admin tabs
 
3. SKELETON LOADERS (gray shimmer animation) for:
   Feed (3 skeleton cards), Profile sections, Calendar events, Pipeline list
 
4. RESPONSIVE AUDIT:
   Sidebar → hamburger drawer on <768px
   All card grids → single column on mobile
   Form fields → full-width on mobile
   Modals → bottom sheets on mobile (slide up from bottom, full-width)
   Tables → card-list view on mobile (hide non-essential columns)
 
5. 404 PAGE:
   IFN logo, '404 — Page not found' message, red 'Go to Feed' button
 
6. PALETTE CONSISTENCY CHECK:
   Primary CTAs: Red #E8002D
   Secondary / links: Blue #0033A0
   Active nav: Red left border
   Success states: Green
   Error states: Red (lighter shade for backgrounds)
   All backgrounds: White or gray-50
   All text: Dark gray #444444 (not pure black)

Appendix — Color Reference

Token	Hex	Usage
ifn-red	#E8002D	Primary CTAs, active nav, error states, autopsy badges
ifn-blue	#0033A0	Secondary CTAs, links, active elements, supertag chips
White	#FFFFFF	Card backgrounds, modal backgrounds, form backgrounds
gray-50	#F9FAFB	Page backgrounds, sidebar background
gray-200	#E5E7EB	Dividers, borders, skeleton loader base
Dark Gray	#444444	Body text, labels (never pure black)
Green	#16A34A	Success states, Validated status, Success supertag
Orange	#EA580C	Revision Requested, IdeaValidation supertag
Purple	#7C3AED	Prototyping status, Collaboration suggestions

IFN · ICFAI F
