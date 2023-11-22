import { ProductsList, Produtos } from '../../components/ProductsList'
import { Container } from '../../styles'
import { useGetFeaturedPratosQuery } from '../../services/api'

import Footer from '../../components/Footer'
import Header from '../../components/Header'

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
  const { data: restaurantes, isLoading: isLoadingHome } =
    useGetFeaturedPratosQuery()

  return (
    <>
      <Container>
        <Header />
      </Container>
      <ProductsList prato={restaurantes} isLoading={isLoadingHome} />
      <Footer></Footer>
    </>
  )
}
export default Home
