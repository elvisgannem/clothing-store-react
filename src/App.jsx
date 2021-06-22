import Header from './ui/components/surfaces/Header/Header'
import Navbar from './ui/components/surfaces/Navbar/Navbar'
import Main from './ui/components/data-display/Main/Main'
import Footer from './ui/components/surfaces/Footer/Footer'
import ThemeContext from './contexts/themeContext'
import theme from './ui/themes/theme'
import './ui/styles/global.css'

function App() {
  return (
    <ThemeContext.Provider value={theme}>
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </ThemeContext.Provider>
  )
}

export default App
