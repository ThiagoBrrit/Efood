import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useEffect } from 'react'
import InputMask from 'react-input-mask'

import { RootReducer } from '../../store'
import { usePurchaseMutation } from '../../services/api'
import {
  closeaddress,
  closepayment,
  closesuccess,
  openpayment,
  opensuccess,
  clear,
  close
} from '../../store/reducers/cart'

import Button from '../Button'
import {
  CartContainer,
  Division,
  Division2,
  Forms,
  Labels,
  Margining,
  Sidebar,
  Space,
  Space2,
  Success,
  TextColor,
  TitleCheck
} from './styles'

const Checkout = () => {
  const { isOpenAddress, isOpenPayment, items, isOpenSuccess } = useSelector(
    (state: RootReducer) => state.cart
  )
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      ent: '',
      end: '',
      cid: '',
      cep: '',
      num: '',
      nnt: '',
      ndc: '',
      cvv: '',
      mdv: '',
      adv: '',
      com: ''
    },
    validationSchema: Yup.object({
      ent: Yup.string()
        .min(3, 'O nome precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatorio'),
      end: Yup.string().required('O campo é obrigatorio'),
      cid: Yup.string().required('O campo é obrigatorio'),
      cep: Yup.string().min(8).required('O campo é obrigatorio'),
      num: Yup.number().required('O campo é obrigatorio'),
      com: Yup.string(),
      nnt: Yup.string().required('O campo é obrigatorio'),
      ndc: Yup.string().min(12).required('O campo é obrigatorio'),
      cvv: Yup.string()
        .min(3, 'O CVV precisa ter somente 3 digitos')
        .max(3, 'O CVV precisa ter somente 3 digitos')
        .required('O campo é obrigatorio'),
      mdv: Yup.string().required('O campo é obrigatorio'),
      adv: Yup.string()
        .required('O campo é obrigatório')
        .test('is-valid-adv', 'Informe um número maior que 24', (value) => {
          if (!value) {
            // Se o valor não estiver preenchido, a validação passa
            return true
          }
          const numericValue = parseInt(value, 10)
          return !isNaN(numericValue) && numericValue > 23
        })
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.ent,
          address: {
            description: values.end,
            city: values.cid,
            number: Number(values.num),
            zipCode: values.cep,
            complement: values.com
          }
        },
        payment: {
          card: {
            name: values.nnt,
            number: values.ndc,
            code: Number(values.cvv),
            expires: {
              month: 1,
              year: 2023
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
    // atraves do codigo acima, ira ser feito a validação nos inputs, mas para isso precisa dessa estrutura, onde contem todos "IDS" dos inputs, alem de colocar
    // outras tags como (name)<que tera que receber o ID do input> a tag (value)<onde encontra aonde o ID esta na estrutura> e a tag onChange={form.handleChange}
  })

  const closeCart = () => {
    dispatch(closeaddress())
  }

  const check = () => {
    dispatch(openpayment())
  }

  const back = () => {
    dispatch(closepayment())
  }

  const finalizando = () => {
    dispatch(opensuccess())
  }

  const finalizar = () => {
    dispatch(closesuccess())
    dispatch(closepayment())
    dispatch(closeaddress())
    dispatch(close())
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
    // nessa parte, faz a formatação do valor que vem da api, convertendo virgula para ponto e adicionando a casa centesimal
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
    // nessa parte, verifica se os inputs estão selecionados, se estiverem e não forem preenchidos, deixara uma borda vermelha alertado que está errado
  }

  if (items.length === 0 && !isSuccess) {
    closeCart()
    // nessa parte, impede que acione a parte do cart de pagamento e endereço caso não tenha nenhum produto no carrinho
  }

  return (
    <>
      {isSuccess && data ? (
        // verifica se o conteudo requerido foi preenchido, após acionar o butao de submit, caso esteja tudo certo direciona para parte de conclusao/finalização

        <Success className={isOpenSuccess ? 'is-opensuccess' : ''}>
          <Sidebar>
            <TitleCheck>Pedido realizado - {data.orderId}</TitleCheck>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.{' '}
              <br />
              <br />
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras. <br />
              <br />
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição. <br />
              <br />
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <Button
              type={'button'}
              title={'Clique aqui para finalizar'}
              onClick={finalizar}
            >
              Concluir
            </Button>
          </Sidebar>
        </Success>
      ) : (
        // aqui é a parte de pagamento, onde devera ser feito o preenchimento da parte de entrega e pagamento.
        <>
          <CartContainer className={isOpenAddress ? 'is-openaddress' : ''}>
            <Sidebar>
              <form onSubmit={form.handleSubmit}>
                <TitleCheck>Entrega</TitleCheck>
                <Labels htmlFor="ent">Quem irá receber</Labels>
                <Forms
                  id="ent"
                  type="text"
                  name="ent"
                  value={form.values.ent}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('ent') ? 'error' : ''}
                />

                <Labels htmlFor="end">Endereco</Labels>
                <Forms
                  id="end"
                  type="text"
                  name="end"
                  value={form.values.end}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('end') ? 'error' : ''}
                />

                <Labels htmlFor="cid">Cidade</Labels>
                <Forms
                  id="cid"
                  type="text"
                  name="cid"
                  value={form.values.cid}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cid') ? 'error' : ''}
                />

                <Space>
                  <Division>
                    <Labels htmlFor="cep">CEP</Labels>
                    <InputMask
                      id="cep"
                      type="text"
                      name="cep"
                      value={form.values.cep}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cep') ? 'error' : ''}
                      mask="99999-999"
                    />
                  </Division>
                  <Division2>
                    <Labels htmlFor="num">Número</Labels>
                    <Forms
                      id="num"
                      type="number"
                      name="num"
                      value={form.values.num}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('num') ? 'error' : ''}
                    />
                  </Division2>
                </Space>
                <Margining>
                  <Labels htmlFor="com">Complemento (opcional)</Labels>
                  <Forms
                    id="com"
                    type="text"
                    name="com"
                    value={form.values.com}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </Margining>
                <Button
                  type={'button'}
                  title={'Clique aqui para continuar com o pagamento'}
                  onClick={check}
                >
                  Continuar com o pagamento
                </Button>
                <Button
                  type={'button'}
                  title={'Clique aqui para voltar a aba do carrinho'}
                  onClick={closeCart}
                >
                  Voltar para o carrinho
                </Button>
              </form>
            </Sidebar>
          </CartContainer>

          <CartContainer className={isOpenPayment ? 'is-openpayment' : ''}>
            <Sidebar>
              <TextColor>
                <TitleCheck>
                  Pagamento - Valor a pagar <span>R$</span>
                  {getTotalPrice().toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })}
                </TitleCheck>
                <Labels htmlFor="nnt">Nome no cartão</Labels>
                <Forms
                  id="nnt"
                  type="text"
                  name="nnt"
                  value={form.values.nnt}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('nnt') ? 'error' : ''}
                />

                <Space2>
                  <Division className="forms">
                    <Labels htmlFor="ndc">Número do cartão</Labels>
                    <InputMask
                      id="ndc"
                      type="string"
                      name="ndc"
                      value={form.values.ndc}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('ndc') ? 'error' : ''}
                      mask="9999 9999 9999 9999"
                    />
                  </Division>
                  <Division2>
                    <Labels htmlFor="cvv">CVV</Labels>
                    <InputMask
                      id="cvv"
                      type="string"
                      name="cvv"
                      value={form.values.cvv}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cvv') ? 'error' : ''}
                      mask="999"
                    />
                  </Division2>
                </Space2>
                <Margining>
                  <Space>
                    <Division>
                      <Labels htmlFor="mdv">Mês de vencimento</Labels>
                      <InputMask
                        id="mdv"
                        type="string"
                        name="mdv"
                        value={form.values.mdv}
                        onChange={(e) => {
                          const userInput = e.target.value
                          const month = userInput.slice(0, 2)
                          if (
                            !isNaN(Number(month)) &&
                            Number(month) >= 1 &&
                            Number(month) <= 12
                          ) {
                            form.handleChange(e)
                          }
                        }}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('mdv') ? 'error' : ''}
                        mask="99"
                        maskChar=""
                      />
                    </Division>
                    <Division2>
                      <Labels htmlFor="adv">Ano de vencimento</Labels>
                      <InputMask
                        id="adv"
                        type="string"
                        name="adv"
                        value={form.values.adv}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('adv') ? 'error' : ''}
                        mask="99"
                      />
                    </Division2>
                  </Space>
                </Margining>
                <Button
                  type={'submit'}
                  title={'Clique aqui para continuar com o pagamento'}
                  onClick={() => {
                    finalizando()
                    form.handleSubmit()
                  }}
                >
                  {isLoading ? 'Finalizando compra...' : 'finalizar compra'}
                </Button>
                <Button
                  type={'button'}
                  title={'Clique aqui para editar o endereço novamente'}
                  onClick={back}
                >
                  Voltar para a edição de endereço
                </Button>
              </TextColor>
            </Sidebar>
          </CartContainer>
        </>
      )}
    </>
  )
}

export default Checkout
