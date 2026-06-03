import { create } from 'zustand';

export interface PostEditEntry {
  version: number;
  content: {
    title: string;
    content: string;
    problemStatement?: string;
    solution?: string;
    startupName?: string;
  };
  editedAt: string;
  editNote?: string;
}

export type Post = {
  id: number;
  author: string;
  avatar: string;
  title: string;
  content: string;
  tags: string[];
  likes: number;
  comments: number;
  time: string;
  trending: boolean;
  likedByMe?: boolean;
  bookmarkedByMe?: boolean;
  statusTag?: 'success' | 'failure' | null;
  editHistory?: PostEditEntry[];
  isEdited?: boolean;
  lastEditedAt?: string;
};

export type Event = {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: string;
  isOnline: boolean;
  registered: boolean;
  category?: string;
  startTime?: string;
  endTime?: string;
  venue?: string;
};

export type Idea = {
  id: number;
  title: string;
  description: string;
  problem: string;
  solution: string;
  market: string;
  tags: string[];
  stage: string;
  owner: string;
};

export type Problem = {
  id: number;
  title: string;
  description: string;
  category: string;
  upvotes: number;
  comments: number;
  upvotedByMe?: boolean;
  bookmarkedByMe?: boolean;
};

export type TeamOpportunity = {
  id: number;
  title: string;
  role: string;
  skills: string[];
  company: string;
  description: string;
  applied: boolean;
};

export type Autopsy = {
  id: number;
  startupName: string;
  category: string;
  duration: string;
  investment: string;
  rootCause: string;
  story: string;
  lessons: string[];
  upvotes: number;
  upvotedByMe?: boolean;
  bookmarkedByMe?: boolean;
};

export type User = {
  id: number | string;
  name: string;
  email: string;
  role: string;
  status: string;
  avatar?: string;
  startupName?: string;
};

export type Tag = {
  id: number;
  name: string;
};

type AppStore = {
  posts: Post[];
  events: Event[];
  ideas: Idea[];
  problems: Problem[];
  teams: TeamOpportunity[];
  autopsies: Autopsy[];
  users: User[];
  tags: Tag[];
  
  // Auth state
  currentUser: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
  signup: (user: User) => void;
  
  // Actions
  togglePostLike: (id: number) => void;
  togglePostBookmark: (id: number) => void;
  addPostComment: (id: number) => void;
  addPost: (post: Omit<Post, 'id' | 'likes' | 'comments' | 'time' | 'trending'>) => void;
  editPost: (id: number, updatedFields: Partial<Post>) => void;
  
  registerForEvent: (id: number) => void;
  addEvent: (event: Omit<Event, 'id' | 'registered'>) => void;
  
  advanceIdeaStage: (id: number) => void;
  addIdea: (idea: Omit<Idea, 'id' | 'stage'>) => void;
  deleteIdea: (id: number) => void;
  
  toggleProblemUpvote: (id: number) => void;
  toggleProblemBookmark: (id: number) => void;
  addProblemComment: (id: number) => void;
  addProblem: (problem: Omit<Problem, 'id' | 'upvotes' | 'comments'>) => void;
  
  applyForTeam: (id: number) => void;
  
  toggleAutopsyUpvote: (id: number) => void;
  toggleAutopsyBookmark: (id: number) => void;
  addAutopsy: (autopsy: Omit<Autopsy, 'id' | 'upvotes'>) => void;
  
  addUser: (user: Omit<User, 'id'>) => void;
  updateUserRole: (id: number | string, role: string) => void;
  toggleUserStatus: (id: number | string) => void;
  
  addTag: (name: string) => void;
  deleteTag: (id: number) => void;
};

const initialPosts: Post[] = [
  {
    id: 1,
    author: 'Sarah Chen',
    avatar: 'SC',
    title: 'AI-powered Study Companion for Students',
    content: 'Building an intelligent platform that helps students learn more effectively using personalized AI tutoring and adaptive learning paths.',
    tags: ['EdTech', 'AI', 'Students'],
    likes: 24,
    comments: 8,
    time: '2h ago',
    trending: true,
    likedByMe: false,
    bookmarkedByMe: false
  },
  {
    id: 2,
    author: 'Rahul Kumar',
    avatar: 'RK',
    title: 'Sustainable Fashion Marketplace',
    content: 'Creating a platform connecting eco-conscious consumers with sustainable fashion brands and second-hand clothing sellers.',
    tags: ['Sustainability', 'Fashion', 'E-commerce'],
    likes: 18,
    comments: 5,
    time: '4h ago',
    trending: false,
    likedByMe: false,
    bookmarkedByMe: false
  },
  {
    id: 3,
    author: 'Priya Sharma',
    avatar: 'PS',
    title: 'Mental Health Support App for College Students',
    content: 'An anonymous peer support and professional counseling platform designed specifically for the mental health needs of college students.',
    tags: ['HealthTech', 'Mental Health', 'Students'],
    likes: 32,
    comments: 12,
    time: '6h ago',
    trending: true,
    likedByMe: false,
    bookmarkedByMe: false
  },
  {
    id: 4,
    author: 'Alex Johnson',
    avatar: 'AJ',
    title: 'Smart Parking Solution for Urban Areas',
    content: 'IoT-based parking management system that helps drivers find available parking spots in real-time and reduces urban congestion.',
    tags: ['IoT', 'Smart City', 'Transportation'],
    likes: 15,
    comments: 6,
    time: '8h ago',
    trending: false,
    likedByMe: false,
    bookmarkedByMe: false
  },
];

const initialIdeas: Idea[] = [
  { id: 1, title: 'EcoTrack', description: 'Personal carbon footprint tracker', problem: 'People do not know their carbon footprint', solution: 'An app that connects to bank accounts to estimate footprint', market: 'Eco-conscious millennials', tags: ['Sustainability'], stage: 'Prototyping', owner: 'Sarah Chen' },
  { id: 2, title: 'HealthMate', description: 'AI-driven symptom checker', problem: 'Waiting times for non-critical diagnosis', solution: 'AI chatbot for preliminary checks', market: 'General public', tags: ['HealthTech', 'AI'], stage: 'Validation', owner: 'Rahul Kumar' },
  { id: 3, title: 'StudyBuddy', description: 'Peer-to-peer tutoring platform', problem: 'Expensive private tutoring', solution: 'Connect students who excel with those who need help', market: 'College students', tags: ['EdTech'], stage: 'Ideation', owner: 'Priya Sharma' },
  { id: 4, title: 'ParkSmart', description: 'Smart parking solution', problem: 'Finding parking in urban areas is hard', solution: 'IoT sensors in parking spots', market: 'Urban drivers', tags: ['IoT', 'Smart City'], stage: 'Testing', owner: 'Alex Johnson' },
  { id: 5, title: 'LocalEats', description: 'Discover local street food', problem: 'Hard to find authentic street food', solution: 'Crowdsourced map of street food vendors', market: 'Foodies', tags: ['FoodTech'], stage: 'Launch Ready', owner: 'John Doe' },
  { id: 6, title: 'FitShare', description: 'Share workout routines', problem: 'Boring repetitive workouts', solution: 'Social network for workouts', market: 'Fitness enthusiasts', tags: ['HealthTech'], stage: 'Launched', owner: 'Jane Doe' },
];

const initialEvents: Event[] = [
  { id: 1, title: 'Startup Pitch Night', description: 'Pitch your idea to local investors.', date: '2026-06-10', time: '18:00', location: 'Main Campus Auditorium', type: 'Pitch', isOnline: false, registered: false, category: 'demoday' },
  { id: 2, title: 'Tech Founder Mixer', description: 'Meet other tech founders.', date: '2026-06-15', time: '19:00', location: 'Zoom', type: 'Networking', isOnline: true, registered: false, category: 'seminar' },
];

const initialProblems: Problem[] = [
  { id: 1, title: 'High dropout rates in online courses', description: 'Students lack motivation to finish online courses.', category: 'EdTech', upvotes: 45, comments: 12, upvotedByMe: false, bookmarkedByMe: false },
  { id: 2, title: 'Difficulty in tracking personal finances across multiple banks', description: 'Users have to log into multiple apps to see their net worth.', category: 'FinTech', upvotes: 32, comments: 8, upvotedByMe: false, bookmarkedByMe: false },
];

const initialTeams: TeamOpportunity[] = [
  { id: 1, title: 'Looking for Technical Co-founder', role: 'CTO', skills: ['React', 'Node.js', 'AWS'], company: 'EcoTrack', description: 'We need a technical lead to build our MVP.', applied: false },
  { id: 2, title: 'UI/UX Designer Needed', role: 'Designer', skills: ['Figma', 'User Research'], company: 'HealthMate', description: 'Looking for a designer to redesign our patient portal.', applied: false },
];

const initialAutopsies: Autopsy[] = [
  { id: 1, startupName: 'QuickDrop', category: 'Logistics', duration: '18 months', investment: '$500k', rootCause: 'Poor unit economics', story: 'We tried to do 10-minute grocery delivery but the cost of riders was too high.', lessons: ['Focus on unit economics early', 'Do not underestimate operational complexity'], upvotes: 120, upvotedByMe: false, bookmarkedByMe: false },
  { id: 2, title: 'EduVerse', startupName: 'EduVerse', category: 'EdTech', duration: '2 years', investment: '$1.2M', rootCause: 'Lack of product-market fit', story: 'We built a VR classroom but schools could not afford the headsets.', lessons: ['Talk to customers before building', 'Understand buyer constraints'], upvotes: 85, upvotedByMe: false, bookmarkedByMe: false },
] as any; // Type assertion since title isn't officially in type but harmless

const initialUsers: User[] = [
  { id: 1, name: 'Sarah Chen', email: 'sarah@example.com', role: 'User', status: 'Active' },
  { id: 2, name: 'Rahul Kumar', email: 'rahul@example.com', role: 'Admin', status: 'Active' },
];

const initialTags: Tag[] = [
  { id: 1, name: 'EdTech' },
  { id: 2, name: 'HealthTech' },
  { id: 3, name: 'FinTech' },
];

const STAGES = ['Ideation', 'Validation', 'Prototyping', 'Testing', 'Launch Ready', 'Launched'];

export const useAppStore = create<AppStore>((set) => ({
  posts: initialPosts,
  events: initialEvents,
  ideas: initialIdeas,
  problems: initialProblems,
  teams: initialTeams,
  autopsies: initialAutopsies,
  users: initialUsers,
  tags: initialTags,

  // Auth initial state & actions
  currentUser: null,
  isAuthenticated: false,
  login: (user) => set({ currentUser: user, isAuthenticated: true }),
  logout: () => set({ currentUser: null, isAuthenticated: false }),
  signup: (user) => set((state) => ({
    currentUser: user,
    isAuthenticated: true,
    users: [...state.users, user]
  })),

  togglePostLike: (id) => set((state) => ({
    posts: state.posts.map(p => {
      if (p.id === id) {
        const likedByMe = !p.likedByMe;
        return { ...p, likedByMe, likes: likedByMe ? p.likes + 1 : p.likes - 1 };
      }
      return p;
    })
  })),
  togglePostBookmark: (id) => set((state) => ({
    posts: state.posts.map(p => p.id === id ? { ...p, bookmarkedByMe: !p.bookmarkedByMe } : p)
  })),
  addPostComment: (id) => set((state) => ({
    posts: state.posts.map(p => p.id === id ? { ...p, comments: p.comments + 1 } : p)
  })),
  addPost: (post) => set((state) => ({
    posts: [{ ...post, id: Date.now(), likes: 0, comments: 0, time: 'Just now', trending: false }, ...state.posts]
  })),
  editPost: (id, updatedFields) => set((state) => ({
    posts: state.posts.map(p => p.id === id ? { ...p, ...updatedFields } : p)
  })),

  registerForEvent: (id) => set((state) => ({
    events: state.events.map(e => e.id === id ? { ...e, registered: true } : e)
  })),
  addEvent: (event) => set((state) => ({
    events: [...state.events, { ...event, id: Date.now(), registered: false }]
  })),

  advanceIdeaStage: (id) => set((state) => ({
    ideas: state.ideas.map(idea => {
      if (idea.id === id) {
        const currentIndex = STAGES.indexOf(idea.stage);
        if (currentIndex < STAGES.length - 1) {
          return { ...idea, stage: STAGES[currentIndex + 1] };
        }
      }
      return idea;
    })
  })),
  addIdea: (idea) => set((state) => ({
    ideas: [...state.ideas, { ...idea, id: Date.now(), stage: 'Ideation' }]
  })),
  deleteIdea: (id) => set((state) => ({
    ideas: state.ideas.filter(idea => idea.id !== id)
  })),

  toggleProblemUpvote: (id) => set((state) => ({
    problems: state.problems.map(p => {
      if (p.id === id) {
        const upvotedByMe = !p.upvotedByMe;
        return { ...p, upvotedByMe, upvotes: upvotedByMe ? p.upvotes + 1 : p.upvotes - 1 };
      }
      return p;
    })
  })),
  toggleProblemBookmark: (id) => set((state) => ({
    problems: state.problems.map(p => p.id === id ? { ...p, bookmarkedByMe: !p.bookmarkedByMe } : p)
  })),
  addProblemComment: (id) => set((state) => ({
    problems: state.problems.map(p => p.id === id ? { ...p, comments: p.comments + 1 } : p)
  })),
  addProblem: (problem) => set((state) => ({
    problems: [{ ...problem, id: Date.now(), upvotes: 0, comments: 0, upvotedByMe: false, bookmarkedByMe: false }, ...state.problems]
  })),

  applyForTeam: (id) => set((state) => ({
    teams: state.teams.map(t => t.id === id ? { ...t, applied: true } : t)
  })),

  toggleAutopsyUpvote: (id) => set((state) => ({
    autopsies: state.autopsies.map(a => {
      if (a.id === id) {
        const upvotedByMe = !a.upvotedByMe;
        return { ...a, upvotedByMe, upvotes: upvotedByMe ? a.upvotes + 1 : a.upvotes - 1 };
      }
      return a;
    })
  })),
  toggleAutopsyBookmark: (id) => set((state) => ({
    autopsies: state.autopsies.map(a => a.id === id ? { ...a, bookmarkedByMe: !a.bookmarkedByMe } : a)
  })),
  addAutopsy: (autopsy) => set((state) => ({
    autopsies: [{ ...autopsy, id: Date.now(), upvotes: 0, upvotedByMe: false, bookmarkedByMe: false }, ...state.autopsies]
  })),

  addUser: (user) => set((state) => ({
    users: [...state.users, { ...user, id: Date.now() }]
  })),
  updateUserRole: (id, role) => set((state) => ({
    users: state.users.map(u => u.id === id ? { ...u, role } : u)
  })),
  toggleUserStatus: (id) => set((state) => ({
    users: state.users.map(u => u.id === id ? { ...u, status: u.status === 'Active' ? 'Suspended' : 'Active' } : u)
  })),

  addTag: (name) => set((state) => ({
    tags: [...state.tags, { id: Date.now(), name }]
  })),
  deleteTag: (id) => set((state) => ({
    tags: state.tags.filter(t => t.id !== id)
  })),
}));
