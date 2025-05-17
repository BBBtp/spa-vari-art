import '../styles/globals.css'
import '../styles/components.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp 