
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Users, Settings, BarChart3, Shield, Database, UserCheck, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminDashboard = () => {
  const { toast } = useToast();
  const [adminData] = useState({
    name: 'John Smith',
    adminId: 'ADM001',
    role: 'System Administrator',
    department: 'IT Administration',
    totalUsers: 1250,
    totalFaculty: 45,
    totalStudents: 1200,
    systemHealth: 'Good',
    activeIssues: 3
  });

  const [systemStats] = useState([
    { title: 'Total Users', value: adminData.totalUsers, icon: Users, color: 'text-blue-500' },
    { title: 'Faculty Members', value: adminData.totalFaculty, icon: UserCheck, color: 'text-green-500' },
    { title: 'Students', value: adminData.totalStudents, icon: Users, color: 'text-teal-500' },
    { title: 'Active Issues', value: adminData.activeIssues, icon: AlertTriangle, color: 'text-red-500' }
  ]);

  const handleSystemAction = (action: string) => {
    toast({
      title: "System Action",
      description: `${action} has been initiated successfully!`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">System administration and management</p>
        </div>
        <Badge variant="secondary" className="bg-green-500/20 text-green-500">
          System Status: {adminData.systemHealth}
        </Badge>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Profile Card */}
        <Card className="lg:col-span-1 card-hover">
          <CardHeader className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
              <Shield className="w-12 h-12 text-white" />
            </div>
            <CardTitle className="text-xl">{adminData.name}</CardTitle>
            <p className="text-muted-foreground">{adminData.adminId}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Role</label>
              <p className="text-sm text-muted-foreground">{adminData.role}</p>
            </div>
            <div>
              <label className="text-sm font-medium">Department</label>
              <p className="text-sm text-muted-foreground">{adminData.department}</p>
            </div>
          </CardContent>
        </Card>

        {/* System Statistics */}
        <div className="lg:col-span-3 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {systemStats.map((stat, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6 text-center">
                  <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Admin Actions */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="w-5 h-5 mr-2 text-purple-500" />
                System Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Button 
                  onClick={() => handleSystemAction('User Management')}
                  className="bg-blue-500 hover:bg-blue-600 text-white h-20 flex-col"
                >
                  <Users className="w-6 h-6 mb-2" />
                  Manage Users
                </Button>
                <Button 
                  onClick={() => handleSystemAction('System Backup')}
                  className="bg-green-500 hover:bg-green-600 text-white h-20 flex-col"
                >
                  <Database className="w-6 h-6 mb-2" />
                  System Backup
                </Button>
                <Button 
                  onClick={() => handleSystemAction('Generate Reports')}
                  className="bg-teal-500 hover:bg-teal-600 text-white h-20 flex-col"
                >
                  <BarChart3 className="w-6 h-6 mb-2" />
                  Generate Reports
                </Button>
                <Button 
                  onClick={() => handleSystemAction('Security Audit')}
                  className="bg-red-500 hover:bg-red-600 text-white h-20 flex-col"
                >
                  <Shield className="w-6 h-6 mb-2" />
                  Security Audit
                </Button>
                <Button 
                  onClick={() => handleSystemAction('System Settings')}
                  className="bg-purple-500 hover:bg-purple-600 text-white h-20 flex-col"
                >
                  <Settings className="w-6 h-6 mb-2" />
                  System Settings
                </Button>
                <Button 
                  onClick={() => handleSystemAction('Maintenance Mode')}
                  className="bg-orange-500 hover:bg-orange-600 text-white h-20 flex-col"
                >
                  <AlertTriangle className="w-6 h-6 mb-2" />
                  Maintenance
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Recent System Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-secondary/20 rounded-lg">
                <h4 className="font-semibold">Database Backup Completed</h4>
                <p className="text-sm text-muted-foreground">2 hours ago</p>
              </div>
              <div className="p-4 bg-secondary/20 rounded-lg">
                <h4 className="font-semibold">New Faculty Registration</h4>
                <p className="text-sm text-muted-foreground">4 hours ago</p>
              </div>
              <div className="p-4 bg-secondary/20 rounded-lg">
                <h4 className="font-semibold">System Update Applied</h4>
                <p className="text-sm text-muted-foreground">1 day ago</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
