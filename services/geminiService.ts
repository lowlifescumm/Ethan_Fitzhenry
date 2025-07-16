// This service now communicates with our secure backend proxy
// instead of directly with the Google GenAI API.

export async function* generateAiIdeasStream(prompt: string) {
  if (!prompt.trim()) {
    throw new Error("Prompt cannot be empty.");
  }

  const response = await fetch('/api/generate-ideas', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ error: 'Failed to generate ideas. Please try again.' }));
    throw new Error(errorData.error || 'An unknown error occurred.');
  }

  if (!response.body) {
    throw new Error('Streaming response not available.');
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      // Yield an object that matches the structure the component expects.
      // The component expects `chunk.text`.
      yield { text: decoder.decode(value) };
    }
  } catch (error) {
    console.error("Error reading stream:", error);
    throw new Error("Failed to read the generated ideas stream.");
  }
}
