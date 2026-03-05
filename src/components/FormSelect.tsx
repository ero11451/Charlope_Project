// components/FormSelect.tsx
import React from "react";
import {
  FieldErrors,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

type Option = {
  value: string;
  label: string;
};

type FormSelectProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  rules?: RegisterOptions<T>;
  errors: FieldErrors<T>;
  options: Option[];
  placeholder?: string;
};

const FormSelect = <T extends FieldValues>({
  label,
  name,
  register,
  rules,
  errors,
  options,
  placeholder = "Select an option",
}: FormSelectProps<T>) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">
        {label}
      </label>

      <select
        {...register(name, rules)}
        className="w-full px-3 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {errors[name] && (
        <p className="text-sm text-red-500">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};

export default FormSelect;