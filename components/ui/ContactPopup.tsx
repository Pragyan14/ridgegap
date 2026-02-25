"use client";

import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

interface Props {
  type: "connect" | "catalogue";
  onClose: () => void;
}

export default function ContactPopup({ type, onClose }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Submit using same API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: type === "catalogue" ? "Catalogue Download" : "Popup Connect",
          pageUrl: window.location.href
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(
          type === "catalogue"
            ? "Catalogue will be shared with you shortly!"
            : "Thank you! We'll contact you soon."
        );

        setFormData({
          fullName: "",
          phone: "",
          email: "",
          message: "",
        });

        onClose();

      } else {
        toast.error(data.error || "Something went wrong.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ✅ Close on ESC
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // ✅ Lock scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // ✅ Close when clicking outside
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOutsideClick}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
    >
      <div
        ref={modalRef}
        className="bg-white w-full max-w-2xl p-8 relative rounded shadow-lg"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6">
          {type === "catalogue"
            ? "Fill the below form to Download the Catalogue:"
            : "Fill the below form to get a Quote:"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name:"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone No.:"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Id.:"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            name="message"
            placeholder="Message/Comments:"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-400 resize-none"
          />

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#e8395a] hover:bg-[#c72d4a] text-white font-semibold px-10 py-3 rounded-md transition disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}