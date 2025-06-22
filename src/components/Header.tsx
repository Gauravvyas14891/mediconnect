
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, User, LogOut, Bell } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onViewChange: (view: string) => void;
  isAuthenticated: boolean;
  userRole: string | null;
  onLogout: () => void;
}

const Header = ({ currentView, onViewChange, isAuthenticated, userRole, onLogout }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = isAuthenticated ? [
    { id: 'dashboard', label: 'Dashboard', roles: ['student', 'faculty', 'admin'] },
    { id: 'leaderboard', label: 'Leaderboard', roles: ['student', 'faculty', 'admin'] },
    { id: 'announcements', label: 'Announcements', roles: ['student', 'faculty', 'admin'] },
    { id: 'contact', label: 'Contact Support', roles: ['student'] },
    { id: 'admin', label: 'Admin Panel', roles: ['admin'] },
  ].filter(item => !userRole || item.roles.includes(userRole)) : [];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 glass-effect">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img 
                src="/lovable-uploads/e1436559-7a6d-412c-a6cb-801545b89077.png" 
                alt="Medicaps University Logo" 
                className="w-10 h-10 object-contain relative z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-lg blur-sm"></div>
            </div>
            <h1 className="text-2xl font-bold gradient-text">
              MediConnect
            </h1>
          </div>

          {/* Desktop Navigation */}
          {isAuthenticated && (
            <nav className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onViewChange(item.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                    currentView === item.id
                      ? 'bg-gradient-to-r from-primary-500/20 to-teal-500/20 text-white shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Notification Bell */}
              <Button
                variant="ghost"
                size="sm"
                className="text-white/70 hover:text-white hover:bg-white/10 relative"
              >
                <Bell className="w-5 h-5" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              </Button>
              
              <Button
                onClick={onLogout}
                variant="ghost"
                size="sm"
                className="text-white/70 hover:text-white hover:bg-white/10"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </nav>
          )}

          {/* Mobile Menu Button */}
          {isAuthenticated && (
            <button
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          )}
        </div>

        {/* Mobile Navigation */}
        {isAuthenticated && isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onViewChange(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                    currentView === item.id
                      ? 'bg-gradient-to-r from-primary-500/20 to-teal-500/20 text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  onLogout();
                  setIsMobileMenuOpen(false);
                }}
                className="px-4 py-3 rounded-lg text-left text-white/70 hover:text-white hover:bg-white/10 flex items-center"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
