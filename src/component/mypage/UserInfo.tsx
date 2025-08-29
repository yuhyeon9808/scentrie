import { updateUserInfo } from '@/app/core/action/user/updateUserInfoAction';
import InfoUpdate from './ui/InfoUpdate';
import { fetchUserInfo } from '@/app/core/api/fetch/fetchUserInfo';

export default async function UserInfo() {
  const user = await fetchUserInfo();

  if (!user) {
    return <p>유저 정보를 불러올 수 없습니다.</p>;
  }
  const masking = user.password?.replace(/./g, '*');

  return (
    <div className="flex flex-col py-14">
      <span className="sm:text-font-40 text-font-30 font-bold">
        PROFILE INFORMATION
      </span>

      <div className="pt-7">
        <InfoUpdate
          label="이름"
          type="text"
          initialValue={user.username}
          field="username"
          action={updateUserInfo}
        />
        <InfoUpdate
          label="전화번호"
          type="tel"
          initialValue={user.phone}
          field="phone"
          action={updateUserInfo}
        />
        <InfoUpdate
          label="주소"
          type="text"
          initialValue={user.address}
          field="address"
          action={updateUserInfo}
        />
      </div>

      <span className="sm:text-font-40 text-font-30 font-bold pt-14">
        SIGN IN & SECURITY
      </span>

      <div className="pt-7">
        <div className="border-b border-primary-w">
          <div className="h-full flex justify-between pt-5 pb-6">
            <div className="flex flex-col">
              <span className="text-font-20">이메일</span>
              <span>{user.email}</span>
            </div>
          </div>
        </div>

        {user.password && (
          <InfoUpdate
            label="비밀번호"
            type="password"
            initialValue={masking}
            field="password"
            action={updateUserInfo}
          />
        )}
      </div>
    </div>
  );
}
