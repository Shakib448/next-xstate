import Head from "next/head";
import React, { ReactNode, FC } from "react";

interface Props {
  children: ReactNode;
  title?: string;
}

const Layout: FC<Props> = ({ children, title }) => {
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
