import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Card } from '../../components/ui/card';
import { useAppStore } from '../../../store/useAppStore';
import { toast } from 'sonner';

export const MOCK_USERS = [
  {
    id: 1,
    name: 'Sarah Chen',
    email: 'student@icfai.edu',
    role: 'User',
    status: 'Active',
    avatar: 'SC',
    startupName: 'EduConnect',
  },
  {
    id: 3,
    name: 'Priya Mehta',
    email: 'mentor@icfai.edu',
    role: 'Mentor',
    status: 'Active',
    avatar: 'PM',
  },
  {
    id: 2,
    name: 'Rahul Kumar',
    email: 'admin@icfai.edu',
    role: 'Admin',
    status: 'Active',
    avatar: 'RK',
  },
];

export function Login() {
  const navigate = useNavigate();
  const login = useAppStore((state) => state.login);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const matchedUser = MOCK_USERS.find(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );

    if (!matchedUser) {
      setError('Invalid email or password.');
      toast.error('Login failed');
      return;
    }

    // Accept any password for mock ease (e.g. password123/mentor123/admin123)
    login(matchedUser);
    toast.success(`Logged in as ${matchedUser.name}`);
    navigate('/dashboard');
  };

  return (
    <Card className="w-full max-w-md p-8 bg-white shadow-2xl">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-[#E8002D] to-[#0033A0] rounded-lg flex items-center justify-center mx-auto mb-4">
          <span className="text-white font-bold text-2xl">IFN</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
        <p className="text-gray-600 mt-2">Sign in to continue to IFN</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="text-sm text-[#E8002D] bg-red-50 border border-red-200 rounded-lg px-3 py-2">
            {error}
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="student@icfai.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input 
              type="checkbox" 
              className="rounded border-gray-300"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span className="text-gray-700">Remember me</span>
          </label>
          <Link to="/forgot-password" className="text-sm text-[#0033A0] hover:underline">
            Forgot password?
          </Link>
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-[#E8002D] to-[#0033A0] hover:opacity-90 text-white h-12 text-lg cursor-pointer"
        >
          Sign In
        </Button>

        {/* Development Hint Box */}
        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg text-left">
          <p className="text-xs text-amber-700 font-semibold mb-2">
            🔑 Mock Accounts (any password):
          </p>
          <ul className="text-xs text-amber-600 space-y-1">
            <li>• Student: <code className="font-mono bg-amber-100/50 px-1 py-0.5 rounded">student@icfai.edu</code></li>
            <li>• Mentor: <code className="font-mono bg-amber-100/50 px-1 py-0.5 rounded">mentor@icfai.edu</code></li>
            <li>• Admin: <code className="font-mono bg-amber-100/50 px-1 py-0.5 rounded">admin@icfai.edu</code></li>
          </ul>
        </div>

        <div className="text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-[#0033A0] hover:underline font-semibold">
            Sign up
          </Link>
        </div>
      </form>
    </Card>
  );
}
