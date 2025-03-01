import React, { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = ({ fields }) => {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );

  const [errors, setErrors] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );

  const validateForm = () => {
    const newErrors = {};
    fields.forEach((field) => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = "This field is required";
      } else if (field.type === "email" && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData[field.name])) {
        newErrors[field.name] = "Invalid email address";
      }
    });
    setErrors(newErrors);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    validateForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (Object.values(errors).every((error) => !error)) {
      console.log("Form Data Submitted:", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-title">Register</h2>
      {fields.map((field) => (
        <div key={field.name} className="form-group">
          <label className="form-label">
            {field.label}
          </label>
          <input
            type={field.type || "text"}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            className={`form-input ${errors[field.name] ? "error" : ""}`}
          />
          {errors[field.name] && <div className="error-message">{errors[field.name]}</div>}
        </div>
      ))}
      <button type="submit" className="form-button">
        Register
      </button>
    </form>
  );
};

export default function App() {
  const formFields = [
    { name: "username", label: "Username", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "password", label: "Password", type: "password", required: true }
  ];

  return (
    <div className="app-container">
      <RegistrationForm fields={formFields} />
    </div>
  );
}