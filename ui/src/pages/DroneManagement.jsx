import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DroneForm from '../components/drones/DroneForm';
import DroneList from '../components/drones/DroneList';

const DroneManagement = () => {
  const [drones, setDrones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentDrone, setCurrentDrone] = useState(null);

  useEffect(() => {
    fetchDrones();
  }, []);

  const fetchDrones = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/v1/drone');
      setDrones(response.data.data);
      setLoading(false);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch drones');
      setLoading(false);
    }
  };

  const handleAddClick = () => {
    setCurrentDrone(null);
    setIsFormOpen(true);
  };

  const handleEditClick = (drone) => {
    setCurrentDrone(drone);
    setIsFormOpen(true);
  };

  const handleDeleteClick = async (id) => {
    if (window.confirm('Are you sure you want to delete this drone?')) {
      try {
        await axios.delete(`/api/v1/drone/${id}`);
        fetchDrones();
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to delete drone');
      }
    }
  };

  const handleDroneSubmit = async (droneData) => {
    try {
      if (currentDrone) {
        await axios.put(`/api/v1/drone/${currentDrone._id}`, droneData);
      } else {
        await axios.post('/api/v1/drone', droneData);
      }
      setIsFormOpen(false);
      fetchDrones();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save drone');
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await axios.patch(`/api/v1/drone/${id}/status`, { status });
      fetchDrones();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update drone status');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Drone Management</h1>
        <button
          onClick={handleAddClick}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add New Drone
        </button>
      </div>

      {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>}

      {loading ? (
        <div className="text-center">Loading drones...</div>
      ) : (
        <DroneList
          drones={drones}
          onEdit={handleEditClick}
          onDelete={handleDeleteClick}
          onStatusChange={handleStatusChange}
        />
      )}

      {isFormOpen && (
        <DroneForm
          drone={currentDrone}
          onSubmit={handleDroneSubmit}
          onCancel={() => setIsFormOpen(false)}
        />
      )}
    </div>
  );
};

export default DroneManagement;