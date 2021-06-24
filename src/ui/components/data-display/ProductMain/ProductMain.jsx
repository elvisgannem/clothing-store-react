import React, { useContext, useState } from 'react'
import Filter from './Filter/Filter'
import ProductsGrid from './ProductsGrid/ProductsGrid'
import { Container, Title, Content } from './ProductMain.style'
import ThemeContext from './../../../../context/ThemeContext'
import ProductsContext from './../../../../context/ProductsContext'
import OrderByBar from './OrderByBar/OrderByBar'
import Pagination from './Pagination/Pagination'
// import CategoriesContext from './../../../../context/CategoriesContext'

const ProductMain = (props) => {
    const theme = useContext(ThemeContext)
    const { products } = useContext(ProductsContext)
    const [productsPerPage] = useState(8)
    const [currentPage, setCurrentPage] = useState(1)
    
    // Change page function
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <Container>
            <Filter />
                <Content>
                    <Title 
                    color={theme.color.primary.main}
                    fontFamily={theme.typography.main}
                    weight={theme.typography.weight.normal}
                    >{props.category}</Title>
                    <OrderByBar /> 
                    <ProductsGrid 
                        id={props.id} 
                        productsPerPage={productsPerPage} 
                        currentPage={currentPage} />

                    {products !== undefined ? 
                    <Pagination 
                        productsPerPage={productsPerPage} 
                        totalProducts={products.items.length} 
                        paginate={paginate} />
                        : ''}
                    
                </Content>
        </Container>
    )
}

export default ProductMain
