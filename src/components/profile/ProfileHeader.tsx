import React from 'react';
import { Logo } from '../layout/Logo';
import { BackButton } from '../ui/BackButton';

export function ProfileHeader() {
  return (
    <div className="mb-8">
      <div className="text-center">
        <Logo className="mx-auto" />
        <h2 className="mt-4 text-3xl font-display tracking-tight text-white">
          Build Your Profile
        </h2>
        <p className="mt-2 text-sm text-gold-500/80">
          Let's find your perfect credit card match
        </p>
      </div>
      <div className="mt-6"> {/* Added margin top for spacing */}
        <BackButton />
      </div>
    </div>
  );
}