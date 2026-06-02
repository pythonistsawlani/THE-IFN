import { useParams, useNavigate } from 'react-router';
import { useAppStore } from '../../../store/useAppStore';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { ThumbsUp, Bookmark, TrendingDown, Clock, CircleDollarSign } from 'lucide-react';
import { toast } from 'sonner';

export function AutopsyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { autopsies, toggleAutopsyUpvote, toggleAutopsyBookmark } = useAppStore();
  const autopsy = autopsies.find(a => a.id === Number(id));

  if (!autopsy) return <div className="text-center py-12 text-2xl font-bold">Autopsy not found</div>;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Button variant="ghost" onClick={() => navigate('/autopsy')}>
        &larr; Back to Library
      </Button>

      <Card>
        <CardContent className="p-8">
          <div className="flex gap-6">
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <button 
                className={`p-3 rounded-lg transition-colors ${autopsy.upvotedByMe ? 'bg-red-100 text-[#E8002D]' : 'hover:bg-red-50 text-gray-600'}`}
                onClick={() => toggleAutopsyUpvote(autopsy.id)}
              >
                <ThumbsUp className="w-6 h-6" fill={autopsy.upvotedByMe ? 'currentColor' : 'none'} />
              </button>
              <span className="font-bold text-xl text-gray-900">{autopsy.upvotes}</span>
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{autopsy.startupName} Autopsy</h1>
                  <Badge variant="outline" className="text-[#0033A0] border-[#0033A0]">
                    {autopsy.category}
                  </Badge>
                </div>
                
                <button 
                  className={`flex items-center gap-2 transition-colors ${autopsy.bookmarkedByMe ? 'text-[#0033A0]' : 'text-gray-600 hover:text-[#0033A0]'}`}
                  onClick={() => {
                    toggleAutopsyBookmark(autopsy.id);
                    toast.success(autopsy.bookmarkedByMe ? 'Bookmark removed' : 'Autopsy bookmarked');
                  }}
                >
                  <Bookmark className="w-5 h-5" fill={autopsy.bookmarkedByMe ? 'currentColor' : 'none'} />
                  <span>Bookmark</span>
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-gray-50 p-4 rounded-lg">
                <div>
                  <div className="flex items-center gap-1 text-gray-500 mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Duration</span>
                  </div>
                  <p className="font-semibold">{autopsy.duration}</p>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-gray-500 mb-1">
                    <CircleDollarSign className="w-4 h-4" />
                    <span className="text-sm">Investment</span>
                  </div>
                  <p className="font-semibold">{autopsy.investment}</p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-red-50 border-l-4 border-[#E8002D] p-5 rounded-r-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingDown className="w-5 h-5 text-[#E8002D]" />
                    <h3 className="text-xl font-bold text-gray-900">Root Cause of Failure</h3>
                  </div>
                  <p className="text-gray-800 text-lg">{autopsy.rootCause}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Story</h3>
                  <div className="text-gray-700 whitespace-pre-line leading-relaxed text-lg">
                    {autopsy.story}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Lessons Learned</h3>
                  <ul className="space-y-3">
                    {autopsy.lessons.map((lesson, idx) => (
                      <li key={idx} className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <span className="text-[#0033A0] font-bold text-xl leading-none mt-0.5">•</span>
                        <span className="text-gray-800 text-lg">{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
