'use client';
import Input from '@/component/common/Input';
import WhiteBtn from '@/component/common/WhiteBtn';
import React, { useEffect, useRef, useState } from 'react';

interface Address {
  zip: string;
  addr1: string;
  addr2: string;
}

export default function AddressInput({
  onChange,
}: {
  onChange: (addr: Address) => void;
}) {
  const [zip, setZip] = useState('');
  const [addr1, setAddr1] = useState('');
  const [addr2, setAddr2] = useState('');
  const readyRef = useRef(false);

  useEffect(() => {
    onChange({ zip, addr1, addr2 });
  }, [zip, addr1, addr2, onChange]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.daum?.Postcode) {
      readyRef.current = true;
      return;
    }

    const id = 'daum-postcode-script';
    if (document.getElementById(id)) return;

    const script = document.createElement('script');
    script.id = id;
    script.src =
      'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    script.async = true;
    script.onload = () => {
      readyRef.current = true;
    };
    document.head.appendChild(script);
  }, []);

  const openPostcode = () => {
    if (!window.daum?.Postcode) return;

    new window.daum.Postcode({
      oncomplete: (data) => {
        setZip(data.zonecode);
        setAddr1(data.roadAddress || data.jibunAddress);
      },
    }).open();
  };

  return (
    <>
      <div className="flex items-center gap-3">
        <Input
          placeholder="07653"
          width={120}
          name="code"
          value={zip}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setZip(e.target.value)
          }
        />
        <div className="mb-3">
          <WhiteBtn label="우편번호 검색" height={48} click={openPostcode} />
        </div>
      </div>
      <Input
        placeholder="주소를 입력해주세요."
        name="addr1"
        value={addr1}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setAddr1(e.target.value)
        }
      />
      <Input
        placeholder="상세주소"
        name="addr2"
        value={addr2}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setAddr2(e.target.value)
        }
      />
    </>
  );
}
