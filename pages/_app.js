import { GlobalStyle } from '../styles/global';
import useTheme from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import Navbar from 'navbar';

function MyApp({ Component, pageProps }) {
  const { toggle, theme } = useTheme();

  return (
    <>
      <Head>
        <title>Kurted UI</title>
        <meta name="description" content="UI component library by Kurted" />
        <link rel="manifest" href="/manifest.json" />
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap" rel="stylesheet"></link>
        {/* Favicons */}
        <link rel="icon" href="/brand/favicon-16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/brand/favicon-32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/brand/favicon.ico" type="image/png" sizes="48x48" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
        {/* For Android */}
        <meta name="theme-color" content="#0b132b" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar toggleTheme={toggle} />
        <main>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
