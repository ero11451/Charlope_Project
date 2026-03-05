// models/payment.model.ts

export interface PaymentModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  title: string;
  description: string;
}

export interface PaymentFormValues {
  name: string;
  email: string;
  amount: number;
  currency: string;
  phone: string;   // ✅ added
}

export const currencyOptions = [
  { value: "USD", label: "USD - US Dollar" },
  { value: "NGN", label: "NGN - Nigerian Naira" },
  { value: "EUR", label: "EUR - Euro" },
  { value: "GBP", label: "GBP - British Pound" },
];