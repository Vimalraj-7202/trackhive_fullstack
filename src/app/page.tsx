'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '@/app/hooks/redux';
import { setUser } from '@/app/store/auth/auth.slice';

export default function HomePage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { token, user } = useAppSelector((state) => state.auth);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Hydrate user from localStorage if missing
    if (!user) {
      const savedUser = localStorage.getItem('user');
      const savedToken = localStorage.getItem('token');

      if (savedUser && savedToken) {
        dispatch(setUser(JSON.parse(savedUser)));
      }
    }
    setHydrated(true);
  }, [user, dispatch]);

  useEffect(() => {
    if (!hydrated) return; // wait until hydration is done

    if (token) {
      router.replace('/dashboard');
    } else {
      router.replace('/auth/login');
    }
  }, [token, hydrated, router]);

  return null;
}
