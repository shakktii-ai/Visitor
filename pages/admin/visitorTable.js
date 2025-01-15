import React, { useState, useEffect } from "react";
import mongoose from "mongoose";
import Form from "../../models/form"; // Assuming you have a Mongoose model for the Form
import { useRouter } from "next/router";

function VisitorList({ formList }) {
    const router = useRouter();

    useEffect(() => {
      const userRole = localStorage.getItem("userRole");
      if (userRole !== "admin") {
        router.push("/login"); // Redirect to login if not an admin
      }
    }, [router]);


  // Set default to an empty object if formList is undefined or null
  const [filteredVisitors, setFilteredVisitors] = useState(Object.values(formList || {}));
  const [purposeFilter, setPurposeFilter] = useState("");
  const [editVisitor, setEditVisitor] = useState(null); // To store the visitor to be edited
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNo: "",
    email: "",
    village: "",
    purpose: "",
  });

  useEffect(() => {
    let filtered = Object.values(formList || {});  // Ensure formList is always an object
    if (purposeFilter) {
      filtered = filtered.filter(
        (visitor) => visitor.purpose.toLowerCase().trim() === purposeFilter
      );
    }
    setFilteredVisitors(filtered);
  }, [purposeFilter, formList]);

  // Handle delete action
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this visitor?");
    try {
      const response = await fetch(`/api/visitor?id=${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        const updatedVisitors = filteredVisitors.filter((visitor) => visitor._id !== id);
        setFilteredVisitors(updatedVisitors);
      } else {
        console.log("Failed to delete visitor");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Handle edit action - open the form with visitor details
  const handleEdit = (visitor) => {
    setEditVisitor(visitor);
    setFormData({
      fullName: visitor.fullName,
      phoneNo: visitor.phoneNo,
      email: visitor.email,
      village: visitor.village,
      purpose: visitor.purpose,
    });
  };

  // Handle form submit (PUT request)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/visitor`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: editVisitor._id, ...formData }),
      });
      if (response.ok) {
        const updatedVisitor = await response.json();
        setFilteredVisitors((prev) =>
          prev.map((visitor) =>
            visitor._id === updatedVisitor._id ? updatedVisitor : visitor
          )
        );
        setEditVisitor(null);
      } else {
        console.log("Failed to update visitor");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="overflow-x-auto shadow-md sm:rounded-lg p-4 sm:ml-64">
        <div className="flex">
          <h1 className="m-auto font-semibold">Visitor List</h1>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400 bg-orange-400">
            <tr>
              <th scope="col" className="px-6 py-3 dark:bg-gray-800">Full Name</th>
              <th scope="col" className="px-6 py-3">Phone No</th>
              <th scope="col" className="px-6 py-3 dark:bg-gray-800">Email</th>
              <th scope="col" className="px-6 py-3">Village</th>
              <th scope="col" className="px-6 py-3">
                <select
                  value={purposeFilter}
                  onChange={(e) => setPurposeFilter(e.target.value)}
                  className="flex items-center w-full text-gray-900 transition duration-75 rounded-lg group bg-orange-400 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                >
                  <option value="">All Purposes</option>
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
              </th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredVisitors.map((visitor) => (
              <tr className="border-b border-gray-200 dark:border-gray-700" key={visitor._id}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                  {visitor.fullName}
                </th>
                <td className="px-6 py-4">{visitor.phoneNo}</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">{visitor.email}</td>
                <td className="px-6 py-4">{visitor.village}</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">{visitor.purpose}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleEdit(visitor)}
                    className="m-1 border-2 p-1 rounded-md bg-blue-700 text-white"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(visitor._id)}
                    className="m-2 border-2 bg-red-700 text-white p-1 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Edit Modal */}
        {editVisitor && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
              <h3 className="font-semibold text-lg mb-4">Edit Visitor</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="border p-2 w-full"
                  />
                </div>
                <div className="mb-2">
                  <label>Phone No</label>
                  <input
                    type="text"
                    name="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleChange}
                    className="border p-2 w-full"
                  />
                </div>
                <div className="mb-2">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border p-2 w-full"
                  />
                </div>
                <div className="mb-2">
                  <label>Village</label>
                  <input
                    type="text"
                    name="village"
                    value={formData.village}
                    onChange={handleChange}
                    className="border p-2 w-full"
                  />
                </div>
                <div className="mb-2">
                  <label>Purpose</label>
                  <input
                    type="text"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    className="border p-2 w-full"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setEditVisitor(null)}
                    className="border p-2 bg-red-600 text-white rounded-md mr-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="border p-2 bg-green-600 text-white rounded-md"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


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

export default VisitorList;
