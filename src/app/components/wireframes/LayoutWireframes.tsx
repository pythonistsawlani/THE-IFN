import { Home, FileText, Calendar, GitBranch, MessageSquare, Users, Archive, Bell, Search } from 'lucide-react';

export function LayoutWireframes() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">App Layout - Navbar & Sidebar</h2>
        <p className="text-gray-600 mb-6">Global layout for all authenticated pages</p>
      </div>

      {/* Desktop Layout */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-[#0033A0] to-[#E8002D] px-6 py-4">
          <h3 className="text-xl font-bold text-white">Desktop Layout (1280px)</h3>
        </div>
        
        <div className="p-8 bg-gray-50">
          <div className="border-2 border-gray-300 rounded-lg overflow-hidden bg-white" style={{ height: '600px' }}>
            {/* Top Navbar */}
            <div className="h-16 bg-white border-b border-gray-200 flex items-center px-6 justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#E8002D] to-[#0033A0] rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">IFN</span>
                  </div>
                  <span className="font-bold text-lg text-gray-900">IFN</span>
                </div>
              </div>

              <div className="flex-1 max-w-xl mx-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search ideas, people, events..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button className="relative">
                  <Bell size={20} className="text-gray-600" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#E8002D] rounded-full text-white text-xs flex items-center justify-center">3</span>
                </button>
                <div className="w-10 h-10 bg-[#0033A0] rounded-full flex items-center justify-center text-white font-semibold cursor-pointer">
                  JD
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex" style={{ height: 'calc(600px - 64px)' }}>
              {/* Left Sidebar */}
              <div className="w-60 bg-white border-r border-gray-200 overflow-y-auto">
                <nav className="p-4 space-y-1">
                  <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                    <Home size={20} />
                    <span className="font-medium">Feed</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 text-[#E8002D] bg-red-50 border-l-4 border-[#E8002D] rounded-lg">
                    <FileText size={20} />
                    <span className="font-medium">My Posts</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                    <FileText size={20} />
                    <span className="font-medium">My Drafts</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                    <Calendar size={20} />
                    <span className="font-medium">Calendar</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                    <GitBranch size={20} />
                    <span className="font-medium">Idea Pipeline</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                    <MessageSquare size={20} />
                    <span className="font-medium">Problem Hub</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                    <Users size={20} />
                    <span className="font-medium">Team Board</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                    <Archive size={20} />
                    <span className="font-medium">Idea Autopsy Library</span>
                  </a>
                </nav>
              </div>

              {/* Main Content */}
              <div className="flex-1 bg-gray-50 overflow-y-auto p-6">
                <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
                  <p className="text-gray-500 text-lg">Main Content Area</p>
                  <p className="text-sm text-gray-400 mt-2">Page content loads here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-[#E8002D] to-[#0033A0] px-6 py-4">
          <h3 className="text-xl font-bold text-white">Mobile Layout (375px)</h3>
        </div>
        
        <div className="p-8 bg-gray-50 flex justify-center">
          <div className="w-[375px] border-2 border-gray-300 rounded-lg overflow-hidden bg-white shadow-xl" style={{ height: '667px' }}>
            {/* Top Navbar - Mobile */}
            <div className="h-14 bg-white border-b border-gray-200 flex items-center px-4 justify-between">
              <button className="p-2">
                <div className="space-y-1">
                  <div className="w-5 h-0.5 bg-gray-700"></div>
                  <div className="w-5 h-0.5 bg-gray-700"></div>
                  <div className="w-5 h-0.5 bg-gray-700"></div>
                </div>
              </button>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-r from-[#E8002D] to-[#0033A0] rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">IFN</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="relative">
                  <Bell size={18} className="text-gray-600" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#E8002D] rounded-full"></span>
                </button>
                <div className="w-8 h-8 bg-[#0033A0] rounded-full flex items-center justify-center text-white text-xs font-semibold">
                  JD
                </div>
              </div>
            </div>

            {/* Main Content - Mobile */}
            <div className="bg-gray-50 overflow-y-auto" style={{ height: 'calc(667px - 56px)' }}>
              <div className="p-4">
                <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
                  <p className="text-gray-500">Main Content</p>
                  <p className="text-xs text-gray-400 mt-2">Sidebar opens as drawer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Dropdown */}
      <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Profile Dropdown Menu</h3>
        
        <div className="max-w-xs">
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#0033A0] rounded-full flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div>
                  <p className="font-semibold text-gray-900">John Doe</p>
                  <p className="text-sm text-gray-600">john@icfai.edu</p>
                </div>
              </div>
            </div>
            <div className="py-2">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
                View Profile
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
                My Posts
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
                My Drafts
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
                Settings
              </a>
            </div>
            <div className="border-t border-gray-200 py-2">
              <button className="w-full text-left px-4 py-2 text-[#E8002D] hover:bg-red-50 transition-colors font-medium">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Layout Features */}
      <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#0033A0]">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Layout Features</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• <strong>Top Navbar:</strong> 64px height, white background, sticky positioning</li>
          <li>• <strong>Left Sidebar:</strong> 240px width on desktop, drawer on mobile</li>
          <li>• <strong>Active Link:</strong> Red left border + red text + light red background</li>
          <li>• <strong>Search Bar:</strong> Centered in navbar, dropdown results on type</li>
          <li>• <strong>Notification Bell:</strong> Red badge shows unread count</li>
          <li>• <strong>Profile Avatar:</strong> Shows initials, opens dropdown menu</li>
          <li>• <strong>Mobile Behavior:</strong> Hamburger menu slides sidebar from left</li>
          <li>• <strong>Responsive:</strong> Sidebar hidden on mobile (&lt;768px)</li>
        </ul>
      </div>
    </div>
  );
}
