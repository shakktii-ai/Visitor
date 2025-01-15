// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Form = () => {
//   // const router = useRouter();
//   // useEffect(() => {
//   //   if (!localStorage.getItem("token")) {
//   //     router.push("/login");
//   //   }
//   // }, []);


// const [purpose, setPurpose] = useState(''); 




// const [formData, setFormData] = useState({
//   photo:'',
//   fullName: '',
//   email: '',
//   phoneNo: '',
//   age: '',
//   sex: '',
//   DOB: '',
//   Addhar_Voter: '',
//   houseNo: '',
//   landmark: '',
//   village: '',
//   state: '',
//   nation: '',
//   pincode: '',
//   purpose: '',
//   patiantName: '',
//   hospitalName: '',
//   trakingDr: '',
//   reason: '',
//   studentName: '',
//   studentDOB: '',
//   studentGender: '',
//   studentCategary: '',
//   studentPhoto: '',
//   jobFullName: '',
//   jobPosssition: '',
//   jobDepartment: '',
//   jobLocation: '',
//   jobSalary: '',
//   employeeName: '',
//   employeeId: '',
//   employeeDepartment: '',
//   employeeCDesignation: '',
//   employeeRDepartment: '',
//   employeeRTransfer: '',
//   schemeName: '',
//   schemePApplication: '',
//   schemeApplyDate: '',
//   schemeMaritalStatus: '',
//   schemeCategary: '',
//   schemeAddhar: '',
//   businessName: '',
//   businessType: '',
//   businessSector: '',
//   businessRNo: '',
//   businessDOE: '',
//   businessGST: '',
//   businessAddress: '',
//   utilityServiceInstallation: '',
//   utilityProblem: '',
//   policeApplicationNo: '',
//   policeApplicationDate: '',
//   policeApplicationPlace: '',
//   policeDetailInsidance: '',
//   policeInvolveName: '',
//   policeDeclaration: '',
//   policephoto: '',
//   nameProject: '',
//   projectLocation: '',
//   projectProblem: '',
//   massage: '',
  
// });

// const handleChange = (e) => {
//   const { name, value, files } = e.target;

  
//   if (files) {
//     // If a file is uploaded, update the state with the file object
//     setFormData({ ...formData, [name]: files[0] });
//   } else {
//     setFormData({ ...formData, [name]: value });
//   }
// };

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   const formDataToSend = new FormData();
//   Object.entries(formData).forEach(([key, value]) => {
//     formDataToSend.append(key, value);
//   });

//   try {
//     const response = await fetch('/api/addform', {
//       method: 'POST',
//       body: formDataToSend,
//     });
//     console.log(response);
    

//     const result = await response.json();
//     if (response.ok) {
//       toast.success('Form submitted successfully!');
//       console.log('Submitted:', result);
//     } else {
//       toast.error(`Error: ${result.error}`);
//     }
//   } catch (error) {
//     console.error('Error submitting form:', error);
//     toast.error('There was an error submitting the form.');
//   }
// };

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Form = () => {
    const [photos,setPhotos]=useState('')  
    const [fullName,setFullName]=useState('')
    const [email,setEmail]=useState('')
    const [phoneNo,setPhoneNo]=useState('')
    const [age,setAge]=useState('')
    const [sex,setSex]=useState('')
    const [DOB,setDOB]=useState('')
    const [Addhar_Voter,setAddhar_Voter]=useState('')
    const [houseNo,setHouseNo]=useState('')
    const [landmark,setLandmark]=useState('')
    const [village,setVillage]=useState('')
    const [state,setState]=useState('')
    const [nation,setNation]=useState('')
    const [pincode,setPincode]=useState('')
    const [patiantName,setPatiantName]=useState('')
    const [hospitalName,setHospitalName]=useState('')
    const [trakingDr,setTrakingDr]=useState('')
    const [reason,setReason]=useState('')
    const [studentName,setStudentName]=useState('')
    const [studentDOB,setStudentDOB]=useState('')
    const [studentGender,setStudentGender]=useState('')
    const [studentCategary,setStudentCategary]=useState('')
    const [studentPhoto,setStudentPhoto]=useState('')
    const [jobFullName,setJobFullName]=useState('')
    const [jobPosssition,setJobPosssition]=useState('')
    const [jobDepartment,setJobDepartment]=useState('')
    const [jobLocation,setJobLocation]=useState('')
    const [jobSalary,setJobSalary]=useState('')
    const [employeeName,setEmployeeName]=useState('')
    const [employeeId,setEmployeeId]=useState('')
    const [employeeDepartment,setEmployeeDepartment]=useState('')
    const [employeeCDesignation,setEmployeeCDesignation]=useState('')
    const [employeeRDepartment,setEmployeeRDepartment]=useState('')
    const [employeeRTransfer,setEmployeeRTransfer]=useState('')
    const [schemeName,setSchemeName]=useState('')
    const [schemePApplication,setSchemePApplication]=useState('')
    const [schemeApplyDate,setSchemeApplyDate]=useState('')
    const [schemeMaritalStatus,setSchemeMaritalStatus]=useState('')
    const [schemeCategary,setSchemeCategary]=useState('')
    const [schemeAddhar,setSchemeAddhar]=useState('')
    const [businessName,setBusinessName]=useState('')
    const [businessType,setBusinessType]=useState('')
    const [businessSector,setBusinessSector]=useState('')
    const [businessRNo,setBusinessRNo]=useState('')
    const [businessDOE,setBusinessDOE]=useState('')
    const [businessGST,setBusinessGST]=useState('')
    const [businessAddress,setBusinessAddress]=useState('')
    const [utilityServiceInstallation,setUtilityServiceInstallation]=useState('')
    const [utilityProblem,setUtilityProblem]=useState('')
    const [policeApplicationNo,setPoliceApplicationNo]=useState('')
    const [policeApplicationDate,setPoliceApplicationDate]=useState('')
    const [policeApplicationPlace,setPoliceApplicationPlace]=useState('')
    const [policeDetailInsidance,setPoliceDetailInsidance]=useState('')
    const [policeInvolveName,setPoliceInvolveName]=useState('')
    const [policeDeclaration,setPoliceDeclaration]=useState('')
    const [policephoto,setPolicephoto]=useState('')
    const [nameProject,setNameProject]=useState('')
    const [projectLocation,setProjectLocation]=useState('')
    const [projectProblem,setProjectProblem]=useState('')
    const [massage,setMassage]=useState('')
    const [purpose, setPurpose] = useState(''); 
    const [imagePreviews, setImagePreviews] = useState([]);  // Store image previews

    const router = useRouter();

    useEffect(() => {
      const userRole = localStorage.getItem("userRole");
      if (userRole !== "user") {
        router.push("/login"); // Redirect to login if not a user
      }
    }, [router]);
  
  
    // Generic function to handle changes for all form fields
    const handleChange = (e) => {
    const { name, value } = e.target;

    
    if (e.target.name == "photos") {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPhotos(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }
    else if (e.target.name == "fullName") {
      setFullName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "phoneNo") {
      setPhoneNo(e.target.value);
    } else if (e.target.name == "age") {
      setAge(e.target.value);
    } else if (e.target.name == "sex") {
      setSex(e.target.value);
    } else if (e.target.name == "DOB") {
      setDOB(e.target.value);
    } else if (e.target.name == "Addhar_Voter") {
      setAddhar_Voter(e.target.value);
    } else if (e.target.name == "houseNo") {
      setHouseNo(e.target.value);
    } else if (e.target.name == "landmark") {
      setLandmark(e.target.value);
    } else if (e.target.name == "village") {
      setVillage(e.target.value);
    } else if (e.target.name == "state") {
      setState(e.target.value);
    } else if (e.target.name == "nation") {
      setNation(e.target.value);
    } else if (e.target.name == "pincode") {
      setPincode(e.target.value);
    } else if (e.target.name == "patiantName") {
      setPatiantName(e.target.value);
    } else if (e.target.name == "hospitalName") {
      setHospitalName(e.target.value);
    } else if (e.target.name == "trakingDr") {
      setTrakingDr(e.target.value);
    } else if (e.target.name == "reason") {
      setReason(e.target.value);
    } else if (e.target.name == "studentName") {
      setStudentName(e.target.value);
    } else if (e.target.name == "studentDOB") {
      setStudentDOB(e.target.value);
    } else if (e.target.name == "studentGender") {
      setStudentGender(e.target.value);
    } else if (e.target.name == "studentCategary") {
      setStudentCategary(e.target.value);
    } else if (e.target.name == "jobFullName") {
      setJobFullName(e.target.value);
    } else if (e.target.name == "jobPosssition") {
      setJobPosssition(e.target.value);
    } else if (e.target.name == "jobDepartment") {
      setJobDepartment(e.target.value);
    } else if (e.target.name == "jobLocation") {
      setJobLocation(e.target.value);
    } else if (e.target.name == "jobSalary") {
      setJobSalary(e.target.value);
    } else if (e.target.name == "employeeName") {
      setEmployeeName(e.target.value);
    } else if (e.target.name == "employeeId") {
      setEmployeeId(e.target.value);
    } else if (e.target.name == "employeeDepartment") {
      setEmployeeDepartment(e.target.value);
    } else if (e.target.name == "employeeCDesignation") {
      setEmployeeCDesignation(e.target.value);
    } else if (e.target.name == "employeeRDepartment") {
      setEmployeeRDepartment(e.target.value);
    } else if (e.target.name == "employeeRTransfer") {
      setEmployeeRTransfer(e.target.value);
    } else if (e.target.name == "schemeName") {
      setSchemeName(e.target.value);
    } else if (e.target.name == "schemePApplication") {
      setSchemePApplication(e.target.value);
    } else if (e.target.name == "schemeApplyDate") {
      setSchemeApplyDate(e.target.value);
    } else if (e.target.name == "schemeMaritalStatus") {
      setSchemeMaritalStatus(e.target.value);
    } else if (e.target.name == "schemeCategary") {
      setSchemeCategary(e.target.value);
      } else if (e.target.name == "schemeAddhar") {
        setSchemeAddhar(e.target.value);
    } else if (e.target.name == "businessName") {
      setBusinessName(e.target.value);
    } else if (e.target.name == "businessType") {
      setBusinessType(e.target.value);
    } else if (e.target.name == "businessSector") {
      setBusinessSector(e.target.value);
    } else if (e.target.name == "businessRNo") {
      setBusinessRNo(e.target.value);
    } else if (e.target.name == "respiratoryRate") {
      setrespiratoryRate(e.target.value);
    } else if (e.target.name == "businessDOE") {
      setBusinessDOE(e.target.value);
    } else if (e.target.name == "businessGST") {
      setBusinessGST(e.target.value);
    } else if (e.target.name == "businessAddress") {
      setBusinessAddress(e.target.value);
    } else if (e.target.name == "utilityServiceInstallation") {
      setUtilityServiceInstallation(e.target.value);
    } else if (e.target.name == "utilityProblem") {
      setUtilityProblem(e.target.value);
    } else if (e.target.name == "policeApplicationNo") {
      setPoliceApplicationNo(e.target.value);
    } else if (e.target.name == "policeApplicationDate") {
      setPoliceApplicationDate(e.target.value);
    } else if (e.target.name == "policeApplicationPlace") {
      setPoliceApplicationPlace(e.target.value);
    } else if (e.target.name == "policeDetailInsidance") {
      setPoliceDetailInsidance(e.target.value);
    } else if (e.target.name == "policeInvolveName") {
      setPoliceInvolveName(e.target.value);
    } else if (e.target.name == "policeDeclaration") {
      setPoliceDeclaration(e.target.value);   
    } else if (e.target.name == "nameProject") {
      setNameProject(e.target.value);
    } else if (e.target.name == "setProjectLocation") {
      setProjectLocation(e.target.value);
    } else if (e.target.name == "projectProblem") {
      setProjectProblem(e.target.value);  
    } else if (e.target.name == "massage") {
      setMassage(e.target.value);
    } else if (e.target.name == "purpose") {
      setPurpose(e.target.value);
    
    } else if (e.target.name == "policephoto") {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPolicephoto(reader.result);
        };
        reader.readAsDataURL(file);
      }
    } else if (e.target.name == "studentPhoto") {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setStudentPhoto(reader.result);
        };
        reader.readAsDataURL(file);
      }
    
    }
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      photos,
      fullName,
      email,
      phoneNo,
      age,
      sex,
      DOB,
      Addhar_Voter,
      houseNo,
      landmark,
      village,
      state,
      nation,
      pincode,
      purpose,
      patiantName,
      hospitalName,
      trakingDr,
      reason,
      studentName,
      studentDOB,
      studentGender,
      studentCategary,
      studentPhoto,
      jobFullName,
      jobPosssition,
      jobDepartment,
      jobLocation,
      jobSalary,
      employeeName,
      employeeId,
      employeeDepartment,
      employeeCDesignation,
      employeeRDepartment,
      employeeRTransfer,
      schemeName,
      schemePApplication,
      schemeApplyDate,
      schemeMaritalStatus,
      schemeCategary,
      schemeAddhar,
      businessName,
      businessType,
      businessSector,
      businessRNo,
      businessDOE,
      businessGST,
      businessAddress,
      utilityServiceInstallation,
      utilityProblem,
      policeApplicationNo,
      policeApplicationDate,
      policeApplicationPlace,
      policeDetailInsidance,
      policeInvolveName,
      policeDeclaration,
      policephoto,
      nameProject,
      projectLocation,
      projectProblem,
      massage,
       
    };

    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addform`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    console.log(response);

    console.log("Success:", data);
    
    // setPatientName("");
    // setPhoneNo("");
    // setBloodPressure("");
    // setSugar("");
    // setPulse("");
    // setPatientComplaints("");
    // setPatientHistory("");
    // setObservation("");
    // setDiagnosis("");
    // setPrescribedLabTest("");
    // setPrescription("");
    // setAdvices("");
    // setrs("");
    // setHeartrate("");
    // setOxygen("");
    // setCentralNervousSystem("");
    // setBloodSugarLevel("");
    // settemperature("");
    // setrespiratoryRate("");
    // setReportImg(null);
    // setLabImg(null);
    // setPatientImg(null);

    // setNadi("");
    // setKsudha("");
    // setTrishna("");
    // setMal("");
    // setMutr("");
    // setJivha("");
    // setNidra("");
    // setRaj("");
    // setRas("");
    // setRakt("");
    // setMans("");
    // setMed("");
    // setAsthi("");
    // setMajja("");
    // setShukr("");

    // setFollowup("");

    toast.success("new Patient Add Successfull", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>

      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="max-w-md mx-auto mt-10 mb-10  bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="text-2xl py-4 px-6 bg-yellow-500 text-white text-center font-bold uppercase">
          VISITOR INFORMATION
        </div>
        <form className="py-4 px-6"  method="POST" onSubmit={handleSubmit} enctype="multipart/form-data">
        {imagePreviews.length > 0 && (
              <div className="mt-4 grid grid-cols-2 gap-4">
                {imagePreviews.map((preview, index) => (
                  <div key={index} className="w-full h-auto">
                    <img
                      src={preview}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-auto rounded-lg border"
                    />
                  </div>
                ))}
              </div>
            )}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="photo"
            >
              Photo
            </label>
            <input
              onChange={handleChange}
              name="photos"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="photos"
              type="file"
              accept="image/*"
              required 
              capture
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="fullName"
            >
              Name
            </label>
            <input
              value={fullName}
              onChange={handleChange}
              name="fullName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullName"
              type="text"
              placeholder="Enter your FullName"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              value={email}
              onChange={handleChange}
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="phoneNo">
              Phone Number
            </label>
            <input
              value={phoneNo}
              onChange={handleChange}
              name="phoneNo"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phoneNo"
              type="text"
              required 
              placeholder="Enter your phone number"
              
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="age">
              Age
            </label>
            <input
              value={age}
              onChange={handleChange}
              name="age"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="age"
              type="number"
              placeholder="Enter your Age"
              maxLength={10}
              minLength={10}
              required 
            />
          </div>
          <div class="mb-6">
            <label for="sex" class="block text-gray-700 font-bold mb-2">
              Gender
            </label>
            <select
              id="sex"
              name="sex"
              class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              required 
              value={sex}
              onChange={handleChange}
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="DOB">
              Date Of Birth
            </label>
            <input
              value={DOB}
              onChange={handleChange}
              name="DOB"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="DOB"
              type="Date"
              placeholder="Enter your DOB"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="Addhar_Voter">
              Addhar Number / Voter Id Number
            </label>
            <input
              value={Addhar_Voter}
              onChange={handleChange}
              name="Addhar_Voter"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Addhar_Voter"
              type="text"
              placeholder="Enter your Addhar/Voter"
              required 
            />
          </div>
          <label className="block text-center text-gray-700 font-bold mb-2" >
              Address
            </label>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="houseNo">
              House No
            </label>
            <input
              value={houseNo}
              onChange={handleChange}
              name="houseNo"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="houseNo"
              type="text"
              placeholder="Enter your houseNo"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="landmark">
              Landmark
            </label>
            <input
              value={landmark}
              onChange={handleChange}
              name="landmark"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="landmark"
              type="text"
              placeholder="Enter your Address"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="village">
              Village
            </label>
            <input
              value={village}
              onChange={handleChange}
              name="village"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="village"
              type="text"
              placeholder="Enter your village"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="state">
              State
            </label>
            <input
              value={state}
              onChange={handleChange}
              name="state"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="state"
              type="text"
              placeholder="Enter your state"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="nation">
              Nation
            </label>
            <input
              value={nation}
              onChange={handleChange}
              name="nation"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nation"
              type="text"
              placeholder="Enter your nation"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="pincode">
              Pincode
            </label>
            <input
              value={pincode}
              onChange={handleChange}
              name="pincode"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="pincode"
              type="text"
              placeholder="Enter your pincode"
              required 
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="purpose" className="block text-center text-gray-700 font-bold mb-2">
              Purpose of Visiting
            </label>
            <select
              id="purpose"
              name="purpose"
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              
              onChange={(e) => {
                setPurpose(e.target.value);
                handleChange(e);
              }}
              value={purpose}
            >
              <option value="">Select purpose</option>
              <option value="medical">Medical</option>
              <option value="education">Education</option>
              <option value="job">Job</option>
              <option value="schemes">Schemes</option>
              <option value="business">Business</option>
              <option value="utility">Utility</option>
              <option value="police">Police Station</option>
              <option value="administrative">Administrative</option>
            </select>
          </div>



          {/* Conditional rendering based on selected purpose */}
          {purpose === "medical" && (<>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="patiantName">
                Patiant Name
              </label>
              <input
                value={patiantName}
                onChange={handleChange}
                name="patiantName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="patiantName"
                type="text"
                placeholder="Enter your patiantName"
                
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="hospitalName">
                Hospital Name
              </label>
              <input
                value={hospitalName}
                onChange={handleChange}
                name="hospitalName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="hospitalName"
                type="text"
                placeholder="Enter your hospital Name"
                
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="trakingDr">
               Traking Dr
              </label>
              <input
                value={trakingDr}
                onChange={handleChange}
                name="trakingDr"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="trakingDr"
                type="text"
                placeholder="Enter your traking Dr"
                
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="reason">
               Reason
              </label>
              <input
                value={reason}
                onChange={handleChange}
                name="reason"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="reason"
                type="text"
                placeholder="Enter your Reason"
                
              />
            </div>
            </>
          )}

          {purpose === "education" && (<>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="studentName">
                Student Name
              </label>
              <input
                value={studentName}
                onChange={handleChange}
                name="studentName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="studentName"
                type="text"
                placeholder="Enter your student Name"
                
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="studentDOB">
               Student Date Of Birth
              </label>
              <input
                value={studentDOB}
                onChange={handleChange}
                name="studentDOB"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="studentDOB"
                type="Date"
                placeholder="Enter your studentDOB"
                
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="studentGender">
                Gender
              </label>
              <input
                value={studentGender}
                onChange={handleChange}
                name="studentGender"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="studentGender"
                type="text"
                placeholder="Enter your student Gender"
                
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="studentCategary">
                Categary
              </label>
              <input
                value={studentCategary}
                onChange={handleChange}
                name="studentCategary"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="studentCategary"
                type="text"
                placeholder="Enter your student Categary"
                
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="studentPhoto">
                Photo
              </label>
              <input
                accept="image/*"
                onChange={handleChange}
                name="studentPhoto"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="studentPhoto"
                type="file"
                placeholder="Enter your student Photo"
                capture
              />
            </div>
            </>
          )}
 
          {purpose === "job" && (<>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="jobFullName">
                full Name
              </label>
              <input
                value={jobFullName}
                onChange={handleChange}
                name="jobFullName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="jobFullName"
                type="text"
                placeholder="Enter your job FullName"
                
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="jobPosssition">
                Posssition apply for
              </label>
              <input
                value={jobPosssition}
                onChange={handleChange}
                name="jobPosssition"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="jobPosssition"
                type="text"
                placeholder="Enter your job details"
                
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="jobDepartment">
                Department
              </label>
              <input
                value={jobDepartment}
                onChange={handleChange}
                name="jobDepartment"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="jobDepartment"
                type="text"
                placeholder="Enter your job Department"
                
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="jobLocation">
                profferd location
              </label>
              <input
                value={jobLocation}
                onChange={handleChange}
                name="jobLocation"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="jobLocation"
                type="text"
                placeholder="Enter your job Location"
                
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="jobSalary">
                Experctation salary
              </label>
              <input
                value={jobSalary}
                onChange={handleChange}
                name="jobSalary"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="jobSalary"
                type="text"
                placeholder="Enter your job Salary"
                
              />
            </div>
            <label className="block text-center text-gray-700  mb-2" >
                OR
              </label>
            <label className="block text-center text-gray-700 font-bold mb-2" htmlFor="jobDetails">
                Transfer
              </label>
              <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="employeeName">
                Employee Name
              </label>
              <input
                value={employeeName}
                onChange={handleChange}
                name="employeeName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="employeeName"
                type="text"
                placeholder="Enter your Name"
                
              />
            </div>
              <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="employeeId">
               Employee Id
              </label>
              <input
                value={employeeId}
                onChange={handleChange}
                name="employeeId"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="employeeId"
                type="text"
                placeholder="Enter your employee Id"
                
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="employeeDepartment">
               Department
              </label>
              <input
                value={employeeDepartment}
                onChange={handleChange}
                name="employeeDepartment"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="employeeDepartment"
                type="text"
                placeholder="Enter your employee Department"
                
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="employeeCDesignation">
               Current Designation
              </label>
              <input
                value={employeeCDesignation}
                onChange={handleChange}
                name="employeeCDesignation"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="employeeCDesignation"
                type="text"
                placeholder="Enter your employee Current Designation"
                
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="employeeRDepartment">
               Required Department 
              </label>
              <input
                value={employeeRDepartment}
                onChange={handleChange}
                name="employeeRDepartment"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="employeeRDepartment"
                type="text"
                placeholder="Enter your employee Required Department"
                
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="employeeRTransfer">
               Reason for transfer
              </label>
              <input
                value={employeeRTransfer}
                onChange={handleChange}
                name="employeeRTransfer"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="employeeRTransfer"
                type="text"
                placeholder="Enter your employee Reason Transfer"
                
              />
            </div>
            </>
          )}
           {purpose === "schemes" && (
            <>
            
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="schemeName">
              Name of Schemes
              </label>
              <input
                value={schemeName}
                onChange={handleChange}
                name="schemeName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="schemeName"
                type="text"
                placeholder="Enter your scheme Name"
                
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="schemePApplication">
              place of application
              </label>
              <input
                value={schemePApplication}
                onChange={handleChange}
                name="schemePApplication"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="schemePApplication"
                type="text"
                placeholder="Enter your scheme Place Application"
                
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="schemeApplyDate">
              Date of application
              </label>
              <input
                value={schemeApplyDate}
                onChange={handleChange}
                name="schemeApplyDate"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="schemeApplyDate"
                type="Date"
                placeholder="Enter your scheme Apply Date"
                
              />
            </div>
            
            

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="schemeMaritalStatus">
              Marital Status
              </label>
              <input
                value={schemeMaritalStatus}
                onChange={handleChange}
                name="schemeMaritalStatus"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="schemeMaritalStatus"
                type="text"
                placeholder="Enter your Marital Status"
                
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="schemeCategary">
              Categary
              </label>
              <input
                value={schemeCategary}
                onChange={handleChange}
                name="schemeCategary"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="schemeCategary"
                type="text"
                placeholder="Enter your scheme Categary"
                
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="schemeAddhar">
              Addhar No
              </label>
              <input
                value={schemeAddhar}
                onChange={handleChange}
                name="schemeAddhar"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="schemeAddhar"
                type="text"
                maxLength={12}
                minLength={12}
                placeholder="Enter your Addhar"
                
              />
            </div>

            
                
           </>
          )}

{purpose === "business" && (
            <>
             <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="businessName">
              Business Name 
              </label>
              <input
                value={businessName}
                onChange={handleChange}
                name="businessName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="businessName"
                type="text"
                placeholder="Enter your business Name"
                
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="businessType">
              Business Type
              </label>
              <input
                value={businessType}
                onChange={handleChange}
                name="businessType"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="businessType"
                type="text"
                placeholder="Enter your business Type"
                
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="businessSector">
             Industry Sector
              </label>
              <input
                value={businessSector}
                onChange={handleChange}
                name="businessSector"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="businessSector"
                type="text"
                placeholder="Enter your job details"
                
              />
            </div>
            
            
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="businessRNo">
             Business Resistration Number
              </label>
              <input
                value={businessRNo}
                onChange={handleChange}
                name="businessRNo"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="businessRNo"
                type="text"
                placeholder="Enter your job details"
                
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="businessDOE">
            Date Of Establishment
              </label>
              <input
                value={businessDOE}
                onChange={handleChange}
                name="businessDOE"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="businessDOE"
                type="text"
                placeholder="Enter your job details"
                
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="businessGST">
           GST Number
              </label>
              <input
                value={businessGST}
                onChange={handleChange}
                name="businessGST"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="businessGST"
                type="text"
                maxLength={15}
                minLength={15}
                placeholder="Enter your business GST"
                
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="businessAddress">
           Business Address
              </label>
              <input
                value={businessAddress}
                onChange={handleChange}
                name="businessAddress"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="businessAddress"
                type="text"
                placeholder="Enter your business Address"
                
              />
            </div>

            </>
          )}

{purpose === "utility" && (

            <>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="utilityServiceInstallation">
          Address For Service Installation
              </label>
              <input
                value={utilityServiceInstallation}
                onChange={handleChange}
                name="utilityServiceInstallation"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="utilityServiceInstallation"
                type="text"
                placeholder="Enter your Service Installation"
                
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="utilityProblem">
          Problem/Issue
              </label>
              <input
                value={utilityProblem}
                onChange={handleChange}
                name="utilityProblem"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="utilityProblem"
                type="text"
                placeholder="Enter your utility Problem"
                
              />
            </div>
            </>
          )}

          {purpose === "police" && (
         
            <>
             <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="policeApplicationNo">
          Application Number
              </label>
              <input
                value={policeApplicationNo}
                onChange={handleChange}
                name="policeApplicationNo"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="policeApplicationNo"
                type="text"
                placeholder="Enter your police Application No"
                
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="policeApplicationDate">
         Applicatoin Date
              </label>
              <input
                value={policeApplicationDate}
                onChange={handleChange}
                name="policeApplicationDate"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="policeApplicationDate"
                type="text"
                placeholder="Enter your police Application Date" 
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="policeApplicationPlace">
          Application Place
              </label>
              <input
                value={policeApplicationPlace}
                onChange={handleChange}
                name="policeApplicationPlace"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="policeApplicationPlace"
                type="text"
                placeholder="Enter your police Application Place"
                
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="policeDetailInsidance">
          Detail Of Insidance
              </label>
              <input
                value={policeDetailInsidance}
                onChange={handleChange}
                name="policeDetailInsidance"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="policeDetailInsidance"
                type="text"
                placeholder="Enter your Detail Insidance"
                
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="policeInvolveName">
          Person Involve
              </label>
              <input
                value={policeInvolveName}
                onChange={handleChange}
                name="policeInvolveName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="policeInvolveName"
                type="text"
                placeholder="Enter your Involve Name"
                
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="policeDeclaration">
          Declaration
              </label>
              <input
                value={policeDeclaration}
                onChange={handleChange}
                name="policeDeclaration"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="policeDeclaration"
                type="text"
                placeholder="Enter your police Declaration"
                
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="policephoto">
          Any photo
              </label>
              <input
                value={policephoto}
                onChange={handleChange}
                name="policephoto"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="policephoto"
                type="file"
                placeholder="Enter your police photo"
                
                capture
              />
            </div>
            </>
          )}
           {purpose === "administrative" && (
            <>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="nameProject">
          Name Of Project
              </label>
              <input
                value={nameProject}
                onChange={handleChange}
                name="nameProject"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nameProject"
                type="text"
                placeholder="Enter your Projects Name"
                
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="projectLocation">
          Place/Area/Location
              </label>
              <input
                value={projectLocation}
                onChange={handleChange}
                name="projectLocation"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="projectLocation"
                type="text"
                placeholder="Enter your project Location"
                
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="projectProblem">
          Problem/Issue
              </label>
              <input
                value={projectProblem}
                onChange={handleChange}
                name="projectProblem"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="projectProblem"
                type="text"
                placeholder="Enter your project Problem"
                
              />
            </div>

            

           </>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="massage">
              Message
            </label>
            <input
              value={massage}
              onChange={handleChange}
              name="massage"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="massage"
              rows="4"
              placeholder="Enter any additional information"
              
            />
          </div>


          <div className="flex items-center justify-center mb-4">
            <button
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add visit 
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;






// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Appointment = () => {
//   const [fullName, setfullName] = useState("");
//   const [age, setage] = useState("");
//   const [phoneNo, setphoneNo] = useState("");
//   const [email, setemail] = useState("");
//   const [address, setaddress] = useState("");
//   const [massage, setmassage] = useState("");
//   const [purpose, setPurpose] = useState(""); // State to track the purpose

//   const handleChange = (e) => {
//     if (e.target.name === "fullName") {
//       setfullName(e.target.value);
//     } else if (e.target.name === "age") {
//       setage(e.target.value);
//     } else if (e.target.name === "phoneNo") {
//       setphoneNo(e.target.value);
//     } else if (e.target.name === "email") {
//       setemail(e.target.value);
//     } else if (e.target.name === "address") {
//       setaddress(e.target.value);
//     } else if (e.target.name === "massage") {
//       setmassage(e.target.value);
//     } else if (e.target.name === "purpose") {
//       setPurpose(e.target.value); // Update the purpose state
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = { fullName, age, phoneNo, email, address, massage, purpose };

//     let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addsappointment`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//     let response = await res.json();

//     setfullName("");
//     setage("");
//     setphoneNo("");
//     setemail("");
//     setaddress("");
//     setmassage("");
//     setPurpose(""); // Clear the purpose

//     toast.success("Your Appointment Request Send Successfully", {
//       position: "top-left",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });
//   };

//   return (
//     <>
//       <ToastContainer
//         position="top-left"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//       />
//       <div className="max-w-md mx-auto mt-10 mb-10 bg-white shadow-lg rounded-lg overflow-hidden">
//         <div className="text-2xl py-4 px-6 bg-green-500 text-white text-center font-bold uppercase">
//           VISITER INFORMATION
//         </div>
//         <form className="py-4 px-6" method="POST" onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2" htmlFor="fullName">
//               Name
//             </label>
//             <input
//               value={fullName}
//               onChange={handleChange}
//               name="fullName"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="fullName"
//               type="text"
//               placeholder="Enter your FullName"
//               
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
//               Email
//             </label>
//             <input
//               value={email}
//               onChange={handleChange}
//               name="email"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="email"
//               type="email"
//               placeholder="Enter your email"
//               
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2" htmlFor="phoneNo">
//               Phone Number
//             </label>
//             <input
//               value={phoneNo}
//               onChange={handleChange}
//               name="phoneNo"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="phoneNo"
//               type="number"
//               placeholder="Enter your phone number"
//               
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2" htmlFor="age">
//               Age
//             </label>
//             <input
//               value={age}
//               onChange={handleChange}
//               name="age"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="age"
//               type="number"
//               placeholder="Enter your Age"
//               
//             />
//           </div>

//           <div className="mb-6">
//             <label htmlFor="purpose" className="block text-gray-700 font-bold mb-2">
//               Purpose of Visiting
//             </label>
//             <select
//               id="purpose"
//               name="purpose"
//               className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
//               
//               onChange={handleChange}
//               value={purpose}
//             >
//               <option value="">Select purpose</option>
//               <option value="medical">Medical</option>
//               <option value="education">Education</option>
//               <option value="job">Job</option>
//               <option value="business">Business</option>
//               <option value="utility">Utility</option>
//               <option value="police">Police Station</option>
//               <option value="administrative">Administrative</option>
//             </select>
//           </div>

//           {/* Conditional rendering based on selected purpose */}
//           {purpose === "medical" && (
//             <div className="mb-4">
//               <label className="block text-gray-700 font-bold mb-2" htmlFor="medicalDetails">
//                 Medical Details
//               </label>
//               <input
//                 value={address}
//                 onChange={handleChange}
//                 name="address"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="medicalDetails"
//                 type="text"
//                 placeholder="Enter your medical details"
//                 
//               />
//             </div>
//           )}

//           {purpose === "education" && (
//             <div className="mb-4">
//               <label className="block text-gray-700 font-bold mb-2" htmlFor="educationDetails">
//                 Education Details
//               </label>
//               <input
//                 value={address}
//                 onChange={handleChange}
//                 name="address"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="educationDetails"
//                 type="text"
//                 placeholder="Enter your educational details"
//                 
//               />
//             </div>
//           )}

//           {purpose === "job" && (
//             <div className="mb-4">
//               <label className="block text-gray-700 font-bold mb-2" htmlFor="jobDetails">
//                 Job Details
//               </label>
//               <input
//                 value={address}
//                 onChange={handleChange}
//                 name="address"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="jobDetails"
//                 type="text"
//                 placeholder="Enter your job details"
//                 
//               />
//             </div>
//           )}

//           {/* Add more conditional sections based on the other purposes as needed */}

//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2" htmlFor="massage">
//               Message
//             </label>
//             <textarea
//               value={massage}
//               onChange={handleChange}
//               name="massage"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="massage"
//               placeholder="Enter any additional information"
//             />
//           </div>

//           <div className="flex items-center justify-center mb-4">
//             <button
//               className="bg-green-500 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
//               type="submit"
//             >
//               Book Appointment
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Appointment;




// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Form = () => {
//   const [purpose, setPurpose] = useState(""); 
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phoneNo: '',
//     age: '',
//     sex: '',
//     DOB: '',
//     Addhar_Voter: '',
//     houseNo: '',
//     landmark: '',
//     village: '',
//     state: '',
//     nation: '',
//     pincode: '',
//     purpose: '',
//     patiantName: '',
//     hospitalName: '',
//     trakingDr: '',
//     reason: '',
//     studentName: '',
//     studentDOB: '',
//     studentGender: '',
//     studentCategary: '',
//     studentPhoto: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/api/submitForm', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData), // Send form data as JSON
//       });

//       const result = await response.json();
//       if (response.ok) {
//         // Handle success
//         console.log('Form submitted successfully:', result);
//         alert('Form submitted successfully!');
//       } else {
//         // Handle error
//         console.error('Error submitting form:', result.error);
//         alert('There was an error submitting the form.');
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       alert('There was an error submitting the form.');
//     }
//   };

//   return (
//     <>
//       <ToastContainer
//         position="top-left"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//       />
//       <div className="max-w-md mx-auto mt-10 mb-10 bg-white shadow-lg rounded-lg overflow-hidden">
//         <div className="text-2xl py-4 px-6 bg-yellow-500 text-white text-center font-bold uppercase">
//           VISITOR INFORMATION
//         </div>
//         <form className="py-4 px-6" method="POST" onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2" htmlFor="fullName">
//               Name
//             </label>
//             <input
//               value={fullName}
//               onChange={handleChange}
//               name="fullName"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="fullName"
//               type="text"
//               placeholder="Enter your Full Name"
//               
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
//               Email
//             </label>
//             <input
//               value={email}
//               onChange={handleChange}
//               name="email"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="email"
//               type="email"
//               placeholder="Enter your email"
//               
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2" htmlFor="phoneNo">
//               Phone Number
//             </label>
//             <input
//               value={phoneNo}
//               onChange={handleChange}
//               name="phoneNo"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="phoneNo"
//               type="number"
//               placeholder="Enter your phone number"
//               
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2" htmlFor="age">
//               Age
//             </label>
//             <input
//               value={age}
//               onChange={handleChange}
//               name="age"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="age"
//               type="number"
//               placeholder="Enter your age"
//               
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2" htmlFor="sex">
//               Gender
//             </label>
//             <select
//               id="sex"
//               name="sex"
//               className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
//               
//               value={sex}
//               onChange={handleChange}
//             >
//               <option value="">Select gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2" htmlFor="DOB">
//               Date Of Birth
//             </label>
//             <input
//               value={DOB}
//               onChange={handleChange}
//               name="DOB"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="DOB"
//               type="text"
//               placeholder="Enter your DOB"
//               
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2" htmlFor="Addhar_Voter">
//               Addhar Number / Voter ID
//             </label>
//             <input
//               value={Addhar_Voter}
//               onChange={handleChange}
//               name="Addhar_Voter"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="Addhar_Voter"
//               type="text"
//               placeholder="Enter your Aadhar/Voter ID"
//               
//             />
//           </div>

//           <label className="block text-center text-gray-700 font-bold mb-2">
//             Address
//           </label>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2" htmlFor="houseNo">
//               House No
//             </label>
//             <input
//               value={houseNo}
//               onChange={handleChange}
//               name="houseNo"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="houseNo"
//               type="text"
//               placeholder="Enter your House No"
//               
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2" htmlFor="landmark">
//               Landmark
//             </label>
//             <input
//               value={landmark}
//               onChange={handleChange}
//               name="landmark"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="landmark"
//               type="text"
//               placeholder="Enter your Landmark"
//               
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2" htmlFor="village">
//               Village
//             </label>
//             <input
//               value={village}
//               onChange={handleChange}
//               name="village"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="village"
//               type="text"
//               placeholder="Enter your Village"
//               
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2" htmlFor="state">
//               State
//             </label>
//             <input
//               value={state}
//               onChange={handleChange}
//               name="state"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="state"
//               type="text"
//               placeholder="Enter your State"
//               
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2" htmlFor="nation">
//               Nation
//             </label>
//             <input
//               value={nation}
//               onChange={handleChange}
//               name="nation"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="nation"
//               type="text"
//               placeholder="Enter your Nation"
//               
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2" htmlFor="pincode">
//               Pincode
//             </label>
//             <input
//               value={pincode}
//               onChange={handleChange}
//               name="pincode"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="pincode"
//               type="text"
//               placeholder="Enter your Pincode"
//               
//             />
//           </div>

//           <div className="mb-6">
//             <label htmlFor="purpose" className="block text-center text-gray-700 font-bold mb-2">
//               Purpose of Visiting
//             </label>
//             <select
//               id="purpose"
//               name="purpose"
//               className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
//               
//               onChange={(e) => {
//                 setPurpose(e.target.value);
//                 handleChange(e);
//               }}
//               value={purpose}
//             >
//               <option value="">Select purpose</option>
//               <option value="medical">Medical</option>
//               <option value="education">Education</option>
//               <option value="job">Job</option>
//               <option value="schemes">Schemes</option>
//               <option value="business">Business</option>
//               <option value="utility">Utility</option>
//               <option value="police">Police Station</option>
//               <option value="administrative">Administrative</option>
//             </select>
//           </div>

//           {/* Conditional rendering based on selected purpose */}
//           {purpose === "medical" && (
//             <>
//               <div className="mb-4">
//                 <label className="block text-gray-700 font-bold mb-2" htmlFor="patiantName">
//                   Patient Name
//                 </label>
//                 <input
//                   value={patiantName}
//                   onChange={handleChange}
//                   name="patiantName"
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   id="patiantName"
//                   type="text"
//                   placeholder="Enter patient name"
//                   
//                 />
//               </div>
//               {/* Add more medical fields here */}
//             </>
//           )}

//           {purpose === "education" && (
//             <>
//               <div className="mb-4">
//                 <label className="block text-gray-700 font-bold mb-2" htmlFor="studentName">
//                   Student Name
//                 </label>
//                 <input
//                   value={studentName}
//                   onChange={handleChange}
//                   name="studentName"
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   id="studentName"
//                   type="text"
//                   placeholder="Enter student name"
//                   
//                 />
//               </div>
//               {/* Add more education fields here */}
//             </>
//           )}

//           <div className="text-center mt-6">
//             <button
//               type="submit"
//               className="bg-blue-500 text-white py-2 px-6 rounded-full font-semibold text-lg focus:outline-none hover:bg-blue-600"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Form;
