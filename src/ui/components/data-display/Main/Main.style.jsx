import styled from 'styled-components'

export const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 1rem;
  grid-template-areas:
    'sidebar slider'
    'sidebar content';

  @media (max-width: 1024px) {
    width: 95%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 150px 1fr;
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'slider'
      'content';
  }
`

export const Sidebar = styled.aside`
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

export const Slider = styled.div`
  background-color: ${(props) => props.color};
  grid-area: slider;
  height: 250px;

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 450px) {
    height: 120px;
  }
`

export const Content = styled.main`
  font-family: ${(props) => props.fontFamily};
`
export const Title = styled.h1`
  color: ${(props) => props.textColor};
  font-size: 1.35rem;
  font-weight: ${(props) => props.weight};
`
export const Paragraph = styled.p`
  font-size: 0.8rem;
`
