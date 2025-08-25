import WhiteBtn from '@/component/common/WhiteBtn';
import { useState } from 'react';

export default function MagazineSearchInput({
  setQuery,
}: {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [searchWord, setSearchWord] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setQuery(searchWord);
      }}
      className="flex"
    >
      <input
        type="text"
        placeholder="검색"
        className="w-[215px] sm:w-[250px] mr-3 rounded-md border px-5 py-2"
        name="search"
        value={searchWord}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchWord(e.target.value)
        }
      />
      <WhiteBtn label="찾기" font={16} type="submit" />
    </form>
  );
}
