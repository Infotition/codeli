import { AppProps } from 'next/app';
import 'styles/base/_base.scss';
import 'tailwindcss/tailwind.css';

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
