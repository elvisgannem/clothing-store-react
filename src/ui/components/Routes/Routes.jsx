import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './../surfaces/Header/Header'
import Navbar from './../surfaces/Navbar/Navbar'
import Footer from './../surfaces/Footer/Footer'
import Main from './../data-display/Main/Main'
import CategoriesContext from './../../../context/CategoriesContext'
import CurrentPage from './../data-display/CurrentPage/CurrentPage'
import ProductMain from './../data-display/ProductMain/ProductMain'
import Construction from './../data-display/Construction/Construction'

const Routes = () => {
    const { categories } = useContext (CategoriesContext)
    return  (
        <Router>
          <Switch>
            {categories !== undefined ? 
            <Route path={`/${categories.items[0].path}`}>
              <Header />
              <Navbar />
              <CurrentPage title={'Camisetas'} />
              <ProductMain category={'Camisetas'} id={1} />
              <Footer />
            </Route>
            : '' }
            {categories !== undefined ? 
            <Route path={`/${categories.items[1].path}`}>
              <Header />
              <Navbar />
              <CurrentPage title={'Calças'} />
              <ProductMain category={'Calças'} id={2} />
              <Footer />
            </Route>
            : '' }
            {categories !== undefined ? 
            <Route path={`/${categories.items[2].path}`}>
              <Header />
              <Navbar />
              <CurrentPage title={'Calçados'} />
              <ProductMain category={'Calçados'} id={3} />
              <Footer />
            </Route>
            : '' }
            <Route path={'/contact'}>
              <Header />
              <Navbar />
              <Construction />
              <Footer />
            </Route>
            <Route path={'/'}>
              <Header />
              <Navbar />
              <Main />
              <Footer />
            </Route>
          </Switch>
        </Router>
    )
}

export default Routes
