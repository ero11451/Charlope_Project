import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { amount, email, name ,title, description } = await req.json();

    const payload = {
      tx_ref: `tx-${Date.now()}`,
      amount,
      currency: "NGN",
      redirect_url: "http://localhost:3000/payment-callback",
      payment_options: "card,ussd,qr",
      customer: {
        email,
        name,
      },
      customizations: {
        title,
        description
      },
    };

    const response = await fetch("https://api.flutterwave.com/v3/payments", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.FLUTTERWAVE_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Flutterwave error:", data);
      return NextResponse.json(
        { error: "Payment creation failed", details: data },
        { status: 500 }
      );
    }

    return NextResponse.json({ status: "success", data });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}