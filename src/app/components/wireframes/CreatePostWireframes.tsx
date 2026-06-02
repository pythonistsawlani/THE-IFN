export function CreatePostWireframes() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Create Post & Drafts</h2>
        <p className="text-gray-600 mb-6">Form to create posts and manage drafts</p>
      </div>

      {/* Create Post Form */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-[#E8002D] to-[#0033A0] px-6 py-4">
          <h3 className="text-xl font-bold text-white">Create Post - /posts/create</h3>
        </div>
        
        <div className="p-8">
          <div className="max-w-2xl mx-auto space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Startup Name *</label>
              <input
                type="text"
                placeholder="Enter your startup name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0]"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="block text-sm font-semibold text-gray-700">Post Title *</label>
                <span className="text-xs text-gray-500">0 / 100</span>
              </div>
              <input
                type="text"
                placeholder="Give your post a catchy title"
                maxLength={100}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0]"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="block text-sm font-semibold text-gray-700">Problem Statement *</label>
                <span className="text-xs text-gray-500">0 / 1000</span>
              </div>
              <textarea
                placeholder="Describe the problem you're solving..."
                maxLength={1000}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0] resize-none"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="block text-sm font-semibold text-gray-700">Solution *</label>
                <span className="text-xs text-gray-500">0 / 1000</span>
              </div>
              <textarea
                placeholder="Describe your solution..."
                maxLength={1000}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0] resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Supertags (max 10)</label>
              <input
                type="text"
                placeholder="Type a tag and press Enter"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0]"
              />
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 bg-[#0033A0] text-white text-sm rounded-full flex items-center gap-2">
                  HealthTech
                  <button className="hover:text-red-200">×</button>
                </span>
                <span className="px-3 py-1 bg-[#0033A0] text-white text-sm rounded-full flex items-center gap-2">
                  AI
                  <button className="hover:text-red-200">×</button>
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Request Hardcoded Supertag (Admin Approval Required)</label>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-sm text-gray-700">IdeaValidation</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-sm text-gray-700">Success</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-sm text-gray-700">Failure</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-sm text-gray-700">IdeaAutopsy</span>
                </label>
              </div>
              <p className="text-xs text-gray-500 mt-2">Note: These tags will be sent for admin approval</p>
            </div>

            <div className="flex gap-3 pt-4">
              <button className="flex-1 px-6 py-3 border-2 border-[#0033A0] text-[#0033A0] rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Save as Draft
              </button>
              <button className="flex-1 px-6 py-3 bg-[#E8002D] text-white rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Submit Post
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* My Drafts */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-[#0033A0] to-[#E8002D] px-6 py-4">
          <h3 className="text-xl font-bold text-white">My Drafts - /posts/drafts</h3>
        </div>
        
        <div className="p-8">
          <div className="max-w-3xl mx-auto space-y-4">
            {/* Draft Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-gray-900">AI-Powered Learning Platform</h3>
                    <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full font-medium">Draft</span>
                  </div>
                  <p className="text-sm text-gray-600">Created on May 15, 2026 • EdTech Startup</p>
                  <p className="text-sm text-gray-700 mt-2 line-clamp-2">
                    Problem: Traditional learning methods don't adapt to individual student needs...
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-[#0033A0] text-white rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors">
                  Edit
                </button>
                <button className="px-4 py-2 border border-[#E8002D] text-[#E8002D] rounded-lg text-sm font-medium hover:bg-red-50 transition-colors">
                  Delete
                </button>
              </div>
            </div>

            {/* Another Draft Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-gray-900">Untitled Draft</h3>
                    <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full font-medium">Draft</span>
                  </div>
                  <p className="text-sm text-gray-600">Created on May 12, 2026</p>
                  <p className="text-sm text-gray-500 mt-2 italic">No content yet</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-[#0033A0] text-white rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors">
                  Edit
                </button>
                <button className="px-4 py-2 border border-[#E8002D] text-[#E8002D] rounded-lg text-sm font-medium hover:bg-red-50 transition-colors">
                  Delete
                </button>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 pt-4">
              <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-2 bg-[#0033A0] text-white rounded-lg text-sm font-medium">
                1
              </button>
              <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                3
              </button>
              <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#E8002D]">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Create Post Features</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• <strong>Character Counters:</strong> Show remaining characters for title and textareas</li>
          <li>• <strong>Tag Input:</strong> Type + Enter to add chips, max 10, prevent duplicates</li>
          <li>• <strong>Validation:</strong> All required fields must be filled before submit</li>
          <li>• <strong>Save Draft:</strong> Saves privately without publishing</li>
          <li>• <strong>Cancel:</strong> Shows confirmation dialog "Are you sure?"</li>
          <li>• <strong>Success Toast:</strong> Green toast "Post published successfully"</li>
          <li>• <strong>Draft Management:</strong> Edit or delete drafts, 10 per page</li>
          <li>• <strong>Delete Confirmation:</strong> Modal before permanent deletion</li>
        </ul>
      </div>
    </div>
  );
}
