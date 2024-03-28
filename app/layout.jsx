import Navbar from '@/components/Navbar'
import '../assets/styles/globals.css'
import Footer from '@/components/Footer'
import AuthProvider from '@/components/AuthProvider'
import { GlobalProvider } from '@/context/GlobalContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'photoswipe/dist/photoswipe.css'

export const metadata = {
  title: 'Property Pulse | Find The Perfect Rental',
  description: 'Find Your Dream Rental Property',
  keywords: 'rental, find rental, find properties',
}

const MainLayout = ({ children }) => {
  return (
    <GlobalProvider>
      <AuthProvider>
        <html lang="en">
          <body>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </AuthProvider>
    </GlobalProvider>
  )
}

export default MainLayout
