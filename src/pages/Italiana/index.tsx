import { useParams } from 'react-router-dom'

import { ProductsList2 } from '../../components/ProductsList/index'
import { Container } from '../../styles'
import { useGetCardapioQuery } from '../../services/api'

import Footer from '../../components/Footer'
import Header2 from '../../components/Header/index2'
import Loader from '../../components/Loader'

type ProductParams = {
  id: string
}

const Italiana = () => {
  const { id } = useParams() as ProductParams
  const { data: cardapio, isLoading: isLoadingItaliana } =
    useGetCardapioQuery(id)

  return (
    <>
      <Container>
        {cardapio ? <Header2 capaetitulo={[cardapio]} /> : <Loader />}
      </Container>
      <ProductsList2 cardapios={cardapio} isLoading={isLoadingItaliana} />
      <Container>
        <Footer></Footer>
      </Container>
    </>
  )
}

export default Italiana
