import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SidebarComp, ListItems } from './Sidebar.style'
import ThemeContext from './../../../../../context/ThemeContext'
import CategoriesContext from './../../../../../context/CategoriesContext'

const Sidebar = () => {
    const theme = useContext(ThemeContext)
    const { categories } = useContext(CategoriesContext)
    return (
        <SidebarComp
        color={theme.color.secondary.lightgray}
        fontFamily={theme.typography.main}
        textColor={theme.color.secondary.dark}
      >
        <ListItems>Página Inicial</ListItems>

        {categories !== undefined ? (
          categories.items.map((item, index) => (
            <ListItems key={index}><Link to={`/${item.path}`}>{item.name}</Link></ListItems>
          ))
        ) : (
          <ListItems>Carregando...</ListItems>
        )}

        <ListItems><Link to={'/contact'}>Contato</Link></ListItems>
      </SidebarComp>
    )
}

export default Sidebar
