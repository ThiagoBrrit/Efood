import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import Tag from '../Tag'

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
  flex-shrink: 0;
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
