import Head from "next/head";
import "./recepcion.module.css"
import Parte2 from "./componentsRecepcion/parte2"

export default function Vercel() {
  return (
    <>
      <Head>
        <title>Vercel</title>
        <meta charSet="utf-8" />

        <link rel="manifest" href="manifest.json" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Esquinero Mexicano" />
        <meta name="apple-mobile-web-app-title" content="Esquinero" />
        <meta name="theme-color" content="#F2F2F3" />
        <meta name="msapplication-navbutton-color" content="#F2F2F3" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="msapplication-starturl" content="/" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="180x180"
          href="/apple-icon.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="180x180"
          href="/apple-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="144x144"
          href="/ms-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="144x144"
          href="/ms-icon-144x144.png"
        />
      </Head>
      <div>
          <Parte2/>
      </div>
    </>
  );
}
