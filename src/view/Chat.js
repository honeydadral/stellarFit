import React, { useState } from "react";
import axios from "axios";

const Chat = () => {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userMessage = { sender: "User", text: inputText };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setIsLoading(true); // Start loading when request is initiated

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.REACT_APP_GEMINI_API_KEY}`,
        {
          contents: [{ parts: [{ text: inputText }] }]
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      if (
        response.data &&
        response.data.candidates &&
        response.data.candidates[0] &&
        response.data.candidates[0].content &&
        response.data.candidates[0].content.parts &&
        response.data.candidates[0].content.parts[0].text
      ) {
        const geminiReply = response.data.candidates[0].content.parts[0].text;
        const geminiMessage = { sender: "ArcturusFit", text: geminiReply };
        setMessages((prevMessages) => [...prevMessages, geminiMessage]);
      } else {
        console.error("Unexpected response format:", response.data);
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "ArcturusFit", text: "Sorry, I couldn't process that response." }
        ]);
      }
    } catch (error) {
      console.error("Error fetching response from Gemini API:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "ArcturusFit", text: "An error occurred. Please try again later." }
      ]);
    } finally {
      setIsLoading(false); // Stop loading after response is handled
    }

    setInputText("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>ArcturusFit Chat</h2>
      <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
        {messages.map((msg, index) => (
          <p key={index} style={{ textAlign: msg.sender === "User" ? "right" : "left" }}>
            <strong>{msg.sender}: </strong>{msg.text}
          </p>
        ))}
        {isLoading && <p>Loading...</p>} {/* Display loader while loading */}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your question..."
          style={{ width: "80%", padding: "10px" }}
          disabled={isLoading} // Disable input while loading
        />
        <button type="submit" style={{ padding: "10px" }} disabled={isLoading}>
          {isLoading ? "Loading..." : "Send"} {/* Button text changes while loading */}
        </button>
      </form>
    </div>
  );
};

export default Chat;
