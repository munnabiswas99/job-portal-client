import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaTrash } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";

const TableRow = ({ application, index, remainingApplications, setApplications }) => {
  const { _id, jobId, title, company, company_logo, jobType, location } =
    application;

const handleDelete = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "This application will be removed!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      axios
        .delete(`https://job-portal-server-three-sepia.vercel.app/application/${_id}`, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Application removed.", "success");

            const remaining = remainingApplications.filter(
              (app) => app._id !== _id
            );

            setApplications(remaining);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
};

  return (
    <motion.tr
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="hover:bg-base-200 transition"
    >
      <th>{index + 1}</th>

      {/* Company */}
      <td>
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={company_logo} alt={company} />
            </div>
          </div>

          <div>
            <div className="font-semibold">{company}</div>
            <div className="text-sm opacity-60">{location}</div>
          </div>
        </div>
      </td>

      {/* Job */}
      <td>
        <div className="font-medium">{title}</div>
        <span className="badge badge-outline badge-primary mt-1">
          {jobType}
        </span>
      </td>

      {/* Actions */}
      <td className="flex gap-2">
        <Link to={`/jobs/${jobId}`}>
          <button className="btn btn-sm btn-primary gap-2">
            Details
            <FaExternalLinkAlt size={12} />
          </button>
        </Link>

        <button
          onClick={handleDelete}
          className="btn btn-sm btn-error btn-outline gap-2"
        >
          <FaTrash />
          Remove
        </button>
      </td>
    </motion.tr>
  );
};

export default TableRow;