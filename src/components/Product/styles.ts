import styled from 'styled-components'

import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  border-right: 1px solid ${cores.meiovermelho};
  border-bottom: 1px solid ${cores.meiovermelho};
  border-left: 1px solid ${cores.meiovermelho};
  background: ${cores.branco};
  width: 472px;
  flex-shrink: 0;
  margin-bottom: 48px;
  position: relative;
`
export const Card2 = styled.div`
  background: ${cores.meiovermelho};
  width: 320px;
  flex-shrink: 0;
  margin-bottom: 48px;
  position: relative;

  ${TagContainer} {
    background-color: ${cores.meiobranco};
    color: ${cores.meiovermelho};
    margin: 8px;
    width: 95%;
    text-align: center;
  }
`

export const CardBackground = styled.header`
  width: 472px;
  height: 217px;
  background-size: cover;
  background-position: center;
  ${TagContainer} {
    margin-right: 8px;
    margin-top: 16px;
  }
`

export const CardBackground2 = styled.header`
  margin: 8px;
  width: 304px;
  height: 167px;
  flex-shrink: 0;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  line-height: normal;
  font-style: normal;
  color: ${cores.meiovermelho};
  display: block;
  margin-top: 8px;
  margin-bottom: 16px;
  margin-left: 8px;
`
export const Titulo2 = styled.h3`
  font-size: 18px;
  font-weight: bold;
  line-height: normal;
  font-style: normal;
  color: ${cores.meiobranco};
  display: block;
  margin-top: 8px;
  margin-bottom: 16px;
  margin-left: 8px;
`

export const Descricao = styled.p`
  color: ${cores.meiovermelho};
  font-size: 14px;
  font-style: normal;
  line-height: 22px;
  display: block;
  margin-bottom: 16px;
  margin-right: 8px;
  margin-left: 8px;
  ${TagContainer} {
    margin-top: 16px;
  }
`
export const Descricao2 = styled.p`
  color: ${cores.meiobranco};
  font-size: 14px;
  font-style: normal;
  line-height: 22px;
  display: block;
  margin-bottom: 16px;
  margin-right: 8px;
  margin-left: 8px;
  ${TagContainer} {
    margin-top: 16px;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
`
export const Links = styled(Link)`
  text-decoration: none;
  color: ${cores.meiobranco};
`

export const Classificacao = styled.p`
  color: ${cores.meiovermelho};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: absolute;
  bottom: 190px;
  left: 409px;
`
export const Classificacao2 = styled.p`
  color: ${cores.meiovermelho};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: absolute;
  bottom: 186px;
  left: 440px;
`
export const CardModal = styled.div`
  position: fixed;
  top: 0;
  left: 1;

  width: 1024px;
  height: 344px;
  background-color: ${cores.meiovermelho};
  color: ${cores.branco};
  z-index: 1;

  display: grid;
  grid-template-columns: 1fr 2fr;
  ${TagContainer} {
    background-color: ${cores.meiobranco};
    color: ${cores.meiovermelho};
    margin: 8px;
    text-align: center;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;

  img {
    margin-top: 32px;
    margin-bottom: 32px;
    margin-left: 32px;
    margin-right: 24px;
  }

  h4 {
    margin-top: 32px;
    font-size: 18px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }

  p {
    margin-top: 16px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }

  ${TagContainer} {
    margin-top: 16px;
    margin-left: 0px;
  }
`
