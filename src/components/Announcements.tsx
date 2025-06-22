
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bell, Calendar, Trophy, AlertCircle, Users } from 'lucide-react';

const Announcements = () => {
  const announcements = [
    {
      id: 1,
      title: 'Semester End Examinations Schedule Released',
      content: 'The examination schedule for the current semester has been published. Please check your respective department notice boards for detailed timetables.',
      type: 'notice',
      date: '2024-01-15',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Tech Fest 2024 - Registration Open',
      content: 'Annual technical festival registration is now open. Participate in coding competitions, hackathons, and technical exhibitions. Prizes worth ₹50,000 to be won!',
      type: 'event',
      date: '2024-01-12',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Student Achievement Recognition',
      content: 'Congratulations to our students who secured internships at top tech companies this semester. Their dedication and hard work continue to make us proud.',
      type: 'achievement',
      date: '2024-01-10',
      priority: 'low'
    },
    {
      id: 4,
      title: 'Library Extended Hours During Exams',
      content: 'The central library will remain open 24/7 during the examination period. Additional study spaces and resources have been made available.',
      type: 'notice',
      date: '2024-01-08',
      priority: 'medium'
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'notice':
        return <Bell className="w-5 h-5" />;
      case 'event':
        return <Calendar className="w-5 h-5" />;
      case 'achievement':
        return <Trophy className="w-5 h-5" />;
      default:
        return <AlertCircle className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'notice':
        return 'bg-blue-500/20 text-blue-500';
      case 'event':
        return 'bg-green-500/20 text-green-500';
      case 'achievement':
        return 'bg-yellow-500/20 text-yellow-500';
      default:
        return 'bg-gray-500/20 text-gray-500';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500/20 text-red-500 border-red-500/20';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/20';
      case 'low':
        return 'bg-green-500/20 text-green-500 border-green-500/20';
      default:
        return 'bg-gray-500/20 text-gray-500 border-gray-500/20';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-500 to-teal-500 bg-clip-text text-transparent mb-2">
          College Announcements
        </h1>
        <p className="text-muted-foreground">Stay updated with the latest news and events</p>
      </div>

      <div className="space-y-6">
        {announcements.map((announcement) => (
          <Card key={announcement.id} className="card-hover">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${getTypeColor(announcement.type)}`}>
                    {getIcon(announcement.type)}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{announcement.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{announcement.date}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Badge className={getTypeColor(announcement.type)}>
                    {announcement.type.charAt(0).toUpperCase() + announcement.type.slice(1)}
                  </Badge>
                  <Badge variant="outline" className={getPriorityColor(announcement.priority)}>
                    {announcement.priority.toUpperCase()}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {announcement.content}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty state if no announcements */}
      {announcements.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <Users className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Announcements</h3>
            <p className="text-muted-foreground">Check back later for updates and news.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Announcements;
