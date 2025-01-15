

// import React, { useState } from 'react';
// import mongoose from 'mongoose';
// import Form from '@/models/form';

// function VisitorList({ formList }) {
//   // State to manage the search query
//   const [searchQuery, setSearchQuery] = useState('');

//   // Handle search input change
//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value.toLowerCase());
//   };

//   // Filter the formList based on phoneNo matching the search query
//   const filteredList = Object.keys(formList).filter((itemKey) => {
//     const item = formList[itemKey];
//     return item.phoneNo && item.phoneNo.toLowerCase().includes(searchQuery);
//   }).map((itemKey) => formList[itemKey]);

//   return (
//     <>
//       <h1 className='text-center font-bold text-2xl'>Visitor List</h1>
      
//       <form className="max-w-lg mx-auto">
//         <div className="relative w-full">
//           <input
//             type="search"
//             id="search-dropdown"
//             className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
//             placeholder="Search by Phone Number..."
//             value={searchQuery}
//             onChange={handleSearchChange}
//             required
//           />
          
//         </div>
//       </form>

//       <div className='flex ml-72 '>
//         {filteredList.length > 0 ? (
//           filteredList.map((item) => (
//             <div
//               className="w-60  m-10 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
//               key={item._id}
//             >
//               <div className="flex flex-col mt-2 items-center pb-10">
//                 <img
//                   className="w-24 h-24 mb-3 rounded-full shadow-lg"
//                   src={item.photos || "/default-profile.jpg"}
//                   alt={item.fullName}
//                 />
//                 <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
//                   {item.fullName}
//                 </h5>
//                 <span className="text-sm text-gray-500 dark:text-gray-400">
//                   {item.phoneNo || "Unknown Role"}
//                 </span>
//                 <span className="text-sm text-gray-500 dark:text-gray-400">
//                   {item.village || "Unknown Role"}
//                 </span>
//                 <div className="flex mt-4 md:mt-6">
//                   <a
//                     href="#"
//                     className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                   >
//                     Edit
//                   </a>
//                   <a
//                     href="#"
//                     className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-red-700 rounded-lg border border-gray-200 hover:bg-red-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-red-800 dark:text-gray-400 dark:border-red-600 dark:hover:text-white dark:hover:bg-gray-700"
//                   >
//                     Delete
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-500">No visitors found with the provided phone number.</p>
//         )}
//       </div>
//     </>
//   );
// }

// export default VisitorList;

// export async function getServerSideProps() {
//   if (!mongoose.connections[0].readyState) {
//     await mongoose.connect(process.env.MONGO_URI);
//   }

//   const forms = await Form.find({});
//   const formList = {};

//   forms.forEach((item) => {
//     formList[item._id] = JSON.parse(JSON.stringify(item));
//   });

//   return {
//     props: { formList },
//   };
// }

{/* <form className="max-w-lg mx-auto">
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Search by Phone Number..."
            value={searchQuery}
            onChange={handleSearchChange}
            required
          />
        </div>
      </form> */}


// import React, { useState } from 'react';
// import mongoose from 'mongoose';
// import Form from '@/models/form';
// import { useRouter } from 'next/router';

// function VisitorList({ formList }) {
//   // State to manage the search query
//   const [searchQuery, setSearchQuery] = useState('');

//   // Router to navigate to the edit page
//   const router = useRouter();

//   // Handle search input change
//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value.toLowerCase());
//   };

//   // Filter the formList based on phoneNo matching the search query
//   const filteredList = Object.keys(formList).filter((itemKey) => {
//     const item = formList[itemKey];
//     return item.phoneNo && item.phoneNo.toLowerCase().includes(searchQuery);
//   }).map((itemKey) => formList[itemKey]);

//   // Edit visitor function
//   const handleEdit = (id) => {
//     router.push(`/edit-visitor/${id}`); // Navigate to edit page with the visitor's ID
//   };

//   // Delete visitor function
//   const handleDelete = async (id) => {
//     const isConfirmed = window.confirm('Are you sure you want to delete this visitor?');
//     if (isConfirmed) {
//       try {
//         const response = await fetch(`/api/delete-visitor/${id}`, {
//           method: 'DELETE',
//         });
//         if (response.ok) {
//           alert('Visitor deleted successfully!');
//           // Reload the page or update the list to reflect changes
//           router.reload();
//         } else {
//           alert('Failed to delete the visitor.');
//         }
//       } catch (error) {
//         console.error('Error deleting visitor:', error);
//         alert('An error occurred while deleting the visitor.');
//       }
//     }
//   };

//   return (
//     <>
//       <h1 className='text-center font-bold text-2xl'>Visitor List</h1>
      
      
      
// <form class="max-w-lg mx-auto">
//     <div class="flex">
//         <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
//         <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All Purpose <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
//   </svg></button>
//         <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
//             <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
//             <li>
//                 <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{}</button>
//             </li>
            
//             </ul>
//         </div>
//         <div class="relative w-full">
//             <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." value={searchQuery}
//             onChange={handleSearchChange} required />
            
//         </div>
//     </div>
// </form>


//       <div className='flex ml-72 '>
//         {filteredList.length > 0 ? (
//           filteredList.map((item) => (
//             <div
//               className="w-60 m-10 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
//               key={item._id}
//             >
//               <div className="flex flex-col mt-2 items-center pb-10">
//                 <img
//                   className="w-24 h-24 mb-3 rounded-full shadow-lg"
//                   src={item.photos || "/default-profile.jpg"}
//                   alt={item.fullName}
//                 />
//                 <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
//                   {item.fullName}
//                 </h5>
//                 <span className="text-sm text-gray-500 dark:text-gray-400">
//                   {item.phoneNo || "Unknown Role"}
//                 </span>
//                 <span className="text-sm text-gray-500 dark:text-gray-400">
//                   {item.village || "Unknown Role"}
//                 </span>
//                 <div className="flex mt-4 md:mt-6">
//                   <button
//                     onClick={() => handleEdit(item._id)} // Call handleEdit when Edit button is clicked
//                     className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(item._id)} // Call handleDelete when Delete button is clicked
//                     className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-red-700 rounded-lg border border-gray-200 hover:bg-red-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-red-800 dark:text-gray-400 dark:border-red-600 dark:hover:text-white dark:hover:bg-gray-700"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-500">No visitors found with the provided phone number.</p>
//         )}
//       </div>
//     </>
//   );
// }

// export default VisitorList;

// export async function getServerSideProps() {
//   if (!mongoose.connections[0].readyState) {
//     await mongoose.connect(process.env.MONGO_URI);
//   }

//   const forms = await Form.find({});
//   const formList = {};

//   forms.forEach((item) => {
//     formList[item._id] = JSON.parse(JSON.stringify(item));
//   });

//   return {
//     props: { formList },
//   };
// }


import React, { useState,useEffect } from 'react';
import mongoose from 'mongoose';
import Form from '@/models/form';
import { useRouter } from 'next/router';


function VisitorList({ formList }) {
  // State to manage the search query and the selected purpose
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPurpose, setSelectedPurpose] = useState('All');

  // Router to navigate to the edit page
  const router = useRouter();

   useEffect(() => {
      const userRole = localStorage.getItem("userRole");
      if (userRole !== "admin") {
        router.push("/login"); // Redirect to login if not an admin
      }
    }, [router]);

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // Handle purpose dropdown change
  const handlePurposeChange = (event) => {
    setSelectedPurpose(event.target.value);
  };

  // Filter the formList based on the search query and selected purpose
  const filteredList = Object.keys(formList).filter((itemKey) => {
    const item = formList[itemKey];
    const matchesSearch = 
      item.fullName.toLowerCase().includes(searchQuery) || 
      item.phoneNo.toLowerCase().includes(searchQuery);

    const matchesPurpose = selectedPurpose === 'All' || item.purpose === selectedPurpose;

    return matchesSearch && matchesPurpose;
  }).map((itemKey) => formList[itemKey]);

  // Edit visitor function
  const handleEdit = (id) => {
    router.push(`/edit-visitor/${id}`); // Navigate to edit page with the visitor's ID
  };

  // Delete visitor function
  const handleDelete = async (id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this visitor?');
    if (isConfirmed) {
      try {
        const response = await fetch(`/api/delete-visitor/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          alert('Visitor deleted successfully!');
          // Reload the page or update the list to reflect changes
          router.reload();
        } else {
          alert('Failed to delete the visitor.');
        }
      } catch (error) {
        console.error('Error deleting visitor:', error);
        alert('An error occurred while deleting the visitor.');
      }
    }
  };

  return (
    <>
      <h1 className='text-center font-bold text-2xl'>Visitor List</h1>
      
      <form className="max-w-lg mx-auto">
        <div className="flex ">
          {/* Purpose Dropdown */}
          <div>
           
            <select 
              id="purpose" 
              value={selectedPurpose} 
              onChange={handlePurposeChange} 
              className="block w-auto p-2.5 text-sm bg-gray-50 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
            >
              <option value="All">All Purpose</option>
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

          {/* Search Input */}
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
              placeholder="Search by Name or Phone"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </form>

      <div className='flex flex-wrap justify-center mt-8'>
        {filteredList.length > 0 ? (
          filteredList.map((item) => (
            <div
              className="w-60 m-10 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              key={item._id}
            >
              <div className="flex flex-col items-center pb-10">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={item.photos || "/default-profile.jpg"}
                  alt={item.fullName}
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {item.fullName}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {item.phoneNo || "Unknown Phone Number"}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {item.village || "Unknown Village"}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Purpose: {item.purpose || "Unknown Purpose"}
                </span>
                <div className="flex mt-4 md:mt-6">
                  <button
                    onClick={() => handleEdit(item._id)} 
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)} 
                    className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-red-700 rounded-lg border border-gray-200 hover:bg-red-100 hover:text-blue-700 focus:ring-4 focus:ring-gray-100 dark:bg-red-800 dark:text-gray-400 dark:border-red-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No visitors found matching the search criteria.</p>
        )}
      </div>
    </>
  );
}

export default VisitorList;

export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  const forms = await Form.find({});
  const formList = {};

  forms.forEach((item) => {
    formList[item._id] = JSON.parse(JSON.stringify(item));
  });

  return {
    props: { formList },
  };
}
