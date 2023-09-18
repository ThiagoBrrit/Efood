import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/Header'
import { GlobalCss, Container } from './styles'
import Product from './components/Product'
import { ProductsList } from './components/ProductsList'
import Footer from './components/Footer'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ProductsList />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <Container>
        <Header />
      </Container>
      <RouterProvider router={rotas}></RouterProvider>
      <Container>
        <Footer></Footer>
      </Container>
    </>
  )
}

export default App
