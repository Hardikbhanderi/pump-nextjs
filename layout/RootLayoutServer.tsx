// app/RootLayoutServer.tsx
import React from 'react';
import RootLayoutClient from './RootLayoutClient';
import { seoConfig } from 'config/seo';
import { Metadata } from 'next';
import { getLocale, getMessages } from 'next-intl/server';
import { cookies } from 'next/headers';

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  icons: {
    icon: [
      { rel: 'icon', url: '/favicon.ico' },
      { rel: 'icon', url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: seoConfig.title,
    description: seoConfig.description,
    openGraph: {
      title: seoConfig.openGraph.title,
      description: seoConfig.openGraph.description,
      url: seoConfig.openGraph.url,
      type: seoConfig.openGraph.type as 'website',
    },
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow',
    alternates: {
      canonical: seoConfig.url,
    },
    authors: [{ name: 'aelabid' }],
    keywords: [
      'next.js',
      'react',
      'typescript',
      'starter',
      'boilerplate',
      'nextjs starter',
    ],
  };
}

export default async function RootLayoutServer(props: Props) {
  const locale = await getLocale();
  const messages = await getMessages({ locale });
  const cookieStore = await cookies();

  return (
    <RootLayoutClient
      locale={locale}
      messages={messages}
      cookies={cookieStore.toString()}
    >
      {props.children}
    </RootLayoutClient>
  );
}
