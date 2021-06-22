import Header from './ui/components/surfaces/Header/Header'
import Navbar from './ui/components/surfaces/Navbar/Navbar'
import ThemeContext from './contexts/themeContext'
import theme from './ui/themes/theme'
import './ui/styles/global.css'

function App() {
  return (
    <ThemeContext.Provider value={theme}>
      <Header />
      <Navbar />
    </ThemeContext.Provider>
  )
}

export default App
