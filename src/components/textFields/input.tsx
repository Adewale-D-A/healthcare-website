"use client";

import React, { ChangeEvent } from "react";

interface Props {
  value: string;
  setValue: Function;
  inputType: string;
  label: string;
  isRequired: boolean;
  id: string;
  placeholder: string;
  name?: string;
}

const TextInput: React.FC<Props> = ({
  value,
  setValue,
  inputType,
  label,
  isRequired,
  name,
  id,
  placeholder,
}) => {
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        required={isRequired}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleInput(e)}
        type={inputType}
        className="w-full p-4 rounded-[4px] mt-3 border border-gray-300 bg-gray-200/15 focus:ring-[#17594F] focus:border-[#17594F]"
      />
    </div>
  );
};

export default TextInput;
