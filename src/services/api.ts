import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Pratos } from '../pages/Home'

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
    })
  })
})

export const { useGetFeaturedPratosQuery, useGetCardapioQuery } = api

export default api
