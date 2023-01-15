"use client";

import { BiCopy } from "react-icons/bi";
import { useState } from "react";
import { InfoElement } from "@/ui/InfoElement";

interface RegexInputProps {
  disabled?: boolean;
  label: string;
  placeholder: string;
  readOnly?: boolean;
  rows: number;
  info: string;
}

export const RegexInput = ({
  disabled = false,
  label,
  placeholder,
  readOnly = false,
  rows,
  info,
}: RegexInputProps) => {
  const [tooltip, setTooltip] = useState("Copy to clipboard");
  const [regex, setRegex] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(regex).then(() => {
      if (tooltip !== "Copied!") {
        setTooltip("Copied!");
        setTimeout(() => {
          setTooltip("Copy to clipboard");
        }, 1500);
      }
    });
  };

  const handleMouseLeave = () => {
    if (tooltip !== "Copy to clipboard") {
      setTooltip("Copy to clipboard");
    }
  };

  return (
    <div className="mb-6 flex-initial">
      <div className="relative">
        <h2 className="mb-[7px] select-none overflow-hidden border-b-[1px] border-b-gray-800 pb-[4px] text-xs uppercase">
          <label className="overflow-hidden">{label}</label>
          <InfoElement text={info} />
        </h2>
      </div>
      <div className="flex w-full flex-row rounded-[3px] border-[1px] border-gray-800 bg-gray-800 p-0 text-sm transition-all duration-200 ease-in-out">
        <textarea
          className={`h-full w-full min-w-[120px] flex-grow resize-none bg-gray-800 p-2 font-mono text-sm placeholder-neutral-500 shadow-sm focus:outline-none`}
          value={regex}
          onChange={(e) => {
            setRegex(e.target.value);
          }}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          rows={rows}
        />
        <div className="group flex flex-row">
          <span
            className={`${
              regex.length === 0
                ? "hidden"
                : "absolute right-6 top-4 rounded bg-gray-700 p-2 opacity-0 shadow-lg transition-opacity delay-100 duration-300 ease-in-out group-hover:z-50 group-hover:opacity-100"
            }`}>
            {tooltip}
          </span>
          <button
            className={`border-l-[1px] border-gray-700 p-2 text-sm text-neutral-300/70 shadow-sm focus:outline-none ${
              regex.length === 0
                ? "cursor-not-allowed bg-gray-900 opacity-40"
                : "active:bg-neutral-500 group-hover:bg-neutral-700"
            }`}
            onClick={() => handleCopy()}
            onMouseLeave={() => handleMouseLeave()}
            disabled={regex.length === 0}>
            <BiCopy />
          </button>
        </div>
      </div>
    </div>
  );
};
