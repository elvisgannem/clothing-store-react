import React, { useContext } from 'react'
import Filter from './Filter/Filter'
import ProductsGrid from './ProductsGrid/ProductsGrid'
import { Container, Title, Content } from './ProductMain.style'
import ThemeContext from './../../../../context/ThemeContext'
import OrderByBar from './OrderByBar/OrderByBar'
// import CategoriesContext from './../../../../context/CategoriesContext'

const ProductMain = (props) => {
    const theme = useContext(ThemeContext)
    // const {categories} = useContext(CategoriesContext)
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
                    <ProductsGrid id={props.id} />
                    
                </Content>
        </Container>
    )
}

export default ProductMain
