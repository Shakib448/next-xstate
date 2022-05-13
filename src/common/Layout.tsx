import Head from "next/head";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
