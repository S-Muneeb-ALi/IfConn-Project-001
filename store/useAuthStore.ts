// @ts-nocheck
'use client';

import AuthenticationResponse from '@/models/responses/AuthState'
import { LoginUserResponse } from '@/models/responses/LoginUserResponse'
import { create } from 'zustand'
import zukeeper from "zukeeper"
import { persist, createJSONStorage } from 'zustand/middleware'

export interface AuthStore {
  isAuthenticated: boolean,
  user?: LoginUserResponse,
  signin: (authResponse: AuthenticationResponse) => void,
  signout: () => void,
}

const useAuthStore = create<AuthStore>(
  persist(
    zukeeper(set => ({
      isAuthenticated: false,
      user: undefined,
      signin: (authResponse) => set((state) => authResponse),
      signout: () => set({ isAuthenticated: false, user: undefined }),
    })),
    {
      name: 'auth',
      storage: createJSONStorage(() => localStorage),
    },
  )
)

window.Storage = useAuthStore;
export default useAuthStore;