import React from 'react';
import Link from 'next/link';

export function OwnershipControlSection(): React.ReactElement {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
          Tokenising your property doesn&apos;t mean losing it.
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          You choose how much of your property to tokenise — typically 10–20% — and you keep
          majority ownership and decision-making rights throughout. This isn&apos;t a sale.
          It&apos;s a way to raise cash from part of your property while it keeps working for you.
        </p>
        <p className="text-2xl font-bold text-black mb-8">
          Ownership control: <span className="font-normal">You decide the percentage, and you keep majority ownership.</span>
        </p>
        <Link href="/security" className="text-red-600 font-semibold hover:underline">
          See how your ownership is protected →
        </Link>
      </div>
    </section>
  );
}
