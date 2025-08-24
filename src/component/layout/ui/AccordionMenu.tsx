interface AccordionProps {
  openSection: string | null;
  setOpenSection: React.Dispatch<React.SetStateAction<string | null>>;
  keyword: string;
  label: string;
}

export default function AccordionMenu({
  openSection,
  setOpenSection,
  keyword,
  label,
}: AccordionProps) {
  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <button
      type="button"
      onClick={() => toggleSection(keyword)}
      className={`flex w-full items-center justify-between rounded-md px-7 py-3 transition ${
        openSection === keyword
          ? 'bg-primary-w text-primary-p font-semibold'
          : 'hover:bg-primary-w hover:text-primary-p hover:font-semibold'
      }`}
    >
      {label}
      <svg
        className={`ml-2 h-4 w-4 transition-transform duration-200 ${
          openSection === keyword ? 'rotate-180' : ''
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
}
