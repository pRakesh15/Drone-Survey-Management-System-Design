import React from 'react';

const DroneList = ({ drones, onEdit, onDelete, onStatusChange }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'in-mission':
        return 'bg-blue-100 text-blue-800';
      case 'maintenance':
        return 'bg-yellow-100 text-yellow-800';
      case 'inactive':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Model</th>
            <th className="py-3 px-4 text-left">Serial Number</th>
            <th className="py-3 px-4 text-left">Facility</th>
            <th className="py-3 px-4 text-left">Status</th>
            <th className="py-3 px-4 text-left">Battery</th>
            <th className="py-3 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {drones.length === 0 ? (
            <tr>
              <td colSpan="7" className="py-4 px-4 text-center text-gray-500">
                No drones available
              </td>
            </tr>
          ) : (
            drones.map((drone) => (
              <tr key={drone._id} className="hover:bg-gray-50">
                <td className="py-3 px-4">{drone.name}</td>
                <td className="py-3 px-4">{drone.model}</td>
                <td className="py-3 px-4">{drone.serialNumber}</td>
                <td className="py-3 px-4">
                  {drone.facility ? drone.facility.name : 'Not assigned'}
                </td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusClass(drone.status)}`}>
                    {drone.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${
                        drone.batteryLevel > 60 ? 'bg-green-600' : 
                        drone.batteryLevel > 30 ? 'bg-yellow-400' : 'bg-red-600'
                      }`}
                      style={{ width: `${drone.batteryLevel}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500">{drone.batteryLevel}%</span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => onEdit(drone)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(drone._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                    <select
                      value={drone.status}
                      onChange={(e) => onStatusChange(drone._id, e.target.value)}
                      className="text-sm border rounded p-1"
                    >
                      <option value="available">Available</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DroneList;