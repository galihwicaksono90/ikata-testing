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

export type HeroImage = {
  __typename?: 'HeroImage';
  id: Scalars['Int'];
  image: Scalars['String'];
};

export type Member = {
  __typename?: 'Member';
  id: Scalars['Int'];
  image: Scalars['String'];
  name: Scalars['String'];
  title: Scalars['String'];
};

export type Merch = {
  __typename?: 'Merch';
  id: Scalars['Int'];
  image: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['String'];
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

export type News = {
  __typename?: 'News';
  description: Scalars['String'];
  id: Scalars['Int'];
  image: Scalars['String'];
  title: Scalars['String'];
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
  getHeroImages: Array<Maybe<HeroImage>>;
  getMembers: Array<Member>;
  getMerchList: Array<Merch>;
  getNewsItems: Array<News>;
  getPostById: Post;
  getUserPosts: Array<Maybe<Post>>;
  getVacancies: Array<Maybe<Vacancy>>;
  me?: Maybe<User>;
  posts: Array<Post>;
  users: Array<User>;
};


export type QueryGetArticleArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type QueryGetArticlesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  type: ArticleType;
};


export type QueryGetHeroImagesArgs = {
  limit: Scalars['Int'];
};


export type QueryGetMembersArgs = {
  limit: Scalars['Int'];
};


export type QueryGetMerchListArgs = {
  limit: Scalars['Int'];
};


export type QueryGetNewsItemsArgs = {
  limit: Scalars['Int'];
};


export type QueryGetPostByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetVacanciesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  type: VacancyType;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Vacancy = {
  __typename?: 'Vacancy';
  company: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
  type: Scalars['String'];
};

export enum VacancyType {
  Job = 'job',
  Scholarship = 'scholarship'
}

export type GetArticleQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']>;
}>;


export type GetArticleQuery = { __typename?: 'Query', getArticle?: { __typename?: 'Article', id: number, title: string, description: string, postedAt: any } | null };

export type GetArticlesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  type: ArticleType;
}>;


export type GetArticlesQuery = { __typename?: 'Query', getArticles: Array<{ __typename?: 'Article', id: number, title: string, description: string, postedAt: any, image: string }> };

export type GetHeroImagesQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type GetHeroImagesQuery = { __typename?: 'Query', getHeroImages: Array<{ __typename?: 'HeroImage', id: number, image: string } | null> };

export type GetMembersQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type GetMembersQuery = { __typename?: 'Query', getMembers: Array<{ __typename?: 'Member', id: number, name: string, title: string, image: string }> };

export type GetMerchListQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type GetMerchListQuery = { __typename?: 'Query', getMerchList: Array<{ __typename?: 'Merch', id: number, name: string, price: string, image: string }> };

export type GetNewsItemsQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type GetNewsItemsQuery = { __typename?: 'Query', getNewsItems: Array<{ __typename?: 'News', id: number, title: string, description: string, image: string }> };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: number, name: string, email: string }> };

export type GetVacanciesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  type: VacancyType;
}>;


export type GetVacanciesQuery = { __typename?: 'Query', getVacancies: Array<{ __typename?: 'Vacancy', id: number, title: string, company: string, type: string } | null> };


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
    query GetArticles($limit: Int, $type: ArticleType!) {
  getArticles(limit: $limit, type: $type) {
    id
    title
    description
    postedAt
    image
  }
}
    `;
export const GetHeroImagesDocument = `
    query GetHeroImages($limit: Int!) {
  getHeroImages(limit: $limit) {
    id
    image
  }
}
    `;
export const GetMembersDocument = `
    query GetMembers($limit: Int!) {
  getMembers(limit: $limit) {
    id
    name
    title
    image
  }
}
    `;
export const GetMerchListDocument = `
    query GetMerchList($limit: Int!) {
  getMerchList(limit: $limit) {
    id
    name
    price
    image
  }
}
    `;
export const GetNewsItemsDocument = `
    query GetNewsItems($limit: Int!) {
  getNewsItems(limit: $limit) {
    id
    title
    description
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
export const GetVacanciesDocument = `
    query GetVacancies($limit: Int, $type: VacancyType!) {
  getVacancies(type: $type, limit: $limit) {
    id
    title
    company
    type
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
    GetHeroImages: build.query<GetHeroImagesQuery, GetHeroImagesQueryVariables>({
      query: (variables) => ({ document: GetHeroImagesDocument, variables })
    }),
    GetMembers: build.query<GetMembersQuery, GetMembersQueryVariables>({
      query: (variables) => ({ document: GetMembersDocument, variables })
    }),
    GetMerchList: build.query<GetMerchListQuery, GetMerchListQueryVariables>({
      query: (variables) => ({ document: GetMerchListDocument, variables })
    }),
    GetNewsItems: build.query<GetNewsItemsQuery, GetNewsItemsQueryVariables>({
      query: (variables) => ({ document: GetNewsItemsDocument, variables })
    }),
    Users: build.query<UsersQuery, UsersQueryVariables | void>({
      query: (variables) => ({ document: UsersDocument, variables })
    }),
    GetVacancies: build.query<GetVacanciesQuery, GetVacanciesQueryVariables>({
      query: (variables) => ({ document: GetVacanciesDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useGetArticleQuery, useLazyGetArticleQuery, useGetArticlesQuery, useLazyGetArticlesQuery, useGetHeroImagesQuery, useLazyGetHeroImagesQuery, useGetMembersQuery, useLazyGetMembersQuery, useGetMerchListQuery, useLazyGetMerchListQuery, useGetNewsItemsQuery, useLazyGetNewsItemsQuery, useUsersQuery, useLazyUsersQuery, useGetVacanciesQuery, useLazyGetVacanciesQuery } = injectedRtkApi;

