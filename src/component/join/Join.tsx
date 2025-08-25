'use client';

import React, { useState } from 'react';
import TextLabel from '../common/TextLabel';
import Input from '../common/Input';
import logo from '@/assets/img/logo.png';
import Image from 'next/image';
import BorderBtn from '@/component/common/BorderBtn';

import { useRouter } from 'next/navigation';
import { joinAction } from '@/app/core/action/user/joinAction';
import AddressInput from '../common/AddressInput';

export default function Join() {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    joinAction(formdata);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState({ zip: '', addr1: '', addr2: '' });

  const isFormValid =
    email &&
    password &&
    name &&
    phone &&
    address.zip &&
    address.addr1 &&
    address.addr2;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9]/g, '');
    if (value.length < 4) {
      value = value;
    } else if (value.length < 8) {
      value = `${value.slice(0, 3)}-${value.slice(3)}`;
    } else {
      value = `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7, 11)}`;
    }
    setPhone(value);
  };

  return (
    <div className="flex justify-center">
      <div className="sm:w-[500px] w-full px-10 sm:py-28 py-14">
        <div className="mb-7 flex justify-center">
          <Image
            src={logo}
            width={220}
            height={56}
            alt="센트리에"
            className="mb-1"
          />
        </div>

        <form onSubmit={handleSubmit}>
          <TextLabel label="이메일" />
          <Input
            placeholder="아이디를 입력해주세요."
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextLabel label="비밀번호" />
          <Input
            placeholder="비밀번호를 입력해주세요."
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <TextLabel label="이름" />
          <Input
            placeholder="이름을 입력해주세요."
            name="name"
            onChange={(e) => setName(e.target.value)}
          />

          <TextLabel label="전화번호" />
          <div className="flex items-center gap-3">
            <Input
              placeholder="전화번호를 입력해주세요."
              type="tel"
              name="phone"
              onChange={handlePhoneChange}
            />
          </div>

          <TextLabel label="주소" />
          <AddressInput onChange={setAddress} />

          <div className="mt-5" onClick={() => router.push('/login')}>
            <BorderBtn type="submit" label="가입하기" disabled={!isFormValid} />
          </div>
        </form>
      </div>
    </div>
  );
}
