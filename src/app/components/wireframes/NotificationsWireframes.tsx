import { Bell, Search, ThumbsUp, MessageSquare, Tag, Rocket, Calendar, Users } from 'lucide-react';

export function NotificationsWireframes() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Notifications & Global Search</h2>
        <p className="text-gray-600 mb-6">Stay updated with notifications and search across platform</p>
      </div>

      {/* Notifications Drawer */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-[#0033A0] to-[#E8002D] px-6 py-4">
          <h3 className="text-xl font-bold text-white">Notifications Drawer</h3>
        </div>
        
        <div className="p-8 bg-gray-50">
          <div className="max-w-md ml-auto bg-white border border-gray-200 rounded-lg shadow-xl" style={{ width: '380px' }}>
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-bold text-gray-900 text-lg">Notifications</h3>
              <button className="text-sm text-[#0033A0] font-semibold hover:underline">
                Mark all as read
              </button>
            </div>

            <div className="max-h-[600px] overflow-y-auto">
              {/* Unread Notification */}
              <div className="p-4 border-l-4 border-[#0033A0] bg-blue-50 hover:bg-blue-100 cursor-pointer border-b">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-[#E8002D] rounded-full flex items-center justify-center flex-shrink-0">
                    <ThumbsUp size={18} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900">Post upvoted</p>
                    <p className="text-sm text-gray-700">
                      Rahul Kumar upvoted your post "Interactive Learning Platform"
                    </p>
                    <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                  </div>
                </div>
              </div>

              {/* Unread Notification */}
              <div className="p-4 border-l-4 border-[#0033A0] bg-blue-50 hover:bg-blue-100 cursor-pointer border-b">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-[#0033A0] rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare size={18} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900">New comment</p>
                    <p className="text-sm text-gray-700">
                      Priya Menon commented on your post
                    </p>
                    <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
                  </div>
                </div>
              </div>

              {/* Read Notification */}
              <div className="p-4 hover:bg-gray-50 cursor-pointer border-b">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Tag size={18} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900">Tag approved</p>
                    <p className="text-sm text-gray-700">
                      Your #IdeaValidation tag request was approved
                    </p>
                    <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                  </div>
                </div>
              </div>

              {/* Read Notification */}
              <div className="p-4 hover:bg-gray-50 cursor-pointer border-b">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Rocket size={18} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900">Pipeline gate advanced</p>
                    <p className="text-sm text-gray-700">
                      Your idea "EduRural Tech" advanced to Gate 3
                    </p>
                    <p className="text-xs text-gray-500 mt-1">2 days ago</p>
                  </div>
                </div>
              </div>

              {/* Read Notification */}
              <div className="p-4 hover:bg-gray-50 cursor-pointer border-b">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-[#0033A0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar size={18} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900">New event</p>
                    <p className="text-sm text-gray-700">
                      Workshop on "Fundraising Basics" scheduled for June 15
                    </p>
                    <p className="text-xs text-gray-500 mt-1">3 days ago</p>
                  </div>
                </div>
              </div>

              {/* Read Notification */}
              <div className="p-4 hover:bg-gray-50 cursor-pointer border-b">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users size={18} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900">Collaboration suggested</p>
                    <p className="text-sm text-gray-700">
                      Admin suggested collaborating with Anil Verma on similar idea
                    </p>
                    <p className="text-xs text-gray-500 mt-1">1 week ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Search Dropdown */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-[#E8002D] to-[#0033A0] px-6 py-4">
          <h3 className="text-xl font-bold text-white">Global Search Dropdown</h3>
        </div>
        
        <div className="p-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search ideas, people, events..."
                className="w-full pl-10 pr-4 py-3 border-2 border-[#0033A0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0]"
              />
            </div>

            <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-xl max-h-[500px] overflow-y-auto">
              {/* Posts Section */}
              <div className="p-2 border-b bg-gray-50">
                <p className="text-xs font-semibold text-gray-600 px-3 py-1">POSTS</p>
              </div>
              <div className="divide-y">
                <div className="p-3 hover:bg-gray-50 cursor-pointer flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#E8002D] rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">📝</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">Interactive Learning Platform for Rural Schools</p>
                    <p className="text-xs text-gray-600">EdTech • By Anita Sharma</p>
                  </div>
                </div>
                <div className="p-3 hover:bg-gray-50 cursor-pointer flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#E8002D] rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">📝</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">AI-Powered Health Diagnostics</p>
                    <p className="text-xs text-gray-600">HealthTech • By Rahul Kumar</p>
                  </div>
                </div>
              </div>

              {/* Events Section */}
              <div className="p-2 border-b border-t bg-gray-50">
                <p className="text-xs font-semibold text-gray-600 px-3 py-1">EVENTS</p>
              </div>
              <div className="divide-y">
                <div className="p-3 hover:bg-gray-50 cursor-pointer flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#0033A0] rounded flex items-center justify-center flex-shrink-0">
                    <Calendar size={16} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">Fundraising Basics Workshop</p>
                    <p className="text-xs text-gray-600">June 15, 2026 • 10:00 AM</p>
                  </div>
                </div>
              </div>

              {/* People Section */}
              <div className="p-2 border-b border-t bg-gray-50">
                <p className="text-xs font-semibold text-gray-600 px-3 py-1">PEOPLE</p>
              </div>
              <div className="divide-y">
                <div className="p-3 hover:bg-gray-50 cursor-pointer flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#E8002D] rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                    AS
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900">Anita Sharma</p>
                    <p className="text-xs text-gray-600">Founder • EduRural Tech</p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-3 bg-gray-50 text-center border-t">
                <p className="text-xs text-[#0033A0] font-semibold">Press Enter for full results</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Search Results Page */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-[#0033A0] to-[#E8002D] px-6 py-4">
          <h3 className="text-xl font-bold text-white">Search Results Page - /search?q=learning</h3>
        </div>
        
        <div className="p-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value="learning"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0]"
              />
            </div>

            <div className="flex gap-2 mb-6">
              <button className="px-4 py-2 bg-[#E8002D] text-white rounded-lg font-medium text-sm">
                Posts (12)
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium text-sm hover:bg-gray-200">
                Events (3)
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium text-sm hover:bg-gray-200">
                People (5)
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium text-sm hover:bg-gray-200">
                Ideas (4)
              </button>
            </div>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Interactive <span className="bg-yellow-200">Learning</span> Platform for Rural Schools
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  Problem: Rural schools lack access to quality educational content and interactive <span className="bg-yellow-200">learning</span> tools...
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-600">
                  <span>EdTech</span>
                  <span>•</span>
                  <span>By Anita Sharma</span>
                  <span>•</span>
                  <span>2 days ago</span>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Adaptive <span className="bg-yellow-200">Learning</span> AI for Students
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  Our platform uses AI to adapt to each student's <span className="bg-yellow-200">learning</span> pace and style...
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-600">
                  <span>EdTech</span>
                  <span>•</span>
                  <span>By Sanjay Patel</span>
                  <span>•</span>
                  <span>1 week ago</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 pt-6 mt-6 border-t">
              <button className="px-3 py-2 bg-[#0033A0] text-white rounded-lg text-sm font-medium">1</button>
              <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50">2</button>
              <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50">3</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#0033A0]">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Notifications & Search Features</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• <strong>Notification Types:</strong> Post upvoted, Comment, Tag approved/rejected, Gate advanced, Event, Duplicate flagged, Mentor assigned, Collaboration</li>
          <li>• <strong>Unread State:</strong> Light blue left border + darker background</li>
          <li>• <strong>Mark All Read:</strong> Clears all unread badges and borders</li>
          <li>• <strong>Drawer Animation:</strong> Slide in from right, 380px wide</li>
          <li>• <strong>Search Debounce:</strong> 300ms delay before showing results</li>
          <li>• <strong>Categorized Results:</strong> Posts, Events, People, Ideas sections</li>
          <li>• <strong>Keyword Highlighting:</strong> Yellow background on matching text</li>
          <li>• <strong>Full Results Page:</strong> Tabs for each category with pagination</li>
        </ul>
      </div>
    </div>
  );
}
