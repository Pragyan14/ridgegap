"use client";

import { useState } from "react";
import ContactPopup from "./ContactPopup";

interface FloatingCTAProps {
  type?: "connect" | "catalogue";
}

export default function FloatingCTA({ type = "connect" }: FloatingCTAProps) {
  const [open, setOpen] = useState(false);

  const buttonText =
    type === "catalogue" ? "Download Catalogue" : "Connect Now!";

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed right-0 top-2/3 -translate-y-1/2 z-50 group"
      >
        <div className="bg-blue-900 text-white px-6 py-3 shadow-lg [writing-mode:vertical-rl] transition-all duration-300 group-hover:bg-blue-800 group-hover:-translate-x-1">
          {buttonText}
        </div>
      </button>

      {open && <ContactPopup type={type} onClose={() => setOpen(false)} />}
    </>
  );
}