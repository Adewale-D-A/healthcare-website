"use client";

import React, { ChangeEvent } from "react";

interface Props {
  value: string;
  setValue: Function;
  label?: string;
  isRequired: boolean;
  id: string;
  placeholder: string;
  name?: string;
}

const TextAreaInput: React.FC<Props> = ({
  value,
  setValue,
  label,
  isRequired,
  id,
  name,
  placeholder,
}) => {
  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className=" text-sm font-medium text-gray-900">
          {label}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        required={isRequired}
        value={value}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleInput(e)}
        className="w-full p-4 rounded-[4px] mt-3 border border-gray-300 bg-gray-200/15 focus:ring-[#17594F] focus:border-[#17594F]"
        rows={4}
      />
    </div>
  );
};

export default TextAreaInput;
