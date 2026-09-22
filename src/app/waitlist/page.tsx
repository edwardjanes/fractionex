import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { RiskWarningBanner } from '@/components/RiskWarningBanner';
import { Footer } from '@/components/Footer';
import { WaitlistForm } from '@/components/WaitlistForm';

export const metadata: Metadata = {
  title: 'Register your interest - Fractionex',
  description:
    'Register your interest in Fractionex and be told first when investor registration opens.',
};

export default function Waitlist() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="h-[69px]" />

      <main className="flex flex-col">
        <RiskWarningBanner />

        <div className="mx-auto grid w-full max-w-5xl gap-12 px-6 py-16 md:grid-cols-2 md:items-start">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-wide text-[#FF0000]">
              Early access
            </p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-black md:text-5xl">
              Register your interest
            </h1>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Fractionex is not yet open to investors. Leave your details and we&apos;ll email you
              when registration opens, along with the full information you&apos;ll need to decide
              whether it&apos;s right for you.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>· Free to register, no obligation to invest</li>
              <li>· One email when registration opens, occasional updates until then</li>
              <li>· Unsubscribe any time</li>
            </ul>
            <p className="mt-10 text-xs leading-relaxed text-gray-500">
              Registering your interest is not an application to invest and nothing on this page is
              an offer of investments. Any future investment will carry risk: you could lose all the
              money you invest.
            </p>
          </div>

          <WaitlistForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}
