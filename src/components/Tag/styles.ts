import styled from 'styled-components'

import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.meiovermelho};
  color: ${cores.meiobranco};
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '2px 6px' : '6px 4px')};
  display: inline-block;
`
