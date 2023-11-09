import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { ProductsList, Produtos } from '../../components/ProductsList'
import { Container } from '../../styles'

import { useGetFeaturedPratosQuery } from '../../services/api'

export type Pratos = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Produtos[]
}

const Home = () => {
  const { data: restaurantes } = useGetFeaturedPratosQuery()

  if (restaurantes) {
    return (
      <>
        <Container>
          <Header />
        </Container>
        <ProductsList prato={restaurantes} />
        <Container>
          <Footer></Footer>
        </Container>
      </>
    )
  }
  return <h4>carregando</h4>
}
export default Home
