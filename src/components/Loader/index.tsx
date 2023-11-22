import { BarLoader } from 'react-spinners'

import { cores } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <BarLoader color={cores.meiovermelho} />
  </Container>
)

export default Loader
