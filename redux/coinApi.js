import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const coinApi = createApi({
    reducerPath: "coinApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.coingecko.com" }),
    tagTypes: ['Coins'],
    endpoints: (builder) => ({
        getAllCoins: builder.query({
            query: ()=> ({
                url: '/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=true&price_change_percentage=7d&locale=en',
                method: 'GET'
            }),
            providesTags: ['Coins']
        })
    })
})

export const { useGetAllCoinsQuery } = coinApi