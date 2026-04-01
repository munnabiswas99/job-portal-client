import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaGlobe, FaFileAlt } from "react-icons/fa";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();

  const handleJobApply = (e) => {
    e.preventDefault();

    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const portfolio = form.portfolio.value;
    const resume = form.resume.value;

    const application = {
      jobId,
      applicant: user.email,
      linkedIn,
      github,
      portfolio,
      resume,
      status: "pending",
    };

    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Application Submitted!",
            text: "Your application has been recorded.",
            timer: 2000,
            showConfirmButton: false,
          });

          form.reset();
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-base-100 shadow-xl rounded-xl p-8 w-full max-w-xl"
      >
        {/* Title */}
        <h1 className="text-3xl font-bold mb-2">
          Apply for this Job
        </h1>

        <p className="opacity-70 mb-6">
          <Link
            to={`/jobs/${jobId}`}
            className="text-primary underline"
          >
            View Job Details
          </Link>
        </p>

        {/* Form */}
        <form onSubmit={handleJobApply} className="space-y-4">

          {/* LinkedIn */}
          <div>
            <label className="label">LinkedIn Profile</label>
            <div className="flex items-center gap-2">
              <FaLinkedin className="text-blue-600" />
              <input
                type="url"
                name="linkedIn"
                placeholder="https://linkedin.com/..."
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          {/* GitHub */}
          <div>
            <label className="label">GitHub Profile</label>
            <div className="flex items-center gap-2">
              <FaGithub />
              <input
                type="url"
                name="github"
                placeholder="https://github.com/..."
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Portfolio */}
          <div>
            <label className="label">Portfolio Website</label>
            <div className="flex items-center gap-2">
              <FaGlobe />
              <input
                type="url"
                name="portfolio"
                placeholder="https://yourportfolio.com"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Resume */}
          <div>
            <label className="label">Resume Link</label>
            <div className="flex items-center gap-2">
              <FaFileAlt />
              <input
                type="url"
                name="resume"
                placeholder="Google Drive / Dropbox link"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary w-full mt-4"
          >
            Submit Application
          </motion.button>

        </form>
      </motion.div>
    </div>
  );
};

export default JobApply;