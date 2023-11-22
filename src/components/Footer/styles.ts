import styled from 'styled-components'

import { breakpoints } from '../../styles'

export const FooterBar = styled.footer`
  display: block;
  background-color: #ffebd9;
`

export const Midias = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`
export const Midiasli = styled.ul`
  margin-right: 8px;
`

export const Descricao = styled.p`
  margin-top: 80px;
  color: #e66767;
  text-align: center;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 40px;
`
export const Logo = styled.img`
  display: block;
  margin: 0 auto 32.5px;
  padding-top: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    text-align: center;
    margin: 40px 315px 32.5px;
  }
`

export const Containers = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
  }
`
