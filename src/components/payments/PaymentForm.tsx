import { useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "../FormInput";
import FormSelect from "../FormSelect";
import { PaymentFormValues, currencyOptions } from "@/models/payment.model";
import FlutterWavePayButton from "./FlutterWavePayButton";
import Link from "next/link";


export interface PaymentFormProps {
    title: string;
    description: string;
    onSuccess: () => void;
    showBankPay?: boolean
}

export default function PaymentForm({
    title,
    description,
    showBankPay
}: PaymentFormProps) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting, isValid },
    } = useForm<PaymentFormValues>();

    const [paymentData, setPaymentData] =
        useState<PaymentFormValues | null>(null);

    const onSubmit = (data: PaymentFormValues) => {
        setPaymentData(data);
    };



    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormInput<PaymentFormValues>
                label="Name"
                name="name"
                register={register}
                rules={{ required: "Name is required" }}
                errors={errors}
            />

            <FormInput<PaymentFormValues>
                label="Email"
                name="email"
                register={register}
                rules={{
                    required: "Email is required",
                    pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Invalid email format",
                    },
                }}
                errors={errors}
            />
            <FormInput<PaymentFormValues>
                label="Phone Number"
                name="phone"
                type="tel"
                register={register}
                rules={{
                    required: "Phone number is required",
                    pattern: {
                        value: /^[0-9+]{7,15}$/,
                        message: "Invalid phone number",
                    },
                }}
                errors={errors}
            />

            <div className="flex gap-2">
                <FormSelect<PaymentFormValues>
                    label="Currency"
                    name="currency"
                    register={register}
                    rules={{ required: "Currency is required" }}
                    errors={errors}
                    options={currencyOptions}
                />

                <FormInput<PaymentFormValues>
                    label="Amount"
                    name="amount"
                    type="number"
                    min={1}
                    register={register}
                    rules={{ required: "Amount is required" }}
                    errors={errors}
                />
            </div>

            <div className="flex justify-end gap-3 pt-4">
                <button
                    type="submit"
                    onClick={() => reset()}
                    className="px-5 py-2 rounded-xl bg-black text-white btn"
                    disabled={isSubmitting}
                >
                    Restart
                </button>
                {showBankPay && <Link href={"/donate-us"} className="btn btn--secondary px-3 rounded  ">
                    Bank pay
                </Link>}

                <FlutterWavePayButton
                    className="btn px-5 py-2 rounded-xl btn--primary flex-1 py-3 "
                    label={'Pay now'}
                    paymentData={paymentData}
                    title={title}
                    description={description}
                    disabled={!isValid} />

            </div>
        </form>
    );
}