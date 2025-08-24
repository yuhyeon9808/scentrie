import React from 'react';

interface InputProps {
  type?: string;
  placeholder: string;
  name?: string;
  autoComplete?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function LoginInput({
  type = 'text',
  placeholder,
  name,
  autoComplete,
  value,
  onChange,
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
      className="sm:w-[365px] w-[320px] h-[62px] pl-5 rounded-md bg-primary-w text-primary-p text-font-16  select-text"
    />
  );
}
