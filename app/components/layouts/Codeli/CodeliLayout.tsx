import Head from 'next/head';
import Navbar from '@module/Navbar/Navbar';
import Sidenav from '@module/Sidenav/Sidenav';

import { useRef } from 'react';
import useDetectOutsideClick from '@hook/useDetectOutsideClick';

type CodeliLayoutProps = {
  children: React.ReactNode;
};

const CodeliLayout = ({ children }: CodeliLayoutProps) => {
  const sidenavRef = useRef(null);
  const [sidenavActive, setSidenavActive] = useDetectOutsideClick(
    sidenavRef,
    false
  );

  return (
    <>
      <Head>
        <title>Codeli</title>
      </Head>

      <div className="min-h-screen bg1 color-transition">
        <Sidenav active={sidenavActive} sidenavRef={sidenavRef} />
        <Navbar openSidenav={() => setSidenavActive(!sidenavActive)} />
        <div>{children}</div>
      </div>
    </>
  );
};

export default CodeliLayout;
