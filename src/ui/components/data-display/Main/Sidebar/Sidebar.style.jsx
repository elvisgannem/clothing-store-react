import styled from 'styled-components'

export const SidebarComp = styled.aside`
  background-color: ${(props) => props.color};
  font-family: ${(props) => props.fontFamily};
  color: ${(props) => props.textColor};
  padding: 1rem;
  grid-area: sidebar;

  @media (max-width: 450px) {
    display: none;
  }
`

export const ListItems = styled.li`
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
  list-style: none;

  &:before {
    content: '·';
    font-weight: 800;
    margin-right: 0.25rem;
  }

`