
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { User, Award, Code, Briefcase, Plus, Edit, Save, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const StudentDashboard = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    rollNumber: '2021BTCS001',
    branch: 'Computer Science Engineering',
    year: '3rd Year',
    cgpa: '8.5',
    skills: ['React', 'Node.js', 'Python', 'Machine Learning'],
    projects: [
      {
        title: 'E-commerce Platform',
        techStack: 'React, Node.js, MongoDB',
        description: 'Full-stack e-commerce application with payment integration'
      }
    ],
    internships: [
      {
        company: 'Tech Corp',
        duration: 'Summer 2023',
        description: 'Frontend development intern working on React applications'
      }
    ],
    handles: {
      github: 'johndoe',
      linkedin: 'john-doe-dev',
      leetcode: 'johndoe123'
    }
  });

  const [newSkill, setNewSkill] = useState('');
  const [editData, setEditData] = useState(profileData);

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated!",
    });
  };

  const handleCancel = () => {
    setEditData(profileData);
    setIsEditing(false);
  };

  const addSkill = () => {
    if (newSkill.trim() && !editData.skills.includes(newSkill.trim())) {
      setEditData({
        ...editData,
        skills: [...editData.skills, newSkill.trim()]
      });
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setEditData({
      ...editData,
      skills: editData.skills.filter(skill => skill !== skillToRemove)
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-500 to-teal-500 bg-clip-text text-transparent">
            Student Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">Manage your academic profile</p>
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
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-teal-500 rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-white" />
            </div>
            <CardTitle className="text-xl">{profileData.name}</CardTitle>
            <p className="text-muted-foreground">{profileData.rollNumber}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label className="text-sm font-medium">Branch</Label>
              <p className="text-sm text-muted-foreground">{profileData.branch}</p>
            </div>
            <div>
              <Label className="text-sm font-medium">Year</Label>
              <p className="text-sm text-muted-foreground">{profileData.year}</p>
            </div>
            <div>
              <Label className="text-sm font-medium">CGPA</Label>
              {isEditing ? (
                <Input
                  value={editData.cgpa}
                  onChange={(e) => setEditData({...editData, cgpa: e.target.value})}
                  className="mt-1"
                />
              ) : (
                <p className="text-lg font-semibold text-primary-500">{profileData.cgpa}</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Skills */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="w-5 h-5 mr-2 text-primary-500" />
                Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {(isEditing ? editData.skills : profileData.skills).map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-primary-500/20 text-primary-500">
                    {skill}
                    {isEditing && (
                      <button
                        onClick={() => removeSkill(skill)}
                        className="ml-2 hover:text-red-500"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    )}
                  </Badge>
                ))}
              </div>
              {isEditing && (
                <div className="flex gap-2">
                  <Input
                    placeholder="Add new skill"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                  />
                  <Button onClick={addSkill} size="sm">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Projects */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="w-5 h-5 mr-2 text-teal-500" />
                Projects
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {profileData.projects.map((project, index) => (
                <div key={index} className="p-4 bg-secondary/20 rounded-lg">
                  <h4 className="font-semibold text-lg">{project.title}</h4>
                  <p className="text-sm text-primary-500 mb-2">{project.techStack}</p>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Internships */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-teal-500" />
                Internships
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {profileData.internships.map((internship, index) => (
                <div key={index} className="p-4 bg-secondary/20 rounded-lg">
                  <h4 className="font-semibold text-lg">{internship.company}</h4>
                  <p className="text-sm text-primary-500 mb-2">{internship.duration}</p>
                  <p className="text-muted-foreground">{internship.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
