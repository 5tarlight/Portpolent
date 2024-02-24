import { cn } from "@/lib/util/classname";

interface Props {
  type?: "email" | "password" | "text" | "number";
  placeholder?: string;
  value?: string;
  onChange(v: string): any;
  className?: string;
  err?: boolean;
}

const AuthInput = ({
  onChange,
  className,
  placeholder,
  type,
  value,
  err = false,
}: Props) => {
  return (
    <input
      className={cn([
        "w-full p-2 outline-none rounded-md transition-all",
        className,
        { "bg-red-50 border-red-400 border-2": err },
      ])}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      value={value}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default AuthInput;
