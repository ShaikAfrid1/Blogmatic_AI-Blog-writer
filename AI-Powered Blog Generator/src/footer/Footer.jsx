/* eslint-disable no-unused-vars */
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-white/70 backdrop-blur-sm border-t border-gray-200 shadow-inner"
    >
      <div className="max-w-6xl mx-auto py-6 px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-700">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left font-medium text-sm"
        >
          Made with 💕 by{" "}
          <span className="font-semibold text-[#6C63FF]">Shaik Afrid</span> ©{" "}
          {new Date().getFullYear()}
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-5 text-xl"
        >
          <motion.a
            href="mailto:shaikafrid500@gmail.com"
            whileHover={{ scale: 1.2 }}
            className="transition-all text-gray-600 hover:text-[#6C63FF]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </motion.a>

          <motion.a
            href="https://github.com/ShaikAfrid1"
            whileHover={{ scale: 1.2 }}
            className="transition-all text-gray-600 hover:text-[#6C63FF]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/afrid-shaik-7169521a0/"
            whileHover={{ scale: 1.2 }}
            className="transition-all text-gray-600 hover:text-[#6C63FF]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </motion.a>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
