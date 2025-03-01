import React, { useState } from "react";

const RegistrationForm = ({ fields }) => {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
<form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg border border-gray-300">
      <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">Register</h2>
      {fields.map((field) => (
        <div key={field.name} className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {field.label}
          </label>
          <input
            type={field.type || "text"}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
      ))}
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200">
        Register
      </button>
    </form>
  );
};

export default function App() {
  const formFields = [
    { name: "username", label: "Username" },
    { name: "email", label: "Email", type: "email" },
    { name: "password", label: "Password", type: "password" }
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <RegistrationForm fields={formFields} />
    </div>
  );
}
