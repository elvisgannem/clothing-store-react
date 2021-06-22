import Header from './ui/components/surfaces/Header'
import ThemeContext from './contexts/themeContext'
import theme from './ui/themes/theme'

function App() {
  return (
    <ThemeContext.Provider value={theme}>
      <Header />
    </ThemeContext.Provider>
  )
}

export default App
