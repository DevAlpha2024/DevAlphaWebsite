import React, { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "230b6f6c-99da-4284-a173-d1d8d1c9b9f1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Message Sent Successfully!");
      event.target.reset();
    } else {
      setResult("❌ Error! Try Again.");
    }
  };

  return (
    <section id="contact" className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="w-full max-w-lg bg-white/20 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/30">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-white text-center mb-6">
          Get in Touch
        </h2>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 bg-white/30 backdrop-blur-md rounded-xl border border-white/40 outline-none focus:border-blue-400 text-white placeholder-white focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-4 bg-white/30 backdrop-blur-md rounded-xl border border-white/40 outline-none focus:border-blue-400 text-white placeholder-white focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
          </div>

          <div className="relative">
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full p-4 bg-white/30 backdrop-blur-md rounded-xl border border-white/40 outline-none focus:border-blue-400 text-white placeholder-white focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none"
              rows="5"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Send Message 🚀
          </button>
        </form>

        {/* Result Message */}
        <span className="block text-center text-white mt-4 font-semibold">{result}</span>
      </div>
    </section>
  );
}
