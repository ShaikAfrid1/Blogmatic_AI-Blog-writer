import { Link } from "react-router-dom";
import PageWrapper from "./PageWrapper";

const Home = () => {
  return (
     <PageWrapper>
    <section className="relative bg-gradient-to-br text-[#1C1C1E] min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
      {/* Floating Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#6C63FF] opacity-30 blur-3xl rounded-full -z-10 animate-pulse"></div>

      <div className="max-w-6xl w-full text-center flex flex-col items-center justify-center z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
          <span className="block animate-fade-down">
            ✨ Turn Ideas into Blogs Instantly
          </span>
          <span className="text-[#6C63FF] animate-fade-up delay-100">
            with Blogmatic
          </span>
        </h1>

        <p className="text-lg md:text-xl mb-8 max-w-2xl animate-fade-up delay-200">
          Let AI be your co-writer. Blogmatic helps you brainstorm, draft, and
          publish stunning blog posts — effortlessly and creatively.
        </p>

        <Link
          to="/generate"
          className="inline-block px-8 py-3 rounded-full bg-[#6C63FF] font-semibold shadow-lg hover:scale-105 hover:bg-[#7C70FF] transition-all duration-300 animate-fade-up delay-300"
        >
          🚀 Start Writing with AI
        </Link>

        <img
          src="/Chat.gif"
          alt="AI Writing Illustration"
          className="w-full max-w-lg mt-12 hidden md:block animate-fade-in"
        />
      </div>
    </section>
    </PageWrapper>
  );
};

export default Home;
