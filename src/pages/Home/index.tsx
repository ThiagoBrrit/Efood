import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { ProductsList } from '../../components/ProductsList'
import { Container } from '../../styles'

const Home = () => (
  <>
    <Container>
      <Header />
    </Container>
    <ProductsList />
    <Container>
      <Footer></Footer>
    </Container>
  </>
)

export default Home
