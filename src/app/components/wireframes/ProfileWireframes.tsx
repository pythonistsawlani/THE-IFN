export function ProfileWireframes() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Profile Page</h2>
        <p className="text-gray-600 mb-6">View and edit user profile</p>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-[#E8002D] to-[#0033A0] px-6 py-4">
          <h3 className="text-xl font-bold text-white">Profile - /profile</h3>
        </div>
        
        <div className="p-8 bg-gray-50">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-[#E8002D] rounded-full flex items-center justify-center text-white font-bold text-3xl mb-4">
                    AS
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">Anita Sharma</h2>
                  <span className="px-3 py-1 bg-[#E8002D] text-white text-sm rounded-full font-medium mb-3">Founder</span>
                  <p className="text-sm text-gray-600 text-center italic mb-4">
                    Building the future of education in rural India
                  </p>
                  <button className="w-full px-4 py-2 bg-[#0033A0] text-white rounded-lg font-medium hover:bg-blue-800 mb-3">
                    Edit Profile
                  </button>
                  <button className="w-full px-4 py-2 border border-[#0033A0] text-[#0033A0] rounded-lg font-medium hover:bg-blue-50">
                    LinkedIn Profile
                  </button>
                </div>

                <div className="mt-6 space-y-3 text-sm">
                  <div>
                    <p className="text-gray-600 font-semibold mb-1">Startup</p>
                    <p className="text-gray-900">EduRural Tech</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold mb-1">College</p>
                    <p className="text-gray-900">ICFAI Hyderabad</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold mb-1">Branch & Year</p>
                    <p className="text-gray-900">Computer Science • 3rd Year</p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-gray-600 font-semibold mb-2 text-sm">Skills</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#0033A0] text-white text-xs rounded-full">React</span>
                    <span className="px-3 py-1 bg-[#0033A0] text-white text-xs rounded-full">Product Design</span>
                    <span className="px-3 py-1 bg-[#0033A0] text-white text-xs rounded-full">EdTech</span>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-gray-600 font-semibold mb-2 text-sm">Interests</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 border border-[#0033A0] text-[#0033A0] text-xs rounded-full">Social Impact</span>
                    <span className="px-3 py-1 border border-[#0033A0] text-[#0033A0] text-xs rounded-full">Rural Development</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                  <p className="text-3xl font-bold text-[#E8002D]">12</p>
                  <p className="text-sm text-gray-600">Posts</p>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                  <p className="text-3xl font-bold text-[#0033A0]">3</p>
                  <p className="text-sm text-gray-600">Drafts</p>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                  <p className="text-3xl font-bold text-green-600">45</p>
                  <p className="text-sm text-gray-600">Upvoted</p>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                  <p className="text-3xl font-bold text-purple-600">28</p>
                  <p className="text-sm text-gray-600">Comments</p>
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Interactive Learning Platform for Rural Schools</h4>
                    <p className="text-xs text-gray-600 mb-2">June 1, 2026</p>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-[#0033A0] text-white text-xs rounded-full">EdTech</span>
                      <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded-full">IdeaValidation</span>
                    </div>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Pilot Results from 3 Rural Schools</h4>
                    <p className="text-xs text-gray-600 mb-2">May 28, 2026</p>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-[#0033A0] text-white text-xs rounded-full">EdTech</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#E8002D]">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Profile Features</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• <strong>Avatar:</strong> Shows initials with red background fallback</li>
          <li>• <strong>Role Badges:</strong> Founder (red), Student (blue), Mentor (green), Admin (gray)</li>
          <li>• <strong>Edit Mode:</strong> Toggle to edit all fields except email and role</li>
          <li>• <strong>Stats Cards:</strong> Posts, Drafts, Upvoted, Comments count</li>
          <li>• <strong>Recent Posts:</strong> Last 5 posts with title, date, and tags</li>
          <li>• <strong>Profile Picture Upload:</strong> JPG/PNG, max 5MB with preview</li>
        </ul>
      </div>
    </div>
  );
}
