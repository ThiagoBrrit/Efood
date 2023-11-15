import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#FFFFFF',
  branco2: '#FFF8F2',
  meiovermelho: '#E66767',
  meiobranco: '#FFEBD9',
  preto: '#4B4B4B'
}

export const breakpoints = {
  desktop: '1366px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;

    body{
      background-color: ${cores.branco2};
      color: ${cores.meiovermelho};
    }
  }
`

export const Container = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
  }
`
