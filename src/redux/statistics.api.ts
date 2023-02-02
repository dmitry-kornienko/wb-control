import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const statisticsApi = createApi({
    reducerPath: 'statistics/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://statistics-api.wildberries.ru/',
    }),
    endpoints: build => ({
        getOrders: build.query({
            query: ({dateFrom, key}) => ({
                url: `api/v1/supplier/orders?dateFrom=${dateFrom}&flag=1`,
                headers: {
                    'Authorization': `${key}`,
                },
            })
        }),
        getSales: build.query({
            query: ({dateFrom, key}) => ({
                url: `api/v1/supplier/sales?dateFrom=${dateFrom}&flag=1`,
                headers: {
                    'Authorization': `${key}`,
                },
            })
        }),
    })
});

export const {useGetOrdersQuery, useGetSalesQuery} = statisticsApi;