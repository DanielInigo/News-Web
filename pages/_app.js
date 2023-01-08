import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import Head from 'next/head'

export default function App({
  Component, pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <title>News App</title>
        <link rel="icon" href="/index.ico" />
      </Head>
      <Component {...pageProps}/>
    </SessionProvider>
  )
}