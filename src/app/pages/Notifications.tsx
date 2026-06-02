import { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Bell, Heart, MessageCircle, Users, GitBranch, CheckCheck } from 'lucide-react';
import { toast } from 'sonner';

const initialNotifications = [
  {
    id: 1,
    type: 'like',
    icon: Heart,
    message: 'Sarah Chen liked your post',
    detail: 'AI Study Companion Platform',
    time: '2h ago',
    read: false,
  },
  {
    id: 2,
    type: 'comment',
    icon: MessageCircle,
    message: 'Rahul Kumar commented on your idea',
    detail: 'Great concept! Have you considered gamification?',
    time: '4h ago',
    read: false,
  },
  {
    id: 3,
    type: 'team',
    icon: Users,
    message: 'New application for your team',
    detail: 'John Doe applied for Full-Stack Developer position',
    time: '1d ago',
    read: true,
  },
  {
    id: 4,
    type: 'pipeline',
    icon: GitBranch,
    message: 'Your idea advanced to next gate',
    detail: 'AI Study Companion moved to Validation stage',
    time: '2d ago',
    read: true,
  },
  {
    id: 5,
    type: 'mention',
    icon: Bell,
    message: 'Priya Sharma mentioned you in a comment',
    detail: '@johndoe what do you think about this approach?',
    time: '3d ago',
    read: true,
  },
];

export function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
    toast.success('All notifications marked as read');
  };

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
          <p className="text-gray-600 mt-1">Stay updated with your activity</p>
        </div>
        <Button variant="outline" onClick={markAllAsRead}>
          <CheckCheck className="w-4 h-4 mr-2" />
          Mark All as Read
        </Button>
      </div>

      {/* Unread Count */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-4">
          <p className="text-sm text-gray-900">
            You have <span className="font-bold text-[#0033A0]">{notifications.filter(n => !n.read).length} unread</span> notifications
          </p>
        </CardContent>
      </Card>

      {/* Notifications List */}
      <div className="space-y-2">
        {notifications.map((notification) => {
          const Icon = notification.icon;
          return (
            <Card
              key={notification.id}
              onClick={() => markAsRead(notification.id)}
              className={`hover:shadow-md transition-shadow cursor-pointer ${
                !notification.read ? 'bg-blue-50 border-blue-200' : ''
              }`}
            >
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    notification.type === 'like' ? 'bg-red-100' :
                    notification.type === 'comment' ? 'bg-blue-100' :
                    notification.type === 'team' ? 'bg-purple-100' :
                    notification.type === 'pipeline' ? 'bg-green-100' :
                    'bg-gray-100'
                  }`}>
                    <Icon className={`w-5 h-5 ${
                      notification.type === 'like' ? 'text-[#E8002D]' :
                      notification.type === 'comment' ? 'text-[#0033A0]' :
                      notification.type === 'team' ? 'text-purple-600' :
                      notification.type === 'pipeline' ? 'text-green-600' :
                      'text-gray-600'
                    }`} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 mb-1">{notification.message}</p>
                    <p className="text-sm text-gray-700 mb-2">{notification.detail}</p>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-500">{notification.time}</span>
                      {!notification.read && (
                        <Badge className="bg-[#0033A0] text-white text-xs">New</Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
