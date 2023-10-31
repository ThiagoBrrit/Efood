import { useEffect, useState } from 'react'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { ProductsList, Produtos } from '../../components/ProductsList'
import { Container } from '../../styles'

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
  const [restaurantes, setRestaurantes] = useState<Pratos[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

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
export default Home
