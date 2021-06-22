import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './ui/components/surfaces/Header/Header'
import Navbar from './ui/components/surfaces/Navbar/Navbar'
import Main from './ui/components/data-display/Main/Main'
import Footer from './ui/components/surfaces/Footer/Footer'
import ThemeContext from './context/ThemeContext'
import theme from './ui/themes/theme'
import './ui/styles/global.css'

function App() {
  return (
    <ThemeContext.Provider value={theme}>
      <Router>
        <Switch>
          <Route exact path="/camisetas">
            <Header />
            <Navbar />
            <Footer />
          </Route>

          <Route exact path="/">
            <Header />
            <Navbar />
            <Main />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </ThemeContext.Provider>
  )
}

export default App
