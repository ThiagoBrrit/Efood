import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Footer from '../../components/Footer'
import Header2 from '../../components/Header/index2'
import { ProductsList2 } from '../../components/ProductsList/index'
import { Container } from '../../styles'
import { Pratos } from '../Home'

const Italiana = () => {
  const [restaurantes, setRestaurantes] = useState<Pratos[]>([])
  const [restaurantess, setRestaurantess] = useState<Pratos>()

  const { id } = useParams()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log('Dados da API:', res)
        setRestaurantes([res])
        setRestaurantess(res)
      })
  }, [id])

  return (
    <>
      <Container>
        {restaurantes ? (
          <Header2 capaetitulo={restaurantes} />
        ) : (
          <p>Carregando...</p>
        )}
      </Container>
      <ProductsList2 cardapios={restaurantess} />
      <Container>
        <Footer></Footer>
      </Container>
    </>
  )
}

export default Italiana
