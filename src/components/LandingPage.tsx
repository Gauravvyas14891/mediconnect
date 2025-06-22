
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { User, GraduationCap, Shield } from 'lucide-react';

interface LandingPageProps {
  onRoleSelect: (role: 'student' | 'faculty' | 'admin') => void;
}

const LandingPage = ({ onRoleSelect }: LandingPageProps) => {
  const roles = [
    {
      id: 'student' as const,
      title: 'Student',
      description: 'Access your profile, view leaderboard, and connect with counselors',
      icon: GraduationCap,
      gradient: 'from-primary-500 to-blue-600'
    },
    {
      id: 'faculty' as const,
      title: 'Faculty',
      description: 'Manage student data and view academic analytics',
      icon: User,
      gradient: 'from-teal-500 to-green-600'
    },
    {
      id: 'admin' as const,
      title: 'Admin',
      description: 'Full system access, announcements, and user management',
      icon: Shield,
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
      <div className="max-w-4xl w-full animate-fade-in">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">M</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            MediConnect
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Your unified ecosystem for academic excellence at Medicaps University
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {roles.map((role) => {
            const IconComponent = role.icon;
            return (
              <Card 
                key={role.id} 
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group card-hover"
                onClick={() => onRoleSelect(role.id)}
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${role.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {role.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {role.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-white/60 text-sm">
            Select your role to continue to MediConnect
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
