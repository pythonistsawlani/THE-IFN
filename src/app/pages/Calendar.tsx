import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Calendar as CalendarIcon, Clock, MapPin, Users, X } from 'lucide-react';
import { useAppStore, Event } from '../../store/useAppStore';
import { toast } from 'sonner';

export function Calendar() {
  const { events, addEvent, registerForEvent } = useAppStore();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const [newEvent, setNewEvent] = useState({ 
    title: '', description: '', date: '', time: '', location: '', type: 'Event', isOnline: false 
  });

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEvent.title || !newEvent.date) {
      toast.error('Title and Date are required');
      return;
    }
    addEvent(newEvent);
    setShowCreateModal(false);
    toast.success('Event created successfully');
    setNewEvent({ title: '', description: '', date: '', time: '', location: '', type: 'Event', isOnline: false });
  };

  const handleRegister = (id: number) => {
    registerForEvent(id);
    toast.success('Successfully registered for event');
    if (selectedEvent && selectedEvent.id === id) {
      setSelectedEvent({ ...selectedEvent, registered: true });
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Calendar & Events</h1>
          <p className="text-gray-600 mt-1">View and manage upcoming events</p>
        </div>
        <Button 
          onClick={() => setShowCreateModal(true)}
          className="bg-gradient-to-r from-[#E8002D] to-[#0033A0] hover:opacity-90 text-white"
        >
          Create Event
        </Button>
      </div>

      {/* Calendar View */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>June 2026</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Month</Button>
            <Button variant="ghost" size="sm">Week</Button>
            <Button variant="ghost" size="sm">Day</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2 text-center mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="font-semibold text-gray-700 py-2">
                {day}
              </div>
            ))}
            {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
              // Find events for this day (mocked simply by matching date endsWith)
              const dayEvents = events.filter(e => e.date.endsWith(`-${day.toString().padStart(2, '0')}`) || day === 15 || day === 10);
              
              return (
                <div
                  key={day}
                  className={`p-3 rounded-lg hover:bg-gray-100 cursor-pointer flex flex-col items-center justify-start min-h-[80px] ${
                    day === 2 ? 'bg-[#0033A0] text-white' : 'bg-gray-50 border border-gray-100'
                  }`}
                >
                  <span>{day}</span>
                  <div className="mt-2 space-y-1 w-full">
                    {dayEvents.map(e => (
                       <div key={e.id} className="w-full h-1.5 bg-blue-500 rounded-full" title={e.title}></div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events ({events.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {events.map((event) => (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer bg-white"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                    <Badge className="bg-blue-100 text-blue-700 mt-1">{event.type}</Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CalendarIcon className="w-4 h-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">View details</span>
                  </div>
                  <Button 
                    variant={event.registered ? "default" : "outline"}
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!event.registered) handleRegister(event.id);
                    }}
                    disabled={event.registered}
                    className={event.registered ? 'bg-green-600 hover:bg-green-700 text-white border-transparent' : ''}
                  >
                    {event.registered ? 'Registered' : 'Register'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Create Event Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <Card className="max-w-md w-full bg-white relative">
            <button onClick={() => setShowCreateModal(false)} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
              <X className="w-5 h-5" />
            </button>
            <CardHeader>
              <CardTitle>Create Event</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCreateSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Title</label>
                  <input required className="w-full border p-2 rounded" value={newEvent.title} onChange={e => setNewEvent({...newEvent, title: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <textarea className="w-full border p-2 rounded" value={newEvent.description} onChange={e => setNewEvent({...newEvent, description: e.target.value})} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Date</label>
                    <input type="date" required className="w-full border p-2 rounded" value={newEvent.date} onChange={e => setNewEvent({...newEvent, date: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Time</label>
                    <input type="time" className="w-full border p-2 rounded" value={newEvent.time} onChange={e => setNewEvent({...newEvent, time: e.target.value})} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Location / Link</label>
                  <input className="w-full border p-2 rounded" value={newEvent.location} onChange={e => setNewEvent({...newEvent, location: e.target.value})} />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium">
                    <input type="checkbox" checked={newEvent.isOnline} onChange={e => setNewEvent({...newEvent, isOnline: e.target.checked})} />
                    Online Event
                  </label>
                </div>
                <Button type="submit" className="w-full bg-[#0033A0] text-white">Create</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="max-w-lg w-full bg-white relative">
            <button onClick={() => setSelectedEvent(null)} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
              <X className="w-5 h-5" />
            </button>
            <CardHeader>
              <Badge className="w-fit mb-2">{selectedEvent.type}</Badge>
              <CardTitle className="text-2xl">{selectedEvent.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">{selectedEvent.description || 'No description available.'}</p>
              
              <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <CalendarIcon className="w-5 h-5 text-[#0033A0]" />
                  <span className="font-medium">{selectedEvent.date} at {selectedEvent.time}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-5 h-5 text-[#0033A0]" />
                  <span className="font-medium">{selectedEvent.location} {selectedEvent.isOnline ? '(Online)' : ''}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex gap-4">
                <Button 
                  onClick={() => handleRegister(selectedEvent.id)}
                  disabled={selectedEvent.registered}
                  className={`flex-1 ${selectedEvent.registered ? 'bg-green-600 text-white' : 'bg-[#E8002D] text-white hover:bg-red-700'}`}
                >
                  {selectedEvent.registered ? 'You are Registered' : 'Register Now'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
