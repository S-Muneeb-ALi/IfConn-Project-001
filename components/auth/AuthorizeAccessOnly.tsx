'use client';

import useAuthStore from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthorizeAccessOnly() {
  const router = useRouter();
  
  const { isAuthenticated } = useAuthStore(state => state);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth');
    }
  }, [isAuthenticated]);

  return <></>;
}