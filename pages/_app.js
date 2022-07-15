import '../styles/globals.css'
import Navabar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return <>
  <Navabar/>
  <Component {...pageProps} />
  </>
}

export default MyApp
