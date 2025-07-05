import PageWrapper from "../PageWrapper";

const About = () => {
  return (
    <PageWrapper>
      <section className="bg-gradient-to-b from-[#fdfbff] to-[#f2f4ff] min-h-[90vh] px-6 py-12 flex justify-center items-start">
        <div className="max-w-4xl w-full text-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#6C63FF]">
            👋 About Blogmatic
          </h1>

          <p className="text-lg md:text-xl text-gray-700">
            Blogmatic is your AI-powered blog writing assistant. Whether you’re
            a creator, student, marketer or dreamer — it helps you turn ideas
            into polished blog posts within seconds. No writer’s block, just
            instant brilliance. 💡
          </p>

          <div className="bg-white border border-[#e2e8f0] p-6 rounded-xl shadow-md text-left">
            <h2 className="text-2xl font-semibold mb-4 text-[#6C63FF]">
              🚀 Features
            </h2>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>✨ Instant Blog Generation with AI</li>
              <li>🎨 Choose Style (Creative, Informative, etc.)</li>
              <li>📌 Save & View Your Blogs Anytime</li>
              <li>⚡ Sleek, Fast & Easy-to-Use UI</li>
              <li>💜 Built for Creatives, by Creatives</li>
            </ul>
          </div>

          <p className="text-sm text-gray-500 mt-10">
            Built with 💖 by{" "}
            <span className="font-semibold text-[#6C63FF]">Shaik Afrid</span>{" "}
            using React, Tailwind CSS & OpenAI API.
          </p>
        </div>
      </section>
    </PageWrapper>
  );
};

export default About;
