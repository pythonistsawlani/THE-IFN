import { useNavigate } from 'react-router';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ThumbsUp, MessageCircle, Plus } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';
import { toast } from 'sonner';

export function Problems() {
  const navigate = useNavigate();
  const { problems, toggleProblemUpvote } = useAppStore();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Problems Hub</h1>
          <p className="text-gray-600 mt-1">Discover real problems that need solutions</p>
        </div>
        <Button 
          onClick={() => toast.success('Post problem modal would open here')}
          className="bg-gradient-to-r from-[#E8002D] to-[#0033A0] hover:opacity-90 text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Post Problem
        </Button>
      </div>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        <Button variant="outline" size="sm">All Problems</Button>
        <Button variant="outline" size="sm">HealthTech</Button>
        <Button variant="outline" size="sm">EdTech</Button>
        <Button variant="outline" size="sm">Smart City</Button>
        <Button variant="outline" size="sm">Sustainability</Button>
      </div>

      {/* Problems List */}
      <div className="space-y-4">
        {problems.map((problem) => (
          <Card 
            key={problem.id} 
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate(`/problems/${problem.id}`)}
          >
            <CardContent className="p-6">
              <div className="flex gap-4">
                {/* Upvote Section */}
                <div className="flex flex-col items-center gap-1 flex-shrink-0">
                  <button 
                    className={`p-2 rounded-lg transition-colors ${problem.upvotedByMe ? 'bg-blue-100 text-[#0033A0]' : 'hover:bg-gray-100 text-gray-600'}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleProblemUpvote(problem.id);
                    }}
                  >
                    <ThumbsUp className="w-5 h-5" fill={problem.upvotedByMe ? 'currentColor' : 'none'} />
                  </button>
                  <span className="font-semibold text-gray-900">{problem.upvotes}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{problem.title}</h3>
                    <Badge variant="outline" className="text-[#0033A0] border-[#0033A0] flex-shrink-0 ml-2">
                      {problem.category}
                    </Badge>
                  </div>

                  <p className="text-gray-700 mb-3">{problem.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>Posted by <span className="font-semibold">User</span></span>
                      <span>Just now</span>
                    </div>

                    <button 
                      className="flex items-center gap-2 text-gray-600 hover:text-[#0033A0] transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/problems/${problem.id}#comments`);
                      }}
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{problem.comments}</span>
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
