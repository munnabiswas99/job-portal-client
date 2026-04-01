import { MdLocationPin } from "react-icons/md";
import { NavLink } from "react-router";
import { motion } from "framer-motion";

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    company_logo,
    company,
    location,
    description,
    salaryRange,
    requirements,
  } = job;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="
        card bg-base-100
        w-full max-w-sm sm:max-w-md
        mx-auto
        shadow-lg
        border border-cyan-500/30
        backdrop-blur-lg
        hover:shadow-cyan-500/20
        transition-all duration-300
      "
    >
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-base-300">
        <motion.figure
          whileHover={{ rotate: 5, scale: 1.1 }}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden bg-base-200 p-2 flex-shrink-0"
        >
          <img src={company_logo} alt={company} className="w-full h-full object-contain" />
        </motion.figure>

        <div className="min-w-0">
          <h1 className="text-base sm:text-lg font-bold truncate">
            {company}
          </h1>
          <p className="flex items-center text-xs sm:text-sm opacity-70 gap-1 truncate">
            <MdLocationPin /> {location}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="card-body p-4 sm:p-5">
        <div className="flex justify-between items-start gap-2">
          <h2 className="card-title text-base sm:text-lg line-clamp-2">
            {title}
          </h2>
          <span className="badge badge-secondary animate-pulse text-xs sm:text-sm">
            NEW
          </span>
        </div>

        <p className="text-xs sm:text-sm opacity-80 line-clamp-3">
          {description}
        </p>

        <p className="font-semibold text-cyan-500 text-sm sm:text-base">
          Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mt-2">
          {requirements.slice(0, 4).map((req, index) => (
            <span
              key={index}
              className="badge badge-outline text-xs sm:text-sm"
            >
              {req}
            </span>
          ))}
        </div>

        {/* Button */}
        <motion.div
          whileTap={{ scale: 0.95 }}
          className="flex justify-end mt-4"
        >
          <NavLink
            to={`/jobs/${_id}`}
            className="btn btn-primary w-full sm:w-1/2 rounded-full"
          >
            View Details
          </NavLink>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default JobCard;