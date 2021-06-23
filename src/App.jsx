import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './ui/components/surfaces/Header/Header'
import Navbar from './ui/components/surfaces/Navbar/Navbar'
import Main from './ui/components/data-display/Main/Main'
import Footer from './ui/components/surfaces/Footer/Footer'
import ThemeContext from './context/ThemeContext'
import CategoriesContext from './context/CategoriesContext'
import ProductsContext from './context/ProductsContext'
import theme from './ui/themes/theme'
import './ui/styles/global.css'
import CurrentPage from './ui/components/data-display/CurrentPage/CurrentPage'
import ProductMain from './ui/components/data-display/ProductMain/ProductMain'

function App() {
  const [categories, setCategories] = useState()
  const [products, setProducts] = useState()
 
  return (
    <ThemeContext.Provider value={theme}>
      <CategoriesContext.Provider value={{ categories, setCategories }}>
        <ProductsContext.Provider value={{products, setProducts}}>
        <Router>
          <Switch>
            {categories !== undefined ? 
            <Route exact path={`/${categories.items[0].path}`}>
              <Header />
              <Navbar />
              <CurrentPage title={'Camisetas'} />
              <ProductMain category={'Camisetas'} id={1} />
              <Footer />
            </Route>
            : '' }
            {categories !== undefined ? 
            <Route exact path={`/${categories.items[1].path}`}>
              <Header />
              <Navbar />
              <CurrentPage title={'Calças'} />
              <ProductMain category={'Calças'} id={2} />
              <Footer />
            </Route>
            : '' }
            {categories !== undefined ? 
            <Route exact path={`/${categories.items[2].path}`}>
              <Header />
              <Navbar />
              <CurrentPage title={'Calçados'} />
              <ProductMain category={'Calçados'} id={3} />
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
        </ProductsContext.Provider>
      </CategoriesContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
