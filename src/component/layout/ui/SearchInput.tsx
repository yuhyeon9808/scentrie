'use client';
import React, { useState } from 'react';
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react';
import { useRouter } from 'next/navigation';
import { usePerfumes } from '@/app/core/hooks/perfume/usePerfumes';

export default function SearchInput() {
  const { data } = usePerfumes();
  const [searchInput, setSearchInput] = useState('');
  const router = useRouter();

  if (!data) return null;

  const q = (searchInput ?? '').trim().toLowerCase();
  const filteredPerfumes =
    q === '' ? data : data.filter((p) => p.name.toLowerCase().includes(q));

  return (
    <div className="relative md:w-[250px] sm:w-[200px] w-[170px] md:mr-5 mr-2">
      <Combobox<string>
        value={searchInput}
        onChange={(value: string) => {
          setSearchInput(value);
          const selected = data.find((p) => p.name === value);
          if (selected) {
            setSearchInput('');
            router.push(`/product/${selected.id}`);
          }
        }}
      >
        <ComboboxInput
          type="text"
          placeholder="지금 끌리는 향, 검색해보세요"
          className="w-full rounded-2xl border border-[var(--text-primary)]  px-1 sm:px-2 py-2 select-text md:px-4 md:text-font-16 text-[0.8rem]"
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              const word = e.currentTarget.value.trim();
              if (!word) return;
              setSearchInput('');
              router.push(`/search/${encodeURIComponent(word)}`);
            }
          }}
          aria-label="검색창"
          displayValue={(v: string) => v}
        />
        <ComboboxOptions className="absolute mt-2 w-full bg-primary-w text-primary-p max-h-[10rem] overflow-y-auto empty:invisible rounded-md shadow-md z-20">
          {filteredPerfumes.map((item) => (
            <ComboboxOption
              key={item.id}
              value={item.name}
              className="py-2 px-2 cursor-pointer data-disabled:opacity-50 data-focus:bg-blue-100"
            >
              {item.name}
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
}
