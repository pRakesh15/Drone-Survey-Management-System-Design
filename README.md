# Drone Survey Management System

## Overview
The Drone Survey Management System is a scalable platform designed to help large corporations plan, manage, and monitor autonomous drone surveys across multiple facilities. This system facilitates mission planning, real-time tracking, fleet management, and reporting functionalities.

## Features
### ✅ Mission Planning
- Define survey areas and flight paths
- Configure flight paths, altitudes, and waypoints
- Set data collection parameters (e.g., frequency, sensors)
- Schedule one-time or recurring missions

### ✅ Fleet Management
- Display organization-wide drone inventory
- Show real-time status of drones (available, in-mission, charging)
- Display battery levels and other vital statistics

### ✅ Mission Monitoring
- Real-time drone flight path visualization
- Mission progress tracking (% complete, estimated time remaining)
- Survey status updates (starting, in progress, completed, aborted)
- Mission control actions (pause, resume, abort)

### ✅ Survey Reporting
- Comprehensive survey summaries
- Individual flight statistics (duration, distance, coverage)
- Organization-wide survey statistics (total surveys conducted, areas covered)

## Technology Stack
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Frontend:** React.js (Not implemented yet)
- **Authentication:** JWT-based authentication
- **Real-time Communication:** Socket.io
- **Deployment:** Docker (Planned)
- **Mapping:** Mapbox / Leaflet (Planned)

## API Endpoints
### 🔐 Authentication
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/api/v1/user/register` | Register a new user |
| POST | `/api/v1/user/login` | Login user and get token |
| GET  | `/api/v1/user/me` | Get authenticated user profile |
| PUT  | `/api/v1/user/me/update` | Update user profile |
| GET  | `/api/v1/user/logout` | Logout user |
| GET  | `/api/v1/admin/users` | Get all users (Admin only) |
| GET  | `/api/v1/admin/user/:id` | Get user details by ID (Admin only) |
| PUT  | `/api/v1/admin/user/:id` | Update user role (Admin only) |
| DELETE | `/api/v1/admin/user/:id` | Delete user (Admin only) |

### 🚀 Drone Management
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/api/v1/drone` | Get all drones |
| GET | `/api/v1/drone/:id` | Get drone details by ID |
| POST | `/api/v1/drone` | Create a new drone (Admin/Manager) |
| PUT | `/api/v1/drone/:id` | Update drone details (Admin/Manager) |
| DELETE | `/api/v1/drone/:id` | Delete drone (Admin/Manager) |
| PATCH | `/api/v1/drone/:id/status` | Update drone status |

### 🎯 Mission Management
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/api/v1/mission` | Get all missions |
| GET | `/api/v1/mission/:id` | Get mission details by ID |
| POST | `/api/v1/mission` | Create a new mission |
| PUT | `/api/v1/mission/:id` | Update mission details |
| DELETE | `/api/v1/mission/:id` | Delete mission (Admin/Manager) |
| PATCH | `/api/v1/mission/:id/status` | Update mission status |

### 🏢 Facility Management
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/api/v1/facility` | Get all facilities |
| GET | `/api/v1/facility/:id` | Get facility details by ID |
| POST | `/api/v1/facility` | Create a new facility (Admin/Manager) |
| PUT | `/api/v1/facility/:id` | Update facility details (Admin/Manager) |
| DELETE | `/api/v1/facility/:id` | Delete facility (Admin/Manager) |

### 📊 Reporting
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/api/v1/report` | Get all reports |
| GET | `/api/v1/report/:id` | Get report details by ID |
| POST | `/api/v1/report` | Create a new report |
| PUT | `/api/v1/report/:id` | Update report details |
| DELETE | `/api/v1/report/:id` | Delete report (Admin/Manager) |

## Setup and Installation
### Prerequisites
- Node.js & npm installed
- MongoDB running locally or on a cloud service
- Clone the repository:  
  ```bash
  git clone https://github.com/your-repo/drone-survey.git
  cd drone-survey
  ```
- Install dependencies:
  ```bash
  npm install
  ```
- Set up environment variables:
  ```
  MONGO_URI=your-mongo-uri
  JWT_SECRET=your-secret-key
  PORT=5000
  ```
- Start the server:
  ```bash
  npm run dev
  ```

## AI-Assisted Development
- **Code Generation:** Used Copilot for boilerplate code
- **Bug Fixing:** Debugged authentication issues using ChatGPT
- **Database Optimization:** Schema design suggestions from Claude

## Next Steps
- Implement frontend UI
- Add WebSocket support for real-time monitoring
- Improve security with OAuth2

## Author
Rakesh Pradhan - Full-stack developer specializing in scalable web applications.

---


