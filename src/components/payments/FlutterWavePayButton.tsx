"use client";

import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { FlutterwaveConfig } from "flutterwave-react-v3/dist/types";
import { PaymentFormValues } from "@/models/payment.model";

interface FlutterWavePayButtonProps {
  label: string;
  className?: string;
  paymentData: PaymentFormValues | null;
  title: string;
  description: string;
  disabled?: boolean;
  onSubmit: () => void;
}

export default function FlutterWavePayButton({
  label,
  className,
  paymentData,
  title,
  description,
  disabled,
  onSubmit,
}: FlutterWavePayButtonProps) {

  const config: FlutterwaveConfig = {
    public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY || "",
    tx_ref: `tx-${Date.now()}`,
    amount: paymentData?.amount ?? 0,
    currency: paymentData?.currency ?? "USD",

    payment_options: "card,mobilemoney,ussd",

    customer: {
      email: paymentData?.email ?? "",
      phone_number: paymentData?.phone ?? "",
      name: paymentData?.name ?? "",
    },

    customizations: {
      title,
      description,
      logo: "/assets/images/logo.png",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const startPayment = () => {
    onSubmit();

    if (!paymentData) return;

    console.log("Payment Data testing:", paymentData);
   return handleFlutterPayment({
      callback: (response) => {
        console.log(response);
        closePaymentModal();
      },
      onClose: () => {},
    });
  };

  return (
    <button
      type="button"
      className={className}
      disabled={disabled}
      onClick={startPayment}
    >
      {label} 
    </button>
  );
}