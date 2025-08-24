'use client';
import React from 'react';
import TextLabel from '../common/TextLabel';
import FileUpload from './ui/FileUpload';
import BorderBtn from '@/component/common/BorderBtn';
import WhiteBtn from '../common/WhiteBtn';
import Input from '../common/Input';
import { useMagazineMutations } from '@/app/core/hooks/magazine/useMagazineMutations';

export default function MagazineEditor() {
  const { createMutation } = useMagazineMutations();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    createMutation.mutate(formData);
  };

  return (
    <div className="flex justify-center">
      <div className="w-[80%]">
        <div className="flex flex-col sm:py-28 py-14">
          <span className="pb-7 text-font-24 font-bold">게시물 등록</span>

          <form onSubmit={handleSubmit}>
            <TextLabel label="제목" />
            <Input name="title" />

            <TextLabel label="내용" />
            <textarea
              className="w-full h-[340px] rounded-md bg-primary-w text-primary-p"
              name="content"
            />

            <span className="my-3 text-font-20">사진 첨부</span>
            <div className="flex sm:flex-row flex-col mt-3 gap-3">
              <FileUpload name="file1" />
              <FileUpload name="file2" />
              <FileUpload name="file3" />
            </div>
            <div className="mt-14 flex justify-end gap-3">
              <BorderBtn label="취소" width={64} py={1} href="/magazine" />
              <WhiteBtn label="등록하기" width={102} py={1} type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
