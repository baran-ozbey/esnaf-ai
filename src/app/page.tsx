'use client';

import { useAppStore } from '@/lib/store';
import LandingPage from '@/components/LandingPage';
import AppShell from '@/components/AppShell';

export default function Home() {
  const { isAuthenticated } = useAppStore();

  if (!isAuthenticated) {
    return <LandingPage />;
  }

  return <AppShell />;
}
