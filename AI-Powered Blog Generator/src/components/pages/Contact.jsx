import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import PageWrapper from "../PageWrapper";

const Contact = () => {
  return (
    <PageWrapper>
      <section className="min-h-[85vh] bg-gradient-to-br from-[#fdfbff] to-[#f2f4ff] px-6 py-12 flex items-center justify-center">
        <div className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-xl border border-[#e2e8f0]">
          <h1 className="text-3xl font-bold text-center text-[#6C63FF] mb-4">
            📬 Contact Me
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Have a project idea, feedback, or want to collab? Let's connect!
          </p>

          {/* Contact Form */}
          <form
            action="https://formspree.io/f/xwkgenkd"
            method="POST"
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 rounded-md bg-[#f3f4f6] border border-[#dcdcdc] focus:ring-2 focus:ring-[#6C63FF] outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="p-3 rounded-md bg-[#f3f4f6] border border-[#dcdcdc] focus:ring-2 focus:ring-[#6C63FF] outline-none"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message..."
              required
              className="p-3 rounded-md bg-[#f3f4f6] border border-[#dcdcdc] focus:ring-2 focus:ring-[#6C63FF] outline-none resize-none"
            ></textarea>
            <button
              type="submit"
              className="mt-2 bg-[#6C63FF] text-white py-3 rounded-full font-semibold hover:bg-[#7c75ff] transition"
            >
              ✉️ Send Message
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-8 text-xl text-[#6C63FF]">
            <a
              href="mailto:shaikafrid500@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#817CFF]"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/ShaikAfrid1"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#817CFF]"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/afrid-shaik-7169521a0/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#817CFF]"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contact;
