import { useState } from 'react';
import { Link } from 'react-router';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Card } from '../../components/ui/card';
import { toast } from 'sonner';

export function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Mock functionality for sending reset link
    setIsSubmitted(true);
    toast.success('Password reset link sent!');
  };

  return (
    <Card className="w-full max-w-md p-8 bg-white shadow-2xl">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-[#E8002D] to-[#0033A0] rounded-lg flex items-center justify-center mx-auto mb-4">
          <span className="text-white font-bold text-2xl">IFN</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Reset Password</h1>
        <p className="text-gray-600 mt-2">Enter your email to receive a reset link</p>
      </div>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
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

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-[#E8002D] to-[#0033A0] hover:opacity-90 text-white h-12 text-lg cursor-pointer"
          >
            Send Reset Link
          </Button>

          <div className="text-center text-sm text-gray-600 mt-6">
            Remember your password?{' '}
            <Link to="/login" className="text-[#0033A0] hover:underline font-semibold">
              Back to Login
            </Link>
          </div>
        </form>
      ) : (
        <div className="text-center space-y-6">
          <div className="p-4 bg-green-50 text-green-700 rounded-lg border border-green-200">
            If an account exists for <strong>{email}</strong>, you will receive a password reset link shortly.
          </div>
          <Button
            asChild
            variant="outline"
            className="w-full h-12 text-lg cursor-pointer"
          >
            <Link to="/login">Return to Login</Link>
          </Button>
        </div>
      )}
    </Card>
  );
}
