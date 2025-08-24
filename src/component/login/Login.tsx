'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '@/assets/img/logo.png';
import LoginInput from './ui/LoginInput';
import BorderBtn from '@/component/common/BorderBtn';
import WhiteBtn from '../common/WhiteBtn';
import GoogleLoginBtn from './ui/GoogleLoginBtn';
import { useSearchParams } from 'next/navigation';
import { loginAction } from '@/app/core/action/user/loginAction';

export default function Login() {
  const searchParams = useSearchParams();
  const next = searchParams.get('next') || '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) return; // 혹시 모르니 이중체크
    const formdata = new FormData(e.currentTarget);
    await loginAction(formdata);
    window.location.href = next;
  };

  const isDisabled = !email || !password;

  return (
    <div className="w-full grid min-h-[calc(100svh-70px)] place-items-center px-5">
      <div>
        <Image
          src={logo}
          width={220}
          height={56}
          alt="센트리에"
          className="mx-auto mb-8"
        />

        <form
          id="loginForm"
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          <LoginInput
            name="email"
            placeholder="이메일"
            type="email"
            autoComplete="email"
            aria-label="이메일"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <LoginInput
            name="password"
            placeholder="비밀번호"
            type="password"
            autoComplete="current-password"
            aria-label="비밀번호"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <input type="hidden" name="next" value={next} readOnly />

          <BorderBtn
            label="로그인"
            login
            font={20}
            type="submit"
            form="loginForm"
            disabled={isDisabled}
          />
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-white/40" />
          <span className="px-2 text-font-16">또는</span>
          <div className="h-px flex-1 bg-white/40" />
        </div>

        <div className="flex flex-col gap-3">
          <WhiteBtn label="회원가입" login href="/join" font={20} />
          <GoogleLoginBtn />
        </div>
      </div>
    </div>
  );
}
