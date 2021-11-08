import { AppProps } from 'next/app';
import 'styles/base/_base.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
