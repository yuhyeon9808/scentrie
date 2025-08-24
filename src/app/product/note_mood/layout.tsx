import { NOTEMOODTABS } from '@/app/core/constants/perfumeMeta';
import MenuTab from '@/component/common/MenuTab';

export default function NoteMoodLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="rail sm:py-28 py-14">
        <MenuTab tabs={NOTEMOODTABS} />
        {children}
      </div>
    </div>
  );
}
