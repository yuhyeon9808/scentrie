import { BASE_URL } from '@/app/core/constants/etc';
import { Perfume } from '@/app/core/types/perfume';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ perfume }: { perfume: Perfume }) {
  return (
    <Link href={`/product/detail/${encodeURIComponent(perfume.id)}`}>
      <div className="w-[234px] sm:w-[250px] rounded-md bg-primary-w pb-9 text-primary-p shadow-strong">
        <div className="flex flex-col items-center ">
          <Image
            src={BASE_URL + encodeURIComponent(perfume.thumbnail_url.trim())}
            alt={perfume.name}
            width={240}
            height={240}
            style={{ width: 'auto' }}
            className="mt-4 h-[240px] object-contain transition-transform duration-200 hover:scale-110"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABAABJzQnCgAAAABJRU5ErkJggg=="
            priority
          />
          <p className="mt-2 font-semibold text-font-16">{perfume.name}</p>
          <p className="mt-2 font-bold text-font-16 sm:text-font-20">
            {perfume.brand?.en_name}
          </p>
        </div>
      </div>
    </Link>
  );
}
