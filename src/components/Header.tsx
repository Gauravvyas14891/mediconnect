
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, User, LogOut } from 'lucide-react';

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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/e1436559-7a6d-412c-a6cb-801545b89077.png" 
              alt="Medicaps University Logo" 
              className="w-8 h-8 object-contain"
            />
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary-500 to-teal-500 bg-clip-text text-transparent">
              MediConnect
            </h1>
          </div>

          {/* Desktop Navigation */}
          {isAuthenticated && (
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onViewChange(item.id)}
                  className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                    currentView === item.id
                      ? 'bg-primary-500/20 text-primary-500'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={onLogout}
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </nav>
          )}

          {/* Mobile Menu Button */}
          {isAuthenticated && (
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          )}
        </div>

        {/* Mobile Navigation */}
        {isAuthenticated && isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border/40">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onViewChange(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                    currentView === item.id
                      ? 'bg-primary-500/20 text-primary-500'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
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
                className="px-3 py-2 rounded-lg text-left text-muted-foreground hover:text-foreground hover:bg-accent flex items-center"
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
