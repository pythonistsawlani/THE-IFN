import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useAppStore } from '../../../store/useAppStore';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { ThumbsUp, MessageCircle, Bookmark, Send } from 'lucide-react';
import { toast } from 'sonner';

export function ProblemDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { problems, toggleProblemUpvote, toggleProblemBookmark, addProblemComment } = useAppStore();
  const problem = problems.find(p => p.id === Number(id));

  const [newComment, setNewComment] = useState('');
  const [localComments, setLocalComments] = useState([
    { id: 1, author: 'Jane Doe', content: 'I have faced this issue too. It is a real pain.', time: '1h ago', likes: 2 }
  ]);

  if (!problem) {
    return <div className="text-center py-12 text-2xl font-bold">Problem not found</div>;
  }

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    setLocalComments([
      { id: Date.now(), author: 'You', content: newComment, time: 'Just now', likes: 0 },
      ...localComments
    ]);
    addProblemComment(problem.id);
    setNewComment('');
    toast.success('Comment added');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Button variant="ghost" onClick={() => navigate('/problems')}>
        &larr; Back to Problems Hub
      </Button>

      <Card>
        <CardContent className="p-8">
          <div className="flex gap-6">
            {/* Upvote Section */}
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <button 
                className={`p-3 rounded-lg transition-colors ${problem.upvotedByMe ? 'bg-blue-100 text-[#0033A0]' : 'hover:bg-gray-100 text-gray-600'}`}
                onClick={() => toggleProblemUpvote(problem.id)}
              >
                <ThumbsUp className="w-6 h-6" fill={problem.upvotedByMe ? 'currentColor' : 'none'} />
              </button>
              <span className="font-bold text-xl text-gray-900">{problem.upvotes}</span>
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-3xl font-bold text-gray-900">{problem.title}</h1>
                <Badge variant="outline" className="text-[#0033A0] border-[#0033A0]">
                  {problem.category}
                </Badge>
              </div>

              <div className="text-gray-700 whitespace-pre-line leading-relaxed mb-6 text-lg">
                {problem.description}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>Posted by <span className="font-semibold">User</span></span>
                  <span className="flex items-center gap-1"><MessageCircle className="w-4 h-4"/> {problem.comments}</span>
                </div>
                <button 
                  className={`flex items-center gap-2 transition-colors ${problem.bookmarkedByMe ? 'text-[#0033A0]' : 'text-gray-600 hover:text-[#0033A0]'}`}
                  onClick={() => {
                    toggleProblemBookmark(problem.id);
                    toast.success(problem.bookmarkedByMe ? 'Bookmark removed' : 'Problem bookmarked');
                  }}
                >
                  <Bookmark className="w-5 h-5" fill={problem.bookmarkedByMe ? 'currentColor' : 'none'} />
                  <span>Bookmark</span>
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card id="comments">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Discussion ({problem.comments})</h3>

          <form onSubmit={handleComment} className="mb-8">
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-[#E8002D] to-[#0033A0] rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                U
              </div>
              <div className="flex-1 flex gap-2">
                <input
                  type="text"
                  placeholder="Share your thoughts or potential solutions..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0033A0] focus:border-transparent"
                />
                <Button type="submit" className="bg-[#0033A0] hover:bg-[#002880] text-white">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </form>

          <div className="space-y-4">
            {localComments.map((comment) => (
              <div key={comment.id} className="flex gap-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-[#0033A0] rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                  {comment.author.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-gray-900">{comment.author}</span>
                    <span className="text-sm text-gray-500">{comment.time}</span>
                  </div>
                  <p className="text-gray-700 mb-2">{comment.content}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
