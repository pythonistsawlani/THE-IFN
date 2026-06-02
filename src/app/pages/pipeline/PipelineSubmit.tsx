import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Badge } from '../../components/ui/badge';
import { X } from 'lucide-react';
import { useAppStore } from '../../../store/useAppStore';
import { toast } from 'sonner';

const categories = ['EdTech', 'HealthTech', 'FinTech', 'AI/ML', 'IoT', 'Sustainability', 'E-commerce', 'SaaS'];

export function PipelineSubmit() {
  const navigate = useNavigate();
  const addIdea = useAppStore(state => state.addIdea);
  const [formData, setFormData] = useState({
    title: '',
    problemStatement: '',
    solution: '',
    targetMarket: '',
    teamSize: '',
    selectedCategories: [] as string[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addIdea({
      title: formData.title,
      description: formData.solution.slice(0, 50) + '...',
      problem: formData.problemStatement,
      solution: formData.solution,
      market: formData.targetMarket,
      tags: formData.selectedCategories,
      owner: 'Current User'
    });
    toast.success('Idea submitted successfully!');
    navigate('/pipeline');
  };

  const toggleCategory = (category: string) => {
    const current = formData.selectedCategories;
    if (current.includes(category)) {
      setFormData({ ...formData, selectedCategories: current.filter(c => c !== category) });
    } else {
      setFormData({ ...formData, selectedCategories: [...current, category] });
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Submit Your Idea to Pipeline</CardTitle>
          <p className="text-gray-600 text-sm mt-2">
            Complete this form to submit your idea for the 6-gate validation process
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Idea Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Idea Title *</Label>
              <Input
                id="title"
                type="text"
                placeholder="Enter a compelling title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>

            {/* Problem Statement */}
            <div className="space-y-2">
              <Label htmlFor="problem">Problem Statement *</Label>
              <textarea
                id="problem"
                className="w-full min-h-[100px] p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0033A0] focus:border-transparent"
                placeholder="What problem are you solving?"
                value={formData.problemStatement}
                onChange={(e) => setFormData({ ...formData, problemStatement: e.target.value })}
                required
              />
            </div>

            {/* Solution */}
            <div className="space-y-2">
              <Label htmlFor="solution">Proposed Solution *</Label>
              <textarea
                id="solution"
                className="w-full min-h-[100px] p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0033A0] focus:border-transparent"
                placeholder="Describe your solution"
                value={formData.solution}
                onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                required
              />
            </div>

            {/* Target Market */}
            <div className="space-y-2">
              <Label htmlFor="market">Target Market *</Label>
              <Input
                id="market"
                type="text"
                placeholder="Who are your target customers?"
                value={formData.targetMarket}
                onChange={(e) => setFormData({ ...formData, targetMarket: e.target.value })}
                required
              />
            </div>

            {/* Categories */}
            <div className="space-y-2">
              <Label>Categories *</Label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={formData.selectedCategories.includes(category) ? "default" : "outline"}
                    className={`cursor-pointer ${
                      formData.selectedCategories.includes(category)
                        ? 'bg-[#0033A0] text-white'
                        : 'hover:bg-gray-100'
                    }`}
                    onClick={() => toggleCategory(category)}
                  >
                    {category}
                    {formData.selectedCategories.includes(category) && (
                      <X className="w-3 h-3 ml-1" />
                    )}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Team Size */}
            <div className="space-y-2">
              <Label htmlFor="teamSize">Team Size</Label>
              <Input
                id="teamSize"
                type="number"
                placeholder="Number of team members"
                value={formData.teamSize}
                onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/pipeline')}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-gradient-to-r from-[#E8002D] to-[#0033A0] hover:opacity-90 text-white"
              >
                Submit to Pipeline
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
