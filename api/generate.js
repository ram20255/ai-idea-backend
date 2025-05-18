import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Generate a unique business or creative idea" }],
      temperature: 0.9,
    });

    const idea = completion.choices[0].message.content;
    res.status(200).json({ idea });
  } catch (error) {
    console.error("OpenAI Error:", error.message);
    res.status(500).json({ error: "Failed to generate idea" });
  }
}
