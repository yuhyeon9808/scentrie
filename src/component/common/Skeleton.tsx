import React from 'react';

interface SkeletonProps {
  w?: number;
  h?: number;
}

export default function Skeleton({ w, h = 362 }: SkeletonProps) {
  const style: React.CSSProperties = {
    width: `${w}px`,
    height: `${h}px`,
  };

  return (
    <div
      className="w-[234px] sm:w-[250px] bg-primary-w rounded-md animate-pulse"
      style={style}
    />
  );
}
