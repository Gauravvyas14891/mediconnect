
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AuthFormProps {
  role: 'student' | 'faculty' | 'admin';
  onBack: () => void;
  onLogin: (credentials: any) => void;
}

const AuthForm = ({ role, onBack, onLogin }: AuthFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rollNumber: '',
    facultyId: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onLogin({ ...formData, role });
      toast({
        title: "Login Successful",
        description: `Welcome to MediConnect as a ${role}!`,
      });
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getRoleColor = () => {
    switch (role) {
      case 'student': return 'from-primary-500 to-blue-600';
      case 'faculty': return 'from-teal-500 to-green-600';
      case 'admin': return 'from-purple-500 to-pink-600';
    }
  };

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
      <div className="max-w-md w-full animate-scale-in">
        <Button
          onClick={onBack}
          variant="ghost"
          className="mb-6 text-white hover:bg-white/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Role Selection
        </Button>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader className="text-center">
            <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${getRoleColor()} flex items-center justify-center`}>
              <span className="text-white font-bold text-xl">
                {role.charAt(0).toUpperCase()}
              </span>
            </div>
            <CardTitle className="text-2xl text-white">
              {role.charAt(0).toUpperCase() + role.slice(1)} Login
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name field for faculty and admin */}
              {role !== 'student' && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    required
                  />
                </div>
              )}

              {role === 'student' ? (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Medicaps Email ID</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="student@medicaps.ac.in"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rollNumber" className="text-white">Roll Number</Label>
                    <Input
                      id="rollNumber"
                      name="rollNumber"
                      value={formData.rollNumber}
                      onChange={handleInputChange}
                      placeholder="Enter your roll number"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      required
                    />
                  </div>
                </>
              ) : (
                <div className="space-y-2">
                  <Label htmlFor="facultyId" className="text-white">
                    {role === 'faculty' ? 'Faculty ID' : 'Admin ID'}
                  </Label>
                  <Input
                    id="facultyId"
                    name="facultyId"
                    value={formData.facultyId}
                    onChange={handleInputChange}
                    placeholder={`Enter your ${role} ID`}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    required
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className={`w-full btn-gradient text-white border-0 ${isLoading ? 'opacity-50' : ''}`}
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>

            <div className="text-center">
              <button className="text-primary-300 hover:text-primary-100 text-sm underline">
                Forgot Password?
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AuthForm;
