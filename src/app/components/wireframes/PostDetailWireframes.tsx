import { ThumbsUp, MessageSquare, Share2, Plus } from 'lucide-react';

export function PostDetailWireframes() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Post Detail Page</h2>
        <p className="text-gray-600 mb-6">Full post view with sub-threads, comments, and autopsy form</p>
      </div>

      {/* Post Detail Layout */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-[#E8002D] to-[#0033A0] px-6 py-4">
          <h3 className="text-xl font-bold text-white">Post Detail - /posts/:id</h3>
        </div>
        
        <div className="p-8 bg-gray-50">
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Main Post Block */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-[#0033A0] rounded-full flex items-center justify-center text-white font-bold">
                  AS
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-1">EdTech Startup by Anita Sharma • 2 days ago</p>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Interactive Learning Platform for Rural Schools
                  </h1>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-[#0033A0] text-white text-sm rounded-full">EdTech</span>
                <span className="px-3 py-1 bg-[#0033A0] text-white text-sm rounded-full">Social Impact</span>
                <span className="px-3 py-1 bg-orange-500 text-white text-sm rounded-full">IdeaValidation</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Pending verification</span>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Problem Statement</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Rural schools in India lack access to quality educational content and interactive learning tools. 
                    Teachers often rely on outdated textbooks and lack training in modern teaching methods. 
                    Students miss out on engaging content that could help them learn better and stay motivated.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Solution</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our platform provides an offline-capable educational solution with interactive lessons, 
                    gamified learning, and teacher training modules. Content is available in regional languages 
                    and can be accessed without internet after initial download. We're partnering with state 
                    governments to distribute tablets pre-loaded with our platform.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm border-t pt-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-[#0033A0] text-white rounded-lg font-medium hover:bg-blue-800">
                  <ThumbsUp size={16} />
                  <span>28</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                  <MessageSquare size={16} />
                  <span>8 Comments</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                  <Share2 size={16} />
                  <span>Share</span>
                </button>
              </div>

              <div className="flex gap-3 mt-4 pt-4 border-t">
                <button className="px-4 py-2 bg-[#E8002D] text-white rounded-lg text-sm font-medium hover:bg-red-700">
                  Add Idea Autopsy
                </button>
                <button className="px-4 py-2 bg-[#0033A0] text-white rounded-lg text-sm font-medium hover:bg-blue-800">
                  Add New Detail
                </button>
              </div>
            </div>

            {/* Sub-Threads Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Updates (2)</h3>

              {/* Regular Sub-thread */}
              <div className="border-l-4 border-[#0033A0] bg-blue-50 rounded-r-lg p-4 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#0033A0] rounded-full flex items-center justify-center text-white font-semibold text-xs">
                    AS
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-2">Anita Sharma • 1 day ago</p>
                    <p className="text-sm text-gray-800">
                      Update: We've completed pilot testing in 3 rural schools with amazing results! 
                      Student engagement increased by 65% and test scores improved by 40%. 
                      Now moving forward with state government partnerships.
                    </p>
                  </div>
                </div>
              </div>

              {/* Add Sub-thread Input */}
              <div className="pt-4 border-t">
                <textarea
                  placeholder="Share an update..."
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0] resize-none"
                />
                <button className="mt-2 px-4 py-2 bg-[#0033A0] text-white rounded-lg text-sm font-medium hover:bg-blue-800">
                  Post Update
                </button>
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Comments (8)</h3>

              {/* Add Comment */}
              <div className="mb-6">
                <textarea
                  placeholder="Write a comment..."
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0] resize-none"
                />
                <button className="mt-2 px-4 py-2 bg-[#0033A0] text-white rounded-lg text-sm font-medium hover:bg-blue-800">
                  Submit Comment
                </button>
              </div>

              {/* Comment List */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 pb-4 border-b">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    RK
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Rahul Kumar</p>
                    <p className="text-xs text-gray-500 mb-2">2 hours ago</p>
                    <p className="text-sm text-gray-700">
                      This is brilliant! Have you considered partnering with NGOs working in rural education? 
                      They could help with distribution and teacher training.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    PM
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Priya Menon</p>
                    <p className="text-xs text-gray-500 mb-2">5 hours ago</p>
                    <p className="text-sm text-gray-700">
                      Great initiative! Would love to connect and discuss potential collaboration opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Idea Autopsy Modal */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="bg-[#E8002D] px-6 py-4">
          <h3 className="text-xl font-bold text-white">Idea Autopsy Form Modal</h3>
        </div>
        
        <div className="p-8">
          <div className="max-w-2xl mx-auto bg-white border-2 border-[#E8002D] rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Add Idea Autopsy</h3>
            <p className="text-sm text-gray-600 mb-6">Share what went wrong and help others learn</p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">What went wrong? *</label>
                <textarea
                  rows={4}
                  placeholder="Describe the challenges and reasons for failure..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E8002D] resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">What would you do differently? *</label>
                <textarea
                  rows={4}
                  placeholder="If you could start over, what would you change..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E8002D] resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Advice for other students? *</label>
                <textarea
                  rows={4}
                  placeholder="Share lessons learned and recommendations..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E8002D] resize-none"
                />
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <p className="text-sm text-yellow-800">
                  📝 This will automatically request the #IdeaAutopsy tag for admin approval
                </p>
              </div>

              <div className="flex gap-3 pt-4">
                <button className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50">
                  Cancel
                </button>
                <button className="flex-1 px-6 py-3 bg-[#E8002D] text-white rounded-lg font-semibold hover:bg-red-700">
                  Submit Autopsy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#0033A0]">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Post Detail Features</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• <strong>Full Content:</strong> Complete problem statement and solution</li>
          <li>• <strong>Sub-Threads:</strong> Updates section for progress posts</li>
          <li>• <strong>Autopsy Sub-threads:</strong> Red left border, structured sections</li>
          <li>• <strong>Share Modal:</strong> Copy link, WhatsApp, LinkedIn, Email</li>
          <li>• <strong>Comments:</strong> Threaded comments with avatars and timestamps</li>
          <li>• <strong>Add Idea Autopsy:</strong> Only visible to post creator</li>
          <li>• <strong>Momentum Score:</strong> +2 for each share</li>
        </ul>
      </div>
    </div>
  );
}
