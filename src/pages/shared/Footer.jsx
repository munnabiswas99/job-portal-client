import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 border-t border-base-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-primary">JobPortal</h2>
          <p className="mt-3 text-sm opacity-80">
            Find your dream job and connect with top companies around the world.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl">
            <a className="hover:text-primary transition">
              <FaFacebook />
            </a>
            <a className="hover:text-primary transition">
              <FaTwitter />
            </a>
            <a className="hover:text-primary transition">
              <FaLinkedin />
            </a>
            <a className="hover:text-primary transition">
              <FaGithub />
            </a>
          </div>
        </motion.div>

        {/* Services */}
        <motion.nav
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h6 className="font-semibold text-lg mb-3">Services</h6>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-primary cursor-pointer transition">Job Search</li>
            <li className="hover:text-primary cursor-pointer transition">Career Advice</li>
            <li className="hover:text-primary cursor-pointer transition">Resume Builder</li>
            <li className="hover:text-primary cursor-pointer transition">Company Reviews</li>
          </ul>
        </motion.nav>

        {/* Company */}
        <motion.nav
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h6 className="font-semibold text-lg mb-3">Company</h6>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-primary cursor-pointer transition">About Us</li>
            <li className="hover:text-primary cursor-pointer transition">Contact</li>
            <li className="hover:text-primary cursor-pointer transition">Careers</li>
            <li className="hover:text-primary cursor-pointer transition">Press</li>
          </ul>
        </motion.nav>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h6 className="font-semibold text-lg mb-3">Newsletter</h6>
          <p className="text-sm mb-3 opacity-80">
            Get the latest job updates.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="input input-bordered w-full rounded-r-none"
            />
            <button className="btn btn-primary rounded-l-none">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-base-300 text-center py-4 text-sm opacity-70">
        © {new Date().getFullYear()} JobPortal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;