import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background: ${cores.meiovermelho};
  width: 320px;
  height: 450px;
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

export const CardBackground = styled.div`
  margin: 8px;
  width: 304px;
  height: 167px;
  background-size: cover;
  background-position: center;
`

export const Titulo = styled.h3`
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

export const Modal = styled.div`
  width: 200vh;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }

  ${TagContainer} {
    background-color: ${cores.meiobranco};
    color: ${cores.meiovermelho};
    margin: 8px;
    text-align: center;
    cursor: pointer;
  }
`

export const CardModal = styled.div`
  background-color: ${cores.meiovermelho};
  color: ${cores.branco};
  width: 1024px;
  position: relative;
  z-index: 1;

  display: grid;
  grid-template-columns: 1fr 2fr;
`

export const ModalContent = styled.div`
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
`

export const Close = styled.header`
  position: absolute;
  top: -23px;
  left: 967px;
  cursor: pointer;
`

export const BotaoCard = styled.button`
  border: transparent;
  font-size: 14px;
  font-weight: bold;
  display: inline-block;

  background-color: ${cores.meiobranco};
  color: ${cores.meiovermelho};
  margin: 8px;
  width: 95%;
  text-align: center;
  padding: 4px 6px;
  position: absolute;
  bottom: 0px;
  left: 47.5%;
  transform: translateX(-50%);

  cursor: pointer;
`

export const ButtonCart = styled.button`
  background-color: ${cores.meiovermelho};
  color: ${cores.meiobranco};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;
  margin-top: 16px;
  margin-left: 0px;
  background-color: ${cores.meiobranco};
  color: ${cores.meiovermelho};
  text-align: center;
  cursor: pointer;
  border: none;
`
