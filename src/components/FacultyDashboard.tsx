
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Users, BookOpen, Calendar, MessageSquare, Plus, Edit, Save, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const FacultyDashboard = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Dr. Sarah Johnson',
    facultyId: 'FAC001',
    department: 'Computer Science Engineering',
    designation: 'Assistant Professor',
    experience: '8 years',
    specialization: ['Machine Learning', 'Data Science', 'Web Development'],
    courses: ['CSE101 - Programming Fundamentals', 'CSE301 - Database Systems', 'CSE401 - Machine Learning'],
    students: 120,
    publications: 15
  });

  const [editData, setEditData] = useState(profileData);

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your faculty profile has been successfully updated!",
    });
  };

  const handleCancel = () => {
    setEditData(profileData);
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-500 to-green-600 bg-clip-text text-transparent">
            Faculty Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">Manage your courses and student interactions</p>
        </div>
        {!isEditing ? (
          <Button onClick={() => setIsEditing(true)} className="btn-gradient">
            <Edit className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button onClick={handleSave} className="btn-gradient">
              <Save className="w-4 h-4 mr-2" />
              Save
            </Button>
            <Button onClick={handleCancel} variant="outline">
              <X className="w-4 h-4 mr-2" />
              Cancel
            </Button>
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="lg:col-span-1 card-hover">
          <CardHeader className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-teal-500 to-green-600 rounded-full flex items-center justify-center">
              <Users className="w-12 h-12 text-white" />
            </div>
            <CardTitle className="text-xl">{profileData.name}</CardTitle>
            <p className="text-muted-foreground">{profileData.facultyId}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Department</label>
              <p className="text-sm text-muted-foreground">{profileData.department}</p>
            </div>
            <div>
              <label className="text-sm font-medium">Designation</label>
              <p className="text-sm text-muted-foreground">{profileData.designation}</p>
            </div>
            <div>
              <label className="text-sm font-medium">Experience</label>
              <p className="text-sm text-muted-foreground">{profileData.experience}</p>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="card-hover">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 mx-auto mb-2 text-teal-500" />
                <h3 className="text-2xl font-bold">{profileData.students}</h3>
                <p className="text-muted-foreground">Students</p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardContent className="p-6 text-center">
                <BookOpen className="w-8 h-8 mx-auto mb-2 text-green-500" />
                <h3 className="text-2xl font-bold">{profileData.courses.length}</h3>
                <p className="text-muted-foreground">Courses</p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardContent className="p-6 text-center">
                <MessageSquare className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                <h3 className="text-2xl font-bold">{profileData.publications}</h3>
                <p className="text-muted-foreground">Publications</p>
              </CardContent>
            </Card>
          </div>

          {/* Specialization */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-teal-500" />
                Specialization
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {profileData.specialization.map((spec, index) => (
                  <Badge key={index} variant="secondary" className="bg-teal-500/20 text-teal-500">
                    {spec}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Current Courses */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-green-500" />
                Current Courses
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {profileData.courses.map((course, index) => (
                <div key={index} className="p-4 bg-secondary/20 rounded-lg">
                  <h4 className="font-semibold text-lg">{course}</h4>
                  <p className="text-sm text-muted-foreground">Active this semester</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;
