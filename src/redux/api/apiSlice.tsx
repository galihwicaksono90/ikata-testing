import { createApi } from "@reduxjs/toolkit/query/react";
import { GraphQLClient } from "graphql-request";
import { HYDRATE } from "next-redux-wrapper";
import { graphqlRequestBaseQuery } from "redux/graphqlRequestBaseQuery";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_SERVER, {
  credentials: "include",
  mode: "cors",
});

export const baseQuery = graphqlRequestBaseQuery({
  client,
  prepareHeaders: (headers) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (!!token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
    }
    return headers;
  },
});

// const baseQueryWithReauth: BaseQueryFn<
//   { document: string | DocumentNode; variables?: any },
//   unknown,
//   Pick<ClientError, "name" | "message" | "stack">,
//   Partial<Pick<ClientError, "request" | "response">>
// > = async (url, api, extraOptions) => {
//   let result = await baseQuery(url, api, extraOptions);
//   return result;
// };

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  extractRehydrationInfo: (action, { reducerPath }) => {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: () => ({}),
});
