import React from "react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      <ContactForm />
    </div>
  );
}
