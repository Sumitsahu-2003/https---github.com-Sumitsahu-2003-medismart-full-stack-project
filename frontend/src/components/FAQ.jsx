// src/components/FAQ.jsx
import React, { useState } from "react";

const faqs = [
  { question: "What is E-healthcare management?", answer: "E-healthcare management involves the use of digital tools to improve healthcare delivery..." },
  { question: "How can I book an appointment?", answer: "You can book an appointment by navigating to the Appointment page and selecting your preferred doctor and time slot." },
  // Add more FAQs as needed
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-3xl mx-auto my-16 px-4">
      <h2 className="text-2xl font-semibold mb-6 text-center text-teal-700">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map(({ question, answer }, i) => (
          <div key={i} className="border rounded shadow-sm">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full text-left p-4 font-medium bg-teal-100 hover:bg-teal-200 flex justify-between items-center"
            >
              {question}
              <span>{openIndex === i ? "−" : "+"}</span>
            </button>
            {openIndex === i && (
              <div className="p-4 bg-white border-t">{answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
