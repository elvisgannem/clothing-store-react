import React, { useContext } from 'react'
import { Container, List, ItemList, PagButton } from './Pagination.style'
import ThemeContext from './../../../../../context/ThemeContext'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
    const pageNumbers = []
    const theme = useContext(ThemeContext)

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <Container>

            <List>
                <IoIosArrowBack size={'15px'} color={theme.color.primary.darkcyan} />{pageNumbers.map(number => (
                    <ItemList key={number}>
                        <PagButton 
                            fontFamily={theme.typography.main}
                            color={theme.color.secondary.select}
                            activeColor={theme.color.primary.main}
                            activeWeight={theme.typography.weight.bold}
                            onClick={() => paginate(number)} >{number}
                        </PagButton>
                    </ItemList>
                ))} <IoIosArrowForward size={'15px'} color={theme.color.primary.darkcyan} />
            </List>
            
        </Container>
    )
}

export default Pagination
