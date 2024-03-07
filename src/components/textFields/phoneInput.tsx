"use client";

import React from "react";
import countries from "@/assets/Countries.json";

interface Props {
  coutryCode: string;
  setCountryCode: Function;
  number: string;
  setNumber: Function;
  label: string;
  isRequired?: boolean;
  id: string;
}

const PhoneInput: React.FC<Props> = ({
  coutryCode,
  setCountryCode,
  number,
  setNumber,
  label,
  isRequired = false,
  id,
}) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className=" text-sm font-medium text-gray-900">
        {label}
      </label>
      <div className="w-full flex pl-4 mt-3 border border-gray-300 rounded-[4px] bg-gray-200/15">
        <select
          id="country-code"
          title={label}
          value={coutryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          className=" max-w-28 bg-transparent"
        >
          {countries.map((country) => (
            <option
              key={country.code}
              value={`${country?.dial_code}+${country?.name}`}
            >
              {`${country?.flag} ${country?.dial_code} - ${country?.name}`}
            </option>
          ))}
        </select>
        <input
          type="number"
          id={id}
          value={number}
          required={isRequired}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter your phone number"
          className="w-full p-4 bg-transparent rounded-r-lg focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );
};

export default PhoneInput;
