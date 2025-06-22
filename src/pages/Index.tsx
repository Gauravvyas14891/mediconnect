
import { useState } from 'react';
import LandingPage from '@/components/LandingPage';
import AuthForm from '@/components/AuthForm';
import Header from '@/components/Header';
import StudentDashboard from '@/components/StudentDashboard';
import FacultyDashboard from '@/components/FacultyDashboard';
import AdminDashboard from '@/components/AdminDashboard';
import Leaderboard from '@/components/Leaderboard';
import Announcements from '@/components/Announcements';
import ContactSupport from '@/components/ContactSupport';
import AdminPanel from '@/components/AdminPanel';

type UserRole = 'student' | 'faculty' | 'admin';

const Index = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'auth' | 'app'>('landing');
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [activeView, setActiveView] = useState('dashboard');

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    setCurrentView('auth');
  };

  const handleLogin = (credentials: any) => {
    setIsAuthenticated(true);
    setUserRole(credentials.role);
    setCurrentView('app');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    setSelectedRole(null);
    setCurrentView('landing');
    setActiveView('dashboard');
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
    setSelectedRole(null);
  };

  const renderMainContent = () => {
    switch (activeView) {
      case 'dashboard':
        if (userRole === 'student') return <StudentDashboard />;
        if (userRole === 'faculty') return <FacultyDashboard />;
        if (userRole === 'admin') return <AdminDashboard />;
        return <StudentDashboard />;
      case 'leaderboard':
        return <Leaderboard />;
      case 'announcements':
        return <Announcements />;
      case 'contact':
        return <ContactSupport />;
      case 'admin':
        return <AdminPanel />;
      default:
        if (userRole === 'student') return <StudentDashboard />;
        if (userRole === 'faculty') return <FacultyDashboard />;
        if (userRole === 'admin') return <AdminDashboard />;
        return <StudentDashboard />;
    }
  };

  if (currentView === 'landing') {
    return <LandingPage onRoleSelect={handleRoleSelect} />;
  }

  if (currentView === 'auth' && selectedRole) {
    return (
      <AuthForm
        role={selectedRole}
        onBack={handleBackToLanding}
        onLogin={handleLogin}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header
        currentView={activeView}
        onViewChange={setActiveView}
        isAuthenticated={isAuthenticated}
        userRole={userRole}
        onLogout={handleLogout}
      />
      <main className="pt-16">
        {renderMainContent()}
      </main>
    </div>
  );
};

export default Index;
