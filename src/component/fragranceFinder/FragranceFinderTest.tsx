'use client';
import React from 'react';
import PurpleBtn from './ui/PurpleBtn';
import CheckOptions from './ui/CheckOptions';
import { useRouter } from 'next/navigation';
import { QUIZ } from '@/app/core/constants/fragranceFinder';
import { useQuizStore } from '@/app/core/store/useQuizStore';
import { QuizProps } from '@/app/core/types/fragranceFinder';
import { quizResultUtils } from '@/app/core/utils/quizResultUtils';

export default function FragranceFinderTest({ quiz }: QuizProps) {
  const total = QUIZ.length;
  const isLast = quiz.id === total;
  const pick = useQuizStore((s) => s.pick);
  const router = useRouter();

  const handleNext = () => {
    router.push(`/fragrance_finder/${quiz.id + 1}`);
  };

  const handleResult = () => {
    const top = quizResultUtils(pick);
    router.push(`/fragrance_finder/result/${top}`);
  };
  const isAnswer = !Boolean(pick[quiz.id]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full flex-col items-center sm:my-28 h-auto rounded-md bg-sub-bg text-center text-muted text-font-30 lg:w-[80%]">
        <div className="w-full px-6 xl:w-[1000px]">
          <span className="block sm:pt-28 pt-14 pb-5 font-semibold text-subtitle text-font-24 sm:text-font-30 md:text-font-48 lg:pb-7 lg:text-font-64">
            {quiz.question}
          </span>
          <p className="pb-14 text-font-16 sm:text-font-20 md:text-font-30">
            {quiz.text}
          </p>
          <CheckOptions options={quiz.options} quizId={quiz.id} />
          <div className="sm:py-28 py-14">
            {isLast ? (
              <PurpleBtn
                label="결과 보기"
                click={handleResult}
                isAnswer={isAnswer}
              />
            ) : (
              <PurpleBtn
                label="다음 질문 보기"
                click={handleNext}
                isAnswer={isAnswer}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
