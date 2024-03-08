import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import ErrorBoundary from '@/services/ErrorBoundary';
import GlobalStyle from '../globalStyles';
// // import { Provider } from 'react-redux';
// // import store from '@/redux/store/store';
import { wrapper } from '@/redux/store/store';
import SpinCustomWrapper from '../components/uiElement/AppWrapper';
import '@/styles/globals.scss';
import '../assets/fonts/font.css';
import 'antd/dist/reset.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ApolloProvider } from '@apollo/client';
import client from '@/services/apollo-client';

function App({ Component, pageProps }: AppProps) {
  const [location, setLocation] = useState<any>('');
  useEffect(() => {
    setLocation(window.location.href.split('/')[3]);
  });

  return (
    <ErrorBoundary>
      {/* @ts-ignore */}
      <GlobalStyle location={location} />
      <ApolloProvider client={client}>
        <SpinCustomWrapper>
          <Component {...pageProps} />
        </SpinCustomWrapper>
      </ApolloProvider>
    </ErrorBoundary>
  );
}

export default wrapper.withRedux(App);
