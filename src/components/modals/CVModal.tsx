import Modal from "./Modal";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-slate-800">Download CV</h2>
        <p className="mt-2 text-smd text-slate-500">
          Thank you for your interest! Please contact me directly to receive my
          CV.
        </p>
      </div>
      <div className="mt-6 flex justify-start">
        <button
          type="button"
          onClick={onClose}
          className="bg-white hover:bg-slate-100 text-slate-800 border boreder-slate-100 px-3 py-0.5 rounded-lg font-medium shadow-md transition"
        >
          Close
        </button>
      </div>
    </Modal>
  );
}
