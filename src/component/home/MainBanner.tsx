import Image from 'next/image';
import EntryButton from './ui/EntryButton';
import mainBanner from '@/assets/img/mainBanner_bg.png';

export default function MainBanner() {
  return (
    <div
      className="
        relative flex items-center w-full
        min-h-[250px] sm:min-h-[350px] lg:min-h-[500px]
      "
    >
      <Image
        src={mainBanner}
        alt="메인 배너"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 font-semibold px-header-middle-base sm:px-header-middle-sm md:px-header-middle-md lg:px-header-middle-lg">
        <div className="mb-5 xl:mb-7 text-font-24 sm:text-font-30 lg:text-font-40">
          <p>당신과 가장 닮은 향,</p>
          <p>센트리에가 찾아드립니다.</p>
        </div>
        <EntryButton href="/fragrance_finder" />
      </div>
    </div>
  );
}
