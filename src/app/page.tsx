import BestSeller from '@/component/home/BestSeller';
import BrandPerfume from '@/component/home/BrandPerfume';
import MainBanner from '@/component/home/MainBanner';
import SubBanner from '@/component/home/SubBanner';
import ScentrieMacazine from '@/component/home/ScentrieMagazine';

export default function Home() {
  return (
    <>
      <MainBanner />
      <BestSeller />
      <SubBanner />
      <BrandPerfume />
      <ScentrieMacazine />
    </>
  );
}
