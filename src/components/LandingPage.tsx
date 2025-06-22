
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { User, GraduationCap, Shield, Star, Sparkles, Zap } from 'lucide-react';

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
      gradient: 'from-primary-500 via-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      id: 'faculty' as const,
      title: 'Faculty',
      description: 'Manage student data and view academic analytics',
      icon: User,
      gradient: 'from-teal-500 via-green-500 to-emerald-500',
      bgGradient: 'from-teal-500/20 to-emerald-500/20'
    },
    {
      id: 'admin' as const,
      title: 'Admin',
      description: 'Full system access, announcements, and user management',
      icon: Shield,
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      bgGradient: 'from-purple-500/20 to-rose-500/20'
    }
  ];

  const features = [
    { icon: Star, text: 'Dynamic Student Profiles' },
    { icon: Zap, text: 'Real-time Leaderboard' },
    { icon: Sparkles, text: 'Instant Announcements' }
  ];

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl floating-animation"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full blur-xl floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-xl floating-animation" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-6xl w-full animate-slide-up relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <img 
                src="/lovable-uploads/e1436559-7a6d-412c-a6cb-801545b89077.png" 
                alt="Medicaps University Logo" 
                className="w-24 h-24 object-contain relative z-10 pulse-glow rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-teal-500/30 rounded-2xl blur-lg"></div>
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold gradient-text mb-6">
            MediConnect
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8 animate-slide-up animate-delay-100">
            Your unified ecosystem for academic excellence at 
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text font-semibold"> Medicaps University</span>
          </p>
          
          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-slide-up animate-delay-200">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
                  <IconComponent className="w-5 h-5 text-yellow-400" />
                  <span className="text-white/80 font-medium">{feature.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Role Selection Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {roles.map((role, index) => {
            const IconComponent = role.icon;
            return (
              <Card 
                key={role.id} 
                className={`card-hover card-glow cursor-pointer group relative overflow-hidden animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => onRoleSelect(role.id)}
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${role.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <CardContent className="p-10 text-center relative z-10">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${role.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                    {role.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-lg group-hover:text-white/90 transition-colors duration-300">
                    {role.description}
                  </p>
                  
                  {/* Hover effect indicator */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Footer */}
        <div className="text-center animate-slide-up animate-delay-300">
          <p className="text-white/70 text-lg mb-4">
            Select your role to continue to MediConnect
          </p>
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
