import { FaUserCircle, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import PageWrapper from "../PageWrapper";

const Profile = () => {
  const user = {
    name: "Shaik Afrid",
    email: "shaikafrid500@gmail.com",
    role: "Frontend Developer",
    github: "https://github.com/ShaikAfrid1",
    linkedin: "https://www.linkedin.com/in/afrid-shaik-7169521a0/",
  };

  return (
    <PageWrapper>
      <section className="min-h-[85vh] bg-gradient-to-br from-[#fdfbff] to-[#f2f4ff] px-6 py-12 flex justify-center items-center">
        <div className="w-full max-w-xl bg-white p-8 rounded-xl shadow-lg border border-[#e2e8f0] text-center">
          <FaUserCircle className="text-6xl text-[#6C63FF] mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-[#1c1c1e] mb-1">
            {user.name}
          </h1>
          <p className="text-gray-600 mb-4">{user.role}</p>

          <div className="text-sm text-gray-500 mb-6">
            <FaEnvelope className="inline mr-2" />
            {user.email}
          </div>

          <div className="flex justify-center gap-6 text-xl text-[#6C63FF]">
            <a
              href={user.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#817CFF]"
            >
              <FaGithub />
            </a>
            <a
              href={user.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#817CFF]"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Future Enhancements */}
          <div className="mt-8 text-sm text-gray-400 italic">
            ✨ Profile management features coming soon...
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Profile;
