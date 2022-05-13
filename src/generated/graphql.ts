import { api } from 'redux/api/apiSlice';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
};

export type Article = {
  __typename?: 'Article';
  description: Scalars['String'];
  id: Scalars['Int'];
  image: Scalars['String'];
  postedAt: Scalars['DateTime'];
  title: Scalars['String'];
};

export enum ArticleType {
  NonScientific = 'nonScientific',
  Scientific = 'scientific'
}

export type Auth = FieldErrors | User;

export type FieldError = {
  __typename?: 'FieldError';
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type FieldErrors = {
  __typename?: 'FieldErrors';
  errors?: Maybe<Array<Maybe<FieldError>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: PostPayload;
  deletePost: Post;
  login?: Maybe<Auth>;
  logout?: Maybe<Scalars['Boolean']>;
  register: Auth;
};


export type MutationCreatePostArgs = {
  title: Scalars['String'];
};


export type MutationDeletePostArgs = {
  id: Scalars['Int'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  id: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PostPayload = FieldErrors | Post;

export type Query = {
  __typename?: 'Query';
  getArticle?: Maybe<Article>;
  getArticles: Array<Article>;
  getPostById: Post;
  getUserPosts: Array<Maybe<Post>>;
  me?: Maybe<User>;
  posts: Array<Post>;
  users: Array<User>;
};


export type QueryGetArticleArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type QueryGetArticlesArgs = {
  limit: Scalars['Int'];
  type: ArticleType;
};


export type QueryGetPostByIdArgs = {
  id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type GetArticleQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']>;
}>;


export type GetArticleQuery = { __typename?: 'Query', getArticle?: { __typename?: 'Article', id: number, title: string, description: string, postedAt: any } | null };

export type GetArticlesQueryVariables = Exact<{
  limit: Scalars['Int'];
  type: ArticleType;
}>;


export type GetArticlesQuery = { __typename?: 'Query', getArticles: Array<{ __typename?: 'Article', id: number, title: string, description: string, postedAt: any, image: string }> };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: number, name: string, email: string }> };


export const GetArticleDocument = `
    query GetArticle($id: Int) {
  getArticle(id: $id) {
    id
    title
    description
    postedAt
  }
}
    `;
export const GetArticlesDocument = `
    query GetArticles($limit: Int!, $type: ArticleType!) {
  getArticles(limit: $limit, type: $type) {
    id
    title
    description
    postedAt
    image
  }
}
    `;
export const UsersDocument = `
    query Users {
  users {
    id
    name
    email
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    GetArticle: build.query<GetArticleQuery, GetArticleQueryVariables | void>({
      query: (variables) => ({ document: GetArticleDocument, variables })
    }),
    GetArticles: build.query<GetArticlesQuery, GetArticlesQueryVariables>({
      query: (variables) => ({ document: GetArticlesDocument, variables })
    }),
    Users: build.query<UsersQuery, UsersQueryVariables | void>({
      query: (variables) => ({ document: UsersDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useGetArticleQuery, useLazyGetArticleQuery, useGetArticlesQuery, useLazyGetArticlesQuery, useUsersQuery, useLazyUsersQuery } = injectedRtkApi;

