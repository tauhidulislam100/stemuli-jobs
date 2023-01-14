// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const stemuliApi = createApi({
  reducerPath: 'giveriseApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers) => {
      return headers
    }
    }),
  tagTypes: ['Job'],
  endpoints: (builder) => ({
    // ++++++++++++ Stripe ++++++++++++++
    fetchJobs: builder.query<any,any>({
      query: (params) => ({
        url: `/job`,
        headers: { 'Access-Control-Allow-Origin': '*'},
        params
      }),
      providesTags: ['Job'],
    }),
    fetchFilterOptions: builder.query<any, any>({
      query: (params) => ({
        url: `/job/filter-fields`,
        params
      }),
      providesTags: ['Job'],
    }),
    createJob: builder.mutation<any, any>({
      query: (body) => ({
        url: `/job`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Job']
    }),
   }),
});


export const {
  useFetchJobsQuery,
  useFetchFilterOptionsQuery
} = stemuliApi;