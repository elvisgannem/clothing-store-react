import React, { useContext } from 'react'
import { Container, Buttons, Subtitle, OrderByContainer, Select } from './OrderByBar.style'
import ThemeContext from './../../../../../context/ThemeContext'
import { BsFillGrid3X3GapFill, BsFillGrid1X2Fill } from 'react-icons/bs'

const OrderByBar = () => {
    const theme = useContext(ThemeContext)
    return (
        <Container borderColor={theme.color.secondary.gray}>
            <Buttons>
                <BsFillGrid3X3GapFill size={'16px'} color={`${theme.color.primary.filter.blue}`} />
                <BsFillGrid1X2Fill size={'14px'} color={`${theme.color.secondary.select}`} />
            </Buttons>
            <OrderByContainer>
                <Subtitle
                fontFamily={theme.typography.main}
                color={theme.color.secondary.gray}
                weight={theme.typography.weight.bold}
                >ORDENAR POR</Subtitle>
                <Select borderColor={theme.color.secondary.gray}>
                    <option value="preço">Preço</option>
                </Select>
            </OrderByContainer>
        </Container>
    )
}

export default OrderByBar
