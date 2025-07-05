import { useState } from "react";
import { generateBlog } from "../openaiAPI";
import PageWrapper from "../PageWrapper";

const Generate = () => {
  const [prompt, setPrompt] = useState("");
  const [blog, setBlog] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    const result = await generateBlog(prompt);
    setBlog(result);
    setLoading(false);
  };

  return (
    <PageWrapper>
      <section className="min-h-[85vh] bg-gradient-to-br from-[#fdfbff] to-[#f2f4ff] px-6 py-12 flex justify-center items-start">
        <div className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-xl border border-[#dcdcdc] transition">
          <h1 className="text-3xl font-bold text-center text-[#6C63FF] mb-6">
            🧠 Generate a Blog with AI
          </h1>

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter a topic like 'Benefits of Yoga' or 'Top 10 Coding Tips'..."
            className="w-full h-32 p-4 rounded-xl bg-[#f3f4f6] border-none outline-none text-gray-800 resize-none shadow-inner focus:ring-2 focus:ring-[#6C63FF] transition"
          />

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="mt-4 w-full bg-[#6C63FF] text-white py-3 rounded-full text-lg font-semibold hover:bg-[#7c75ff] active:scale-95 transition"
          >
            {loading ? "⚡ Generating..." : "🚀 Generate Blog"}
          </button>

          {blog && (
            <div className="mt-10 bg-[#f9f9f9] p-6 rounded-lg shadow-sm border border-[#e5e7eb] transition">
              <h2 className="text-2xl font-semibold mb-3 text-[#6C63FF]">
                ✍️ Your AI Blog
              </h2>
              <p className="text-gray-800 whitespace-pre-line leading-relaxed">
                {blog}
              </p>
            </div>
          )}
        </div>
      </section>
    </PageWrapper>
  );
};

export default Generate;
