import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Heart, MessageCircle, Share2, Bookmark, Send } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { useAppStore } from '../../../store/useAppStore';
import { toast } from 'sonner';

const initialComments = [
  { id: 1, author: 'Rahul Kumar', avatar: 'RK', content: 'This is a great idea! Have you considered gamification elements?', time: '1h ago', likes: 3 },
  { id: 2, author: 'Priya Sharma', avatar: 'PS', content: 'Love the focus on personalization. What about data privacy concerns?', time: '45m ago', likes: 2 },
];

export function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newComment, setNewComment] = useState('');
  const [localComments, setLocalComments] = useState(initialComments);

  const { posts, togglePostLike, togglePostBookmark, addPostComment } = useAppStore();
  const post = posts.find(p => p.id === Number(id));

  // Scroll to comments if hash is present
  useEffect(() => {
    if (window.location.hash === '#comments') {
      const el = document.getElementById('comments');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !post) return;
    
    const newCommentObj = {
      id: Date.now(),
      author: 'You',
      avatar: 'Y',
      content: newComment,
      time: 'Just now',
      likes: 0
    };
    
    setLocalComments([newCommentObj, ...localComments]);
    addPostComment(post.id);
    setNewComment('');
    toast.success('Comment added successfully');
  };

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h2>
        <Button onClick={() => navigate('/feed')}>Return to Feed</Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Back Button */}
      <Button variant="ghost" onClick={() => navigate('/feed')}>
        ← Back to Feed
      </Button>

      {/* Main Post */}
      <Card>
        <CardContent className="p-8">
          {/* Author Info */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-[#E8002D] to-[#0033A0] rounded-full flex items-center justify-center text-white font-semibold text-lg">
              {post.avatar}
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">{post.author}</h4>
              <p className="text-sm text-gray-600">{post.time}</p>
            </div>
          </div>

          {/* Content */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="text-gray-700 mb-6 whitespace-pre-line leading-relaxed">
            {post.content}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-[#0033A0] border-[#0033A0]">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6 pt-6 border-t border-gray-100">
            <button 
              className={`flex items-center gap-2 transition-colors ${post.likedByMe ? 'text-[#E8002D]' : 'text-gray-600 hover:text-[#E8002D]'}`}
              onClick={() => togglePostLike(post.id)}
            >
              <Heart className="w-5 h-5" fill={post.likedByMe ? 'currentColor' : 'none'} />
              <span className="font-medium">{post.likes}</span>
            </button>
            <button 
              className="flex items-center gap-2 text-gray-600 hover:text-[#0033A0] transition-colors"
              onClick={() => document.getElementById('comments')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">{post.comments}</span>
            </button>
            <button 
              className="flex items-center gap-2 text-gray-600 hover:text-[#0033A0] transition-colors"
              onClick={() => toast.success('Share options opened')}
            >
              <Share2 className="w-5 h-5" />
            </button>
            <button 
              className={`flex items-center gap-2 transition-colors ml-auto ${post.bookmarkedByMe ? 'text-[#0033A0]' : 'text-gray-600 hover:text-[#0033A0]'}`}
              onClick={() => {
                togglePostBookmark(post.id);
                toast.success(post.bookmarkedByMe ? 'Bookmark removed' : 'Post bookmarked');
              }}
            >
              <Bookmark className="w-5 h-5" fill={post.bookmarkedByMe ? 'currentColor' : 'none'} />
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Comments Section */}
      <Card id="comments">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Comments ({post.comments})</h3>

          {/* Comment Form */}
          <form onSubmit={handleComment} className="mb-6">
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-[#E8002D] to-[#0033A0] rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                U
              </div>
              <div className="flex-1 flex gap-2">
                <input
                  type="text"
                  placeholder="Write a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0033A0] focus:border-transparent"
                />
                <Button
                  type="submit"
                  className="bg-[#0033A0] hover:bg-[#002880] text-white"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </form>

          {/* Comments List */}
          <div className="space-y-4">
            {localComments.map((comment) => (
              <div key={comment.id} className="flex gap-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-gradient-to-r from-[#E8002D] to-[#0033A0] rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                  {comment.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-gray-900">{comment.author}</span>
                    <span className="text-sm text-gray-500">{comment.time}</span>
                  </div>
                  <p className="text-gray-700 mb-2">{comment.content}</p>
                  <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-[#E8002D] transition-colors">
                    <Heart className="w-4 h-4" />
                    <span>{comment.likes}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
