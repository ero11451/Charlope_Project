import { useState } from "react";

export default function PaymentButton() {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    const response = await fetch("/api/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: 5000,
        email: "customer@example.com",
        name: "John Doe",
      }),
    });

    const data = await response.json();
    setLoading(false);

    if (data.status === "success") {
      // Redirect user to Flutterwave payment link
      window.location.href = data.data.link;
    } else {
      alert("Payment failed");
    }
  };

  return (
    <button onClick={handlePayment} disabled={loading}>
      {loading ? "Processing..." : "Pay Now"}
    </button>
  );
}