import '@/styles/globals.css'
import PlausibleProvider from 'next-plausible'
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PlausibleProvider domain="kurdmake.com">
        <Component {...pageProps} />
        <Analytics />
      </PlausibleProvider >
    </>
  );
}

export default MyApp;
