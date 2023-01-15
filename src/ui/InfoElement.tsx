export const InfoElement = ({
  text,
  status = "default",
  className,
}: {
  text: string;
  status?: "default" | "success" | "warning" | "error";
  className?: string;
}) => {
  return (
    <div className="absolute top-0 right-0 flex bg-[#191919] shadow-sm">
      <div className="ml-[5px] block border-0">
        <div
          className={`rounded-[3px] py-[3px] px-[5px] text-[0.745rem] font-bold lowercase ${
            status === "success"
              ? "bg-lime-600/50"
              : status === "warning"
              ? "bg-amber-500/60"
              : status === "error"
              ? "bg-red-500/60"
              : "bg-gray-800/60"
          }`}>
          {text}
        </div>
      </div>
    </div>
  );
};
