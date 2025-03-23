import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [stats, setStats] = useState({
    drones: 0,
    facilities: 0,
    activeMissions: 0,
    completedMissions: 0,
    reports: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [drones, facilities, missions, reports] = await Promise.all([
          axios.get('/api/v1/drone'),
          axios.get('/api/v1/facility'),
          axios.get('/api/v1/mission'),
          axios.get('/api/v1/report')
        ]);

        const activeMissions = missions.data.data.filter(
          mission => mission.status === 'in-progress' || mission.status === 'scheduled'
        ).length;
        
        const completedMissions = missions.data.data.filter(
          mission => mission.status === 'completed'
        ).length;

        setStats({
          drones: drones.data.data.length,
          facilities: facilities.data.data.length,
          activeMissions,
          completedMissions,
          reports: reports.data.data.length
        });

        setLoading(false);
      } catch (err) {
        setError('Failed to fetch dashboard data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading dashboard...</div>;
  if (error) return <div className="text-center mt-10 text-red-600">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700">Drone Fleet</h2>
          <p className="text-3xl font-bold mt-2">{stats.drones}</p>
          <p className="text-gray-500 mt-1">Total drones</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700">Facilities</h2>
          <p className="text-3xl font-bold mt-2">{stats.facilities}</p>
          <p className="text-gray-500 mt-1">Total facilities</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700">Active Missions</h2>
          <p className="text-3xl font-bold mt-2">{stats.activeMissions}</p>
          <p className="text-gray-500 mt-1">In progress or scheduled</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700">Completed Missions</h2>
          <p className="text-3xl font-bold mt-2">{stats.completedMissions}</p>
          <p className="text-gray-500 mt-1">Successfully completed</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700">Reports</h2>
          <p className="text-3xl font-bold mt-2">{stats.reports}</p>
          <p className="text-gray-500 mt-1">Total generated reports</p>
        </div>
      </div>
      
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <a href="/missions/new" className="bg-blue-600 text-white p-3 rounded text-center hover:bg-blue-700">
            Create New Mission
          </a>
          <a href="/drones" className="bg-green-600 text-white p-3 rounded text-center hover:bg-green-700">
            Manage Drones
          </a>
          <a href="/mission-monitoring" className="bg-purple-600 text-white p-3 rounded text-center hover:bg-purple-700">
            Monitor Active Missions
          </a>
          <a href="/reports" className="bg-yellow-600 text-white p-3 rounded text-center hover:bg-yellow-700">
            View Reports
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;