
import React, { useState } from 'react';
import { generateAiIdeas } from '../services/geminiService';

const AIGenerator: React.FC = () => {
  const [businessType, setBusinessType] = useState('');
  const [ideas, setIdeas] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!businessType.trim()) {
      setError('Please enter a business type or problem.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setIdeas('');

    try {
      const result = await generateAiIdeas(businessType);
      setIdeas(result);
    } catch (e: unknown) {
      const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
      setError(`Failed to generate ideas. ${errorMessage}`);
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const formattedIdeas = ideas.split('\n').filter(line => line.trim() !== '');

  return (
    <section id="ai-generator" className="py-20 md:py-32 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Discover Your AI Potential</h2>
          <p className="text-lg text-slate-400 mt-4 max-w-3xl mx-auto">
            Not sure where to start? Describe your business or a challenge you're facing, and let my AI assistant generate some ideas.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <input
              type="text"
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              placeholder="e.g., 'a local bakery' or 'managing customer support'"
              className="flex-grow bg-slate-700 text-white placeholder-slate-400 border border-slate-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition"
              disabled={isLoading}
            />
            <button
              onClick={handleGenerate}
              disabled={isLoading}
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 disabled:bg-slate-600 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </>
              ) : (
                'Generate Ideas'
              )}
            </button>
          </div>
          
          {error && <p className="text-red-400 text-center">{error}</p>}

          {ideas && (
            <div className="mt-8 bg-slate-900/50 p-6 rounded-lg border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4">Potential AI Solutions:</h3>
              <ul className="space-y-4">
                {formattedIdeas.map((idea, index) => (
                    <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-slate-300">{idea}</span>
                    </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIGenerator;
