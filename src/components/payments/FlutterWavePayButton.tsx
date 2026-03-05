import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { PaymentFormValues } from '@/models/payment.model';
import { FlutterwaveConfig } from 'flutterwave-react-v3/dist/types';

export default function FlutterWavePayButton({
  label,
  className,
  paymentData,
  title,
  description,
  disabled
}:
  {
    label: string,
    className?: string,
    paymentData: PaymentFormValues | null,
    title: string,
    description: string,
    disabled: boolean
  }) {

  const config: FlutterwaveConfig = {
    public_key: process.env.FLUTTERWAVE_PUBLIC_KEY || "",
    tx_ref: '*********',
    amount: paymentData?.amount ?? 0,
    currency: paymentData?.currency ?? "USD",
    payment_options: "card, mobilemoney, ussd",
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


  return (
    <div >

      <button className={`${className}`} disabled={disabled}
        onClick={() => handleFlutterPayment({
          callback: (response) => {
            console.log(response);
            closePaymentModal() // this will close the modal programmatically
          },
          onClose: () => { },
        })
        }
      >
        {label}
      </button>
    </div>
  );
}
