# Drone Survey Management System

## Overview
The **Drone Survey Management System** is designed to enable large corporations to plan, manage, and monitor autonomous drone surveys across their global facilities. It helps in facility inspections, security monitoring, and site mapping operations.

## Features
- **Mission Planning System**: Define survey areas, configure flight paths, and schedule missions.
- **Fleet Management Dashboard**: Display drones' real-time status and inventory.
- **Mission Monitoring Interface**: Track drones live on a map and control missions.
- **Survey Reporting Portal**: Generate and review detailed survey reports.

## Folder Structure
```
drone-survey-management-system/
├── config/
│   └── database.js
├── controllers/
│   ├── droneController.js
│   ├── locationController.js
│   ├── missionController.js
│   ├── organizationController.js
│   ├── surveyReportController.js
│   └── userController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── droneModel.js
│   ├── locationModel.js
│   ├── missionModel.js
│   ├── organizationModel.js
│   ├── surveyReportModel.js
│   └── userModel.js
├── routes/
│   ├── droneRoutes.js
│   ├── locationRoutes.js
│   ├── missionRoutes.js
│   ├── organizationRoutes.js
│   ├── surveyReportRoutes.js
│   └── userRoutes.js
├── services/
│   ├── droneService.js
│   ├── locationService.js
│   ├── missionService.js
│   ├── organizationService.js
│   ├── surveyReportService.js
│   └── userService.js
├── utils/
│   ├── missionPatterns.js
│   └── validation.js
├── app.js
├── package.json
└── .env
```

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/pRakesh15/Drone-Survey-Management-System-Design.git
   ```
2. Navigate to the project directory:
   ```sh
   cd drone-survey-management-system
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Configure the `.env` file with necessary environment variables.
5. Start the server:
   ```sh
   npm start
   ```

## API Endpoints
### User Routes (`/api/v1/user`)
- `POST /register` - Register a new user.
- `POST /login` - User login.
- `GET /me` - Get user profile.
- `PUT /me/update` - Update user profile.
- `GET /logout` - Logout user.
- **Admin Routes:**
  - `GET /admin/users` - Get all users.
  - `GET /admin/user/:id` - Get user by ID.
  - `PUT /admin/user/:id` - Update user role.
  - `DELETE /admin/user/:id` - Delete a user.

### Organization Routes (`/api/v1/organization`)
- `GET /` - Get all organizations.
- `GET /:id` - Get organization by ID.
- `POST /` - Create an organization (**Admin only**).
- `PUT /:id` - Update organization (**Admin only**).
- `DELETE /:id` - Delete organization (**Admin only**).

### Drone Routes (`/api/v1/drone`)
- `GET /` - Get all drones.
- `GET /:id` - Get drone by ID.
- `POST /` - Add a new drone (**Admin/Manager only**).
- `PUT /:id` - Update drone (**Admin/Manager only**).
- `DELETE /:id` - Delete drone (**Admin/Manager only**).
- `PATCH /:id/status` - Update drone status.

### Mission Routes (`/api/v1/mission`)
- `GET /` - Get all missions.
- `GET /:id` - Get mission by ID.
- `POST /` - Create a mission (**Operator/Manager/Admin**).
- `PUT /:id` - Update mission (**Operator/Manager/Admin**).
- `DELETE /:id` - Delete mission (**Admin/Manager only**).
- `PATCH /:id/status` - Update mission status.

### Facility Routes (`/api/v1/facility`)
- `GET /` - Get all facilities.
- `GET /:id` - Get facility by ID.
- `POST /` - Create a facility (**Admin/Manager only**).
- `PUT /:id` - Update facility (**Admin/Manager only**).
- `DELETE /:id` - Delete facility (**Admin/Manager only**).

### Survey Report Routes (`/api/v1/report`)
- `GET /` - Get all reports (**Protected**).
- `GET /:id` - Get report by ID (**Protected**).
- `POST /` - Create a report (**Operator/Manager/Admin**).
- `PUT /:id` - Update report (**Operator/Manager/Admin**).
- `DELETE /:id` - Delete report (**Admin/Manager only**).

## Tech Stack
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT, Middleware
- **Mapping & Drone Tracking:** Mapbox, WebSockets
- **AI Assistance:** ChatGPT, Claude Code, Replit AI, Windsurf

## AI-Assisted Development
- **Code Optimization:** Used AI to refactor and optimize service logic.
- **API Documentation:** Generated structured API documentation using AI.
- **Error Handling Improvements:** AI suggestions improved API error handling.
- **System Design:** AI-generated flow diagrams and architecture insights.

## Testing
- **Unit Testing:** Used Jest for unit tests.
- **Integration Testing:** API tests with Postman.
- **Load Testing:** Simulated concurrent requests using Artillery.

## Future Enhancements
- **AI-based Flight Optimization:** Auto-adjust flight paths for better efficiency.
- **Predictive Maintenance:** AI-driven drone maintenance predictions.
- **Live Video Integration:** Adding real-time video feeds for live mission tracking.

## Contributors
- **Rakesh Pradhan** - [GitHub](https://github.com/pRakesh15)

.

