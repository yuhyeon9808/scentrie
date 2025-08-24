"use client";

import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function UploadBox({ name }: { name: string }) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  };

  return (
    <div
      className="flex h-[190px] w-[190px] flex-col items-center justify-center rounded-md bg-gray-300 cursor-pointer overflow-hidden"
      onClick={handleClick}
    >
      {preview ? (
        <Image
          src={preview}
          alt="미리보기"
          width={24}
          height={24}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex flex-col items-center">
          <FontAwesomeIcon
            icon={faPlus}
            className="h-[1.5rem] w-[1.5rem] pb-4 text-gray-600"
          />
          <p className="text-font-20 text-gray-600">클릭해서 사진 업로드</p>
        </div>
      )}

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        name={name}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
