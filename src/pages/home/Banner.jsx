import { motion } from "framer-motion";
import React from "react";
import team1 from "../../assets/team/team1.jpg";
import team2 from "../../assets/team/team2.jpg";
import { NavLink } from "react-router";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200 px-4 overflow-hidden">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12">
        {/* IMAGE SECTION */}
        <div className="flex-1 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-8">
          <motion.img
            src={team1}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0, y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="
              w-44 sm:w-56 md:w-64 lg:max-w-sm
              shadow-xl
              border-blue-500 border-l-8 border-b-8
              rounded-t-3xl rounded-br-3xl
            "
          />

          <motion.img
            src={team2}
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0, y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="
              w-44 sm:w-56 md:w-64 lg:max-w-sm
              shadow-xl
              border-blue-500 border-l-8 border-b-8
              rounded-t-3xl rounded-br-3xl
            "
          />
        </div>

        {/* TEXT SECTION */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
          >
            Find Your Next{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Opportunity
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="py-6 text-sm sm:text-base opacity-80 max-w-lg"
          >
            Discover thousands of job opportunities from top companies. Build
            your career and connect with employers worldwide.
          </motion.p>

          <NavLink to="/register">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary rounded-full px-8 shadow-lg"
            >
              Get Started
            </motion.button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
