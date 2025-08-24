import { PerfumeById } from '@/app/core/types/perfume';

export default function AccordionDetail({ perfume }: { perfume: PerfumeById }) {
  return (
    <div>
      <div className="collapse collapse-plus rounded-none border-y lg:max-w-[550px]">
        <input type="checkbox" name="product-accordion" />
        <div className="collapse-title font-semibold sm:text-font-20 text-font-16">
          Product Details
        </div>
        <div className="collapse-content whitespace-pre-line leading-6 text-font-16 select-text">
          {perfume.description}
        </div>
      </div>

      <div className="collapse collapse-plus rounded-none border-b lg:max-w-[550px]">
        <input type="checkbox" name="product-accordion" />
        <div className="collapse-title font-semibold sm:text-font-20 text-font-16">
          Notes
        </div>
        <div className="collapse-content leading-6 text-font-16 select-text">
          {perfume.notes}
        </div>
      </div>
    </div>
  );
}
