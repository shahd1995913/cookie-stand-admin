import '../styles/globals.css'


import { AuthProvider } from '../contexts/auth'



function MyApp({ Component, pageProps }) {
 
  <AuthProvider>
    
  <Component {...pageProps} />

</AuthProvider>

}

export default MyApp