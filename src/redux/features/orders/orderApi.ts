import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseUrl from "../../../utills/baseUrl";
import { NewOrder } from "../../../types/NewOrder.dto";

const baseQuery = fetchBaseQuery({
  baseUrl: `${getBaseUrl()}/api/orders`,
  credentials: "include",
});

const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery,
  tagTypes: ["Orders"],
  endpoints: (builder) => ({
    createOrder: builder.mutation<void, NewOrder>({
      query: (newOrder) => ({
        url: "/",
        method: "POST",
        body: newOrder,
        credential: "include",
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = ordersApi;
export default ordersApi;