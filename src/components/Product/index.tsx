import Tag from '../Tag'

import japonesa from '../../assets/images/japonesa.png'
import { Card, Descricao, Titulo, CardBackground, Infos } from './styles'

const Product = () => (
  <>
    <Card>
      <CardBackground style={{ backgroundImage: `url(${japonesa})` }}>
        <Infos>
          <Tag>Destaque da semana</Tag>
          <Tag>Japonesa</Tag>
        </Infos>
      </CardBackground>
      <Titulo>Hioki Sushi</Titulo>
      <Descricao>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão
        sem sair do lar com nosso delivery! <br></br>
        <Tag>Saiba mais</Tag>
      </Descricao>
    </Card>
  </>
)

export default Product
