export function AuthWireframes() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Authentication Pages</h2>
        <p className="text-gray-600 mb-6">Login and Register pages with split layout</p>
      </div>

      {/* Login Page Wireframe */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-[#E8002D] to-[#0033A0] px-6 py-4">
          <h3 className="text-xl font-bold text-white">Login Page - /login</h3>
        </div>
        
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Panel - Desktop */}
            <div className="bg-gradient-to-br from-[#E8002D] to-[#0033A0] rounded-lg p-8 text-white hidden lg:block">
              <div className="mb-6">
                <div className="text-3xl font-bold mb-2">IFN</div>
                <p className="text-lg opacity-90">ICFAI Founders Network</p>
              </div>
              <div className="space-y-4 mt-12">
                <p className="text-lg font-semibold">Build your startup with ICFAI</p>
                <ul className="space-y-2 opacity-90">
                  <li>• Connect with mentors</li>
                  <li>• Get funding opportunities</li>
                  <li>• Learn from failures</li>
                  <li>• Join a community of founders</li>
                </ul>
              </div>
            </div>

            {/* Right Panel - Form */}
            <div className="flex items-center">
              <div className="w-full max-w-md mx-auto">
                <div className="mb-6 lg:hidden">
                  <div className="text-2xl font-bold text-gray-900">IFN</div>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h2>
                <p className="text-gray-600 mb-6">Sign in to your account</p>

                {/* Form Fields */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      placeholder="your.email@icfai.edu"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0]"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-gray-600">Remember me</span>
                    </label>
                    <a href="#" className="text-sm text-[#0033A0] hover:underline">
                      Forgot password?
                    </a>
                  </div>

                  <button className="w-full px-4 py-3 bg-[#E8002D] text-white rounded-lg font-semibold hover:bg-red-700 transition-colors">
                    Login
                  </button>

                  <p className="text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <a href="#" className="text-[#0033A0] font-semibold hover:underline">
                      Register here
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Register Page Wireframe */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-[#0033A0] to-[#E8002D] px-6 py-4">
          <h3 className="text-xl font-bold text-white">Register Page - /register</h3>
        </div>
        
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Panel - Desktop */}
            <div className="bg-gradient-to-br from-[#0033A0] to-[#E8002D] rounded-lg p-8 text-white hidden lg:block">
              <div className="mb-6">
                <div className="text-3xl font-bold mb-2">IFN</div>
                <p className="text-lg opacity-90">Start Your Journey</p>
              </div>
              <div className="space-y-4 mt-12">
                <p className="text-lg font-semibold">Join the ICFAI startup ecosystem</p>
                <ul className="space-y-2 opacity-90">
                  <li>• Share your startup ideas</li>
                  <li>• Get expert feedback</li>
                  <li>• Access incubation programs</li>
                  <li>• Network with founders</li>
                </ul>
              </div>
            </div>

            {/* Right Panel - Form */}
            <div className="flex items-center">
              <div className="w-full max-w-md mx-auto">
                <div className="mb-6 lg:hidden">
                  <div className="text-2xl font-bold text-gray-900">IFN</div>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Create Account</h2>
                <p className="text-gray-600 mb-6">Join ICFAI Founders Network</p>

                {/* Form Fields */}
                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      placeholder="your.email@icfai.edu"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
                    <input
                      type="password"
                      placeholder="Minimum 8 characters"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password *</label>
                    <input
                      type="password"
                      placeholder="Re-enter password"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Role *</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0]">
                      <option>Select role</option>
                      <option>Student</option>
                      <option>Mentor</option>
                      <option>Admin</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">College Branch *</label>
                    <input
                      type="text"
                      placeholder="e.g., Hyderabad"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Year of Study *</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0]">
                      <option>Select year</option>
                      <option>1st Year</option>
                      <option>2nd Year</option>
                      <option>3rd Year</option>
                      <option>4th Year</option>
                    </select>
                  </div>

                  <button className="w-full px-4 py-3 bg-[#E8002D] text-white rounded-lg font-semibold hover:bg-red-700 transition-colors">
                    Create Account
                  </button>

                  <p className="text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <a href="#" className="text-[#0033A0] font-semibold hover:underline">
                      Login here
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Validation Notes */}
      <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#E8002D]">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Form Validation Rules</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• All fields are required</li>
          <li>• Email must be in valid format</li>
          <li>• Password minimum 8 characters</li>
          <li>• Passwords must match (register)</li>
          <li>• Inline red error messages below fields</li>
          <li>• Submit button disabled until form is valid</li>
          <li>• Loading spinner appears on button during submission</li>
          <li>• Success: Toast message + redirect</li>
        </ul>
      </div>
    </div>
  );
}
