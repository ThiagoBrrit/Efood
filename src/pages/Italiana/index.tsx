import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header2 from '../../components/Header/index2'
import { ProductsList2 } from '../../components/ProductsList/index2'
import { Container } from '../../styles'
import { useEffect, useState } from 'react'
import { Pratos } from '../Home'

const Italiana = () => {
  const [restaurantes, setRestaurantes] = useState<Pratos[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])
  return (
    <>
      <Container>
        <Header2 />
      </Container>
      <ProductsList2 prato={restaurantes} />
      <Container>
        <Footer></Footer>
      </Container>
    </>
  )
}

export default Italiana
