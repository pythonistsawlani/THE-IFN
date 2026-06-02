import { Link, useLocation } from 'react-router';
import {
  LayoutDashboard,
  FileText,
  Calendar,
  GitBranch,
  Users,
  Archive,
  Shield,
  Settings,
  HelpCircle,
  Plus,
} from 'lucide-react';
import { Button } from '../ui/button';

interface SidebarProps {
  isOpen: boolean;
}

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { name: 'Feed', icon: FileText, path: '/feed' },
  { name: 'Calendar', icon: Calendar, path: '/calendar' },
  { name: 'Idea Pipeline', icon: GitBranch, path: '/pipeline' },
  { name: 'Problems Hub', icon: HelpCircle, path: '/problems' },
  { name: 'Team Board', icon: Users, path: '/team-board' },
  { name: 'Autopsy Library', icon: Archive, path: '/autopsy' },
  { name: 'Admin Panel', icon: Shield, path: '/admin' },
];

export function Sidebar({ isOpen }: SidebarProps) {
  const location = useLocation();

  if (!isOpen) return null;

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="p-4 space-y-6">
        {/* Create Button */}
        <Button
          className="w-full bg-gradient-to-r from-[#E8002D] to-[#0033A0] hover:opacity-90 text-white"
          onClick={() => window.location.href = '/posts/create'}
        >
          <Plus className="w-4 h-4 mr-2" />
          Create Post
        </Button>

        {/* Navigation */}
        <nav className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + '/');

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-[#0033A0] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-4 space-y-1">
          <Link
            to="/settings"
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
              location.pathname === '/settings'
                ? 'bg-[#0033A0] text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Settings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
