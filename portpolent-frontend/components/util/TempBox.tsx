interface TodoBoxProps {
  width?: string;
  height?: string;
  className?: string;
}

const TempBox = ({ width, height, className }: TodoBoxProps) => {
  const cn = [
    width || "w-full",
    height || "h-full",
    "font-bold",
    "bg-slate-100",
    "flex",
    "justify-center",
    "items-center",
    "italic",
    "text-3xl",
    "rounded-lg",
    "select-none",
    "cursor-default",
    className,
  ].join(" ");

  return <div className={cn}>TODO!</div>;
};

export default TempBox;
