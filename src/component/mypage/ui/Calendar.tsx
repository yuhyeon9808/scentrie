'use client';
import React, { useRef } from 'react';

interface CalendarProps {
  value: string;
  onChange: (date: string) => void;
}

export default function Calendar({ value, onChange }: CalendarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <input
      ref={inputRef}
      type="date"
      value={value}
      onClick={() => inputRef.current?.showPicker?.()}
      onChange={(e) => onChange(e.target.value)}
      className="md:w-[255px] w-full border border-primary-w rounded-md py-3 pl-4 sm:pl-8 cursor-pointer select-none"
    />
  );
}
