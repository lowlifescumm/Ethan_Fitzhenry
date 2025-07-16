import React, { useState, useEffect } from 'react';
import { generateAiIdeasStream } from '../services/geminiService';
import type { AiIdea } from '../types';
import IdeaCard from './IdeaCard';

const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center py-4">
    <svg className="animate-spin -ml-1 mr-3 h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <span className="text-text-secondary">Generating ideas...</span>
  </div>
);

const AIGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [streamingResult, setStreamingResult] = useState('');
  const [ideas, setIdeas] = useState<AiIdea[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!streamingResult) {
        setIdeas([]);
        return;
    }

    const ideaRegex = /\*\*(.*?)\*\*\s*\n(.*?)(?=\n\*\*|$)/gs;
    const matches = Array.from(streamingResult.matchAll(ideaRegex));
    
    const parsedIdeas: AiIdea[] = matches.map(match => ({
      title: match[1].trim(),
      description: match[2].trim(),
    }));

    setIdeas(parsedIdeas);
  }, [streamingResult]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) {
      setError('Please describe your business or challenge.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setStreamingResult('');
    setIdeas([]);

    try {
      const stream = await generateAiIdeasStream(prompt);
      let fullText = '';
      for await (const chunk of stream) {
        fullText += chunk.text;
        setStreamingResult(fullText);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-generator" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main">Discover Your AI Potential</h2>
          <p className="text-text-secondary mt-2">
            Not sure where to start? Describe your business or a challenge you're facing, and let my AI assistant generate some ideas.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., A local coffee shop struggling with customer loyalty"
              className="flex-grow bg-background border-2 border-secondary rounded-full py-3 px-6 text-text-main focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:ring-offset-card transition-colors"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:ring-offset-card"
              disabled={isLoading}
            >
              {isLoading ? 'Generating...' : 'Generate Ideas'}
            </button>
          </div>
        </form>

        <div className="mt-12 max-w-3xl mx-auto">
          {isLoading && ideas.length === 0 && <LoadingSpinner />}
          {error && <p className="text-center text-red-400 bg-red-900/50 p-3 rounded-lg">{error}</p>}
          {ideas.length > 0 && (
             <div className="grid grid-cols-1 gap-4">
               {ideas.map((idea, index) => (
                  <IdeaCard key={index} title={idea.title} description={idea.description} />
               ))}
             </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIGenerator;