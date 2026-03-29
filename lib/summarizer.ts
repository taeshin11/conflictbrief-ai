export async function summarize(text: string): Promise<string> {
  // Try Hugging Face first
  const hfToken = process.env.HF_API_TOKEN;
  if (hfToken) {
    try {
      return await summarizeWithHF(text, hfToken);
    } catch {
      // fall through to Groq
    }
  }

  // Fallback to Groq
  const groqKey = process.env.GROQ_API_KEY;
  if (groqKey) {
    return await summarizeWithGroq(text, groqKey);
  }

  // No API keys — return truncated text
  return text.length > 150 ? text.slice(0, 147) + "..." : text;
}

async function summarizeWithHF(text: string, token: string): Promise<string> {
  const res = await fetch(
    "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: text,
        parameters: { max_length: 60, min_length: 20, do_sample: false },
      }),
    }
  );

  if (!res.ok) throw new Error(`HF API error: ${res.status}`);
  const json = await res.json();
  const summary: string = json[0]?.summary_text ?? text;
  return summary.length > 150 ? summary.slice(0, 147) + "..." : summary;
}

async function summarizeWithGroq(text: string, apiKey: string): Promise<string> {
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content:
            "Summarize the following news text in exactly one sentence, max 150 characters. Only output the summary, nothing else.",
        },
        { role: "user", content: text },
      ],
      max_tokens: 80,
      temperature: 0.2,
    }),
  });

  if (!res.ok) throw new Error(`Groq API error: ${res.status}`);
  const json = await res.json();
  const summary: string = json.choices?.[0]?.message?.content?.trim() ?? text;
  return summary.length > 150 ? summary.slice(0, 147) + "..." : summary;
}
