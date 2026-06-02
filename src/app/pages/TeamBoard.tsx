import { useNavigate } from 'react-router';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Users, MapPin, Briefcase } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';
import { toast } from 'sonner';

export function TeamBoard() {
  const navigate = useNavigate();
  const { teams, applyForTeam } = useAppStore();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Team Board</h1>
          <p className="text-gray-600 mt-1">Find co-founders and team members</p>
        </div>
        <Button 
          onClick={() => toast.success('Post opening modal would open here')}
          className="bg-gradient-to-r from-[#E8002D] to-[#0033A0] hover:opacity-90 text-white"
        >
          Post Opening
        </Button>
      </div>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        <Button variant="outline" size="sm">All Listings</Button>
        <Button variant="outline" size="sm">Developers</Button>
        <Button variant="outline" size="sm">Designers</Button>
        <Button variant="outline" size="sm">Business</Button>
        <Button variant="outline" size="sm">Marketing</Button>
      </div>

      {/* Team Listings */}
      <div className="space-y-4">
        {teams.map((listing) => (
          <Card 
            key={listing.id} 
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate(`/teams/${listing.id}`)}
          >
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{listing.title}</h3>
                  <p className="text-[#0033A0] font-medium">For: {listing.company}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-600 flex-shrink-0 ml-4">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">2/4 members</span>
                </div>
              </div>

              {/* Looking For */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Looking For:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-[#E8002D] text-white">
                    {listing.role}
                  </Badge>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Required Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {listing.skills.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="text-[#0033A0] border-[#0033A0]">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Remote / Local
                  </div>
                  <span>Posted by <span className="font-semibold">User</span></span>
                  <span>Just now</span>
                </div>

                <Button 
                  variant={listing.applied ? "default" : "outline"}
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!listing.applied) {
                      applyForTeam(listing.id);
                      toast.success('Successfully applied!');
                    }
                  }}
                  disabled={listing.applied}
                  className={listing.applied ? 'bg-green-600 hover:bg-green-700 text-white' : ''}
                >
                  {listing.applied ? 'Applied' : 'Apply'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
