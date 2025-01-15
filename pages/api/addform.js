
// import mongoose from 'mongoose';
// import Form from '../../models/form';  // Import your Form model



// // MongoDB connection handler
// const connectDb = async () => {
//   if (mongoose.connections[0].readyState) {
//     return;
//   }
//   await mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// };

// // POST handler for form submission
// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       // Parse the incoming form-data with multer middleware
     

//       // Ensure the database is connected
//       await connectDb();

//       // Handle the form data (including photos)
//       const {
//         photos,
//         fullName,
//         email,
//         phoneNo,
//         age,
//         sex,
//         DOB,
//         Addhar_Voter,
//         houseNo,
//         landmark,
//         village,
//         state,
//         nation,
//         pincode,
//         purpose,
//         patiantName,
//         hospitalName,
//         trakingDr,
//         reason,
//         studentName,
//         studentDOB,
//         studentGender,
//         studentCategory,
//         studentPhoto,
//         jobFullName,
//         jobPosition,
//         jobDepartment,
//         jobLocation,
//         jobSalary,
//         employeeName,
//         employeeId,
//         employeeDepartment,
//         employeeDesignation,
//         employeeTransfer,
//         schemeName,
//         schemePApplication,
//         schemeApplyDate,
//         schemeMaritalStatus,
//         schemeCategory,
//         schemeAadhar,
//         businessName,
//         businessType,
//         businessSector,
//         businessRegNo,
//         businessDOE,
//         businessGST,
//         businessAddress,
//         utilityServiceInstallation,
//         utilityProblem,
//         policeApplicationNo,
//         policeApplicationDate,
//         policeApplicationPlace,
//         policeIncidentDetails,
//         policeInvolvedName,
//         policeDeclaration,
//         policePhoto,
//         projectName,
//         projectLocation,
//         projectProblem,
//         message,
//       } = req.body;

//       // Get the file paths of uploaded photos
      
//       // Create a new form entry in MongoDB
//       const form = new Form({
        // photos,
        // fullName,
        // email,
        // phoneNo,
        // age,
        // sex,
        // DOB,
        // Addhar_Voter,
        // houseNo,
        // landmark,
        // village,
        // state,
        // nation,
        // pincode,
        // purpose,
        // patiantName,
        // hospitalName,
        // trakingDr,
        // reason,
        // studentName,
        // studentDOB,
        // studentGender,
        // studentCategory,
        // studentPhoto,
        // jobFullName,
        // jobPosition,
        // jobDepartment,
        // jobLocation,
        // jobSalary,
        // employeeName,
        // employeeId,
        // employeeDepartment,
        // employeeDesignation,
        // employeeTransfer,
        // schemeName,
        // schemePApplication,
        // schemeApplyDate,
        // schemeMaritalStatus,
        // schemeCategory,
        // schemeAadhar,
        // businessName,
        // businessType,
        // businessSector,
        // businessRegNo,
        // businessDOE,
        // businessGST,
        // businessAddress,
        // utilityServiceInstallation,
        // utilityProblem,
        // policeApplicationNo,
        // policeApplicationDate,
        // policeApplicationPlace,
        // policeIncidentDetails,
        // policeInvolvedName,
        // policeDeclaration,
        // policePhoto,
        // projectName,
        // projectLocation,
        // projectProblem,
        // message,
//       });

//       // Save the form data to the database
//       await form.save();

//       // Send success response
//       res.status(200).json({ message: 'Form submitted successfully!' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Error submitting form' });
//     }
//   } else {
//     // If the request is not POST, send method not allowed
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
// }




import Visit from '@/models/form'; // Make sure you have the Visit model
import connectDb from '@/middleware/mongoose'; // Middleware to connect to MongoDB

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const visitData = req.body;

      
      // Create a new visit document
      const newVisit = new Visit({
        
        photos:visitData.photos,
        fullName:visitData.fullName,
        email:visitData.email,
        phoneNo:visitData.phoneNo,
        age:visitData.age,
        sex:visitData.sex,
        DOB:visitData.DOB,
        Addhar_Voter:visitData.Addhar_Voter,
        houseNo:visitData.houseNo,
        landmark:visitData.landmark,
        village:visitData.village,
        state:visitData.state,
        nation:visitData.nation,
        pincode:visitData.pincode,
        purpose:visitData.purpose,
        patiantName:visitData.patiantName,
        hospitalName:visitData.hospitalName,
        trakingDr:visitData.trakingDr,
        reason:visitData.reason,
        studentName:visitData.studentName,
        studentDOB:visitData.studentDOB,
        studentGender:visitData.studentGender,
        studentCategory:visitData.studentCategory,
        studentPhoto:visitData.studentPhoto,
        jobFullName:visitData.jobFullName,
        jobPosition:visitData.jobPosition,
        jobDepartment:visitData.jobDepartment,
        jobLocation:visitData.jobLocation,
        jobSalary:visitData.jobSalary,
        employeeName:visitData.employeeName,
        employeeId:visitData.employeeId,
        employeeDepartment:visitData.employeeDepartment,
        employeeDesignation:visitData.employeeDesignation,
        employeeTransfer:visitData.employeeTransfer,
        schemeName:visitData.schemeName,
        schemePApplication:visitData.schemePApplication,
        schemeApplyDate:visitData.schemeApplyDate,
        schemeMaritalStatus:visitData.schemeMaritalStatus,
        schemeCategory:visitData.schemeCategory,
        schemeAadhar:visitData.schemeAadhar,
        businessName:visitData.businessName,
        businessType:visitData.businessType,
        businessSector:visitData.businessSector,
        businessRegNo:visitData.businessRegNo,
        businessDOE:visitData.businessDOE,
        businessGST:visitData.businessGST,
        businessAddress:visitData.businessAddress,
        utilityServiceInstallation:visitData.utilityServiceInstallation,
        utilityProblem:visitData.utilityProblem,
        policeApplicationNo:visitData.policeApplicationNo,
        policeApplicationDate:visitData.policeApplicationDate,
        policeApplicationPlace:visitData.policeApplicationPlace,
        policeIncidentDetails:visitData.policeIncidentDetails,
        policeInvolvedName:visitData.policeInvolvedName,
        policeDeclaration:visitData.policeDeclaration,
        policePhoto:visitData.policePhoto,
        projectName:visitData.projectName,
        projectLocation:visitData.projectLocation,
        projectProblem:visitData.projectProblem,
        message:visitData.message,
      });

      // Save the visit document in the database
      await newVisit.save();

      return res.status(200).json({ success: true, message: 'Visit added successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Error adding visit' });
    }
  } else {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }
};

export default connectDb(handler);