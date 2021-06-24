import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FilterContainer, Title, Subtitle, List, Color, Colors } from './Filter.style'
import ThemeContext from './../../../../../context/ThemeContext'
import CategoriesContext from './../../../../../context/CategoriesContext'

const Filter = () => {
    const theme = useContext(ThemeContext)
    const { categories } = useContext(CategoriesContext)

    return (
            <FilterContainer>
                <Title
                fontFamily={theme.typography.main}
                color={theme.color.primary.filter.red}
                weight={theme.typography.weight.extrabold}
                >FILTRE POR</Title>

                <Subtitle
                fontFamily={theme.typography.main}
                color={theme.color.primary.filter.blue}
                weight={theme.typography.weight.extrabold}
                >CATEGORIAS</Subtitle>

                {categories !== undefined ? 
                    categories.items.map((item, index) => 
                        <List 
                        fontFamily={theme.typography.main} 
                        color={theme.color.secondary.dark} 
                        key={index}>
                            <Link to={`/${item.path}`}>{item.name}</Link>
                        </List>
                    )
                : ''}

                <Subtitle
                fontFamily={theme.typography.main}
                color={theme.color.primary.filter.blue}
                weight={theme.typography.weight.extrabold}
                >CORES</Subtitle>

                <Colors>
                    <Color color={theme.color.primary.filter.red} />
                    <Color color={theme.color.primary.filter.orange} />
                    <Color color={theme.color.primary.filter.blue} />
                </Colors>

                <Subtitle
                fontFamily={theme.typography.main}
                color={theme.color.primary.filter.blue}
                weight={theme.typography.weight.extrabold}>
                TIPO
                </Subtitle>

                <div id="list">
                    <List fontFamily={theme.typography.main} color={theme.color.secondary.dark}>
                        Corrida
                    </List>

                    <List fontFamily={theme.typography.main} color={theme.color.secondary.dark}>
                        Caminada
                    </List>

                    <List fontFamily={theme.typography.main} color={theme.color.secondary.dark}>
                        Casual
                    </List>

                    <List fontFamily={theme.typography.main} color={theme.color.secondary.dark}>
                        Social
                    </List>
                </div>
            </FilterContainer>
    )
}

export default Filter
