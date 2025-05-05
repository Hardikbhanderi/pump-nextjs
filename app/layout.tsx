import RootLayoutServer from 'layout/RootLayoutServer';
import React from 'react';

export default function RootLayout(props: { children: React.ReactNode }) {
  return <RootLayoutServer>{props.children}</RootLayoutServer>;
}
