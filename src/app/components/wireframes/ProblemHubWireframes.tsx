export function ProblemHubWireframes() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Problem Hub & Team Board</h2>
        <p className="text-gray-600 mb-6">Find problems to solve and teams to join</p>
      </div>

      {/* Problem Hub */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-[#E8002D] to-[#0033A0] px-6 py-4 flex justify-between items-center">
          <h3 className="text-xl font-bold text-white">Problem Hub - /problems</h3>
          <button className="px-4 py-2 bg-white text-[#E8002D] rounded-lg font-semibold text-sm hover:bg-gray-100">
            + Post a Problem
          </button>
        </div>
        
        <div className="p-8">
          <div className="flex gap-2 mb-6 flex-wrap">
            <button className="px-4 py-2 bg-[#0033A0] text-white rounded-full text-sm font-medium">All</button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">AgriTech</button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">HealthTech</button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">FinTech</button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">EdTech</button>
          </div>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Scalable Water Management System for Urban Areas
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                Urban areas face increasing water scarcity. Need innovative solutions for water conservation, 
                recycling, and efficient distribution systems that can scale across cities.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-[#0033A0] text-white text-xs rounded-full">AgriTech</span>
                <span className="px-3 py-1 bg-[#0033A0] text-white text-xs rounded-full">IoT</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-xs text-gray-600">
                  Posted by <strong>Dr. Sharma</strong> (Faculty) • 3 days ago
                </p>
                <button className="px-4 py-2 bg-[#0033A0] text-white rounded-lg text-sm font-medium hover:bg-blue-800">
                  Submit Solution
                </button>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Mental Health Support Platform for Students
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                College students lack accessible mental health resources. Need anonymous, 24/7 support 
                platform with AI-powered initial screening and professional counselor connections.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-[#0033A0] text-white text-xs rounded-full">HealthTech</span>
                <span className="px-3 py-1 bg-[#0033A0] text-white text-xs rounded-full">AI</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs text-gray-600">Posted by <strong>ICFAI Admin</strong> • 1 week ago</p>
                  <p className="text-xs text-[#E8002D] font-semibold">⏰ Deadline: June 15, 2026</p>
                </div>
                <button className="px-4 py-2 bg-[#0033A0] text-white rounded-lg text-sm font-medium hover:bg-blue-800">
                  Submit Solution
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Board */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-[#0033A0] to-[#E8002D] px-6 py-4 flex justify-between items-center">
          <h3 className="text-xl font-bold text-white">Team Board - /team-board</h3>
          <button className="px-4 py-2 bg-white text-[#0033A0] rounded-lg font-semibold text-sm hover:bg-gray-100">
            + Post a Role
          </button>
        </div>
        
        <div className="p-8">
          <div className="flex gap-2 mb-6 flex-wrap">
            <button className="px-4 py-2 bg-[#0033A0] text-white rounded-full text-sm font-medium">All Roles</button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">Developer</button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">Designer</button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">Marketing</button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">Finance</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-gray-900">Full-Stack Developer</h3>
                <span className="px-2 py-1 bg-[#0033A0] text-white text-xs rounded-full font-medium">Prototype</span>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                Looking for experienced full-stack developer to build MVP for EdTech platform
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-[#0033A0] text-white text-xs rounded-full">React</span>
                <span className="px-3 py-1 bg-[#0033A0] text-white text-xs rounded-full">Node.js</span>
                <span className="px-3 py-1 bg-[#0033A0] text-white text-xs rounded-full">MongoDB</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-600 mb-4">
                <div>⏰ 15-20 hrs/week</div>
                <div>💰 Equity + Stipend</div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#E8002D] rounded-full flex items-center justify-center text-white font-semibold text-xs">
                    AS
                  </div>
                  <span className="text-sm text-gray-700 font-medium">Anita Sharma</span>
                </div>
                <button className="px-4 py-2 bg-[#0033A0] text-white rounded-lg text-sm font-medium hover:bg-blue-800">
                  Express Interest
                </button>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-gray-900">UI/UX Designer</h3>
                <span className="px-2 py-1 bg-gray-500 text-white text-xs rounded-full font-medium">Idea</span>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                Seeking creative designer to help design user experience for HealthTech app
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-[#0033A0] text-white text-xs rounded-full">Figma</span>
                <span className="px-3 py-1 bg-[#0033A0] text-white text-xs rounded-full">User Research</span>
                <span className="px-3 py-1 bg-[#0033A0] text-white text-xs rounded-full">Prototyping</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-600 mb-4">
                <div>⏰ 10 hrs/week</div>
                <div>💰 Equity</div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold text-xs">
                    RK
                  </div>
                  <span className="text-sm text-gray-700 font-medium">Rahul Kumar</span>
                </div>
                <button className="px-4 py-2 bg-[#0033A0] text-white rounded-lg text-sm font-medium hover:bg-blue-800">
                  Express Interest
                </button>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-gray-900">Marketing Lead</h3>
                <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full font-medium">Revenue</span>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                Looking for growth marketer to scale our AgriTech SaaS platform
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-[#0033A0] text-white text-xs rounded-full">Digital Marketing</span>
                <span className="px-3 py-1 bg-[#0033A0] text-white text-xs rounded-full">SEO</span>
                <span className="px-3 py-1 bg-[#0033A0] text-white text-xs rounded-full">Content</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-600 mb-4">
                <div>⏰ Full-time</div>
                <div>💰 Salary + Equity</div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-xs">
                    PM
                  </div>
                  <span className="text-sm text-gray-700 font-medium">Priya Menon</span>
                </div>
                <button className="px-4 py-2 bg-[#0033A0] text-white rounded-lg text-sm font-medium hover:bg-blue-800">
                  Express Interest
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#E8002D]">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Problem Hub & Team Board Features</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• <strong>Problem Hub:</strong> Domain filters, deadline highlighting, Submit Solution CTA</li>
          <li>• <strong>Team Board:</strong> Role type filters, 2-col grid on desktop, single col mobile</li>
          <li>• <strong>Stage Badges:</strong> Idea (gray), Prototype (blue), Revenue (green)</li>
          <li>• <strong>Skills Tags:</strong> Blue chips showing required skills</li>
          <li>• <strong>Express Interest:</strong> Opens contact info or DM form</li>
          <li>• <strong>Post Problem/Role:</strong> Faculty/admin only for problems, founders for roles</li>
        </ul>
      </div>
    </div>
  );
}
