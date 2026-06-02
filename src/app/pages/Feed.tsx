import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Heart, MessageCircle, Share2, Bookmark, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import { useAppStore, Post } from '../../store/useAppStore';
import { toast } from 'sonner';

export function Feed() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const posts = useAppStore(state => state.posts);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Feed</h1>
          <p className="text-gray-600 mt-1">Discover and engage with startup ideas</p>
        </div>
        <Button
          onClick={() => navigate('/posts/create')}
          className="bg-gradient-to-r from-[#E8002D] to-[#0033A0] hover:opacity-90 text-white"
        >
          Create Post
        </Button>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="bg-white border border-gray-200">
          <TabsTrigger value="all">All Posts</TabsTrigger>
          <TabsTrigger value="trending">
            <TrendingUp className="w-4 h-4 mr-2" />
            Trending
          </TabsTrigger>
          <TabsTrigger value="following">Following</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} navigate={navigate} />
          ))}
        </TabsContent>

        <TabsContent value="trending" className="space-y-4 mt-6">
          {posts.filter(p => p.trending).map((post) => (
            <PostCard key={post.id} post={post} navigate={navigate} />
          ))}
        </TabsContent>

        <TabsContent value="following" className="space-y-4 mt-6">
          <div className="text-center py-12">
            <p className="text-gray-600">No posts from people you follow yet.</p>
            <Button variant="link" className="text-[#0033A0] mt-2">
              Discover people to follow
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function PostCard({ post, navigate }: { post: Post; navigate: any }) {
  const { togglePostLike, togglePostBookmark } = useAppStore();

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    togglePostLike(post.id);
  };

  const handleCommentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/posts/${post.id}#comments`);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast.success('Share options opened');
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    togglePostBookmark(post.id);
    toast.success(post.bookmarkedByMe ? 'Bookmark removed' : 'Post bookmarked');
  };

  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate(`/posts/${post.id}`)}>
      <CardContent className="p-6">
        {/* Author Info */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-r from-[#E8002D] to-[#0033A0] rounded-full flex items-center justify-center text-white font-semibold">
            {post.avatar}
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900">{post.author}</h4>
            <p className="text-sm text-gray-600">{post.time}</p>
          </div>
          {post.trending && (
            <Badge variant="secondary" className="bg-[#E8002D] text-white">
              <TrendingUp className="w-3 h-3 mr-1" />
              Trending
            </Badge>
          )}
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
        <p className="text-gray-700 mb-4">{post.content}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-[#0033A0] border-[#0033A0]">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
          <button 
            className={`flex items-center gap-2 transition-colors ${post.likedByMe ? 'text-[#E8002D]' : 'text-gray-600 hover:text-[#E8002D]'}`}
            onClick={handleLike}
          >
            <Heart className="w-5 h-5" fill={post.likedByMe ? 'currentColor' : 'none'} />
            <span className="font-medium">{post.likes}</span>
          </button>
          <button 
            className="flex items-center gap-2 text-gray-600 hover:text-[#0033A0] transition-colors"
            onClick={handleCommentClick}
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-medium">{post.comments}</span>
          </button>
          <button 
            className="flex items-center gap-2 text-gray-600 hover:text-[#0033A0] transition-colors"
            onClick={handleShare}
          >
            <Share2 className="w-5 h-5" />
          </button>
          <button 
            className={`flex items-center gap-2 transition-colors ml-auto ${post.bookmarkedByMe ? 'text-[#0033A0]' : 'text-gray-600 hover:text-[#0033A0]'}`}
            onClick={handleBookmark}
          >
            <Bookmark className="w-5 h-5" fill={post.bookmarkedByMe ? 'currentColor' : 'none'} />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
