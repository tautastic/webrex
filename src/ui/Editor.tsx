/*
  The Editor should look like this:
  <div className="flex flex-col h-full p-6 relative">
    <div className="flex-initial mb-6">
      <div className="relative">
        <h2 className="overflow-hidden text-xs border-b-[1px] uppercase select-none">
          <span className="overflow-hidden">Regular Expression</span>
          <div className="bg-black flex absolute r-0 t-0 shadow-sm">
            <div className="block ml-[5px]" aria-label="">
              <div className="bg-gray-700 lowercase rounded-[3px] text-[0.725rem] py-[3px] px-[5px]">
                No Match
              </div>
            </div>
          </div>
        </h2>
      </div>
 */

import { RegexInput } from "@/ui/RegexInput";

export const Editor = () => {
  return (
    <div className="relative flex h-full flex-col p-6">
      <RegexInput
        label={"Regular Expression"}
        info={"No Match"}
        placeholder={"Enter a regular expression"}
        rows={1}
      />
    </div>
  );
};
