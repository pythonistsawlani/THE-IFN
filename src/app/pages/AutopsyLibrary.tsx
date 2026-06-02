import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { BookOpen, TrendingDown, Plus, ThumbsUp } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';
import { toast } from 'sonner';

export function AutopsyLibrary() {
  const navigate = useNavigate();
  const { autopsies, addAutopsy, toggleAutopsyUpvote } = useAppStore();
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    startupName: '',
    category: 'SaaS',
    duration: '',
    investment: '',
    rootCause: '',
    story: '',
    lessons: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lessonsArr = formData.lessons.split('\n').filter(l => l.trim() !== '');
    addAutopsy({
      startupName: formData.startupName,
      category: formData.category,
      duration: formData.duration,
      investment: formData.investment,
      rootCause: formData.rootCause,
      story: formData.story,
      lessons: lessonsArr.length > 0 ? lessonsArr : ['No lessons provided']
    });
    toast.success('Autopsy shared successfully!');
    setShowModal(false);
    setFormData({ startupName: '', category: 'SaaS', duration: '', investment: '', rootCause: '', story: '', lessons: '' });
  };

  const filteredAutopsies = selectedCategory 
    ? autopsies.filter(a => a.category === selectedCategory)
    : autopsies;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Idea Autopsy Library</h1>
          <p className="text-gray-600 mt-1">Learn from failures, avoid common mistakes</p>
        </div>
        <Button 
          onClick={() => setShowModal(true)}
          className="bg-gradient-to-r from-[#E8002D] to-[#0033A0] hover:opacity-90 text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Share Your Autopsy
        </Button>
      </div>

      {/* Info Banner */}
      <Card className="border-l-4 border-[#E8002D] bg-red-50">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-[#E8002D] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">What is an Idea Autopsy?</h3>
              <p className="text-sm text-gray-700">
                A post-mortem analysis of failed ideas and startups. Learn from others' mistakes,
                understand what went wrong, and avoid similar pitfalls in your own journey.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        <Button variant={selectedCategory === null ? "default" : "outline"} size="sm" onClick={() => setSelectedCategory(null)}>All Categories</Button>
        <Button variant={selectedCategory === 'EdTech' ? "default" : "outline"} size="sm" onClick={() => setSelectedCategory('EdTech')}>EdTech</Button>
        <Button variant={selectedCategory === 'HealthTech' ? "default" : "outline"} size="sm" onClick={() => setSelectedCategory('HealthTech')}>HealthTech</Button>
        <Button variant={selectedCategory === 'FinTech' ? "default" : "outline"} size="sm" onClick={() => setSelectedCategory('FinTech')}>FinTech</Button>
        <Button variant={selectedCategory === 'FoodTech' ? "default" : "outline"} size="sm" onClick={() => setSelectedCategory('FoodTech')}>FoodTech</Button>
      </div>

      {/* Autopsies List */}
      <div className="space-y-4">
        {filteredAutopsies.map((autopsy) => (
          <Card 
            key={autopsy.id} 
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate(`/autopsy/${autopsy.id}`)}
          >
            <CardContent className="p-6">
              <div className="flex gap-4">
                {/* Icon */}
                <div className="flex flex-col items-center gap-1 flex-shrink-0">
                  <button 
                    className={`p-2 rounded-lg transition-colors ${autopsy.upvotedByMe ? 'bg-red-100 text-[#E8002D]' : 'hover:bg-red-50 text-gray-600'}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleAutopsyUpvote(autopsy.id);
                    }}
                  >
                    <ThumbsUp className="w-6 h-6" fill={autopsy.upvotedByMe ? 'currentColor' : 'none'} />
                  </button>
                  <span className="text-sm font-semibold text-gray-900">{autopsy.upvotes}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{autopsy.startupName} Autopsy</h3>
                    <Badge variant="outline" className="text-[#0033A0] border-[#0033A0] flex-shrink-0 ml-2">
                      {autopsy.category}
                    </Badge>
                  </div>

                  <div className="bg-red-50 border-l-4 border-[#E8002D] p-3 mb-4">
                    <p className="text-sm font-semibold text-gray-900">Why it failed:</p>
                    <p className="text-sm text-gray-700">{autopsy.rootCause}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Key Lessons:</p>
                    <ul className="space-y-1">
                      {autopsy.lessons.map((lesson, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-[#0033A0] font-bold">•</span>
                          {lesson}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>Investment: <span className="font-semibold">{autopsy.investment}</span></span>
                      <span>Duration: <span className="font-semibold">{autopsy.duration}</span></span>
                      <span>by <span className="font-semibold">Anonymous User</span></span>
                    </div>

                    <Button variant="outline" size="sm">
                      Read Full Autopsy
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Share Autopsy Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <Card className="max-w-xl w-full bg-white relative my-8">
            <CardHeader>
              <CardTitle>Share Your Idea Autopsy</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Project Name</label>
                    <input required className="w-full border p-2 rounded focus:ring-2 focus:ring-[#0033A0] focus:border-transparent" value={formData.startupName} onChange={e => setFormData({...formData, startupName: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Category</label>
                    <input required className="w-full border p-2 rounded focus:ring-2 focus:ring-[#0033A0] focus:border-transparent" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Duration</label>
                    <input required placeholder="e.g. 1 year" className="w-full border p-2 rounded focus:ring-2 focus:ring-[#0033A0] focus:border-transparent" value={formData.duration} onChange={e => setFormData({...formData, duration: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Total Investment</label>
                    <input required placeholder="e.g. $10k or 500 hours" className="w-full border p-2 rounded focus:ring-2 focus:ring-[#0033A0] focus:border-transparent" value={formData.investment} onChange={e => setFormData({...formData, investment: e.target.value})} />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Root Cause of Failure</label>
                  <input required placeholder="One sentence summary" className="w-full border p-2 rounded focus:ring-2 focus:ring-[#0033A0] focus:border-transparent" value={formData.rootCause} onChange={e => setFormData({...formData, rootCause: e.target.value})} />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">The Story</label>
                  <textarea required rows={4} className="w-full border p-2 rounded focus:ring-2 focus:ring-[#0033A0] focus:border-transparent" value={formData.story} onChange={e => setFormData({...formData, story: e.target.value})} placeholder="What happened?" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Key Lessons (One per line)</label>
                  <textarea required rows={3} className="w-full border p-2 rounded focus:ring-2 focus:ring-[#0033A0] focus:border-transparent" value={formData.lessons} onChange={e => setFormData({...formData, lessons: e.target.value})} placeholder="Lesson 1&#10;Lesson 2" />
                </div>

                <div className="flex gap-4 mt-6 justify-end">
                  <Button type="button" variant="outline" onClick={() => setShowModal(false)}>Cancel</Button>
                  <Button type="submit" className="bg-[#E8002D] text-white hover:bg-red-700">Submit Autopsy</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
