import { useNavigate } from 'react-router';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { CheckCircle, XCircle, Clock } from 'lucide-react';
import { useAppStore } from '../../../store/useAppStore';
import { toast } from 'sonner';

export function AdminPipeline() {
  const navigate = useNavigate();
  const { ideas, advanceIdeaStage, deleteIdea } = useAppStore();

  // Show ideas that are in the earliest stage as pending submissions
  const pendingIdeas = ideas.filter(idea => idea.stage === 'Ideation');

  const handleApprove = (id: number) => {
    advanceIdeaStage(id);
    toast.success('Idea approved and moved to Validation stage');
  };

  const handleReject = (id: number) => {
    deleteIdea(id);
    toast.success('Idea rejected');
  };

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Button variant="ghost" onClick={() => navigate('/admin')}>
        ← Back to Admin Panel
      </Button>

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Pipeline Management</h1>
        <p className="text-gray-600 mt-1">Review and approve idea submissions</p>
      </div>

      {/* Pending Submissions */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Pending Submissions ({pendingIdeas.length})</CardTitle>
            <Badge variant="outline" className="text-[#E8002D] border-[#E8002D]">
              <Clock className="w-3 h-3 mr-1" />
              Requires Action
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pendingIdeas.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No pending ideas requiring approval.
              </div>
            )}
            {pendingIdeas.map((idea) => (
              <div
                key={idea.id}
                className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{idea.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <span>by <span className="font-semibold">{idea.owner}</span></span>
                      <span>•</span>
                      <span>Recently</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {idea.tags && idea.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-[#0033A0] border-[#0033A0] flex-shrink-0 ml-2">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-700 line-clamp-2">{idea.description}</p>
                </div>

                <div className="flex gap-2 pt-3 border-t border-gray-100">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => navigate(`/pipeline/${idea.id}`)}
                  >
                    View Details
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-green-600 hover:bg-green-50"
                    onClick={() => handleApprove(idea.id)}
                  >
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Approve
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-[#E8002D] hover:bg-red-50"
                    onClick={() => handleReject(idea.id)}
                  >
                    <XCircle className="w-4 h-4 mr-1" />
                    Reject
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
