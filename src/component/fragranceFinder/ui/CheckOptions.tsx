'use client';
import React from 'react';
import { useQuizStore } from '@/app/core/store/useQuizStore';
import { Category } from '@/app/core/types/fragranceFinder';

interface OptionsProps {
  options: { category: Category; label: string }[];
  quizId: number;
}

export default function CheckOptions({ options, quizId }: OptionsProps) {
  const setPick = useQuizStore((state) => state.setPick);
  const pick = useQuizStore((state) => state.pick);
  const selected = pick[quizId];

  return (
    <div className="grid w-full grid-cols-2 gap-5 md:gap-10">
      {options.map((item) => {
        const isActive = selected === item.category;
        return (
          <button
            key={item.label}
            onClick={() => setPick(quizId, item.category)}
            className={`w-full rounded-md py-[60px] transition lg:text-font-32 md:text-font-24 sm:text-font-20 text-font-16 cursor-pointer ${
              isActive
                ? 'bg-primary-p text-primary-w  font-medium'
                : 'bg-primary-w text-primary-p font-semibold border border-gray-300 hover:opacity-85'
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
