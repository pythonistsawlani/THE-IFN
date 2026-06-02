import { ArrowLeft } from 'lucide-react';
import { AuthWireframes } from './wireframes/AuthWireframes';
import { FeedWireframes } from './wireframes/FeedWireframes';
import { LayoutWireframes } from './wireframes/LayoutWireframes';
import { PostDetailWireframes } from './wireframes/PostDetailWireframes';
import { CalendarWireframes } from './wireframes/CalendarWireframes';
import { ProfileWireframes } from './wireframes/ProfileWireframes';
import { PipelineWireframes } from './wireframes/PipelineWireframes';
import { ProblemHubWireframes } from './wireframes/ProblemHubWireframes';
import { AutopsyWireframes } from './wireframes/AutopsyWireframes';
import { AdminWireframes } from './wireframes/AdminWireframes';
import { CreatePostWireframes } from './wireframes/CreatePostWireframes';
import { DesignSystemWireframes } from './wireframes/DesignSystemWireframes';
import { NotificationsWireframes } from './wireframes/NotificationsWireframes';
import { PolishWireframes } from './wireframes/PolishWireframes';

interface WireframeDetailProps {
  moduleId: number;
  onBack: () => void;
}

const wireframeComponents: Record<number, React.ComponentType> = {
  1: DesignSystemWireframes,
  2: AuthWireframes,
  3: LayoutWireframes,
  4: FeedWireframes,
  5: CreatePostWireframes,
  6: PostDetailWireframes,
  7: CalendarWireframes,
  8: ProfileWireframes,
  9: PipelineWireframes,
  10: ProblemHubWireframes,
  11: AutopsyWireframes,
  12: AdminWireframes,
  13: NotificationsWireframes,
  14: PolishWireframes,
};

export function WireframeDetail({ moduleId, onBack }: WireframeDetailProps) {
  const WireframeComponent = wireframeComponents[moduleId];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#0033A0] hover:text-[#E8002D] font-semibold transition-colors mb-2"
          >
            <ArrowLeft size={20} />
            Back to all modules
          </button>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-[#E8002D] to-[#0033A0] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">IFN</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Module #{moduleId} Wireframes</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {WireframeComponent ? <WireframeComponent /> : <div>Module not found</div>}
      </div>
    </div>
  );
}
