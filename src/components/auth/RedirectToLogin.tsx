'use client';

import useAuthStore from '@/store/useAuthStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Loading from '../loading';

export default function RedirectToLogin() {
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();

  // useShallow(() => {
  //   const storedAuth = localStorage.getItem('auth');
  //   if (storedAuth) {
  //     try {
  //       const authState = JSON.parse(storedAuth) as AuthState;
  //       setIsAuthenticated(authState.isAuthenticated);
  //     } catch (error) {
  //       console.error('Error parsing stored auth:', error);
  //       setIsAuthenticated(false); 
  //     }
  //   }
  // });

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth');
    } else {
      router.push('/dashboard'); 
    }
  }, [isAuthenticated]);

  return <Loading />
}
