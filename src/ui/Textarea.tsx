"use client";

interface TextareaProps {
  copyable?: boolean;
  disabled?: boolean;
  grow?: boolean;
  label: string;
  placeholder?: string;
  readOnly?: boolean;
  rows?: number;
  value?: string;
}

export const Textarea = ({
  copyable = false,
  disabled = false,
  grow = false,
  label,
  placeholder,
  readOnly = false,
  rows,
  value,
}: TextareaProps) => {
  return (
    <div className={`flex flex-col overflow-hidden ${grow && "flex-grow"}`}>
      <label className="block select-none border-b-[1px] border-solid border-b-gray-800 py-1 text-xs uppercase">
        {label}
      </label>
      <div className={`pt-[6px] font-mono ${grow && "flex-grow basis-auto"}`}>
        <div className={`flex flex-row ${grow && "flex-grow"}`}>
          <textarea
            value={value}
            onChange={(e) => {
              console.log(e.target.value);
            }}
            placeholder={placeholder}
            className={`flex-grow basis-auto resize-none rounded-[3px] border border-gray-800 bg-neutral-800 p-1.5 text-sm placeholder-gray-500 shadow-sm transition-colors duration-200 ease-in-out focus:border-gray-700 focus:outline-none focus:ring-gray-700`}
            disabled={disabled}
            readOnly={readOnly}
            rows={rows}
          />
        </div>
      </div>
    </div>
  );
};
