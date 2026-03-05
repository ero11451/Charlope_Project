// components/FormInput.tsx
import React from "react";
import {
  FieldErrors,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

type FormInputProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  type?: React.HTMLInputTypeAttribute;
  register: UseFormRegister<T>;
  rules?: RegisterOptions<T>;
  errors: FieldErrors<T>;
  min?: number;
};

const FormInput = <T extends FieldValues>({
  label,
  name,
  type = "text",
  register,
  rules,
  errors,
  min,
}: FormInputProps<T>) => {
  return (
    <div>
      <label className="block text-sm font-medium my-1">
        {label}
      </label>

      <input
        type={type}
        min={min}
        {...register(name, rules)}
        className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
      />

      {errors[name] && (
        <p className="text-sm text-red-600">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};

export default FormInput;