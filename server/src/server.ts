import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenAI } from "@google/genai";

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// --- Middleware ---

// CORS Configuration
const corsOrigin = process.env.CORS_ORIGIN;
if (!corsOrigin) {
    throw new Error("CORS_ORIGIN environment variable not set. Server cannot start.");
}
app.use(cors({ origin: corsOrigin }));

// JSON body parser
app.use(express.json());

// --- Gemini AI Setup ---

const apiKey = process.env.API_KEY;
if (!apiKey) {
    throw new Error("API_KEY environment variable not set. Server cannot start.");
}
const ai = new GoogleGenAI({ apiKey });

// --- API Routes ---

app.post('/api/generate-ideas', async (req: Request, res: Response) => {
    const { prompt } = req.body;

    if (!prompt || typeof prompt !== 'string' || !prompt.trim()) {
        return res.status(400).json({ error: 'Prompt cannot be empty.' });
    }

    try {
        const fullPrompt = `Based on the following concept or challenge, generate 3 innovative AI-powered features or ideas. Format the response in Markdown, with each idea having a bolded title on a new line, followed by a description. Concept: "${prompt}"`;

        const stream = await ai.models.generateContentStream({
            model: "gemini-2.5-flash",
            contents: fullPrompt,
        });

        // Set headers for streaming
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.setHeader('Transfer-Encoding', 'chunked');

        // Stream the response
        for await (const chunk of stream) {
            if(chunk.text) {
                res.write(chunk.text);
            }
        }

        res.end();

    } catch (error) {
        console.error("Error generating AI ideas stream from Google API:", error);
        // If headers have been sent, we can't send a new status code/body.
        // The client-side will have to handle the abruptly closed connection.
        if (!res.headersSent) {
            res.status(500).json({ error: 'An internal error occurred while generating ideas.' });
        } else {
            res.end();
        }
    }
});

// --- Server Start ---

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
    console.log(`Accepting requests from origin: ${corsOrigin}`);
});
