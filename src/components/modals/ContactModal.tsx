import Modal from "./Modal";
import ContactForm from "@/components/ContactForm";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-gray-900">Contact Me</h2>
        <p className="text-gray-600">
          Fill out the form below to discuss potential opportunities. I will get
          back to you soon!
        </p>
      </div>
      <div className="mt-6">
        <ContactForm variant="modal" />
      </div>
      <div className="mt-4 flex justify-start">
        <button
          type="button"
          onClick={onClose}
          className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
}
