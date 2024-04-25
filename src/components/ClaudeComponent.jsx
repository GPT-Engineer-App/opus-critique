import React, { useState } from "react";
import axios from "axios";

const ClaudeComponent = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(
        "https://api.anthropic.com/v1/complete",
        {
          prompt: prompt,
          model: "claude-v1",
          max_tokens_to_sample: 100,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": "YOUR_API_KEY",
          },
        },
      );

      setResponse(result.data.completion);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Enter your prompt" />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h3>Response:</h3>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default ClaudeComponent;
