import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './ui/components/surfaces/Header/Header'
import Navbar from './ui/components/surfaces/Navbar/Navbar'
import Main from './ui/components/data-display/Main/Main'
import Footer from './ui/components/surfaces/Footer/Footer'
import ThemeContext from './context/ThemeContext'
import CategoriesContext from './context/CategoriesContext'
import theme from './ui/themes/theme'
import './ui/styles/global.css'
import CurrentPage from './ui/components/data-display/CurrentPage/CurrentPage'
import ProductMain from './ui/components/data-display/ProductMain/ProductMain'

function App() {
  const [categories, setCategories] = useState()
 
  return (
    <ThemeContext.Provider value={theme}>
      <CategoriesContext.Provider value={{ categories, setCategories }}>
        <Router>
          <Switch>
            {categories !== undefined ? 
            <Route exact path={`/${categories.items[0].path}`}>
              <Header />
              <Navbar />
              <CurrentPage title={'Camisetas'} />
              <ProductMain category={'Camisetas'} />
              <Footer />
            </Route>
            : '' }
            {categories !== undefined ? 
            <Route exact path={`/${categories.items[1].path}`}>
              <Header />
              <Navbar />
              <CurrentPage title={'Calças'} />
              <ProductMain category={'Calças'} />
              <Footer />
            </Route>
            : '' }
            {categories !== undefined ? 
            <Route exact path={`/${categories.items[2].path}`}>
              <Header />
              <Navbar />
              <CurrentPage title={'Calçados'} />
              <ProductMain category={'Calçados'} />
              <Footer />
            </Route>
            : '' }
            <Route exact path={'/'}>
              <Header />
              <Navbar />
              <Main />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </CategoriesContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
