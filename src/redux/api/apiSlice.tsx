import { createApi, BaseQueryFn } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "redux/graphqlRequestBaseQuery";
import { GraphQLClient } from "graphql-request";
import { HYDRATE } from "next-redux-wrapper";
import { DocumentNode } from "graphql";
import { ClientError } from "graphql-request";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_SERVER, {
  credentials: "include",
});

const baseQuery = graphqlRequestBaseQuery({
  client,
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
