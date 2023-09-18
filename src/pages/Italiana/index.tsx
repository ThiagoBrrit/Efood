import Footer from '../../components/Footer'
import Header2 from '../../components/Header/index2'
import { ProductsList2 } from '../../components/ProductsList/index2'
import { Container } from '../../styles'

const Italiana = () => (
  <>
    <Container>
      <Header2 />
    </Container>
    <ProductsList2 />
    <Container>
      <Footer></Footer>
    </Container>
  </>
)

export default Italiana
