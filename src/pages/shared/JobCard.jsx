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
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="
        group
        bg-base-100
        w-full max-w-sm sm:max-w-md
        mx-auto
        rounded-2xl
        shadow-md hover:shadow-xl
        border border-base-200
        overflow-hidden
        transition-all duration-300
      "
    >
      {/* Header */}
      <div className="flex items-center gap-3 p-4">

        <motion.div
          whileHover={{ scale: 1.1, rotate: 3 }}
          className="
            w-12 h-12 sm:w-14 sm:h-14
            rounded-xl
            bg-base-200
            flex items-center justify-center
            overflow-hidden
            border
          "
        >
          <img
            src={company_logo}
            alt={company}
            className="w-full h-full object-contain"
          />
        </motion.div>

        <div className="flex-1 min-w-0">
          <h1 className="text-sm sm:text-base font-semibold truncate">
            {company}
          </h1>

          <p className="flex items-center text-xs sm:text-sm text-gray-500 gap-1 truncate">
            <MdLocationPin className="text-base" />
            {location}
          </p>
        </div>

        {/* NEW badge */}
        <span className="badge badge-primary badge-sm animate-pulse">
          NEW
        </span>
      </div>

      {/* Divider */}
      <div className="border-t border-base-200"></div>

      {/* Body */}
      <div className="p-4 sm:p-5 space-y-3">

        {/* Title */}
        <h2 className="text-base sm:text-lg font-bold line-clamp-2 group-hover:text-primary transition">
          {title}
        </h2>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-500 line-clamp-3">
          {description}
        </p>

        {/* Salary */}
        <div className="flex justify-between items-center">
          <p className="text-sm sm:text-base font-semibold text-green-600">
            ৳ {salaryRange.min} - {salaryRange.max}
          </p>

          <span className="text-xs text-gray-400 uppercase">
            {salaryRange.currency}
          </span>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {requirements.slice(0, 4).map((req, index) => (
            <span
              key={index}
              className="
                px-2 py-1
                text-xs
                bg-base-200
                rounded-full
                hover:bg-primary hover:text-white
                transition
              "
            >
              {req}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3">

          <span className="text-xs text-gray-400">
            Posted recently
          </span>

          <motion.div whileTap={{ scale: 0.95 }}>
            <NavLink
              to={`/jobs/${_id}`}
              className="
                btn btn-primary
                btn-sm
                rounded-full
                px-4
                group-hover:scale-105
                transition
              "
            >
              View Details →
            </NavLink>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default JobCard;