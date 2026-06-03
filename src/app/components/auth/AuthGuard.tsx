import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAppStore } from '../../../store/useAppStore';

interface AuthGuardProps {
  children: React.ReactNode;
  requiredRole?: 'User' | 'Mentor' | 'Admin';
}

export function AuthGuard({ children, requiredRole }: AuthGuardProps) {
  const { isAuthenticated, currentUser } = useAppStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { replace: true });
      return;
    }
    if (requiredRole && currentUser?.role !== requiredRole) {
      // Direct unauthorized roles back to feed
      navigate('/feed', { replace: true });
    }
  }, [isAuthenticated, currentUser, requiredRole, navigate]);

  if (!isAuthenticated) return null;
  return <>{children}</>;
}
