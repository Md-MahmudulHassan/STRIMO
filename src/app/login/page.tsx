import { Suspense } from 'react';
import LoginPageContent from '@/components/LoginPageContent';

export default function LoginPage() {
  return (
    <Suspense fallback={<LoginPageFallback />}>
      <LoginPageContent />
    </Suspense>
  );
}

function LoginPageFallback() {
  // You can render a simple loader here while the page and its search params are loading
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      {/* Using a generic loader or skeleton */}
    </div>
  );
}
