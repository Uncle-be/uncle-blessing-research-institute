import { GoogleGenAI } from "@google/genai";

export const getResearchConsultation = async (prompt: string) => {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    return "I'm currently in 'Consultant Mode'. For specific project pricing and deep strategy, please message Uncle Blessing directly on WhatsApp.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are the Global Research Strategist for Uncle Blessing Research Institute. Your founder is Blessing Omiyale, a prestigious graduate of FUOYE. Your goal is to convert visitors into clients by showcasing expertise in: 1. Academic Project Writing, 2. Market Research, 3. Business Strategy, 4. Data Analysis. Always encourage a final consultation on WhatsApp at +2349033597562.",
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Please reach out to Uncle Blessing on WhatsApp for immediate priority service!";
  }
};
