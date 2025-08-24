import React from "react";

export default function TextLabel({ label }: { label: string }) {
  return (
    <div className="flex gap-2 mb-3 text-font-20">
      <span>{label}</span>
      <span className="text-red-500">*</span>
    </div>
  );
}
