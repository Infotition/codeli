import Head from 'next/head';
import Navbar from '@module/Navbar/Navbar';

type Props = {
  children: React.ReactNode;
};

const CodeliLayout = ({ children }: Props) => (
  <>
    <Head>
      <title>{'Codeli'}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div className={'bg-bg-light dark:bg-bg-dark min-h-screen '}>
      <Navbar />
      <div>{children}</div>
    </div>
  </>
);

export default CodeliLayout;
