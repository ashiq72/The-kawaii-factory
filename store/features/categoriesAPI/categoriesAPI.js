import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://server-kawaiisss.vercel.app/api/v1",
  }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => `/categories`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCategoriesQuery } = categoriesApi;
