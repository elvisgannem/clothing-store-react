import React, { useState } from 'react'
import ThemeContext from './context/ThemeContext'
import CategoriesContext from './context/CategoriesContext'
import ProductsContext from './context/ProductsContext'
import theme from './ui/themes/theme'
import './ui/styles/global.css'
import Routes from './ui/components/Routes/Routes'

function App() {
  const [categories, setCategories] = useState()
  const [products, setProducts] = useState()
 
  return (
    <ThemeContext.Provider value={theme}>
      <CategoriesContext.Provider value={{ categories, setCategories }}>
        <ProductsContext.Provider value={{products, setProducts}}>
        <Routes />
        </ProductsContext.Provider>
      </CategoriesContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
