import React, { use } from "react";
import TableRow from "./TableRow";

const ApplicationList = ({ myApplicationPromise }) => {
  const applications = use(myApplicationPromise);

  return (
    <div className="max-w-6xl mx-auto p-6">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">My Applications</h1>
        <p className="opacity-70">
          Total Applied Jobs:{" "}
          <span className="text-primary font-semibold">
            {applications.length}
          </span>
        </p>
      </div>

      {/* Table Card */}
      <div className="bg-base-100 border border-base-300 rounded-xl shadow-lg overflow-x-auto">
        <table className="table">

          {/* Head */}
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Company</th>
              <th>Job</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((application, index) => (
              <TableRow
                key={application._id}
                application={application}
                index={index}
              />
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default ApplicationList;