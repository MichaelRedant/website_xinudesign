interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/10 backdrop-blur-2xl"
      onClick={onClose}
    >
      <div
        className="relative w-11/12 max-w-lg p-6 bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-2xl shadow-xl border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button
          onClick={onClose}
          className="absolute transition top-2 right-2 text-white hover:text-red-500"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
