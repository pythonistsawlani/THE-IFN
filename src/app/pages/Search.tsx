import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Search as SearchIcon, TrendingUp, FileText, Users, GitBranch } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';

const searchResults = {
  posts: [
    { id: 1, title: 'AI Study Companion Platform', type: 'Post', author: 'Sarah Chen', category: 'EdTech' },
    { id: 2, title: 'Sustainable Fashion Marketplace', type: 'Post', author: 'Rahul Kumar', category: 'E-commerce' },
  ],
  ideas: [
    { id: 1, title: 'Smart Parking Solution', type: 'Pipeline', stage: 'Validation', category: 'IoT' },
    { id: 2, title: 'Mental Health App', type: 'Pipeline', stage: 'Testing', category: 'HealthTech' },
  ],
  people: [
    { id: 1, name: 'Sarah Chen', role: 'Founder', expertise: 'EdTech, AI' },
    { id: 2, name: 'Rahul Kumar', role: 'Developer', expertise: 'Full-Stack, React' },
  ],
  problems: [
    { id: 1, title: 'Mental health support for students', category: 'HealthTech', upvotes: 45 },
    { id: 2, title: 'Urban parking difficulties', category: 'Smart City', upvotes: 32 },
  ],
};

export function Search() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Search Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Search</h1>
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search for ideas, problems, people, or teams..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-14 text-lg"
            autoFocus
          />
        </div>
      </div>

      {/* Trending Searches */}
      {!searchQuery && (
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-[#0033A0]" />
              <h3 className="font-semibold text-gray-900">Trending Searches</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['AI', 'EdTech', 'Sustainability', 'HealthTech', 'FinTech', 'IoT'].map((term) => (
                <Badge
                  key={term}
                  variant="outline"
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => setSearchQuery(term)}
                >
                  {term}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Search Results */}
      {searchQuery && (
        <Tabs defaultValue="all">
          <TabsList className="bg-white border border-gray-200">
            <TabsTrigger value="all">All Results</TabsTrigger>
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="ideas">Ideas</TabsTrigger>
            <TabsTrigger value="people">People</TabsTrigger>
            <TabsTrigger value="problems">Problems</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6 mt-6">
            <ResultSection title="Posts" icon={FileText} results={searchResults.posts} type="post" navigate={navigate} />
            <ResultSection title="Ideas" icon={GitBranch} results={searchResults.ideas} type="idea" navigate={navigate} />
            <ResultSection title="People" icon={Users} results={searchResults.people} type="person" navigate={navigate} />
          </TabsContent>

          <TabsContent value="posts" className="space-y-4 mt-6">
            <ResultSection title="Posts" icon={FileText} results={searchResults.posts} type="post" navigate={navigate} />
          </TabsContent>

          <TabsContent value="ideas" className="space-y-4 mt-6">
            <ResultSection title="Ideas" icon={GitBranch} results={searchResults.ideas} type="idea" navigate={navigate} />
          </TabsContent>

          <TabsContent value="people" className="space-y-4 mt-6">
            <ResultSection title="People" icon={Users} results={searchResults.people} type="person" navigate={navigate} />
          </TabsContent>

          <TabsContent value="problems" className="space-y-4 mt-6">
            <ResultSection title="Problems" icon={FileText} results={searchResults.problems} type="problem" navigate={navigate} />
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}

function ResultSection({ title, icon: Icon, results, type, navigate }: any) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-5 h-5 text-[#0033A0]" />
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <span className="text-sm text-gray-600">({results.length})</span>
      </div>
      <div className="space-y-2">
        {results.map((result: any) => (
          <Card key={result.id} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4">
              {type === 'post' && (
                <div onClick={() => navigate(`/posts/${result.id}`)}>
                  <h4 className="font-semibold text-gray-900 mb-1">{result.title}</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>by {result.author}</span>
                    <Badge variant="outline">{result.category}</Badge>
                  </div>
                </div>
              )}
              {type === 'idea' && (
                <div onClick={() => navigate(`/pipeline/${result.id}`)}>
                  <h4 className="font-semibold text-gray-900 mb-1">{result.title}</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Badge variant="outline">{result.stage}</Badge>
                    <Badge variant="outline">{result.category}</Badge>
                  </div>
                </div>
              )}
              {type === 'person' && (
                <div onClick={() => navigate(`/profile`)}>
                  <h4 className="font-semibold text-gray-900 mb-1">{result.name}</h4>
                  <p className="text-sm text-gray-600">{result.role} • {result.expertise}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
