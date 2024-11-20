import React from "react";
import { UseFormRegister } from "react-hook-form";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label: string;
  name: string;
  options: SelectOption[];
  register: UseFormRegister<any>;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  options,
  register,
}) => (
  <div className="mb-4">
    <label className="block text-sm font-semibold text-gray-700">{label}</label>
    <select
      {...register(name, { required: true })}
      className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default SelectField;
