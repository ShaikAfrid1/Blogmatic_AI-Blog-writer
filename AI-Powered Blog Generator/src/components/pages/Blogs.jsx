/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import PageWrapper from "../PageWrapper";

const Blogs = () => {
  const [savedBlogs, setSavedBlogs] = useState([
    {
      id: 1,
      title: "Top 10 Productivity Hacks",
      content:
        "Discover game-changing techniques to boost your focus, energy, and results — from time blocking to tech tools that do the work for you.",
    },
    {
      id: 2,
      title: "AI in Everyday Life",
      content:
        "AI isn’t the future — it’s the present. From smart assistants to personalized shopping, here’s how AI is shaping our lives daily.",
    },
    {
      id: 3,
      title: "Why Learning to Code is a Superpower",
      content:
        "Coding is more than syntax — it's creative problem solving, automation, and the freedom to build your own ideas into reality.",
    },
  ]);

  return (
    <PageWrapper>
      <section className="min-h-[85vh] bg-gradient-to-br from-[#fdfbff] to-[#f2f4ff] px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-[#6C63FF] mb-10 flex items-center justify-center gap-2">
            <FaBookmark />
            Saved Blogs
          </h1>

          {savedBlogs.length === 0 ? (
            <p className="text-center text-gray-500 text-lg">
              You haven’t saved any blogs yet.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {savedBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <h2 className="text-xl font-semibold mb-2 text-[#6C63FF]">
                    {blog.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {blog.content.length > 200
                      ? blog.content.slice(0, 200) + "..."
                      : blog.content}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </PageWrapper>
  );
};

export default Blogs;
