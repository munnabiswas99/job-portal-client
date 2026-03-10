import React from "react";
import { Link } from "react-router";

const TableRow = ({application, index}) => {
    const {jobId,title,company, company_logo, jobType, location} = application;
  return (
    <tr>
      <th>
        <label>
          {
            index+1
          }
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={company_logo}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{company}</div>
            <div className="text-sm opacity-50">{location}</div>
          </div>
        </div>
      </td>
      <td>
        {title}
        <br />
        <span className="badge badge-ghost badge-sm">
          {jobType}
        </span>
      </td>
      <th>
        <Link to={`/jobs/${jobId}`}><button className="btn btn-primary">details</button></Link>
        <button className="btn btn-accent">X</button>
      </th>
    </tr>
  );
};

export default TableRow;
