export function AdminWireframes() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Admin Panel</h2>
        <p className="text-gray-600 mb-6">Manage platform, approve tags, review pipeline</p>
      </div>

      {/* Dashboard */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-gray-700 to-gray-900 px-6 py-4">
          <h3 className="text-xl font-bold text-white">Admin Dashboard - /admin</h3>
        </div>
        
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-[#E8002D] mb-2">127</p>
              <p className="text-sm text-gray-600">Ideas Submitted</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-[#0033A0] mb-2">45</p>
              <p className="text-sm text-gray-600">Mentor Sessions</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-green-600 mb-2">23</p>
              <p className="text-sm text-gray-600">At Gate 3+</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-purple-600 mb-2">8</p>
              <p className="text-sm text-gray-600">Demo Day Teams</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Pipeline Stage Distribution</h3>
              <div className="h-64 flex items-end justify-around gap-2">
                {[
                  { gate: 'G1', count: 40, color: '#E8002D' },
                  { gate: 'G2', count: 30, color: '#0033A0' },
                  { gate: 'G3', count: 25, color: '#0033A0' },
                  { gate: 'G4', count: 15, color: '#0033A0' },
                  { gate: 'G5', count: 10, color: '#0033A0' },
                  { gate: 'G6', count: 7, color: 'green' }
                ].map((item, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full rounded-t-lg"
                      style={{ 
                        height: `${item.count * 4}px`,
                        backgroundColor: item.color 
                      }}
                    ></div>
                    <p className="text-sm font-semibold text-gray-700 mt-2">{item.gate}</p>
                    <p className="text-xs text-gray-600">{item.count}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Weekly Post Activity</h3>
              <div className="h-64">
                <p className="text-sm text-gray-600 text-center pt-20">Line chart showing post activity trend</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="px-6 py-3 bg-[#E8002D] text-white rounded-lg font-semibold hover:bg-red-700">
              Review Pending Tags
            </button>
            <button className="px-6 py-3 bg-[#0033A0] text-white rounded-lg font-semibold hover:bg-blue-800">
              Review Duplicates
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50">
              View Pipeline
            </button>
          </div>
        </div>
      </div>

      {/* Supertag Approvals */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-[#E8002D] to-[#0033A0] px-6 py-4">
          <h3 className="text-xl font-bold text-white">Supertag Approvals - /admin/tags</h3>
        </div>
        
        <div className="p-8">
          <div className="flex gap-2 mb-6">
            <button className="px-4 py-2 bg-[#E8002D] text-white rounded-lg font-medium text-sm">Pending (5)</button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium text-sm hover:bg-gray-200">Approved</button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium text-sm hover:bg-gray-200">Rejected</button>
          </div>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-2">Request from <strong>Anita Sharma</strong> • 2 days ago</p>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Interactive Learning Platform for Rural Schools</h4>
                  <span className="px-3 py-1 bg-orange-500 text-white text-xs rounded-full font-medium">IdeaValidation</span>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 text-[#0033A0] hover:underline text-sm font-semibold">
                  View Post →
                </button>
                <button className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium text-sm hover:bg-green-700">
                  Approve
                </button>
                <button className="px-6 py-2 bg-[#E8002D] text-white rounded-lg font-medium text-sm hover:bg-red-700">
                  Reject
                </button>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-2">Request from <strong>Rahul Kumar</strong> • 1 week ago</p>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Why Our Crypto Trading App Failed</h4>
                  <span className="px-3 py-1 bg-[#E8002D] text-white text-xs rounded-full font-bold">IdeaAutopsy</span>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 text-[#0033A0] hover:underline text-sm font-semibold">
                  View Post →
                </button>
                <button className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium text-sm hover:bg-green-700">
                  Approve
                </button>
                <button className="px-6 py-2 bg-[#E8002D] text-white rounded-lg font-medium text-sm hover:bg-red-700">
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pipeline Management */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-[#0033A0] to-[#E8002D] px-6 py-4">
          <h3 className="text-xl font-bold text-white">Pipeline Management - /admin/pipeline</h3>
        </div>
        
        <div className="p-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Startup</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Student</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Gate</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Mentor</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-4 px-4 font-medium text-gray-900">EduRural Tech</td>
                  <td className="py-4 px-4 text-gray-700">Anita Sharma</td>
                  <td className="py-4 px-4"><span className="font-bold text-[#E8002D]">G3</span></td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 bg-[#0033A0] text-white text-xs rounded-full">In Review</span>
                  </td>
                  <td className="py-4 px-4 text-gray-700">Dr. Rajesh Kumar</td>
                  <td className="py-4 px-4">
                    <div className="flex gap-2">
                      <button className="px-3 py-1 bg-green-600 text-white rounded text-xs font-medium hover:bg-green-700">
                        Advance
                      </button>
                      <button className="px-3 py-1 bg-[#0033A0] text-white rounded text-xs font-medium hover:bg-blue-800">
                        Feedback
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-4 px-4 font-medium text-gray-900">HealthTech Diagnostics</td>
                  <td className="py-4 px-4 text-gray-700">Rahul Kumar</td>
                  <td className="py-4 px-4"><span className="font-bold text-[#E8002D]">G2</span></td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 bg-orange-500 text-white text-xs rounded-full">Revision Requested</span>
                  </td>
                  <td className="py-4 px-4 text-gray-700">Prof. Meera Patel</td>
                  <td className="py-4 px-4">
                    <div className="flex gap-2">
                      <button className="px-3 py-1 bg-gray-300 text-gray-700 rounded text-xs font-medium">
                        Advance
                      </button>
                      <button className="px-3 py-1 bg-[#0033A0] text-white rounded text-xs font-medium hover:bg-blue-800">
                        Feedback
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Duplicate Review */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-orange-500 to-[#E8002D] px-6 py-4">
          <h3 className="text-xl font-bold text-white">Duplicate Review - /admin/duplicates</h3>
        </div>
        
        <div className="p-8">
          <div className="space-y-6">
            <div className="border border-orange-300 bg-orange-50 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-orange-600 text-white text-xs rounded-full font-bold">85% Similar</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Post A: Smart Irrigation System</h4>
                  <p className="text-sm text-gray-600 mb-2">By Priya Menon</p>
                  <p className="text-sm text-gray-700">
                    IoT-based irrigation system for small farmers to optimize water usage...
                  </p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Post B: AgriTech Water Solution</h4>
                  <p className="text-sm text-gray-600 mb-2">By Anil Verma</p>
                  <p className="text-sm text-gray-700">
                    Automated water management for agricultural use with IoT sensors...
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="px-6 py-2 bg-[#0033A0] text-white rounded-lg font-medium text-sm hover:bg-blue-800">
                  Suggest Collaboration
                </button>
                <button className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium text-sm hover:bg-green-700">
                  Mark as Not Duplicate
                </button>
                <button className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg font-medium text-sm hover:bg-gray-400">
                  Reviewed - No Action
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-gray-700">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Admin Panel Features</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• <strong>KPI Dashboard:</strong> Key metrics with bar/line charts using Recharts</li>
          <li>• <strong>Tag Approvals:</strong> Approve/reject hardcoded tag requests with reason modal</li>
          <li>• <strong>Pipeline Management:</strong> Assign mentors, advance gates, add feedback</li>
          <li>• <strong>Duplicate Review:</strong> Side-by-side comparison with similarity score</li>
          <li>• <strong>Collaboration Suggestions:</strong> Notify both students to work together</li>
          <li>• <strong>Responsive Tables:</strong> Convert to cards on mobile</li>
        </ul>
      </div>
    </div>
  );
}
