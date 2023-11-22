import styled from 'styled-components'

import { breakpoints } from '../../styles'

export const Container = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
  padding: 80px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 80%;
  }
`
export const Container2 = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
  padding: 56px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;

  @media (max-width: ${breakpoints.tablet}) {
    column-gap: 40px;
  }
`

export const List2 = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`
