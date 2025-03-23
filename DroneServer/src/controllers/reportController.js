import {
    createReport,
    getAllReports,
    getReportById,
    updateReport,
    deleteReport
  } from '../service/reportService.js';
  import {catchError} from '../middlewares/chatchError.js';
  
  // Create new report
  export const createReportController = catchError(async (req, res, next) => {
    const report = await createReport(req.body, req.user._id);
    
    res.status(201).json({
      success: true,
      report
    });
  });
  
  // Get all reports
  export const getAllReportsController = catchError(async (req, res, next) => {
    const { mission, status } = req.query;
    
    const filters = {};
    if (mission) filters.mission = mission;
    if (status) filters.status = status;
    
    const reports = await getAllReports(filters);
    
    res.status(200).json({
      success: true,
      count: reports.length,
      reports
    });
  });
  
  // Get report by ID
  export const getReportByIdController = catchError(async (req, res, next) => {
    const report = await getReportById(req.params.id);
    
    res.status(200).json({
      success: true,
      report
    });
  });
  
  // Update report
  export const updateReportController = catchError(async (req, res, next) => {
    const report = await updateReport(req.params.id, req.body);
    
    res.status(200).json({
      success: true,
      report
    });
  });
  
  // Delete report
  export const deleteReportController = catchError(async (req, res, next) => {
    await deleteReport(req.params.id);
    
    res.status(200).json({
      success: true,
      message: 'Report deleted successfully'
    });
  });