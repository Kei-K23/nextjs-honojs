"use client";

import { FormEvent, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
      }),
    });
    const data = await res.json();
    if (res.ok) {
      setResult(data.message);
      setMessage("");
    }
  };

  return (
    <main>
      <h1>{result}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ color: "black" }}
        />
      </form>
    </main>
  );
}
