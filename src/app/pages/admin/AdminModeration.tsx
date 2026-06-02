import { useNavigate } from 'react-router';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { ShieldAlert } from 'lucide-react';

export function AdminModeration() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <Button variant="ghost" onClick={() => navigate('/admin')}>
        ← Back to Admin Panel
      </Button>

      <div>
        <h1 className="text-3xl font-bold text-gray-900">Content Moderation</h1>
        <p className="text-gray-600 mt-1">Review flagged content and reports</p>
      </div>

      <Card>
        <CardContent className="p-12 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-4">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">All Caught Up!</h2>
          <p className="text-gray-600 max-w-md">
            There is currently no reported content requiring your attention. You will see flagged posts, comments, and users here when they are reported by the community.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
