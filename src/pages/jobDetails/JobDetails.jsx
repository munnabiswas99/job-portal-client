import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();

  const {
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    hr_email,
    hr_name,
    company_logo,
  } = job;

  return (
    <div className="max-w-5xl mx-auto p-6">

      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={company_logo}
          alt={company}
          className="w-16 h-16 object-contain"
        />
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-gray-500">{company}</p>
        </div>
      </div>

      {/* Job Info */}
      <div className="grid md:grid-cols-2 gap-4 mb-6 bg-gray-50 p-4 rounded-lg text-black">
        <p><span className="font-semibold">Location:</span> {location}</p>
        <p><span className="font-semibold">Job Type:</span> {jobType}</p>
        <p><span className="font-semibold">Category:</span> {category}</p>
        <p><span className="font-semibold">Deadline:</span> {applicationDeadline}</p>
        <p>
          <span className="font-semibold">Salary:</span>{" "}
          {salaryRange.min} - {salaryRange.max} {salaryRange.currency.toUpperCase()}
        </p>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Job Description</h2>
        <p className="text-gray-700">{description}</p>
      </div>

      {/* Requirements */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Requirements</h2>
        <ul className="list-disc ml-6">
          {requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      {/* Responsibilities */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Responsibilities</h2>
        <ul className="list-disc ml-6">
          {responsibilities.map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>
      </div>

      {/* HR Info */}
      <div className="mb-8 bg-gray-50 p-4 rounded-lg text-black">
        <h2 className="text-xl font-semibold mb-2">HR Contact</h2>
        <p><span className="font-semibold">Name:</span> {hr_name}</p>
        <p><span className="font-semibold">Email:</span> {hr_email}</p>
      </div>

      {/* Apply Button */}
      <div className="text-center">
        <button className="btn btn-primary w-full md:w-60">
          Apply Now
        </button>
      </div>

    </div>
  );
};

export default JobDetails;