import styled from 'styled-components'

import { breakpoints, cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  .text-in-cart {
    color: ${cores.meiobranco};
    font-size: 18px;
    line-height: 22px;
    text-align: center;
  }

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const Sidebar = styled.aside`
  background-color: ${cores.meiovermelho};
  width: 360px;
  z-index: 1;
  padding: 32px 8px 0 8px;

  ${ButtonContainer} {
    max-width: 100%;
    width: 344px;
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 240px;
`
export const Prices = styled.p`
  color: ${cores.meiobranco};

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const Space = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;
`

export const CartItem = styled.li`
  background-color: ${cores.meiobranco};
  display: flex;
  padding: 8px 0 12px 8px;
  margin-bottom: 16px;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-style: normal;
    font-weight: bold;
    margin-bottom: 16px;
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 16px;
    }
  }

  span {
    display: block;
    font-size: 14px;
    font-style: normal;
    line-height: 22px;
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 76px;
    left: 320px;

    @media (max-width: ${breakpoints.tablet}) {
      left: 200px;
    }

    img {
      width: 16px;
      height: 16px;
      @media (max-width: ${breakpoints.tablet}) {
        width: 20px;
        height: 20px;
      }
    }
  }
`
