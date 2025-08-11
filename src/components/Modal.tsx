import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  link?: string;
  image?: string;
  tags?: string[];
}

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  link,
  image,
  tags = [],
}: ModalProps) {
  // Sluiten met ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-lg p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden max-w-lg w-full border border-white/10"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()} // voorkom sluiten bij klikken binnen modal
          >
            {/* Sluitknop */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3 right-3 p-2 rounded-full bg-white/20 hover:bg-white/40 transition"
              aria-label="Sluiten"
            >
              <FaTimes className="text-white text-lg" />
            </button>

            {/* Afbeelding */}
            {image && (
              <div className="w-full h-48 overflow-hidden bg-gray-200 dark:bg-gray-800">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                {title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {description}
              </p>

              {/* Tags */}
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Link */}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-[1.02] transition-transform"
                >
                  Bekijk project <FaExternalLinkAlt className="text-sm" />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
