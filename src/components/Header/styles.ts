import styled from 'styled-components'

import { cores } from '../../styles'

export const HeaderBar = styled.header`
  height: 384px;
  background-color: ${cores.meiobranco};
  padding: 40px;
  text-align: center;

  h1 {
    font-weight: 900;
    margin-top: 146px;
  }
`
export const HeaderBar2 = styled.header`
  height: 186px;
  padding: 40px;
  text-align: center;
  position: relative;

  a {
    color: ${cores.meiovermelho};
    text-decoration: none;
    font-weight: bold;
  }
`

export const HeaderList = styled.ul`
  list-style: none;
  display: flex;
  aling-items: center;
  justify-content: center;
`

export const Carrinho = styled.a`
  cursor: pointer;
  position: absolute;
  top: 60px;
  left: 939px;
`
export const Restaurante = styled.p`
  position: absolute;
  top: 60px;
  left: 171px;
  font-size: 18px;
  font-style: normal;
  font-weight: bold;
`
export const Image = styled.img`
  position: absolute;
  top: 40px;
  left: 621px;
`
export const HeaderBar3 = styled.header`
  width: 1366px;
  height: 280px;
  flex-shrink: 0;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  position: relative;

  p {
    font-family: sans-serif;
    position: absolute;
    top: 25px;
    left: 170px;
    color: ${cores.branco};
    font-size: 32px;
    font-style: normal;
    line-height: normal;
  }

  h2 {
    position: absolute;
    top: 217.75px;
    left: 170px;
    color: ${cores.branco};
    font-size: 32px;
    font-weight: bold;
  }
`

export const BackHeader = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
`
