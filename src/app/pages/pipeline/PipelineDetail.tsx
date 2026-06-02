import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { CheckCircle, Circle, ArrowRight, Users, Calendar } from 'lucide-react';
import { useAppStore } from '../../../store/useAppStore';
import { toast } from 'sonner';

const STAGES = ['Ideation', 'Validation', 'Prototyping', 'Testing', 'Launch Ready', 'Launched'];

const milestones = [
  { id: 1, title: 'Market Research Completed', completed: true, date: 'May 20, 2026' },
  { id: 2, title: 'User Interviews (10+ users)', completed: true, date: 'May 25, 2026' },
  { id: 3, title: 'Business Model Canvas', completed: false, date: 'Pending' },
  { id: 4, title: 'Competitive Analysis', completed: false, date: 'Pending' },
];

export function PipelineDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { ideas, advanceIdeaStage } = useAppStore();
  
  const [showConfirm, setShowConfirm] = useState(false);

  const idea = ideas.find(i => i.id === Number(id));

  if (!idea) {
    return <div className="text-center py-12"><h2 className="text-2xl font-bold">Idea not found</h2></div>;
  }

  const currentStageIndex = STAGES.indexOf(idea.stage);
  const progress = Math.round(((currentStageIndex + 1) / STAGES.length) * 100);

  const gates = STAGES.map((name, index) => ({
    id: index + 1,
    name,
    completed: index <= currentStageIndex
  }));

  const handleAdvance = () => {
    advanceIdeaStage(idea.id);
    setShowConfirm(false);
    toast.success(`Advanced to ${STAGES[currentStageIndex + 1]}!`);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Back Button */}
      <Button variant="ghost" onClick={() => navigate('/pipeline')}>
        ← Back to Pipeline
      </Button>

      {/* Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{idea.title}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  Team Lead: {idea.team}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Submitted: {idea.submittedDate}
                </div>
              </div>
            </div>
            <Badge variant="outline" className="text-[#0033A0] border-[#0033A0]">
              {idea.category}
            </Badge>
          </div>

          {/* Progress */}
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Overall Progress</span>
              <span className="font-semibold text-gray-900">{progress}%</span>
            </div>
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#E8002D] to-[#0033A0] transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pipeline Gates */}
      <Card>
        <CardHeader>
          <CardTitle>Pipeline Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {gates.map((gate) => (
              <div
                key={gate.id}
                className={`p-4 border-2 rounded-lg text-center ${
                  gate.completed
                    ? 'border-green-500 bg-green-50'
                    : gate.id === currentStageIndex + 1
                    ? 'border-[#0033A0] bg-blue-50'
                    : 'border-gray-200 bg-white'
                }`}
              >
                {gate.completed ? (
                  <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-500" />
                ) : (
                  <Circle className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                )}
                <div className="text-sm font-semibold text-gray-700">{gate.name}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Idea Details */}
        <Card>
          <CardHeader>
            <CardTitle>Idea Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Problem Statement</h4>
              <p className="text-gray-700">{idea.problemStatement}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Proposed Solution</h4>
              <p className="text-gray-700">{idea.solution}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Target Market</h4>
              <p className="text-gray-700">{idea.targetMarket}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Team Size</h4>
              <p className="text-gray-700">{idea.teamSize} members</p>
            </div>
          </CardContent>
        </Card>

        {/* Milestones */}
        <Card>
          <CardHeader>
            <CardTitle>Current Milestones</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {milestones.map((milestone) => (
                <div
                  key={milestone.id}
                  className={`p-3 border rounded-lg ${
                    milestone.completed ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {milestone.completed ? (
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 text-sm">{milestone.title}</h5>
                      <p className="text-xs text-gray-600 mt-1">{milestone.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Actions */}
      {currentStageIndex < STAGES.length - 1 && (
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Ready to move to the next gate?</p>
              <Button 
                onClick={() => setShowConfirm(true)}
                className="bg-gradient-to-r from-[#E8002D] to-[#0033A0] hover:opacity-90 text-white"
              >
                Advance to {STAGES[currentStageIndex + 1]}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="max-w-md w-full bg-white relative">
            <CardHeader>
              <CardTitle>Advance Stage?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Are you sure you want to advance this idea to <strong>{STAGES[currentStageIndex + 1]}</strong>?</p>
              <div className="flex gap-4 mt-6 justify-end">
                <Button variant="outline" onClick={() => setShowConfirm(false)}>Cancel</Button>
                <Button className="bg-[#0033A0] text-white" onClick={handleAdvance}>Confirm</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
