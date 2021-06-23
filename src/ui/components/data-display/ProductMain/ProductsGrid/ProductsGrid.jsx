import React, { useEffect, useContext } from 'react'
import { Container, Image, Title, Price, Button, ProductContainer } from './ProductsGrid.style'
import ProductsContext from './../../../../../context/ProductsContext'
import CategoriesContext from './../../../../../context/CategoriesContext'
import ThemeContext from './../../../../../context/ThemeContext'

const ProductsGrid = (props) => {
    const theme = useContext(ThemeContext)
    const { products, setProducts } = useContext(ProductsContext)
    const { categories } = useContext(CategoriesContext)

    useEffect(() => {
        fetch(`http://localhost:8888/api/V1/categories/${props.id}`)
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.log(error))
    }, [props.id])

    return (
        <div>

            {/* {products !== undefined ? products.items.map((item, index) => <p key={index}>{item.name}</p>) : ''} */}

            
    {products !== undefined ?
        <ProductContainer> 


                {products.items.map((item, index) => (
                <Container>
                    <Image src={`${item.image}`} 
                    borderColor={theme.color.secondary.lightgray}/>

                    <Title
                    fontFamily={theme.typography.main}
                    color={theme.color.secondary.select}
                    weight={theme.typography.weight.normal}
                    >{item.name}</Title>

                    <Price
                    fontFamily={theme.typography.main}
                    color={theme.color.primary.main}
                    weight={theme.typography.weight.extrabold}
                    >R${item.price}</Price>

                    <Button
                    fontFamily={theme.typography.main}
                    color={'white'}
                    background={theme.color.primary.cyan}
                    weight={theme.typography.weight.bold}
                    onHoverBackground={theme.color.primary.darkcyan}
                    >COMPRAR</Button> 

                </Container>
                
                ))}

        </ProductContainer>
: '' }
            

        </div>
    )
}

export default ProductsGrid