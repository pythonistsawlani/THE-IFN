import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Switch } from '../components/ui/switch';
import { toast } from 'sonner';

export function Settings() {
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [postNotifs, setPostNotifs] = useState(true);
  const [teamNotifs, setTeamNotifs] = useState(true);
  const [pipelineNotifs, setPipelineNotifs] = useState(true);
  
  const [profileVisible, setProfileVisible] = useState(true);
  const [showEmail, setShowEmail] = useState(false);

  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@icfai.edu',
    bio: 'Passionate about building innovative solutions in EdTech.'
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Account settings saved successfully');
  };

  const handleDeleteAccount = () => {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      toast.success('Account deletion scheduled');
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">Manage your account and preferences</p>
      </div>

      {/* Account Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSave} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input 
                  id="firstName" 
                  type="text" 
                  value={formData.firstName}
                  onChange={e => setFormData({...formData, firstName: e.target.value})} 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input 
                  id="lastName" 
                  type="text" 
                  value={formData.lastName}
                  onChange={e => setFormData({...formData, lastName: e.target.value})} 
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})} 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <textarea
                id="bio"
                className="w-full min-h-[100px] p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0033A0] focus:border-transparent"
                value={formData.bio}
                onChange={e => setFormData({...formData, bio: e.target.value})} 
              />
            </div>

            <Button type="submit" className="bg-gradient-to-r from-[#E8002D] to-[#0033A0] hover:opacity-90 text-white">
              Save Changes
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Notification Preferences */}
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Email Notifications</p>
              <p className="text-sm text-gray-600">Receive notifications via email</p>
            </div>
            <Switch checked={emailNotifs} onCheckedChange={(val) => { setEmailNotifs(val); toast.success('Preference updated'); }} />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Post Interactions</p>
              <p className="text-sm text-gray-600">Notify when someone likes or comments</p>
            </div>
            <Switch checked={postNotifs} onCheckedChange={(val) => { setPostNotifs(val); toast.success('Preference updated'); }} />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Team Updates</p>
              <p className="text-sm text-gray-600">Notify about team member activities</p>
            </div>
            <Switch checked={teamNotifs} onCheckedChange={(val) => { setTeamNotifs(val); toast.success('Preference updated'); }} />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Pipeline Updates</p>
              <p className="text-sm text-gray-600">Notify when ideas advance in pipeline</p>
            </div>
            <Switch checked={pipelineNotifs} onCheckedChange={(val) => { setPipelineNotifs(val); toast.success('Preference updated'); }} />
          </div>
        </CardContent>
      </Card>

      {/* Privacy Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Privacy Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Profile Visibility</p>
              <p className="text-sm text-gray-600">Make your profile visible to all users</p>
            </div>
            <Switch checked={profileVisible} onCheckedChange={(val) => { setProfileVisible(val); toast.success('Privacy updated'); }} />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Show Email</p>
              <p className="text-sm text-gray-600">Display email on your profile</p>
            </div>
            <Switch checked={showEmail} onCheckedChange={(val) => { setShowEmail(val); toast.success('Privacy updated'); }} />
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-[#E8002D]">
        <CardHeader>
          <CardTitle className="text-[#E8002D]">Danger Zone</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Delete Account</p>
              <p className="text-sm text-gray-600">Permanently delete your account and all data</p>
            </div>
            <Button variant="destructive" onClick={handleDeleteAccount}>Delete Account</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
