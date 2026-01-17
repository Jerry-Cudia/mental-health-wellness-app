// src/services/aiSupport.js
const API_KEY = '';

export async function getAiMessage(userMood) {
  console.log("Attempting to connect to Groq...");

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: "You are a helpful mental health assistant. Keep responses short and kind."
          },
          {
            role: "user",
            content: userMood
          }
        ]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Groq API Error Response:", errorText);
      throw new Error(`Status: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;

  } catch (error) {
    console.error("Fetch Error:", error);
    return "I'm having trouble connecting to the AI. Please check your internet or API key.";
  }
}