
import { GoogleGenAI } from "@google/genai";

// Ensure the API key is available from environment variables
if (!process.env.API_KEY) {
  // In a real app, you might have a more robust way to handle this,
  // but for this context, we throw an error to make it clear.
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates AI solution ideas for a given business type or problem.
 * @param businessProblem - A string describing the user's business or challenge.
 * @returns A promise that resolves to a string containing AI ideas.
 */
export const generateAiIdeas = async (businessProblem: string): Promise<string> => {
  const model = "gemini-2.5-flash";
  
  const systemInstruction = "You are an expert AI consultant specializing in helping small businesses. You provide three concise, actionable, and innovative AI-powered solutions. Your tone is professional, encouraging, and clear. Do not use markdown formatting. Each idea should be a single, complete sentence.";
  
  const userPrompt = `My business is: "${businessProblem}". Based on this, what are 3 specific AI solutions (like automations or voice agents) that could help improve efficiency or increase sales? For each solution, provide a brief explanation of its benefit within the same sentence.`;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: userPrompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
      }
    });

    const text = response.text;
    if (!text) {
        throw new Error("The API returned an empty response.");
    }

    return text;
  } catch (error) {
    console.error("Gemini API call failed:", error);
    if (error instanceof Error) {
        throw new Error(`Error from AI service: ${error.message}`);
    }
    throw new Error("An unexpected error occurred while communicating with the AI service.");
  }
};
