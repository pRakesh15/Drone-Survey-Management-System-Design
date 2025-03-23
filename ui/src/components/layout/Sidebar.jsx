import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ userRole }) => {
  const isAdmin = userRole === 'admin';
  const isManager = userRole === 'admin' || userRole === 'manager';

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <div className="mb-8">
        <h1 className="text-xl font-bold">Navigation</h1>
      </div>
      
      <nav>
        <ul className="space-y-2">
          <li>
            <NavLink 
              to="/dashboard" 
              className={({ isActive }) => 
                `block p-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
              }
            >
              Dashboard
            </NavLink>
          </li>
          
          <li>
            <NavLink 
              to="/drones" 
              className={({ isActive }) => 
                `block p-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
              }
            >
              Drone Management
            </NavLink>
          </li>
          
          <li>
            <NavLink 
              to="/facilities" 
              className={({ isActive }) => 
                `block p-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
              }
            >
              Facilities
            </NavLink>
          </li>
          
          <li>
            <NavLink 
              to="/missions" 
              className={({ isActive }) => 
                `block p-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
              }
            >
              Mission Planning
            </NavLink>
          </li>
          
          <li>
            <NavLink 
              to="/mission-monitoring" 
              className={({ isActive }) => 
                `block p-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
              }
            >
              Mission Monitoring
            </NavLink>
          </li>
          
          <li>
            <NavLink 
              to="/reports" 
              className={({ isActive }) => 
                `block p-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
              }
            >
              Reports
            </NavLink>
          </li>
          
          {isManager && (
            <li>
              <NavLink 
                to="/organizations" 
                className={({ isActive }) => 
                  `block p-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
                }
              >
                Organizations
              </NavLink>
            </li>
          )}
          
          {isAdmin && (
            <li>
              <NavLink 
                to="/users" 
                className={({ isActive }) => 
                  `block p-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
                }
              >
                User Management
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;