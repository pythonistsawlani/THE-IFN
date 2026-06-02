export function DesignSystemWireframes() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Design System & Project Setup</h2>
        <p className="text-gray-600 mb-6">Foundation components and configuration</p>
      </div>

      {/* Components Overview */}
      <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Reusable UI Components</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Buttons */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-4">Buttons</h4>
            <div className="space-y-3">
              <button className="w-full px-4 py-2 bg-[#E8002D] text-white rounded-lg font-medium hover:bg-red-700 transition-colors">
                Primary Red
              </button>
              <button className="w-full px-4 py-2 bg-[#0033A0] text-white rounded-lg font-medium hover:bg-blue-800 transition-colors">
                Primary Blue
              </button>
              <button className="w-full px-4 py-2 border-2 border-[#0033A0] text-[#0033A0] rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Outline
              </button>
              <button className="w-full px-4 py-2 text-gray-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Ghost
              </button>
            </div>
          </div>

          {/* Badges */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-4">Badges & Tags</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#E8002D] text-white text-sm rounded-full font-medium">Red</span>
              <span className="px-3 py-1 bg-[#0033A0] text-white text-sm rounded-full font-medium">Blue</span>
              <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full font-medium">Green</span>
              <span className="px-3 py-1 bg-orange-500 text-white text-sm rounded-full font-medium">Orange</span>
              <span className="px-3 py-1 bg-gray-500 text-white text-sm rounded-full font-medium">Gray</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full font-medium">Warning</span>
            </div>
          </div>

          {/* Cards */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-4">Card</h4>
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
              <h5 className="font-semibold text-gray-900">Card Title</h5>
              <p className="text-sm text-gray-600 mt-2">Card with hover effect and shadow</p>
            </div>
          </div>

          {/* Avatar */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-4">Avatar</h4>
            <div className="flex gap-3 items-center">
              <div className="w-12 h-12 rounded-full bg-[#E8002D] flex items-center justify-center text-white font-bold">
                AB
              </div>
              <div className="w-12 h-12 rounded-full bg-[#0033A0] flex items-center justify-center text-white font-bold">
                CD
              </div>
              <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold">
                EF
              </div>
            </div>
          </div>

          {/* Toast/Notification */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-4">Toast Notifications</h4>
            <div className="space-y-2">
              <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                <p className="text-sm text-green-800 font-medium">✓ Success</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded">
                <p className="text-sm text-red-800 font-medium">✕ Error</p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded">
                <p className="text-sm text-yellow-800 font-medium">⚠ Warning</p>
              </div>
            </div>
          </div>

          {/* Spinner */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-4">Loading Spinner</h4>
            <div className="flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-gray-200 border-t-[#0033A0] rounded-full animate-spin"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Color System */}
      <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Color System - Antigravity Palette</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Primary Colors</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-lg bg-[#E8002D] shadow-md"></div>
                <div>
                  <p className="font-mono text-sm">#E8002D</p>
                  <p className="text-xs text-gray-600">IFN Red</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-lg bg-[#0033A0] shadow-md"></div>
                <div>
                  <p className="font-mono text-sm">#0033A0</p>
                  <p className="text-xs text-gray-600">IFN Blue</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-lg bg-white border-2 border-gray-300 shadow-md"></div>
                <div>
                  <p className="font-mono text-sm">#FFFFFF</p>
                  <p className="text-xs text-gray-600">IFN White</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Gray Scale</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-lg bg-gray-50 border border-gray-200 shadow-sm"></div>
                <p className="text-sm">Gray 50</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-lg bg-gray-100 shadow-sm"></div>
                <p className="text-sm">Gray 100</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-lg bg-gray-200 shadow-sm"></div>
                <p className="text-sm">Gray 200</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Accent Colors</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-lg bg-green-500 shadow-md"></div>
                <p className="text-sm">Success</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-lg bg-orange-500 shadow-md"></div>
                <p className="text-sm">Warning</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-lg bg-red-500 shadow-md"></div>
                <p className="text-sm">Error</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Typography */}
      <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Typography System</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-600 mb-2">Headings - Space Grotesk (700, 800)</h4>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Heading 1 - Display</h1>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Heading 2 - Title</h2>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Heading 3 - Section</h3>
            <h4 className="text-xl font-semibold text-gray-900">Heading 4 - Subsection</h4>
          </div>

          <div className="border-t pt-6">
            <h4 className="font-semibold text-gray-600 mb-2">Body Text - Inter (400, 500, 600)</h4>
            <p className="text-base text-gray-900 mb-2 font-normal">Regular body text - Inter 400</p>
            <p className="text-base text-gray-900 mb-2 font-medium">Medium body text - Inter 500</p>
            <p className="text-base text-gray-900 font-semibold">Semibold body text - Inter 600</p>
          </div>
        </div>
      </div>

      {/* Folder Structure */}
      <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Project Structure</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
            <div className="text-gray-900 font-semibold mb-2">📁 /src</div>
            <div className="ml-4 space-y-1 text-gray-700">
              <div>📁 /components</div>
              <div className="ml-4 space-y-1 text-gray-600">
                <div>📁 /ui (reusable)</div>
                <div>📄 Button.tsx</div>
                <div>📄 Badge.tsx</div>
                <div>📄 Card.tsx</div>
                <div>📄 Avatar.tsx</div>
                <div>📄 Modal.tsx</div>
                <div>📄 Toast.tsx</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
            <div className="text-gray-900 font-semibold mb-2">📁 Other Folders</div>
            <div className="ml-4 space-y-1 text-gray-700">
              <div>📁 /layouts</div>
              <div className="ml-4 text-gray-600">
                <div>📄 AuthLayout.tsx</div>
                <div>📄 AppLayout.tsx</div>
              </div>
              <div className="mt-2">📁 /routes</div>
              <div className="mt-2">📁 /services</div>
              <div className="ml-4 text-gray-600">
                <div>📄 api.js (mock data)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
