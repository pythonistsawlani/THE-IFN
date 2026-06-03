import { Bell, Search, Menu, User, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useAppStore } from '../../../store/useAppStore';

interface HeaderProps {
  onToggleSidebar: () => void;
}

export function Header({ onToggleSidebar }: HeaderProps) {
  const navigate = useNavigate();
  const logout = useAppStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50">
      <div className="h-full px-4 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleSidebar}
            className="hover:bg-gray-100"
          >
            <Menu className="w-5 h-5" />
          </Button>

          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-[#E8002D] to-[#0033A0] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">IFN</span>
            </div>
            <span className="font-bold text-xl text-gray-900 hidden sm:inline">
              ICFAI Founders Network
            </span>
          </Link>
        </div>

        {/* Center Section - Search */}
        <div className="flex-1 max-w-2xl mx-8 hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search ideas, problems, teams..."
              className="w-full pl-10 bg-gray-50 border-gray-200 focus:bg-white"
              onFocus={() => navigate('/search')}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="relative hover:bg-gray-100"
            onClick={() => navigate('/notifications')}
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#E8002D] rounded-full"></span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-gray-100"
            onClick={() => navigate('/profile')}
            title="Profile"
          >
            <User className="w-5 h-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-gray-100 text-red-600 hover:text-red-700"
            onClick={handleLogout}
            title="Sign Out"
          >
            <LogOut className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
