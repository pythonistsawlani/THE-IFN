import { useNavigate } from 'react-router';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { ShieldAlert, UserCheck, Shield } from 'lucide-react';
import { useAppStore } from '../../../store/useAppStore';
import { toast } from 'sonner';

export function AdminUsers() {
  const navigate = useNavigate();
  const { users, updateUserRole, toggleUserStatus } = useAppStore();

  return (
    <div className="space-y-6">
      <Button variant="ghost" onClick={() => navigate('/admin')}>
        ← Back to Admin Panel
      </Button>

      <div>
        <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
        <p className="text-gray-600 mt-1">Manage users and roles across the platform</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Registered Users ({users.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-4 py-3 font-medium text-gray-900">Name</th>
                  <th className="px-4 py-3 font-medium text-gray-900">Email</th>
                  <th className="px-4 py-3 font-medium text-gray-900">Role</th>
                  <th className="px-4 py-3 font-medium text-gray-900">Status</th>
                  <th className="px-4 py-3 font-medium text-gray-900 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id} className="border-b last:border-0 hover:bg-gray-50">
                    <td className="px-4 py-3 font-semibold">{user.name}</td>
                    <td className="px-4 py-3 text-gray-600">{user.email}</td>
                    <td className="px-4 py-3">
                      <Badge variant={user.role === 'Admin' ? 'default' : 'outline'} className={user.role === 'Admin' ? 'bg-[#0033A0] text-white' : ''}>
                        {user.role}
                      </Badge>
                    </td>
                    <td className="px-4 py-3">
                      <Badge variant="outline" className={user.status === 'Active' ? 'text-green-600 border-green-600' : 'text-red-600 border-red-600'}>
                        {user.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-right space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => {
                          updateUserRole(user.id, user.role === 'Admin' ? 'User' : 'Admin');
                          toast.success('Role updated');
                        }}
                      >
                        {user.role === 'Admin' ? <UserCheck className="w-4 h-4" /> : <Shield className="w-4 h-4" />}
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className={user.status === 'Active' ? 'text-red-600 hover:bg-red-50' : 'text-green-600 hover:bg-green-50'}
                        onClick={() => {
                          toggleUserStatus(user.id);
                          toast.success(`User ${user.status === 'Active' ? 'suspended' : 'activated'}`);
                        }}
                      >
                        {user.status === 'Active' ? <ShieldAlert className="w-4 h-4" /> : <UserCheck className="w-4 h-4" />}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
