import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const ViewApplication = () => {
  const applications = useLoaderData();

  const handleStatusChange = (e, applicationId) => {
    const status = e.target.value;

    axios
      .patch(`http://localhost:3000/applications/${applicationId}`, { status })
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Application status updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Job Applications</h1>
        <p className="opacity-70">
          Total Applications:{" "}
          <span className="font-semibold text-primary">
            {applications.length}
          </span>
        </p>
      </div>

      {/* Card */}
      <div className="bg-base-100 shadow-lg rounded-xl border border-base-300 overflow-x-auto">

        <table className="table">

          {/* Table Head */}
          <thead className="bg-base-200 text-base">
            <tr>
              <th>#</th>
              <th>Applicant</th>
              <th>Job Title</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((application, index) => (
              <tr
                key={application._id}
                className="hover:bg-base-200 transition"
              >
                <th>{index + 1}</th>

                {/* Applicant */}
                <td className="font-medium">
                  {application.applicant}
                </td>

                {/* Job */}
                <td className="opacity-80">
                  {application.jobTitle || "Job Position"}
                </td>

                {/* Status */}
                <td>
                  <select
                    defaultValue={application.status}
                    onChange={(e) =>
                      handleStatusChange(e, application._id)
                    }
                    className="select select-bordered select-sm"
                  >
                    <option disabled>Select Status</option>
                    <option>Pending</option>
                    <option>Interview</option>
                    <option>Rejected</option>
                    <option>Hired</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default ViewApplication;