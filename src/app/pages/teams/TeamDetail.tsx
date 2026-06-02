import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useAppStore } from '../../../store/useAppStore';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { MapPin, Users, Briefcase, Calendar, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export function TeamDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { teams, applyForTeam } = useAppStore();
  const team = teams.find(t => t.id === Number(id));

  const [showApplyModal, setShowApplyModal] = useState(false);
  const [pitch, setPitch] = useState('');

  if (!team) return <div className="text-center py-12 text-2xl font-bold">Team opportunity not found</div>;

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    applyForTeam(team.id);
    setShowApplyModal(false);
    toast.success('Application submitted successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Button variant="ghost" onClick={() => navigate('/teams')}>
        &larr; Back to Team Board
      </Button>

      <Card>
        <CardContent className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{team.title}</h1>
              <p className="text-xl text-[#0033A0] font-medium mb-4">Company/Idea: {team.company}</p>
              
              <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  <span>Role: <span className="font-semibold text-gray-900">{team.role}</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>Location: <span className="font-semibold text-gray-900">Remote/Hybrid</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>Team Size: <span className="font-semibold text-gray-900">2/4 Members</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>Posted: <span className="font-semibold text-gray-900">Recently</span></span>
                </div>
              </div>
            </div>

            <div className="text-right flex-shrink-0">
              <Button 
                onClick={() => setShowApplyModal(true)}
                disabled={team.applied}
                className={`w-40 h-12 text-lg ${team.applied ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-gradient-to-r from-[#E8002D] to-[#0033A0] hover:opacity-90 text-white'}`}
              >
                {team.applied ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Applied
                  </>
                ) : (
                  'Apply Now'
                )}
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">About the Opportunity</h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {team.description}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Required Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {team.skills.map((skill, index) => (
                  <Badge key={index} className="px-4 py-2 text-sm bg-blue-50 text-[#0033A0] border-[#0033A0] hover:bg-blue-100">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Apply Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="max-w-md w-full bg-white relative">
            <CardHeader>
              <CardTitle>Apply for {team.role}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleApply} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Why are you a good fit? (Pitch)</label>
                  <textarea 
                    required 
                    rows={4}
                    className="w-full border p-2 rounded focus:ring-2 focus:ring-[#0033A0] focus:border-transparent" 
                    value={pitch} 
                    onChange={e => setPitch(e.target.value)} 
                    placeholder="Tell them about your experience and why you are interested..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Portfolio / LinkedIn Link (Optional)</label>
                  <input 
                    type="url" 
                    className="w-full border p-2 rounded focus:ring-2 focus:ring-[#0033A0] focus:border-transparent" 
                    placeholder="https://"
                  />
                </div>
                <div className="flex gap-4 mt-6 justify-end">
                  <Button type="button" variant="outline" onClick={() => setShowApplyModal(false)}>Cancel</Button>
                  <Button type="submit" className="bg-[#0033A0] text-white hover:bg-[#002880]">Submit Application</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
