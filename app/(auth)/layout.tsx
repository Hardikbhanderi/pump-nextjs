import React from 'react';

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <header></header>
      <main>{props.children}</main>
      <footer></footer>
    </React.Fragment>
  );
}
