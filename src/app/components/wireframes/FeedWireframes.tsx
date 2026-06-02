import { ThumbsUp, ThumbsDown, MessageSquare, Share2, TrendingUp } from 'lucide-react';

export function FeedWireframes() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Feed Page</h2>
        <p className="text-gray-600 mb-6">Browse and interact with startup ideas</p>
      </div>

      {/* Feed Layout */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-[#E8002D] to-[#0033A0] px-6 py-4">
          <h3 className="text-xl font-bold text-white">Feed Page - /feed</h3>
        </div>
        
        <div className="p-8 bg-gray-50">
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Sort and Filter Bar */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-[#E8002D] text-white rounded-lg font-medium text-sm">
                    Newest
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium text-sm hover:bg-gray-200">
                    Top
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium text-sm hover:bg-gray-200">
                    By Supertag
                  </button>
                </div>

                <div className="flex gap-2 items-center">
                  <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
                    <option>All Supertags</option>
                    <option>IdeaAutopsy</option>
                    <option>Success</option>
                    <option>IdeaValidation</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Pinned Post */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <div className="text-yellow-600">📌</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-gray-600">HealthTech Startup</span>
                    <span className="px-2 py-0.5 bg-green-500 text-white text-xs rounded-full font-medium">Success</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    AI-Powered Health Diagnostics Platform - Secured Funding!
                  </h3>
                  <p className="text-sm text-gray-700 line-clamp-2">
                    We're excited to announce that our AI diagnostic platform has secured seed funding...
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-[#0033A0] text-white text-xs rounded-full">HealthTech</span>
                <span className="px-3 py-1 bg-[#0033A0] text-white text-xs rounded-full">AI</span>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <button className="flex items-center gap-1 text-[#0033A0] hover:text-blue-700">
                  <ThumbsUp size={16} />
                  <span className="font-semibold">42</span>
                </button>
                <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
                  <ThumbsDown size={16} />
                  <span>3</span>
                </button>
                <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
                  <MessageSquare size={16} />
                  <span>12</span>
                </button>
                <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
                  <Share2 size={16} />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Regular Post with Trending Badge */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-[#0033A0] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  AS
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-gray-600">EdTech Startup by Anita Sharma</span>
                    <span className="flex items-center gap-1 px-2 py-0.5 bg-orange-100 text-orange-700 text-xs rounded-full font-medium">
                      <TrendingUp size={12} />
                      Trending
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Interactive Learning Platform for Rural Schools
                  </h3>
                  <p className="text-sm text-gray-700 line-clamp-2">
                    Problem: Rural schools lack access to quality educational content and interactive learning tools. 
                    Our solution provides offline-capable educational platform...
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-[#0033A0] text-white text-xs rounded-full">EdTech</span>
                <span className="px-3 py-1 bg-[#0033A0] text-white text-xs rounded-full">Social Impact</span>
                <span className="px-3 py-1 bg-orange-500 text-white text-xs rounded-full">IdeaValidation</span>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <button className="flex items-center gap-1 text-[#0033A0] font-semibold hover:text-blue-700">
                  <ThumbsUp size={16} />
                  <span>28</span>
                </button>
                <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
                  <ThumbsDown size={16} />
                  <span>1</span>
                </button>
                <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
                  <MessageSquare size={16} />
                  <span>8</span>
                </button>
                <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
                  <Share2 size={16} />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Idea Autopsy Post */}
            <div className="bg-white border-l-4 border-[#E8002D] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  RK
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-gray-600">FinTech Startup by Rahul Kumar</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Why Our Crypto Trading App Failed - Lessons Learned
                  </h3>
                  <p className="text-sm text-gray-700 line-clamp-2">
                    After 8 months of development and $50K investment, we shut down our crypto trading platform. 
                    Here's what went wrong and what I'd do differently...
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-[#E8002D] text-white text-xs rounded-full font-semibold">IdeaAutopsy</span>
                <span className="px-3 py-1 bg-gray-500 text-white text-xs rounded-full">Failure</span>
                <span className="px-3 py-1 bg-[#0033A0] text-white text-xs rounded-full">FinTech</span>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <button className="flex items-center gap-1 text-[#0033A0] hover:text-blue-700">
                  <ThumbsUp size={16} />
                  <span className="font-semibold">67</span>
                </button>
                <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
                  <ThumbsDown size={16} />
                  <span>2</span>
                </button>
                <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
                  <MessageSquare size={16} />
                  <span>23</span>
                </button>
                <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
                  <Share2 size={16} />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Regular Post */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  PM
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-gray-600">AgriTech Startup by Priya Menon</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Smart Irrigation System for Small Farmers
                  </h3>
                  <p className="text-sm text-gray-700 line-clamp-2">
                    Problem: Small farmers waste water and money due to inefficient irrigation. 
                    Our IoT-based solution optimizes water usage based on soil moisture, weather...
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-[#0033A0] text-white text-xs rounded-full">AgriTech</span>
                <span className="px-3 py-1 bg-[#0033A0] text-white text-xs rounded-full">IoT</span>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <button className="flex items-center gap-1 text-gray-600 hover:text-[#0033A0]">
                  <ThumbsUp size={16} />
                  <span>15</span>
                </button>
                <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
                  <ThumbsDown size={16} />
                  <span>0</span>
                </button>
                <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
                  <MessageSquare size={16} />
                  <span>5</span>
                </button>
                <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
                  <Share2 size={16} />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feed Features */}
      <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#E8002D]">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Feed Features</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• <strong>Sort Options:</strong> Newest, Top (by votes), By Supertag</li>
          <li>• <strong>Filter:</strong> Dropdown to filter by specific supertags</li>
          <li>• <strong>Pinned Posts:</strong> Yellow background, pin icon, always at top</li>
          <li>• <strong>Trending Badge:</strong> Shows on posts with momentum score &gt; 50</li>
          <li>• <strong>Supertag Colors:</strong> IdeaAutopsy (red), Success (green), IdeaValidation (orange), Failure (gray), Normal (blue)</li>
          <li>• <strong>Interactions:</strong> Upvote/Downvote with counts, Comment count, Share button</li>
          <li>• <strong>Optimistic Updates:</strong> Vote counts change instantly, rollback on error</li>
          <li>• <strong>Empty State:</strong> "No posts yet — be the first to share!" + CTA button</li>
          <li>• <strong>Loading State:</strong> 3 skeleton card shimmer loaders</li>
        </ul>
      </div>
    </div>
  );
}
