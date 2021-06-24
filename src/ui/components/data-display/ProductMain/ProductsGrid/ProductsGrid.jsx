import React, { useEffect, useContext } from 'react'
import { Container, Image, Title, Price, Button, ProductContainer } from './ProductsGrid.style'
import ProductsContext from './../../../../../context/ProductsContext'
import ThemeContext from './../../../../../context/ThemeContext'
import ApiService from './../../../../../services/ApiService'

const ProductsGrid = (props) => {
    const theme = useContext(ThemeContext)
    const { products, setProducts } = useContext(ProductsContext)
    
    useEffect(() => {
        fetch(`${ApiService.baseURL}V1/categories/${props.id}`)
        .then(response => response.json())
        .then(data => setProducts(data))
         .catch(error => console.log(error))
    }, [props.id, setProducts])

    let currentProduct

    if (products !== undefined){
    //Getting the current products
    const indexLastProduct = props.currentPage * props.productsPerPage
    const indexFirstProduct = indexLastProduct - props.productsPerPage
    currentProduct = products.items.slice(indexFirstProduct, indexLastProduct)
    }

    return (
        <div>

            {/* {products !== undefined ? products.items.map((item, index) => <p key={index}>{item.name}</p>) : ''} */}

            
    {products !== undefined ?
        <ProductContainer> 


                {currentProduct.map((item, index) => (
                <Container key={index}>
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
                    hoverBackground={theme.color.primary.darkcyan}
                    >COMPRAR</Button> 

                </Container>
                
                ))}

        </ProductContainer>
: '' }
            

        </div>
    )
}

export default ProductsGrid