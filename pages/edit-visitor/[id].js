import React, { useState, useEffect } from 'react';
import mongoose from 'mongoose';
import Form from '@/models/form';
import { useRouter } from 'next/router';

const EditVisitor = ({ visitor }) => {
  const [formData, setFormData] = useState(visitor);
  const router = useRouter();

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/update-visitor/${visitor._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Visitor updated successfully!');
        router.push('/'); // Redirect to the home page or visitor list
      } else {
        alert('Failed to update the visitor.');
      }
    } catch (error) {
      console.error('Error updating visitor:', error);
      alert('An error occurred while updating the visitor.');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8 mb-10">
      <h1 className="text-center font-bold text-2xl">Edit Visitor</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <img src={formData.photos || ''} width={100} height={50} className='m-auto' />
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName || ''}
            onChange={handleInputChange}
            required
            className="w-full p-2.5 border rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="phoneNo" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNo"
            name="phoneNo"
            value={formData.phoneNo || ''}
            onChange={handleInputChange}
            required
            className="w-full p-2.5 border rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="village" className="block text-sm font-medium text-gray-700">
            Village
          </label>
          <input
            type="text"
            id="village"
            name="village"
            value={formData.village || ''}
            onChange={handleInputChange}
            className="w-full p-2.5 border rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="photos" className="block text-sm font-medium text-gray-700">
            purpose
          </label>
          <input
            type="text"
            id="photos"
            name="photos"
            value={formData.purpose || ''}
            onChange={handleInputChange}
            className="w-full p-2.5 border rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="w-full  py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { id } = params;

  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  const visitor = await Form.findById(id);

  if (!visitor) {
    return {
      notFound: true,
    };
  }

  return {
    props: { visitor: JSON.parse(JSON.stringify(visitor)) },
  };
}

export default EditVisitor;
