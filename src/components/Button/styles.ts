import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  color: ${cores.meiovermelho};
  background-color: ${cores.meiobranco};
  border: transparent;
  font-size: 14px;
  font-weight: bold;
  text-aling: center;
  padding: 4px;
`

export const ButtonLink = styled(Link)`
  color: ${cores.meiovermelho};
  background-color: ${cores.meiobranco};
  font-size: 14px;
  font-weight: bold;
  text-aling: center;
  padding: 4px;
  text-decoration: none;
`
