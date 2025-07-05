/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#F6F8FA] text-gray-700 py-6 text-center text-sm border-t"
    >
      <div className="max-w-6xl mx-auto">
        © {new Date().getFullYear()} Blogmatic. Built with ❤️ by Afrid.
      </div>
    </motion.footer>
  );
};

export default Footer;
