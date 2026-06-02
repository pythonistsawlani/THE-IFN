import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { Trash2, Edit2, Plus } from 'lucide-react';
import { useAppStore } from '../../../store/useAppStore';

export function AdminTags() {
  const navigate = useNavigate();
  const { tags, addTag, deleteTag } = useAppStore();
  const [newTag, setNewTag] = useState('');

  const handleAddTag = () => {
    if (newTag.trim()) {
      addTag(newTag.trim());
      setNewTag('');
    }
  };

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Button variant="ghost" onClick={() => navigate('/admin')}>
        ← Back to Admin Panel
      </Button>

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Tag Management</h1>
        <p className="text-gray-600 mt-1">Create and manage content tags</p>
      </div>

      {/* Add New Tag */}
      <Card>
        <CardHeader>
          <CardTitle>Add New Tag</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3">
            <Input
              type="text"
              placeholder="Enter tag name"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
            />
            <Button
              onClick={handleAddTag}
              className="bg-gradient-to-r from-[#E8002D] to-[#0033A0] hover:opacity-90 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Tag
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tags List */}
      <Card>
        <CardHeader>
          <CardTitle>Existing Tags ({tags.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tags.map((tag) => (
              <div
                key={tag.id}
                className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <Badge className={`bg-blue-500 text-white text-lg px-4 py-1`}>
                    {tag.name}
                  </Badge>
                  <span className="text-sm text-gray-600">0 uses</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit2 className="w-3 h-3 mr-1" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-[#E8002D] hover:bg-red-50"
                    onClick={() => deleteTag(tag.id)}
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
