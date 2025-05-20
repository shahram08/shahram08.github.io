import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="max-w-xl mx-auto my-12 py-8 px-4 bg-gray-900 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold mb-4 text-white">تماس</h3>
      <form
        className="flex flex-col gap-4"
        onSubmit={e => {
          e.preventDefault();
          window.location = "mailto:shahram08@gmail.com";
        }}
      >
        <input
          type="text"
          placeholder="نام"
          className="bg-gray-800 text-white rounded px-3 py-2"
          required
        />
        <input
          type="email"
          placeholder="ایمیل"
          className="bg-gray-800 text-white rounded px-3 py-2"
          required
        />
        <textarea
          placeholder="پیام شما"
          className="bg-gray-800 text-white rounded px-3 py-2"
          rows={4}
          required
        />
        <motion.button
          type="submit"
          className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 rounded transition"
          whileTap={{ scale: 0.97 }}
        >
          ارسال پیام
        </motion.button>
      </form>
    </section>
  );
}