'use client';

import { useState } from 'react';
import Input from '../../common/Input';
import WhiteBtn from '../../common/WhiteBtn';
import BorderBtn from '../../common/BorderBtn';
import AddressInput from '@/component/common/AddressInput';

type Field = 'username' | 'phone' | 'address' | 'password';

export default function InfoUpdate({
  label,
  type,
  initialValue,
  field,
  action,
}: {
  label: string;
  type: string;
  initialValue?: string;
  field: Field;
  action: (formData: FormData) => Promise<void>;
}) {
  const [open, setOpen] = useState(false);
  const isPassword = field === 'password';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await action(formData);
  };

  return (
    <form className="divide-y divide-text-primary-w" onSubmit={handleSubmit}>
      <input type="hidden" name="field" value={field} />

      <div className="h-full flex justify-between pt-5 pb-6">
        <div className="flex flex-col">
          <span className="text-font-20">{label}</span>
          <span>{initialValue || '-'}</span>
        </div>
        <button type="button" onClick={() => setOpen(!open)}>
          수정
        </button>
      </div>

      <div
        className={`transition-all duration-400 overflow-hidden ${
          open ? 'max-h-80 p-5 border-b' : 'max-h-0'
        }`}
      >
        {field === 'address' ? (
          <AddressInput />
        ) : (
          <Input
            dValue={isPassword ? '' : initialValue}
            type={type}
            name="value"
            placeholder={isPassword ? '새 비밀번호 입력' : undefined}
            autoComplete={isPassword ? 'new-password' : undefined}
          />
        )}
        <div className="flex justify-end gap-3 mt-3">
          <WhiteBtn label="저장" type="submit" />
          <BorderBtn
            label="취소"
            py={0.5}
            width={67}
            click={() => setOpen(false)}
          />
        </div>
      </div>
    </form>
  );
}
