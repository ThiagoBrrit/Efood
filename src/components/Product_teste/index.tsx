import pizza from '../../assets/images/pizza.png'
import Tag from '../Tag'
import close from '../../assets/images/close.png'
import {
  BotaoCard,
  Card,
  CardBackground,
  CardModal,
  Close,
  Descricao,
  Modal,
  ModalContent,
  Titulo
} from './styles'
import { useState } from 'react'

const ProdutoPizza = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Card>
        <CardBackground
          style={{ backgroundImage: `url(${pizza})` }}
        ></CardBackground>
        <Titulo>Pizza Marguerita teste</Titulo>
        <Descricao>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </Descricao>
        <BotaoCard onClick={() => setOpenModal(true)}>Mais detalhes</BotaoCard>
      </Card>

      <Modal className={openModal ? 'visivel' : ''}>
        <CardModal className="Container">
          <ModalContent>
            <img height={280} width={280} src={pizza} alt="" />
          </ModalContent>
          <ModalContent>
            <Close>
              <img onClick={() => setOpenModal(false)} src={close} alt="" />
            </Close>
            <h4>Pizza Marguerita</h4>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
              <br /> <br /> Serve: de 2 a 3 pessoas
            </p>
            <Tag>Adicionar ao carrinho - R$ 60,90</Tag>
          </ModalContent>
        </CardModal>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default ProdutoPizza
