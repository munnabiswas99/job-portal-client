import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaBriefcase, FaMoneyBillWave, FaClock } from "react-icons/fa";

const JobDetails = () => {
  const job = useLoaderData();

  const {
    _id,
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
    <div className="max-w-6xl mx-auto p-6">

      {/* Header Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-base-100 shadow-xl rounded-xl p-6 mb-6 border border-base-300"
      >
        <div className="flex items-center gap-4">
          <img
            src={company_logo}
            alt={company}
            className="w-16 h-16 rounded-lg object-contain"
          />

          <div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="opacity-70">{company}</p>
          </div>
        </div>

        {/* Job Tags */}
        <div className="flex flex-wrap gap-3 mt-4">

          <span className="badge badge-outline gap-2">
            <FaMapMarkerAlt />
            {location}
          </span>

          <span className="badge badge-outline gap-2">
            <FaBriefcase />
            {jobType}
          </span>

          <span className="badge badge-outline gap-2">
            <FaMoneyBillWave />
            {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
          </span>

          <span className="badge badge-outline gap-2">
            <FaClock />
            Deadline: {applicationDeadline}
          </span>

        </div>
      </motion.div>

      {/* Description */}
      <div className="bg-base-100 shadow-lg rounded-xl p-6 mb-6 border border-base-300">
        <h2 className="text-xl font-semibold mb-3">Job Description</h2>
        <p className="opacity-80 leading-relaxed">{description}</p>
      </div>

      {/* Requirements */}
      <div className="bg-base-100 shadow-lg rounded-xl p-6 mb-6 border border-base-300">
        <h2 className="text-xl font-semibold mb-4">Requirements</h2>

        <div className="flex flex-wrap gap-2">
          {requirements.map((req, index) => (
            <span key={index} className="badge badge-primary badge-outline">
              {req}
            </span>
          ))}
        </div>
      </div>

      {/* Responsibilities */}
      <div className="bg-base-100 shadow-lg rounded-xl p-6 mb-6 border border-base-300">
        <h2 className="text-xl font-semibold mb-3">Responsibilities</h2>

        <ul className="space-y-2 list-disc ml-5 opacity-80">
          {responsibilities.map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>
      </div>

      {/* HR Info */}
      <div className="bg-base-100 shadow-lg rounded-xl p-6 mb-8 border border-base-300">
        <h2 className="text-xl font-semibold mb-3">HR Contact</h2>

        <p>
          <span className="font-semibold">Name:</span> {hr_name}
        </p>

        <p>
          <span className="font-semibold">Email:</span> {hr_email}
        </p>
      </div>

      {/* Apply Button */}
      <div className="text-center">
        <Link to={`/jobApply/${_id}`}>
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary px-10 rounded-full shadow-lg"
          >
            Apply Now
          </motion.button>
        </Link>
      </div>

    </div>
  );
};

export default JobDetails;