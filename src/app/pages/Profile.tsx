import { Mail, MapPin, Link as LinkIcon, Calendar, Edit } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import { useAppStore } from '../../store/useAppStore';
import { useNavigate } from 'react-router';

import { deriveStatusTag, getPostStatusClasses } from '../../utils/postStatus.utils';

const userProfile = {
  name: 'Sarah Chen', // Assuming currently logged in user is Sarah Chen
  email: 'sarah@example.com',
  role: 'User',
  location: 'Hyderabad, India',
  joinedDate: 'January 2026',
  bio: 'Passionate about building innovative solutions in EdTech. Currently working on AI-powered learning platforms.',
  website: 'sarahchen.dev',
  interests: ['EdTech', 'AI', 'Product Development'],
};

export function Profile() {
  const navigate = useNavigate();
  const { posts, ideas } = useAppStore();

  const userPosts = posts.filter(p => p.author === userProfile.name);
  const userIdeas = ideas.filter(i => i.owner === userProfile.name);

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Profile Header */}
      <Card>
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Avatar */}
            <div className="w-32 h-32 bg-gradient-to-r from-[#E8002D] to-[#0033A0] rounded-full flex items-center justify-center text-white font-bold text-5xl flex-shrink-0">
              SC
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{userProfile.name}</h1>
                  <p className="text-gray-600">{userProfile.role}</p>
                </div>
                <Button variant="outline" onClick={() => navigate('/settings')}>
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>

              <p className="text-gray-700 mb-4">{userProfile.bio}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm mb-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  {userProfile.email}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  {userProfile.location}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <LinkIcon className="w-4 h-4" />
                  {userProfile.website}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  Joined {userProfile.joinedDate}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {userProfile.interests.map((interest) => (
                  <Badge key={interest} variant="outline" className="text-[#0033A0] border-[#0033A0]">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Profile Content */}
      <Tabs defaultValue="posts">
        <TabsList className="bg-white border border-gray-200">
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="ideas">Ideas in Pipeline</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="posts" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userPosts.map((post) => {
                  const derivedTag = deriveStatusTag(post.tags);
                  const { containerClasses, borderClasses, badgeClasses, badgeLabel } = getPostStatusClasses(derivedTag);
                  return (
                    <div key={post.id} className={`p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer ${containerClasses} ${borderClasses}`} onClick={() => navigate(`/posts/${post.id}`)}>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900">{post.title}</h3>
                        {badgeLabel && (
                          <span className={`inline-flex items-center text-xs font-medium px-2 py-0.5 rounded-full ${badgeClasses}`}>
                            {badgeLabel}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>{post.likes} likes</span>
                        <span>{post.comments} comments</span>
                        <span className="ml-auto">{post.time}</span>
                      </div>
                    </div>
                  );
                })}
                {userPosts.length === 0 && (
                  <p className="text-gray-500 text-center py-4">No posts yet.</p>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ideas" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Ideas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userIdeas.map((idea) => (
                  <div key={idea.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{idea.title}</h3>
                        <div className="flex gap-2">
                          <Badge variant="outline">{idea.stage}</Badge>
                          <Badge className="bg-green-100 text-green-700">Active</Badge>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => navigate(`/pipeline/${idea.id}`)}>View</Button>
                    </div>
                  </div>
                ))}
                {userIdeas.length === 0 && (
                  <p className="text-gray-500 text-center py-4">No ideas submitted yet.</p>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Your recent activity will appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
