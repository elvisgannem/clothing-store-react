import React, { useContext, useState } from 'react'
import Logo from './../../../../assets/img/logo_webjump.png'
import { IoMenu, IoSearch } from 'react-icons/io5'
import {
  Container,
  Button,
  FlexContainer,
  Input,
  SearchContainer,
  Wrapper, 
  ResultContainer,
  ResultTitle,
  Results,
  ResultHeader
} from './Header.style'
import ThemeContext from './../../../../context/ThemeContext'
import ProductsContext from './../../../../context/ProductsContext'
import MobileNavbar from './../MobileNavbar/MobileNavbar'
import { IoClose } from 'react-icons/io5'

const Header = () => {
  const theme = useContext(ThemeContext)
  const [showMenu, setShowMenu] = useState(false)
  const [search, setSearch] = useState()
  const [filteredSearchProducts, setFilteredSearchProducts] = useState()
  const [fetched, setFetched] = useState([])
  const { products } = useContext(ProductsContext)
  const [showSearch, setShowSearch] = useState(false)

  function callProducts(){
    const arrayProducts = []
    fetch('http://localhost:8888/api/V1/categories/1')
    .then(response => response.json())
    .then(data => arrayProducts.push(... data.items))
    fetch('http://localhost:8888/api/V1/categories/2')
    .then(response => response.json())
    .then(data => arrayProducts.push(... data.items))
    fetch('http://localhost:8888/api/V1/categories/3')
    .then(response => response.json())
    .then(data => arrayProducts.push(... data.items))
    setFetched(arrayProducts)
    setShowSearch(true)
  }

  // HACER QUE SE CIERRE EL CUADRO DE BUSCA

  const filteredProducts = fetched.filter(fetch => {
    return fetch.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <Container>
      
      <FlexContainer>
        {/* HIDE IN DESKTOP */}
        <Wrapper>
          <IoMenu 
            size={'30px'}
            onClick={() => setShowMenu(!showMenu)} />
        </Wrapper>

        {showMenu ? <MobileNavbar setShowMenu={setShowMenu} /> : ''}

        <div>
          <img src={Logo} alt="Logo Webjump!" />
        </div>

        <Wrapper>
          <IoSearch size={'25px'} color={theme.color.primary.main} />
        </Wrapper>
        {/* ----- */}

        {/* HIDE IN MOBILE */}
        <SearchContainer>
          <Input type={'text'} border={theme.color.secondary.gray} placeholder={'...'} onChange={e=>setSearch(e.target.value)} onClick={() => callProducts()}/>
          <Button
            color={theme.color.primary.main}
            fontFamily={theme.typography.main}
            fontWeight={theme.typography.weight.extrabold}
          >
            BUSCAR
          </Button>

          {showSearch === true ? 
          
            <ResultContainer>
              <ResultHeader>
                <ResultTitle
                  fontFamily={theme.typography.main}
                  weight={theme.typography.weight.bold}
                  >Resultados
                </ResultTitle>

                {/* <IoClose color={theme.color.primary.main} onClick={() => closeSearch()} /> */}
                
               
              </ResultHeader>
              
              {filteredProducts.map((item, index) => 
                <Results 
                  fontFamily={theme.typography.main} 
                  key={index}>{item.name}
                </Results>)}
              
            </ResultContainer> : ''}

        </SearchContainer>
        
        {/* ------ */}
      </FlexContainer>
    </Container>
  )
}

export default Header
