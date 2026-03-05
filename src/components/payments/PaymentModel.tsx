import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PaymentModalProps } from "@/models/payment.model";
import PaymentForm from "./PaymentForm";

export default function PaymentModal({
  isOpen,
  setIsOpen,
  title,
  description,
}: PaymentModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, setIsOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4">
              <div className="pb-4">
                <h5 className="font-bold text-black">{title}</h5>
                <p>{description}</p>
              </div>

              <PaymentForm
              showBankPay ={true}
                title={title}
                description={description}
                onSuccess={() => setIsOpen(false)}
              />

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}