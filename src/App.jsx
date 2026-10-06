import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'
import CatalogPage from './pages/CatalogPage/CatalogPage.jsx'
import { Routes, Route } from 'react-router'
import AboutPage from './pages/AboutPage/AboutPage.jsx'
import ServicesPage from './pages/ServicesPage/ServicesPage.jsx'
import ContactsPage from './pages/ContactsPage/ContactsPage.jsx'

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<CatalogPage/>}/>
        <Route path='About' element={<AboutPage/>}/>
        <Route path='Services' element={<ServicesPage/>}/>
        <Route path='Contacts' element={<ContactsPage/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
