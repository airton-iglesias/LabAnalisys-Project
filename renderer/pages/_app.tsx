import Layout from '../components/layout'
import "../components/global.css"
 
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}