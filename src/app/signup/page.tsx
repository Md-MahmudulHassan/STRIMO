import { Suspense } from 'react';
import SignupPageContent from '@/components/SignupPageContent';

export default function SignupPage() {
  return (
    <Suspense fallback={<SignupPageFallback />}>
      <SignupPageContent />
    </Suspense>
  );
}

function SignupPageFallback() {
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      {/* You can render a simple loader here */}
    </div>
  );
}
