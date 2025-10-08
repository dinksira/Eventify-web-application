import React from "react";

export default function Contact() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-4">
        Feel free to reach out to us via email or phone.
      </p>
      <form className="flex flex-col gap-4 max-w-md">
        <input type="text" placeholder="Your Name" className="border p-2 rounded"/>
        <input type="email" placeholder="Your Email" className="border p-2 rounded"/>
        <textarea placeholder="Message" className="border p-2 rounded"/>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Send
        </button>
      </form>
    </div>
  );
}
