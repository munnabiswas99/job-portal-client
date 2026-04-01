import React, { use } from "react";
import { Link } from "react-router";

const JobList = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Total Jobs: {jobs.length}</h1>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Deadline</th>
              <th>Type</th>
              <th>Applications</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={job._id}>
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <td>{job.jobType}</td>
                <td>
                  <Link
                    to={`/applications/${job._id}`}
                    className="btn btn-sm btn-primary"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {jobs.map((job, index) => (
          <div
            key={job._id}
            className="card bg-base-100 shadow-md p-4 border rounded-lg"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">{index + 1}.</span>
              <span className="badge badge-secondary">{job.jobType}</span>
            </div>
            <h2 className="text-lg font-bold mb-1">{job.title}</h2>
            <p className="text-gray-500 mb-2">Deadline: {job.applicationDeadline}</p>
            <Link
              to={`/applications/${job._id}`}
              className="btn btn-sm btn-primary w-full"
            >
              View Applications
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;