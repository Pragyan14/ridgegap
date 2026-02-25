'use client'

import { useState } from "react"
import ContactPopup from "./ContactPopup"

type Props = {
  message: string
  type?: "connect" | "catalogue"
}

export default function CTABtn({ message, type = "connect" }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-[#e34d67] text-white px-6 py-2 font-medium transition-all transform hover:scale-105 shadow-lg"
      >
        {message}
      </button>

      {open && (
        <ContactPopup
          type={type}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  )
}