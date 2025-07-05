// src/openaiAPI.js
import axios from "axios";

export const generateBlog = async (prompt) => {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  console.log("Your API Key: ", apiKey);
  if (!apiKey) {
    console.error("🚨 OPENAI API key missing. Check .env file!");
    return "API key not found.";
  }

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        model: "text-davinci-003",
        prompt: `Write a detailed blog post about: ${prompt}`,
        max_tokens: 1024,
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("Error generating blog:", error);
    return "❌ Something went wrong while generating blog content.";
  }
};
