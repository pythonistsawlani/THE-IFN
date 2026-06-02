import { Outlet } from 'react-router';

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0033A0] to-[#E8002D] flex items-center justify-center p-4">
      <Outlet />
    </div>
  );
}
