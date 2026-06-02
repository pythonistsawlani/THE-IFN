export function AutopsyWireframes() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Idea Autopsy Library</h2>
        <p className="text-gray-600 mb-6">Learn from real startup failure case studies</p>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="bg-[#E8002D] px-6 py-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-2">Idea Autopsy Library</h3>
          <p className="text-white text-lg opacity-90">Learn from real startup failures</p>
        </div>
        
        <div className="p-8">
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex-1 min-w-[300px]">
              <input
                type="text"
                placeholder="Search by startup name or keyword..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E8002D]"
              />
            </div>
            <select className="px-4 py-3 border border-gray-300 rounded-lg">
              <option>Newest</option>
              <option>Most Upvoted</option>
            </select>
          </div>

          <div className="flex gap-2 mb-6 flex-wrap">
            <button className="px-4 py-2 bg-[#E8002D] text-white rounded-full text-sm font-medium">All</button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">AgriTech</button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">HealthTech</button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">FinTech</button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">EdTech</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-[#E8002D] rounded-lg p-6 hover:shadow-lg transition-shadow">
              <span className="inline-block px-3 py-1 bg-[#E8002D] text-white text-xs rounded-full font-bold mb-4">
                AUTOPSY
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">CryptoTrade Pro</h3>
              <p className="text-sm text-gray-700 mb-4">
                Failed to validate market need before building. Spent 8 months and $50K on features nobody wanted.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-[#0033A0] text-white text-xs rounded-full">FinTech</span>
                <span className="px-3 py-1 bg-gray-500 text-white text-xs rounded-full">Failure</span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                <span>By <strong>Rahul Kumar</strong></span>
                <span>May 10, 2026</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <span>👍 67</span>
                <span>💬 23</span>
              </div>
              <button className="w-full px-4 py-3 bg-[#E8002D] text-white rounded-lg font-semibold hover:bg-red-700">
                Read Full Autopsy
              </button>
            </div>

            <div className="bg-white border-2 border-[#E8002D] rounded-lg p-6 hover:shadow-lg transition-shadow">
              <span className="inline-block px-3 py-1 bg-[#E8002D] text-white text-xs rounded-full font-bold mb-4">
                AUTOPSY
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">FoodDelivery Express</h3>
              <p className="text-sm text-gray-700 mb-4">
                Underestimated competition and operational complexity. Burned through funding in 6 months.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-[#0033A0] text-white text-xs rounded-full">Consumer Tech</span>
                <span className="px-3 py-1 bg-gray-500 text-white text-xs rounded-full">Failure</span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                <span>By <strong>Sanjay Patel</strong></span>
                <span>April 28, 2026</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <span>👍 89</span>
                <span>💬 34</span>
              </div>
              <button className="w-full px-4 py-3 bg-[#E8002D] text-white rounded-lg font-semibold hover:bg-red-700">
                Read Full Autopsy
              </button>
            </div>

            <div className="bg-white border-2 border-[#E8002D] rounded-lg p-6 hover:shadow-lg transition-shadow">
              <span className="inline-block px-3 py-1 bg-[#E8002D] text-white text-xs rounded-full font-bold mb-4">
                AUTOPSY
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Resume Builder</h3>
              <p className="text-sm text-gray-700 mb-4">
                Built for wrong target audience. Students wanted free tool, we built premium enterprise product.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-[#0033A0] text-white text-xs rounded-full">HR Tech</span>
                <span className="px-3 py-1 bg-gray-500 text-white text-xs rounded-full">Failure</span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                <span>By <strong>Meera Singh</strong></span>
                <span>April 15, 2026</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <span>👍 52</span>
                <span>💬 18</span>
              </div>
              <button className="w-full px-4 py-3 bg-[#E8002D] text-white rounded-lg font-semibold hover:bg-red-700">
                Read Full Autopsy
              </button>
            </div>

            <div className="bg-white border-2 border-[#E8002D] rounded-lg p-6 hover:shadow-lg transition-shadow">
              <span className="inline-block px-3 py-1 bg-[#E8002D] text-white text-xs rounded-full font-bold mb-4">
                AUTOPSY
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Home Devices</h3>
              <p className="text-sm text-gray-700 mb-4">
                Hardware manufacturing delays and cost overruns killed the business before launch.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-[#0033A0] text-white text-xs rounded-full">IoT</span>
                <span className="px-3 py-1 bg-gray-500 text-white text-xs rounded-full">Failure</span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                <span>By <strong>Arun Gupta</strong></span>
                <span>March 30, 2026</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <span>👍 73</span>
                <span>💬 29</span>
              </div>
              <button className="w-full px-4 py-3 bg-[#E8002D] text-white rounded-lg font-semibold hover:bg-red-700">
                Read Full Autopsy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Autopsy Detail Modal */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="bg-[#E8002D] px-6 py-4">
          <h3 className="text-xl font-bold text-white">Autopsy Detail View</h3>
        </div>
        
        <div className="p-8">
          <div className="max-w-3xl mx-auto bg-white border-2 border-[#E8002D] rounded-lg p-8">
            <span className="inline-block px-3 py-1 bg-[#E8002D] text-white text-xs rounded-full font-bold mb-4">
              AUTOPSY
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">CryptoTrade Pro</h2>
            
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
              <span>By <strong>Rahul Kumar</strong></span>
              <span>•</span>
              <span>May 10, 2026</span>
              <span>•</span>
              <span>👍 67 upvotes</span>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-[#E8002D] bg-red-50 rounded-r-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">What was the startup?</h3>
                <p className="text-gray-700">
                  CryptoTrade Pro was a mobile app for automated cryptocurrency trading with AI-powered 
                  predictions. We aimed to make crypto trading accessible to beginners while providing 
                  advanced features for experienced traders.
                </p>
              </div>

              <div className="border-l-4 border-[#E8002D] bg-red-50 rounded-r-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">What went wrong?</h3>
                <p className="text-gray-700">
                  We spent 8 months building features without validating market need. By the time we launched, 
                  we realized our target users (beginners) were intimidated by crypto, not looking for trading tools. 
                  We burned $50K on development and marketing with only 200 downloads. Competition from established 
                  platforms was also much stronger than anticipated.
                </p>
              </div>

              <div className="border-l-4 border-[#E8002D] bg-red-50 rounded-r-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">What would you do differently?</h3>
                <p className="text-gray-700">
                  1. Talk to 50+ potential users BEFORE writing a single line of code<br />
                  2. Build a simple landing page and gauge actual interest<br />
                  3. Start with a much narrower niche (e.g., crypto-curious college students)<br />
                  4. Launch MVP in 6 weeks instead of 8 months<br />
                  5. Focus on one killer feature instead of building everything
                </p>
              </div>

              <div className="border-l-4 border-[#E8002D] bg-red-50 rounded-r-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Advice for other students?</h3>
                <p className="text-gray-700">
                  Don't fall in love with your solution — fall in love with the problem. The biggest mistake 
                  was assuming we knew what users wanted. Validate your assumptions early and cheaply. 
                  It's better to fail fast with an MVP than slow with a "perfect" product. Also, research 
                  your competition deeply — we underestimated how hard it would be to compete.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-8 pt-6 border-t">
              <button className="px-6 py-3 bg-[#0033A0] text-white rounded-lg font-semibold hover:bg-blue-800">
                👍 Upvote (67)
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50">
                💬 Comment
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50">
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#E8002D]">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Autopsy Library Features</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• <strong>Red Hero Banner:</strong> Distinctive branding for autopsy section</li>
          <li>• <strong>Search & Sort:</strong> Search by keyword, sort by newest/most upvoted</li>
          <li>• <strong>Domain Filters:</strong> Filter by startup category</li>
          <li>• <strong>Structured Sections:</strong> What was it, What went wrong, What would you do differently, Advice</li>
          <li>• <strong>Red Borders:</strong> All autopsy content has red left border for visual consistency</li>
          <li>• <strong>Upvote & Comment:</strong> Community engagement on each autopsy</li>
          <li>• <strong>Admin Approval:</strong> IdeaAutopsy tag requires admin approval before showing in library</li>
        </ul>
      </div>
    </div>
  );
}
