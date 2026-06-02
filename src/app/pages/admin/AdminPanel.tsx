import { useNavigate } from 'react-router';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Shield, Users, GitBranch, Tag, FileText, AlertCircle } from 'lucide-react';

const stats = [
  { label: 'Total Users', value: '248', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Active Ideas', value: '34', icon: GitBranch, color: 'text-green-600', bg: 'bg-green-50' },
  { label: 'Total Posts', value: '156', icon: FileText, color: 'text-purple-600', bg: 'bg-purple-50' },
  { label: 'Pending Reviews', value: '12', icon: AlertCircle, color: 'text-[#E8002D]', bg: 'bg-red-50' },
];

const quickActions = [
  { title: 'Manage Tags', icon: Tag, path: '/admin/tags', color: 'bg-blue-500' },
  { title: 'Pipeline Management', icon: GitBranch, path: '/admin/pipeline', color: 'bg-green-500' },
  { title: 'User Management', icon: Users, path: '/admin/users', color: 'bg-purple-500' },
  { title: 'Content Moderation', icon: Shield, path: '/admin/moderation', color: 'bg-[#E8002D]' },
];

const recentActivity = [
  { id: 1, action: 'New user registered', user: 'john.doe@icfai.edu', time: '5 min ago' },
  { id: 2, action: 'Idea submitted to pipeline', user: 'sarah.chen', time: '1h ago' },
  { id: 3, action: 'Post reported', user: 'content-mod', time: '2h ago' },
  { id: 4, action: 'Tag created', user: 'admin', time: '3h ago' },
];

export function AdminPanel() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-r from-[#E8002D] to-[#0033A0] rounded-lg flex items-center justify-center">
          <Shield className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
          <p className="text-gray-600">Manage platform settings and content</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  </div>
                  <div className={`${stat.bg} ${stat.color} p-3 rounded-lg`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.path}
                  onClick={() => navigate(action.path)}
                  className="p-6 border-2 border-gray-200 rounded-lg hover:border-[#0033A0] hover:shadow-md transition-all text-center group"
                >
                  <div className={`${action.color} w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-semibold text-gray-900 text-sm">{action.title}</p>
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">by {activity.user}</p>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
