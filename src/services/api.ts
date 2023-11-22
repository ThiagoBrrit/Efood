import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Pratos } from '../pages/Home'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type PurchaseResponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `https://fake-api-tau.vercel.app/api/efood/restaurantes`
  }),
  endpoints: (builder) => ({
    getFeaturedPratos: builder.query<Pratos[], void>({
      query: () => ''
    }),
    getCardapio: builder.query<Pratos, string>({
      query: (id) => `${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'https://fake-api-tau.vercel.app/api/efood/checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetFeaturedPratosQuery,
  useGetCardapioQuery,
  usePurchaseMutation
} = api

export default api
