import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  link?: string;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  link,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl bg-white/10 dark:bg-black/40">
      <div className="relative p-6 bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 max-w-md mx-4">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-red-500 transition"
          aria-label="Close"
        >
          ✕
        </button>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow hover:scale-[1.02] transition-transform"
          >
            Bekijk project
          </a>
        )}
      </div>
    </div>
  );
}
