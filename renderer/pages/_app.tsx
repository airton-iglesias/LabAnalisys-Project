import "../components/styles.css"
import React, { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  children: ReactNode
  title?: string
}

export const Layout = ({ children, title = 'LabAnalisys-Project' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
  </div>
)
 
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}