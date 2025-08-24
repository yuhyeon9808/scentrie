import React from 'react';

export default function MonthBtn({
  label,
  click,
}: {
  label: string;
  click: React.MouseEventHandler;
}) {
  return (
    <button
      onClick={click}
      className="w-full cursor-pointer font-semibold hover:bg-primary-w hover:text-primary-p rounded-md py-2 px-3"
    >
      {label}
    </button>
  );
}
