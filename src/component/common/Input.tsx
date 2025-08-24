"use client";

interface Props {
  type?: string;
  placeholder?: string;
  width?: number;
  value?: string;
  dValue?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
  autoComplete?: React.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
}

export default function Input({
  type = "text",
  placeholder,
  width,
  value,
  onChange,
  name,
  dValue,
  autoComplete,
}: Props) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
      defaultValue={dValue}
      autoComplete={autoComplete}
      className="w-full py-3 pl-5 mb-3 rounded-md bg-primary-w text-primary-p select-text"
      style={width ? { width: `${width}px` } : undefined}
    />
  );
}
