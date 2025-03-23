import express from "express";
import { config } from "dotenv";
import userRoutes from './routes/userRoutes.js';
import organizationRoutes from './routes/organizationRoutes.js';
import droneRouts from './routes/droneRoutes.js';
import facilityRoutes from './routes/facilityRoutes.js';
import missionRouts from './routes/missionRoutes.js';
import reportRouts from './routes/reportRoutes.js';
// import cookieParser from "cookie-parser";
// import cors from 'cors'
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
config();
// app.use(cors({
//   origin:process.env.FRONTEND_URL,
//   credentials: true,
//   methods:["GET","POST","PUT","DELETE"],
// }))

// const io = new Server(server, {
//   cors: {
//     origin: '*',
//     methods: ['GET', 'POST']
//   }
// });

app.get("/",(req,res)=>
{
  res.send("Jay ShreeRam")
})

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/organization", organizationRoutes);
app.use("/api/v1/drone", droneRouts);
app.use("/api/v1/facility",facilityRoutes);
app.use("/api/v1/mission",missionRouts);
app.use("/api/v1/report",reportRouts);



// Socket.io setup
// io.on('connection', (socket) => {
//   console.log(`User connected: ${socket.id}`);
  
//   socket.on('join-mission', (missionId) => {
//     socket.join(`mission-${missionId}`);
//     console.log(`User joined mission: ${missionId}`);
//   });
  
//   socket.on('disconnect', () => {
//     console.log(`User disconnected: ${socket.id}`);
//   });
// });

// Make io available to our app
// app.set('io', io);

// Error Middleware
// app.use(errorMiddleware);

export default app;

// app.use(errorMiddelWare);
