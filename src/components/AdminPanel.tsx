
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Settings, 
  Bell, 
  Users, 
  MessageSquare, 
  Plus,
  Send,
  Eye,
  CheckCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminPanel = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('announcements');
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: '',
    content: '',
    type: 'notice',
    priority: 'medium'
  });

  const queries = [
    {
      id: 1,
      name: 'John Doe',
      rollNumber: '2021BTCS001',
      phone: '+91 9876543210',
      query: 'I need guidance regarding my career path in software development.',
      status: 'pending',
      date: '2024-01-15'
    },
    {
      id: 2,
      name: 'Jane Smith',
      rollNumber: '2021BTEC002',
      phone: '+91 9876543211',
      query: 'Looking for internship opportunities in my field.',
      status: 'resolved',
      date: '2024-01-14'
    }
  ];

  const handleAnnouncementSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Announcement Posted",
      description: "Your announcement has been successfully published.",
    });
    setNewAnnouncement({
      title: '',
      content: '',
      type: 'notice',
      priority: 'medium'
    });
  };

  const handleQueryStatusUpdate = (queryId: number, status: string) => {
    toast({
      title: "Query Updated",
      description: `Query status changed to ${status}.`,
    });
  };

  const tabs = [
    { id: 'announcements', label: 'Announcements', icon: Bell },
    { id: 'queries', label: 'Student Queries', icon: MessageSquare },
    { id: 'users', label: 'User Management', icon: Users },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-500 to-teal-500 bg-clip-text text-transparent mb-2">
          Admin Panel
        </h1>
        <p className="text-muted-foreground">Manage announcements, queries, and system settings</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-6 bg-muted p-1 rounded-lg">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 rounded-md transition-all ${
                activeTab === tab.id
                  ? 'bg-background shadow-sm text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <IconComponent className="w-4 h-4 mr-2" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Announcements Tab */}
      {activeTab === 'announcements' && (
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Plus className="w-5 h-5 mr-2" />
              Create New Announcement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAnnouncementSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={newAnnouncement.title}
                  onChange={(e) => setNewAnnouncement({...newAnnouncement, title: e.target.value})}
                  placeholder="Enter announcement title"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="type">Type</Label>
                  <select
                    id="type"
                    value={newAnnouncement.type}
                    onChange={(e) => setNewAnnouncement({...newAnnouncement, type: e.target.value})}
                    className="w-full p-2 rounded-md border border-input bg-background"
                  >
                    <option value="notice">Notice</option>
                    <option value="event">Event</option>
                    <option value="achievement">Achievement</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="priority">Priority</Label>
                  <select
                    id="priority"
                    value={newAnnouncement.priority}
                    onChange={(e) => setNewAnnouncement({...newAnnouncement, priority: e.target.value})}
                    className="w-full p-2 rounded-md border border-input bg-background"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  value={newAnnouncement.content}
                  onChange={(e) => setNewAnnouncement({...newAnnouncement, content: e.target.value})}
                  placeholder="Enter announcement content"
                  rows={4}
                  required
                />
              </div>

              <Button type="submit" className="btn-gradient">
                <Send className="w-4 h-4 mr-2" />
                Publish Announcement
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Queries Tab */}
      {activeTab === 'queries' && (
        <div className="space-y-4">
          {queries.map((query) => (
            <Card key={query.id} className="card-hover">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{query.name}</h3>
                    <p className="text-muted-foreground">{query.rollNumber} • {query.phone}</p>
                    <p className="text-sm text-muted-foreground">{query.date}</p>
                  </div>
                  <Badge
                    className={
                      query.status === 'pending'
                        ? 'bg-yellow-500/20 text-yellow-500'
                        : 'bg-green-500/20 text-green-500'
                    }
                  >
                    {query.status.charAt(0).toUpperCase() + query.status.slice(1)}
                  </Badge>
                </div>
                
                <div className="mb-4">
                  <p className="text-muted-foreground">{query.query}</p>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  {query.status === 'pending' && (
                    <Button
                      size="sm"
                      onClick={() => handleQueryStatusUpdate(query.id, 'resolved')}
                      className="bg-green-500 hover:bg-green-600"
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Mark Resolved
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Users Tab */}
      {activeTab === 'users' && (
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              User Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12">
              <Settings className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">User Management</h3>
              <p className="text-muted-foreground">User management features will be available soon.</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AdminPanel;
