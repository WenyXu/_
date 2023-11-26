import 'nextra-theme-blog/style.css'
import "@code-hike/mdx/styles"
import '../styles/main.css'
export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}