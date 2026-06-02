import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Card } from '../../components/ui/card';

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
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
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="rounded border-gray-300" />
            <span className="text-gray-700">Remember me</span>
          </label>
          <Link to="/forgot-password" className="text-sm text-[#0033A0] hover:underline">
            Forgot password?
          </Link>
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-[#E8002D] to-[#0033A0] hover:opacity-90 text-white h-12 text-lg"
        >
          Sign In
        </Button>

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
