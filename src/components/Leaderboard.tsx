
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trophy, Medal, Award, Filter } from 'lucide-react';

const Leaderboard = () => {
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedBranch, setSelectedBranch] = useState('all');

  const students = [
    {
      rank: 1,
      name: 'Alice Johnson',
      rollNumber: '2021BTCS001',
      branch: 'CSE',
      year: '3rd',
      cgpa: 9.2,
      projects: 5,
      internships: 2,
      codingScore: 85,
      totalScore: 92.5
    },
    {
      rank: 2,
      name: 'Bob Smith',
      rollNumber: '2021BTCS002',
      branch: 'CSE',
      year: '3rd',
      cgpa: 8.8,
      projects: 4,
      internships: 2,
      codingScore: 90,
      totalScore: 89.2
    },
    {
      rank: 3,
      name: 'Carol Davis',
      rollNumber: '2021BTEC001',
      branch: 'ECE',
      year: '3rd',
      cgpa: 9.0,
      projects: 3,
      internships: 1,
      codingScore: 78,
      totalScore: 87.8
    },
  ];

  const years = ['all', '1st', '2nd', '3rd', '4th'];
  const branches = ['all', 'CSE', 'ECE', 'ME', 'MBA', 'Law'];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="w-6 h-6 flex items-center justify-center text-lg font-bold">{rank}</span>;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-500 to-teal-500 bg-clip-text text-transparent mb-2">
          Student Leaderboard
        </h1>
        <p className="text-muted-foreground">Track academic and technical performance rankings</p>
      </div>

      {/* Filters */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Filter className="w-5 h-5 mr-2" />
            Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Year</label>
              <div className="flex gap-2">
                {years.map((year) => (
                  <Button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    variant={selectedYear === year ? "default" : "outline"}
                    size="sm"
                  >
                    {year === 'all' ? 'All Years' : `${year} Year`}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Branch</label>
              <div className="flex gap-2">
                {branches.map((branch) => (
                  <Button
                    key={branch}
                    onClick={() => setSelectedBranch(branch)}
                    variant={selectedBranch === branch ? "default" : "outline"}
                    size="sm"
                  >
                    {branch === 'all' ? 'All Branches' : branch}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Leaderboard */}
      <div className="space-y-4">
        {students.map((student) => (
          <Card key={student.rank} className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-teal-500">
                    {getRankIcon(student.rank)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{student.name}</h3>
                    <p className="text-muted-foreground">{student.rollNumber}</p>
                    <div className="flex gap-2 mt-1">
                      <Badge variant="secondary">{student.branch}</Badge>
                      <Badge variant="outline">{student.year} Year</Badge>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary-500">
                    {student.totalScore}
                  </div>
                  <p className="text-sm text-muted-foreground">Total Score</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 pt-4 border-t border-border">
                <div className="text-center">
                  <div className="text-lg font-semibold text-primary-500">{student.cgpa}</div>
                  <p className="text-xs text-muted-foreground">CGPA</p>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-teal-500">{student.projects}</div>
                  <p className="text-xs text-muted-foreground">Projects</p>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-purple-500">{student.internships}</div>
                  <p className="text-xs text-muted-foreground">Internships</p>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-orange-500">{student.codingScore}</div>
                  <p className="text-xs text-muted-foreground">Coding Score</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
