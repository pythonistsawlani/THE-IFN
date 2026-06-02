import { TrendingUp, Users, GitBranch, Calendar, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router';

const stats = [
  { label: 'Active Ideas', value: '24', icon: TrendingUp, color: 'text-[#E8002D]', bg: 'bg-red-50' },
  { label: 'Total Teams', value: '12', icon: Users, color: 'text-[#0033A0]', bg: 'bg-blue-50' },
  { label: 'In Pipeline', value: '8', icon: GitBranch, color: 'text-green-600', bg: 'bg-green-50' },
  { label: 'Events This Month', value: '5', icon: Calendar, color: 'text-purple-600', bg: 'bg-purple-50' },
];

const recentActivities = [
  { id: 1, user: 'Sarah Chen', action: 'submitted idea', target: 'AI-powered study companion', time: '2h ago' },
  { id: 2, user: 'Rahul Kumar', action: 'joined team', target: 'EdTech Innovation', time: '4h ago' },
  { id: 3, user: 'Priya Sharma', action: 'posted in', target: 'Problem Hub', time: '5h ago' },
  { id: 4, user: 'Admin', action: 'approved idea', target: 'Sustainable Fashion App', time: '1d ago' },
];

const upcomingEvents = [
  { id: 1, title: 'Pitch Practice Session', date: 'Jun 5, 2026', time: '2:00 PM' },
  { id: 2, title: 'Mentor Connect', date: 'Jun 8, 2026', time: '10:00 AM' },
  { id: 3, title: 'Demo Day Prep', date: 'Jun 12, 2026', time: '3:00 PM' },
];

export function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
        </div>
        <Button
          onClick={() => navigate('/posts/create')}
          className="bg-gradient-to-r from-[#E8002D] to-[#0033A0] hover:opacity-90 text-white"
        >
          Create New Post
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="hover:shadow-lg transition-shadow">
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

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#E8002D] to-[#0033A0] rounded-full flex items-center justify-center text-white font-semibold">
                    {activity.user[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">
                      <span className="font-semibold">{activity.user}</span>{' '}
                      <span className="text-gray-600">{activity.action}</span>{' '}
                      <span className="font-semibold">{activity.target}</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button
              variant="ghost"
              className="w-full mt-4 text-[#0033A0]"
              onClick={() => navigate('/feed')}
            >
              View All Activity
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="p-3 border border-gray-200 rounded-lg hover:border-[#0033A0] transition-colors cursor-pointer">
                  <h4 className="font-semibold text-gray-900 text-sm">{event.title}</h4>
                  <p className="text-xs text-gray-600 mt-1">{event.date}</p>
                  <p className="text-xs text-[#0033A0] font-medium mt-1">{event.time}</p>
                </div>
              ))}
            </div>
            <Button
              variant="ghost"
              className="w-full mt-4 text-[#0033A0]"
              onClick={() => navigate('/calendar')}
            >
              View Calendar
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col" onClick={() => navigate('/pipeline/submit')}>
              <GitBranch className="w-6 h-6 mb-2" />
              Submit Idea
            </Button>
            <Button variant="outline" className="h-20 flex-col" onClick={() => navigate('/problems')}>
              <TrendingUp className="w-6 h-6 mb-2" />
              Browse Problems
            </Button>
            <Button variant="outline" className="h-20 flex-col" onClick={() => navigate('/team-board')}>
              <Users className="w-6 h-6 mb-2" />
              Find Team
            </Button>
            <Button variant="outline" className="h-20 flex-col" onClick={() => navigate('/autopsy')}>
              <Calendar className="w-6 h-6 mb-2" />
              View Autopsies
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
