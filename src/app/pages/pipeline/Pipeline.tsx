import { useNavigate } from 'react-router';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Plus, ArrowRight } from 'lucide-react';
import { useAppStore } from '../../../store/useAppStore';

const STAGES = ['Ideation', 'Validation', 'Prototyping', 'Testing', 'Launch Ready', 'Launched'];

export function Pipeline() {
  const navigate = useNavigate();
  const ideas = useAppStore(state => state.ideas);

  const gates = STAGES.map((stageName, index) => {
    const count = ideas.filter(i => i.stage === stageName).length;
    const colors = [
      'bg-gray-100 text-gray-700',
      'bg-blue-100 text-blue-700',
      'bg-purple-100 text-purple-700',
      'bg-yellow-100 text-yellow-700',
      'bg-green-100 text-green-700',
      'bg-[#E8002D] bg-opacity-10 text-[#E8002D]'
    ];
    return {
      id: index + 1,
      name: stageName,
      count,
      color: colors[index]
    };
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Idea Pipeline</h1>
          <p className="text-gray-600 mt-1">Track ideas through the 6-gate validation process</p>
        </div>
        <Button
          onClick={() => navigate('/pipeline/submit')}
          className="bg-gradient-to-r from-[#E8002D] to-[#0033A0] hover:opacity-90 text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Submit Idea
        </Button>
      </div>

      {/* Pipeline Gates */}
      <Card>
        <CardHeader>
          <CardTitle>Pipeline Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {gates.map((gate) => (
              <div
                key={gate.id}
                className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className={`${gate.color} rounded-lg p-3 mb-2`}>
                  <div className="text-3xl font-bold">{gate.count}</div>
                </div>
                <div className="text-sm font-semibold text-gray-700">{gate.name}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Ideas in Pipeline */}
      <Card>
        <CardHeader>
          <CardTitle>Active Ideas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {ideas.map((idea) => {
              const progress = Math.round(((STAGES.indexOf(idea.stage) + 1) / STAGES.length) * 100);
              
              return (
                <div
                  key={idea.id}
                  className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => navigate(`/pipeline/${idea.id}`)}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{idea.title}</h3>
                      <p className="text-sm text-gray-600">Team Lead: {idea.owner}</p>
                    </div>
                    <Badge variant="outline">{idea.stage}</Badge>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-semibold text-gray-900">{progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#E8002D] to-[#0033A0]"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex justify-end mt-3">
                    <Button variant="ghost" size="sm" className="text-[#0033A0]">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
