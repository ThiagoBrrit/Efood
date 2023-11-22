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

  &.is-openaddress {
    display: flex;
  }

  &.is-openpayment {
    display: flex;
  }
`

export const Success = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;
  color: ${cores.meiobranco};

  ${ButtonContainer} {
    margin-top: 24px;
  }

  &.is-opensuccess {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.meiovermelho};
  width: 360px;
  z-index: 1;
  padding: 32px 8px 0 8px;

  ${ButtonContainer} {
    max-width: 100%;
    width: 344px;
    margin-bottom: 8px;
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 240px;
`

export const TextColor = styled.div`
  color: ${cores.meiobranco};
`

export const Forms = styled.input`
  width: 100%;
  margin: 8px 0 8px 0;
  background-color: ${cores.meiobranco};
  border: 1px solid ${cores.meiobranco};
  color: #4b4b4b;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 8px 0 8px 8px;

  &.error {
    border: 2px solid red;
  }
`

export const Space = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`
export const Space2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  .forms {
    input {
      width: 228px;
      margin: 8px 0 8px 0;
      background-color: ${cores.meiobranco};
      border: 1px solid ${cores.meiobranco};
      color: #4b4b4b;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      padding: 8px 0 8px 8px;

      &.error {
        border: 2px solid red;
      }
    }
`
export const TitleCheck = styled.p`
  color: ${cores.meiobranco};
  font-size: 16px;
  margin-bottom: 16px;
  span {
    margin-right: 4px;
  }
`

export const Division = styled.div`
  margin-right: 17px;

  input {
    width: 100%;
    margin: 8px 0 8px 0;
    background-color: ${cores.meiobranco};
    border: 1px solid ${cores.meiobranco};
    color: #4b4b4b;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 8px 0 8px 8px;

    }

    &.error {
      border: 2px solid red;
    }
  }
`
export const Division2 = styled.div`
  margin-left: 17px;

  input {
    width: 100%;
    margin: 8px 0 8px 0;
    background-color: ${cores.meiobranco};
    border: 1px solid ${cores.meiobranco};
    color: #4b4b4b;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 8px 0 8px 8px;
  }

  &.error {
    border: 2px solid red;
  }
`
export const Labels = styled.label`
  color: ${cores.meiobranco};
`

export const Margining = styled.div`
  margin-bottom: 16px;
`
