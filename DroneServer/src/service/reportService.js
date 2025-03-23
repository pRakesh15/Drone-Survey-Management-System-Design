import {Report} from '../models/reportModel.js';
import {Mission} from '../models/missionModel.js';
import ErrorHendler from '../utils/errorHendler.js';

// Create report
export const createReport = async (reportData, userId) => {
  const { mission: missionId } = reportData;
  
  // Check if mission exists and is completed
  const mission = await Mission.findById(missionId);
  
  if (!mission) {
    throw new ErrorHendler('Mission not found', 404);
  }
  
  if (mission.status !== 'completed') {
    throw new ErrorHendler('Cannot create report for incomplete mission', 400);
  }
  
  // Create the report
  const report = await Report.create({
    ...reportData,
    createdBy: userId,
    flightStatistics: mission.statistics || {}
  });
  
  return await Report.findById(report._id)
    .populate('mission')
    .populate('createdBy', '-password');
};

// Get all reports
export const getAllReports = async (filters = {}) => {
  return await Report.find(filters)
    .populate({
      path: 'mission',
      populate: [
        { path: 'organization' },
        { path: 'facility' },
        { path: 'drone' }
      ]
    })
    .populate('createdBy', '-password');
};

// Get report by ID
export const getReportById = async (reportId) => {
  const report = await Report.findById(reportId)
    .populate({
      path: 'mission',
      populate: [
        { path: 'organization' },
        { path: 'facility' },
        { path: 'drone' }
      ]
    })
    .populate('createdBy', '-password');
  
  if (!report) {
    throw new ErrorHendler('Report not found', 404);
  }
  
  return report;
};

// Update report
export const updateReport = async (reportId, reportData) => {
  let report = await Report.findById(reportId);
  
  if (!report) {
    throw new ErrorHendler('Report not found', 404);
  }
  
  report = await Report.findByIdAndUpdate(reportId, reportData, {
    new: true,
    runValidators: true
  })
    .populate({
      path: 'mission',
      populate: [
        { path: 'organization' },
        { path: 'facility' },
        { path: 'drone' }
      ]
    })
    .populate('createdBy', '-password');
  
  return report;
};

// Delete report
export const deleteReport = async (reportId) => {
  const report = await Report.findById(reportId);
  
  if (!report) {
    throw new ErrorHendler('Report not found', 404);
  }
  
  await report.remove();
  return true;
};