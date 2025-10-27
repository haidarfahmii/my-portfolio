"use client";

import { MdClose } from "react-icons/md";
import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    // Backdrop
    <div
      onClick={onClose}
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 "
    >
      {/* modal contetn */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-lg bg-white p-6 shadow-xl"
      >
        {/* close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <MdClose size={20} />
        </button>
        {children}
      </div>
    </div>
  );
}
