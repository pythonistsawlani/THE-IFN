export function PipelineWireframes() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Idea Pipeline (6-Gate System)</h2>
        <p className="text-gray-600 mb-6">Track startup ideas through incubator validation gates</p>
      </div>

      {/* Pipeline List */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-[#E8002D] to-[#0033A0] px-6 py-4 flex justify-between items-center">
          <h3 className="text-xl font-bold text-white">My Idea Pipeline - /pipeline</h3>
          <button className="px-4 py-2 bg-white text-[#E8002D] rounded-lg font-semibold text-sm hover:bg-gray-100">
            + Submit New Idea
          </button>
        </div>
        
        <div className="p-8 space-y-4">
          {/* Idea Card - In Review */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">EduRural Tech</h3>
                <p className="text-sm text-gray-600">Submitted on May 15, 2026</p>
              </div>
              <span className="px-3 py-1 bg-[#0033A0] text-white text-sm rounded-full font-medium">In Review</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-700">
              <div><strong>Gate:</strong> G3</div>
              <div><strong>Mentor:</strong> Dr. Rajesh Kumar</div>
            </div>
            <div className="mt-4">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5, 6].map((gate) => (
                  <div
                    key={gate}
                    className={`flex-1 h-2 rounded ${
                      gate <= 3 ? 'bg-[#E8002D]' : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Idea Card - Revision Requested */}
          <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">HealthTech Diagnostics</h3>
                <p className="text-sm text-gray-600">Submitted on May 1, 2026</p>
              </div>
              <span className="px-3 py-1 bg-orange-500 text-white text-sm rounded-full font-medium">Revision Requested</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-700 mb-4">
              <div><strong>Gate:</strong> G2</div>
              <div><strong>Mentor:</strong> Prof. Meera Patel</div>
            </div>
            <div className="bg-white border border-orange-200 rounded p-4 mb-4">
              <p className="text-sm text-gray-700">
                <strong>Mentor Feedback:</strong> Need more details on market size and competitive analysis. 
                Please update your submission with these insights.
              </p>
            </div>
            <button className="px-4 py-2 bg-orange-600 text-white rounded-lg font-medium text-sm hover:bg-orange-700">
              Resubmit Idea
            </button>
          </div>

          {/* Idea Card - Validated */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">AgriTech Solutions</h3>
                <p className="text-sm text-gray-600">Submitted on April 10, 2026</p>
              </div>
              <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-full font-medium">Validated</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-700">
              <div><strong>Gate:</strong> G6 (Complete)</div>
              <div><strong>Mentor:</strong> Dr. Anil Verma</div>
            </div>
            <div className="mt-4">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5, 6].map((gate) => (
                  <div key={gate} className="flex-1 h-2 rounded bg-green-600" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Idea Form */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-[#0033A0] to-[#E8002D] px-6 py-4">
          <h3 className="text-xl font-bold text-white">Submit New Idea - /pipeline/submit</h3>
        </div>
        
        <div className="p-8">
          <div className="max-w-2xl mx-auto space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Idea / Startup Name *</label>
              <input
                type="text"
                placeholder="Enter your startup name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Problem Statement * (100-1000 chars)</label>
              <textarea
                rows={4}
                placeholder="Describe the problem you're solving..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0] resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Target Users *</label>
              <input
                type="text"
                placeholder="Who are your customers?"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Solution Hypothesis *</label>
              <textarea
                rows={4}
                placeholder="Describe your proposed solution..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0] resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Market Size Estimate *</label>
              <input
                type="text"
                placeholder="e.g., $10M TAM in rural India"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-4">Team Composition *</label>
              <div className="space-y-3 border border-gray-300 rounded-lg p-4">
                <div className="grid grid-cols-3 gap-3">
                  <input placeholder="Name" className="px-3 py-2 border border-gray-300 rounded" />
                  <input placeholder="Role" className="px-3 py-2 border border-gray-300 rounded" />
                  <input placeholder="Skills" className="px-3 py-2 border border-gray-300 rounded" />
                </div>
                <button className="text-sm text-[#0033A0] font-semibold hover:underline">+ Add Team Member</button>
              </div>
            </div>

            <button className="w-full px-6 py-3 bg-[#E8002D] text-white rounded-lg font-semibold hover:bg-red-700">
              Submit to Pipeline
            </button>
          </div>
        </div>
      </div>

      {/* Pipeline Detail */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-[#E8002D] to-[#0033A0] px-6 py-4">
          <h3 className="text-xl font-bold text-white">Idea Detail - /pipeline/:id</h3>
        </div>
        
        <div className="p-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">EduRural Tech</h2>
                <p className="text-gray-600">Submitted on May 15, 2026</p>
              </div>
              <span className="px-4 py-2 bg-[#0033A0] text-white rounded-lg font-semibold">In Review</span>
            </div>

            {/* 6-Gate Progress Bar */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Pipeline Progress</h3>
              <div className="flex items-center justify-between">
                {[1, 2, 3, 4, 5, 6].map((gate) => (
                  <div key={gate} className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                        gate <= 3
                          ? 'bg-[#E8002D] text-white'
                          : gate === 4
                          ? 'bg-orange-500 text-white'
                          : 'bg-gray-300 text-gray-600'
                      }`}
                    >
                      G{gate}
                    </div>
                    <span className="text-xs text-gray-600 mt-2">Gate {gate}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gate History */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Gate History</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-3 h-3 bg-[#E8002D] rounded-full mt-1"></div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Advanced to Gate 3</p>
                    <p className="text-sm text-gray-600">May 20, 2026 • Dr. Rajesh Kumar</p>
                    <p className="text-sm text-gray-700 mt-2">
                      Excellent progress! Market research is solid. Ready for prototype development.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-1"></div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Passed Gate 2</p>
                    <p className="text-sm text-gray-600">May 18, 2026 • Dr. Rajesh Kumar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#E8002D]">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Pipeline Features</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• <strong>6 Gates:</strong> G1-G6 validation stages for ideas</li>
          <li>• <strong>Status Chips:</strong> Color-coded by stage (New, In Review, Validated, etc.)</li>
          <li>• <strong>Progress Bar:</strong> Visual representation of gate completion</li>
          <li>• <strong>Mentor Assignment:</strong> Each idea has assigned mentor</li>
          <li>• <strong>Gate History:</strong> Timeline of all gate movements and feedback</li>
          <li>• <strong>Resubmission:</strong> Yellow banner for revision-requested ideas</li>
        </ul>
      </div>
    </div>
  );
}
