import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";


import '@/styles/globals.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import type { AppProps } from 'next/app';
import Layout from '@/components/layout/Layout';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
 
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )

}
