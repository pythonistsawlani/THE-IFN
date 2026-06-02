export function CalendarWireframes() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Calendar & Event Scheduler</h2>
        <p className="text-gray-600 mb-6">Manage events, workshops, and mentorship sessions</p>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-[#0033A0] to-[#E8002D] px-6 py-4">
          <h3 className="text-xl font-bold text-white">Calendar - /calendar</h3>
        </div>
        
        <div className="p-8 bg-gray-50">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">June 2026</h2>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-[#0033A0] text-white rounded-lg text-sm font-medium">Month</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm">Week</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm">Day</button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-center font-semibold text-gray-600 text-sm p-2">{day}</div>
              ))}
              {Array.from({ length: 35 }).map((_, i) => (
                <div key={i} className="aspect-square border border-gray-200 rounded-lg p-2 hover:bg-gray-50">
                  <div className="text-sm text-gray-700">{(i % 30) + 1}</div>
                  {i === 10 && (
                    <div className="mt-1 space-y-1">
                      <div className="text-xs bg-[#0033A0] text-white px-2 py-1 rounded">Workshop</div>
                    </div>
                  )}
                  {i === 15 && (
                    <div className="mt-1">
                      <div className="text-xs bg-green-500 text-white px-2 py-1 rounded">Mentorship</div>
                    </div>
                  )}
                  {i === 20 && (
                    <div className="mt-1">
                      <div className="text-xs bg-[#E8002D] text-white px-2 py-1 rounded">Deadline</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#0033A0]">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Calendar Features</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• <strong>Views:</strong> Month, Week, Day toggle</li>
          <li>• <strong>Color Codes:</strong> Workshop (blue), Mentorship (green), Deadline (red), Other (gray)</li>
          <li>• <strong>Create Event:</strong> Form with title, type, date, time, host mentor, invitees</li>
          <li>• <strong>Conflict Detection:</strong> Same mentor + overlapping time shows error</li>
          <li>• <strong>Event Actions:</strong> Edit, Delete, Add to Google Calendar</li>
        </ul>
      </div>
    </div>
  );
}
