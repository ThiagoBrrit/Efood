import { useState } from 'react'

import close from '../../assets/images/close.png'

import {
  BotaoCard,
  ButtonCart,
  Card,
  CardBackground,
  CardModal,
  Close,
  Descricao,
  Modal,
  ModalContent,
  Titulo
} from './styles'

import { add, open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'
import { Pratos } from '../../pages/Home'
import { Produtos } from '../ProductsList'

type Props = {
  nome: string
  foto: string
  preco: number
  descricao: string
  porcao: string
  cardapio: Pratos
}

const ProdutoPizza = ({
  preco,
  descricao,
  foto,
  nome,
  porcao,
  cardapio
}: Props) => {
  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(add(cardapio))
    dispatch(open())
  }

  const [openModal, setOpenModal] = useState(false)

  const precoFormatado = preco.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })

  return (
    <>
      <Card>
        <div>
          <CardBackground
            style={{ backgroundImage: `url(${foto})` }}
          ></CardBackground>
          <Titulo>{nome}</Titulo>
          <Descricao>{descricao}</Descricao>
        </div>

        <BotaoCard onClick={() => setOpenModal(true)}>Mais detalhes</BotaoCard>
      </Card>

      <Modal className={openModal ? 'visivel' : ''}>
        <CardModal className="Container">
          <ModalContent>
            <img height={280} width={280} src={foto} alt="" />
          </ModalContent>
          <ModalContent>
            <Close>
              <img onClick={() => setOpenModal(false)} src={close} alt="" />
            </Close>
            <h4>{nome}</h4>
            <p>
              {descricao}
              <br /> <br /> {porcao}
            </p>
            <ButtonCart onClick={addToCart}>
              Adicionar ao carrinho - R$ {precoFormatado}
            </ButtonCart>
          </ModalContent>
        </CardModal>
        <div className="overlay" onClick={() => setOpenModal(false)}></div>
      </Modal>
    </>
  )
}

export default ProdutoPizza
