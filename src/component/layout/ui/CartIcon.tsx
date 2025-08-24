'use client';

import { useAuthGuard } from '@/app/core/hooks/auth/useAuthGuard';
import { useCart } from '@/app/core/hooks/cart/useCart';
import { GuardedLink } from '@/component/common/AuthGuardLink';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function CartIcon() {
  const { data: cart = [] } = useCart();
  const quantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  const { isLoggedIn } = useAuthGuard();
  const showBadge = isLoggedIn === true && quantity > 0;

  return (
    <GuardedLink href="/cart" aria-label="장바구니">
      <div className="relative">
        {showBadge && (
          <div className="badge bg-purple-200 border-none text-primary-p rounded-lg w-3.5 h-4 text-xs absolute left-6 top-0 flex items-center justify-center">
            {quantity}
          </div>
        )}
        <FontAwesomeIcon
          icon={faCartShopping}
          className="!w-[1.8rem] !h-[1.8rem] cursor-pointer rounded-md p-2 hover:bg-primary-w hover:text-primary-p"
        />
      </div>
    </GuardedLink>
  );
}
