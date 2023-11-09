import { useParams } from 'react-router-dom'

import Footer from '../../components/Footer'
import Header2 from '../../components/Header/index2'
import { ProductsList2 } from '../../components/ProductsList/index'
import { Container } from '../../styles'

import { useGetCardapioQuery } from '../../services/api'

const Italiana = () => {
  const { id } = useParams()
  const { data: cardapio, isLoading } = useGetCardapioQuery(id!)

  if (isLoading) {
    return <p>Carregando...</p>
  }

  if (!cardapio) {
    return <p>Nenhum cardápio encontrado.</p>
  }

  return (
    <>
      <Container>
        {cardapio ? <Header2 capaetitulo={[cardapio]} /> : <p>Carregando...</p>}
      </Container>
      <ProductsList2 cardapios={cardapio} />
      <Container>
        <Footer></Footer>
      </Container>
    </>
  )
}

export default Italiana
