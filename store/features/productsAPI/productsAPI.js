import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kawaiisss-server.vercel.app/api/v1",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `/product`,
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
