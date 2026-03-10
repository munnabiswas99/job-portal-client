import React, { use } from "react";
import TableRow from "./TableRow";

const ApplicationList = ({ myApplicationPromise }) => {
  const applications = use(myApplicationPromise);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  #
                </label>
              </th>
              <th>Company</th>
              <th>Job</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
                {
                    applications.map((application, index) => <TableRow key={application._id} application={application} index={index}></TableRow>)
                }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
