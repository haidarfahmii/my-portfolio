// components/shared/ContactForm.tsx
"use client";

import { useState } from "react";
import { LuSend } from "react-icons/lu";
import axios, { isAxiosError } from "axios";

interface ContactFormProps {
  variant?: "modal" | "section";
  onFormSubmit?: () => void;
}

export default function ContactForm({
  variant = "section",
  onFormSubmit,
}: ContactFormProps) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    const payload = {
      name,
      email,
      subject,
      message,
    };

    try {
      const response = await axios.post("/api/contact", payload);

      setStatus("success");
      setFeedback("Pesan terkirim! Saya akan segera menghubungi Anda.");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

      if (onFormSubmit) {
        onFormSubmit();
      }
    } catch (error) {
      setStatus("error");

      //   pengecekan error
      if (isAxiosError(error) && error.response) {
        // ambil pesan error dari API route
        setFeedback(error.response.data.message);
      } else {
        // Error network
        setFeedback("Tidak bisa terhubung ke server. Coba lagi nanti...");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* name */}
      <div>
        <label
          htmlFor="name"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      {/* email */}
      <div>
        <label
          htmlFor="email"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      {/* subject */}
      {variant === "section" && (
        <div>
          <label
            htmlFor="subject"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      )}

      {/* message */}
      <div>
        <label
          htmlFor="message"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      {/* button submit */}
      <div className="flex items-center justify-between">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 py-3 px-5 font-medium text-white shadow-md transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
          <LuSend size={18} />
        </button>
      </div>

      {/* feedback */}
      {feedback && (
        <p
          className={`mt-2 text-sm ${
            status === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {feedback}
        </p>
      )}
    </form>
  );
}
