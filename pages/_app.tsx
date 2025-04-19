import type { AppProps } from 'next/app'
import { type ReactElement } from 'react'
import Script from 'next/script';
import Head from 'next/head';
import '../style.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />

        {/* Google Adsense */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4907197973761221" crossOrigin="anonymous"></script>
        <meta name="google-adsense-account" content="ca-pub-4907197973761221" />

        {/* clickadilla */}
        {/* <script async src="https://js.wpadmngr.com/static/adManager.js" data-admpid="314085"></script> */}

      </Head>

      {/* monetag */}
      {/* <Script>
        {`
        (function(d,z,s){s.src='https://'+d+'/401/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('groleegni.net',9230773,document.createElement('script'))
        `}
      </Script>

      <Script>
        {`
        (function(d,z,s){s.src='https://'+d+'/401/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('gizokraijaw.net',9230778,document.createElement('script'))
        `}
      </Script> */}

      {/* adsterra banner */}
      {/* <Script type="text/javascript">
        {`
        atOptions = {
          'key' : '5d8681ea81dce92641d324ff2850aa08',
          'format' : 'iframe',
          'height' : 250,
          'width' : 300,
          'params' : {}
        };
      `}
      </Script>
      <Script type="text/javascript" src="//www.highperformanceformat.com/5d8681ea81dce92641d324ff2850aa08/invoke.js"></Script> */}


      {/* Google tag (gtag.js)  */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-QZMXB2WGM2"></Script>
      <Script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-QZMXB2WGM2');
      `}
      </Script>

      <Component {...pageProps} />

      <Script type='text/javascript' src='//pl26416596.profitableratecpm.com/0d/2e/23/0d2e2375eb22c7adee4bcab7b29bb9c7.js'></Script>
    </>
  )
}
