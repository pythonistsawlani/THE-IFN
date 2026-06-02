import { LayoutGrid, Users, Calendar, FileText, GitBranch, MessageSquare, Archive, Shield, Search, Sparkles } from 'lucide-react';

interface Module {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  pages: string[];
}

const modules: Module[] = [
  {
    id: 1,
    title: 'Project Setup & Design System',
    description: 'Config, Components, AppLayout',
    icon: <LayoutGrid />,
    color: 'bg-blue-500',
    pages: ['Config', 'Components', 'Layouts']
  },
  {
    id: 2,
    title: 'Authentication Pages',
    description: 'Login & Register',
    icon: <Users />,
    color: 'bg-red-500',
    pages: ['/login', '/register']
  },
  {
    id: 3,
    title: 'Top Navbar & Sidebar Layout',
    description: 'AppLayout (global)',
    icon: <LayoutGrid />,
    color: 'bg-purple-500',
    pages: ['AppLayout', 'Navbar', 'Sidebar']
  },
  {
    id: 4,
    title: 'Feed Page',
    description: 'Browse startup ideas',
    icon: <FileText />,
    color: 'bg-green-500',
    pages: ['/feed']
  },
  {
    id: 5,
    title: 'Create Post & Draft System',
    description: 'Create and save posts',
    icon: <FileText />,
    color: 'bg-orange-500',
    pages: ['/posts/create', '/posts/drafts']
  },
  {
    id: 6,
    title: 'Post Detail Page',
    description: 'Full post view with comments',
    icon: <MessageSquare />,
    color: 'bg-pink-500',
    pages: ['/posts/:id']
  },
  {
    id: 7,
    title: 'Calendar & Event Scheduler',
    description: 'Manage events and workshops',
    icon: <Calendar />,
    color: 'bg-teal-500',
    pages: ['/calendar']
  },
  {
    id: 8,
    title: 'Profile Page',
    description: 'View and edit profile',
    icon: <Users />,
    color: 'bg-indigo-500',
    pages: ['/profile']
  },
  {
    id: 9,
    title: 'Idea Pipeline (6-Gate)',
    description: 'Track ideas through validation',
    icon: <GitBranch />,
    color: 'bg-cyan-500',
    pages: ['/pipeline', '/pipeline/submit', '/pipeline/:id']
  },
  {
    id: 10,
    title: 'Problem Hub & Team Board',
    description: 'Find problems and teams',
    icon: <Users />,
    color: 'bg-yellow-500',
    pages: ['/problems', '/team-board']
  },
  {
    id: 11,
    title: 'Idea Autopsy Library',
    description: 'Learn from failures',
    icon: <Archive />,
    color: 'bg-red-600',
    pages: ['/autopsy-library']
  },
  {
    id: 12,
    title: 'Admin Panel',
    description: 'Manage platform',
    icon: <Shield />,
    color: 'bg-gray-700',
    pages: ['/admin', '/admin/tags', '/admin/pipeline', '/admin/duplicates']
  },
  {
    id: 13,
    title: 'Notifications & Global Search',
    description: 'Stay updated',
    icon: <Search />,
    color: 'bg-blue-600',
    pages: ['Drawer', '/search']
  },
  {
    id: 14,
    title: 'Final Polish & Responsive',
    description: 'Animations & fixes',
    icon: <Sparkles />,
    color: 'bg-purple-600',
    pages: ['All pages']
  }
];

interface WireframeGalleryProps {
  onSelectModule: (id: number) => void;
}

export function WireframeGallery({ onSelectModule }: WireframeGalleryProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-gradient-to-r from-[#E8002D] to-[#0033A0] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">IFN</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">IFN Wireframes</h1>
                <p className="text-sm text-gray-600">ICFAI Founders Network - Incubator Platform</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Design System Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 border-l-4 border-[#E8002D]">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Design System</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Color Palette</h3>
              <div className="flex gap-2">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg bg-[#E8002D] shadow-md"></div>
                  <span className="text-xs text-gray-600 mt-1">Red</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg bg-[#0033A0] shadow-md"></div>
                  <span className="text-xs text-gray-600 mt-1">Blue</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg bg-white border-2 border-gray-300 shadow-md"></div>
                  <span className="text-xs text-gray-600 mt-1">White</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Typography</h3>
              <p className="text-sm text-gray-600">
                <span className="font-bold">Space Grotesk</span> - Headings (700, 800)<br />
                <span className="font-medium">Inter</span> - Body (400, 500, 600)
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Style</h3>
              <p className="text-sm text-gray-600">
                Modern, clean, startup-grade UI<br />
                Notion + Product Hunt + YC vibes
              </p>
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">All Modules ({modules.length})</h2>
          <p className="text-gray-600 mb-6">Click on any module to view detailed wireframes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <button
              key={module.id}
              onClick={() => onSelectModule(module.id)}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1 p-6 text-left border border-gray-200 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`${module.color} w-12 h-12 rounded-lg flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  {module.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-gray-500">#{module.id}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2">{module.title}</h3>
                  <p className="text-sm text-gray-600">{module.description}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {module.pages.map((page, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium"
                  >
                    {page}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center text-sm text-[#0033A0] font-semibold group-hover:gap-2 transition-all">
                View wireframes
                <span className="inline-block ml-1 group-hover:ml-2 transition-all">→</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p className="text-sm">IFN (ICFAI Founders Network) - Startup Incubator Platform</p>
          <p className="text-xs mt-2">Tech Stack: React + Tailwind CSS + React Router v6</p>
        </div>
      </footer>
    </div>
  );
}
