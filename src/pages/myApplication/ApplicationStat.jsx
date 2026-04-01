import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaFileAlt, FaUserCheck } from "react-icons/fa";

const ApplicationStat = () => {
  const stats = [
    {
      title: "Jobs Applied",
      value: "24",
      desc: "Applications submitted",
      icon: <FaFileAlt size={28} />,
      color: "text-primary",
    },
    {
      title: "Interviews",
      value: "8",
      desc: "Scheduled interviews",
      icon: <FaUserCheck size={28} />,
      color: "text-secondary",
    },
    {
      title: "Active Jobs",
      value: "12",
      desc: "Currently open positions",
      icon: <FaBriefcase size={28} />,
      color: "text-accent",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">

      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="bg-base-100 shadow-lg border border-base-300 rounded-xl p-6"
        >
          <div className="flex justify-between items-center mb-4">
            <div className={`${stat.color}`}>{stat.icon}</div>
          </div>

          <div className="text-3xl font-bold">{stat.value}</div>
          <div className="text-lg font-medium">{stat.title}</div>
          <p className="text-sm opacity-70">{stat.desc}</p>
        </motion.div>
      ))}
      
    </div>
  );
};

export default ApplicationStat;