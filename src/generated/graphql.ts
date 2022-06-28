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
};

/** This represents activities entity */
export type ActivitiesType = {
  __typename?: 'ActivitiesType';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  publishedDate?: Maybe<Scalars['String']>;
  status?: Maybe<StatusActivities>;
  thumbnailChecksum?: Maybe<Scalars['String']>;
  thumbnailMimeType?: Maybe<Scalars['String']>;
  thumbnailPath?: Maybe<Scalars['String']>;
  thumbnailSize?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
  views?: Maybe<Scalars['Int']>;
};

/** This represents alumni businesses entity */
export type AlumniBusinessesType = {
  __typename?: 'AlumniBusinessesType';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  publishedDate?: Maybe<Scalars['String']>;
  status?: Maybe<StatusAlumniBusinesses>;
  thumbnailChecksum?: Maybe<Scalars['String']>;
  thumbnailMimeType?: Maybe<Scalars['String']>;
  thumbnailPath?: Maybe<Scalars['String']>;
  thumbnailSize?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
  views?: Maybe<Scalars['Int']>;
};

/** This represents articles entity */
export type ArticlesType = {
  __typename?: 'ArticlesType';
  author?: Maybe<Scalars['String']>;
  category?: Maybe<Category>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  publishedDate?: Maybe<Scalars['String']>;
  status?: Maybe<StatusArticles>;
  thumbnailChecksum?: Maybe<Scalars['String']>;
  thumbnailMimeType?: Maybe<Scalars['String']>;
  thumbnailPath?: Maybe<Scalars['String']>;
  thumbnailSize?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
  views?: Maybe<Scalars['Int']>;
};

/** This represents merchandises entity */
export type MerchandisesType = {
  __typename?: 'MerchandisesType';
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  status?: Maybe<StatusMerchandises>;
  stock?: Maybe<Scalars['Int']>;
  thumbnailChecksum?: Maybe<Scalars['String']>;
  thumbnailMimeType?: Maybe<Scalars['String']>;
  thumbnailPath?: Maybe<Scalars['String']>;
  thumbnailSize?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
  views?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['String']>;
};

/** This represents news entity */
export type NewsType = {
  __typename?: 'NewsType';
  author?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  publishedDate?: Maybe<Scalars['String']>;
  status?: Maybe<StatusNews>;
  tags?: Maybe<Scalars['String']>;
  thumbnailChecksum?: Maybe<Scalars['String']>;
  thumbnailMimeType?: Maybe<Scalars['String']>;
  thumbnailPath?: Maybe<Scalars['String']>;
  thumbnailSize?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
  views?: Maybe<Scalars['Int']>;
};

/** This represents a PaginationInputType */
export type PaginationInputType = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

/** This represents a ParamsInputType */
export type ParamsInputType = {
  pagination?: InputMaybe<PaginationInputType>;
  sort?: InputMaybe<SortInputType>;
  where?: InputMaybe<Array<InputMaybe<WhereInputType>>>;
};

/** This represents slider entity */
export type SliderType = {
  __typename?: 'SliderType';
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  isActive?: Maybe<Scalars['Boolean']>;
  photoChecksum?: Maybe<Scalars['String']>;
  photoMimeType?: Maybe<Scalars['String']>;
  photoPath?: Maybe<Scalars['String']>;
  photoSize?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
};

/** This represents a SortInputType */
export type SortInputType = {
  field?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<OrderEnum>;
};

/** This represents a validity token forgot password */
export type TokenForgotPassword = {
  __typename?: 'TokenForgotPassword';
  isValid?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

/** This represents a User */
export type User = {
  __typename?: 'User';
  classYear?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  id?: Maybe<Scalars['ID']>;
  nickName?: Maybe<Scalars['String']>;
  nim?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  prefixTitle?: Maybe<Scalars['String']>;
  suffixTitle?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
};

/** This represents a token sent to email */
export type UserInputCheckToken = {
  token: Scalars['String'];
};

/** This represents a email address for sent a token */
export type UserInputForgotPassword = {
  email: Scalars['String'];
};

/** This represents a UserInputType */
export type UserInputTypeLogi = {
  email: Scalars['String'];
  password: Scalars['String'];
};

/** This represents a UserInputType */
export type UserInputTypeRegiste = {
  classYear: Scalars['Int'];
  email: Scalars['String'];
  fullName: Scalars['String'];
  gender: GenderEnum;
  nickName: Scalars['String'];
  nim: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  prefixTitle?: InputMaybe<Scalars['String']>;
  suffixTitle?: InputMaybe<Scalars['String']>;
};

/** This represents a token and password */
export type UserInputUpdatePassword = {
  password: Scalars['String'];
  token: Scalars['String'];
};

/** This represents vacancies entity */
export type VacanciesType = {
  __typename?: 'VacanciesType';
  amount?: Maybe<Scalars['Int']>;
  companyCity?: Maybe<Scalars['String']>;
  companyEmail?: Maybe<Scalars['String']>;
  companyLogoChecksum?: Maybe<Scalars['String']>;
  companyLogoMimeType?: Maybe<Scalars['String']>;
  companyLogoPath?: Maybe<Scalars['String']>;
  companyLogoSize?: Maybe<Scalars['Int']>;
  companyName?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['ID']>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedBy?: Maybe<Scalars['ID']>;
  expiredDate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  jobTitle?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  status?: Maybe<StatusVacancies>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['ID']>;
  views?: Maybe<Scalars['Int']>;
};

/** This represents a WhereInputType */
export type WhereInputType = {
  field: Scalars['String'];
  value: Scalars['String'];
};

export enum Category {
  Ilmiah = 'Ilmiah',
  NonIlmiah = 'NonIlmiah'
}

export enum Gender {
  Pria = 'Pria',
  Wanita = 'Wanita'
}

export enum GenderEnum {
  Pria = 'Pria',
  Wanita = 'Wanita'
}

export enum OrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** This is the root mutation which holds all possible WRITE entrypoints for the GraphQL API */
export type RootMutation = {
  __typename?: 'rootMutation';
  /** The mutation that allows guest to request forgot password link token */
  forgotPassword?: Maybe<TokenForgotPassword>;
  /** The mutation that allows guest to login */
  login?: Maybe<User>;
  /** The mutation that allows guest to register */
  register?: Maybe<User>;
  /** The mutation that allows guest to login */
  updatePassword?: Maybe<TokenForgotPassword>;
};


/** This is the root mutation which holds all possible WRITE entrypoints for the GraphQL API */
export type RootMutationForgotPasswordArgs = {
  user?: InputMaybe<UserInputForgotPassword>;
};


/** This is the root mutation which holds all possible WRITE entrypoints for the GraphQL API */
export type RootMutationLoginArgs = {
  user?: InputMaybe<UserInputTypeLogi>;
};


/** This is the root mutation which holds all possible WRITE entrypoints for the GraphQL API */
export type RootMutationRegisterArgs = {
  user?: InputMaybe<UserInputTypeRegiste>;
};


/** This is the root mutation which holds all possible WRITE entrypoints for the GraphQL API */
export type RootMutationUpdatePasswordArgs = {
  user?: InputMaybe<UserInputUpdatePassword>;
};

/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQuery = {
  __typename?: 'rootQuery';
  getActivities?: Maybe<Array<Maybe<ActivitiesType>>>;
  getAlumniBusinesses?: Maybe<Array<Maybe<AlumniBusinessesType>>>;
  getArticles?: Maybe<Array<Maybe<ArticlesType>>>;
  getForgotPasswordToken?: Maybe<TokenForgotPassword>;
  getMerchandises?: Maybe<Array<Maybe<MerchandisesType>>>;
  getNews?: Maybe<Array<Maybe<NewsType>>>;
  getSliders?: Maybe<Array<Maybe<SliderType>>>;
  getVacancies?: Maybe<Array<Maybe<VacanciesType>>>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetActivitiesArgs = {
  params?: InputMaybe<ParamsInputType>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetAlumniBusinessesArgs = {
  params?: InputMaybe<ParamsInputType>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetArticlesArgs = {
  params?: InputMaybe<ParamsInputType>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetForgotPasswordTokenArgs = {
  user?: InputMaybe<UserInputCheckToken>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetMerchandisesArgs = {
  params?: InputMaybe<ParamsInputType>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetNewsArgs = {
  params?: InputMaybe<ParamsInputType>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetSlidersArgs = {
  params?: InputMaybe<ParamsInputType>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryGetVacanciesArgs = {
  params?: InputMaybe<ParamsInputType>;
};

export enum StatusActivities {
  Draft = 'Draft',
  NeedRevision = 'NeedRevision',
  Pending = 'Pending',
  Published = 'Published'
}

export enum StatusAlumniBusinesses {
  Draft = 'Draft',
  NeedRevision = 'NeedRevision',
  Pending = 'Pending',
  Published = 'Published'
}

export enum StatusArticles {
  Draft = 'Draft',
  NeedRevision = 'NeedRevision',
  Pending = 'Pending',
  Published = 'Published'
}

export enum StatusMerchandises {
  Draft = 'Draft',
  OutOfStock = 'OutOfStock',
  Published = 'Published'
}

export enum StatusNews {
  Draft = 'Draft',
  NeedRevision = 'NeedRevision',
  Pending = 'Pending',
  Published = 'Published'
}

export enum StatusVacancies {
  Draft = 'Draft',
  NeedRevision = 'NeedRevision',
  Pending = 'Pending',
  Published = 'Published'
}

export type BasicAuthUserFragment = { __typename?: 'User', id?: string | null, fullName?: string | null, nickName?: string | null, token?: string | null };

export type ForgotPasswordMutationVariables = Exact<{
  user: UserInputForgotPassword;
}>;


export type ForgotPasswordMutation = { __typename?: 'rootMutation', forgotPassword?: { __typename?: 'TokenForgotPassword', status?: string | null, isValid?: boolean | null, token?: string | null } | null };

export type LoginMutationVariables = Exact<{
  user: UserInputTypeLogi;
}>;


export type LoginMutation = { __typename?: 'rootMutation', login?: { __typename?: 'User', id?: string | null, fullName?: string | null, nickName?: string | null, token?: string | null } | null };

export type RegisterMutationVariables = Exact<{
  user?: InputMaybe<UserInputTypeRegiste>;
}>;


export type RegisterMutation = { __typename?: 'rootMutation', register?: { __typename?: 'User', id?: string | null, email?: string | null, token?: string | null } | null };

export type UpdatePasswordMutationVariables = Exact<{
  user: UserInputUpdatePassword;
}>;


export type UpdatePasswordMutation = { __typename?: 'rootMutation', updatePassword?: { __typename?: 'TokenForgotPassword', status?: string | null, isValid?: boolean | null, token?: string | null } | null };

export type GetActivitiesQueryVariables = Exact<{
  params?: InputMaybe<ParamsInputType>;
}>;


export type GetActivitiesQuery = { __typename?: 'rootQuery', getActivities?: Array<{ __typename?: 'ActivitiesType', id?: string | null, title?: string | null, publishedDate?: string | null, description?: string | null, thumbnailPath?: string | null } | null> | null };

export type GetAlumniBusinessesQueryVariables = Exact<{
  params?: InputMaybe<ParamsInputType>;
}>;


export type GetAlumniBusinessesQuery = { __typename?: 'rootQuery', getAlumniBusinesses?: Array<{ __typename?: 'AlumniBusinessesType', id?: string | null, title?: string | null, thumbnailPath?: string | null } | null> | null };

export type GetArticlesQueryVariables = Exact<{
  params?: InputMaybe<ParamsInputType>;
}>;


export type GetArticlesQuery = { __typename?: 'rootQuery', getArticles?: Array<{ __typename?: 'ArticlesType', id?: string | null, title?: string | null, description?: string | null, thumbnailPath?: string | null, publishedDate?: string | null } | null> | null };

export type GetMerchandisesQueryVariables = Exact<{
  params?: InputMaybe<ParamsInputType>;
}>;


export type GetMerchandisesQuery = { __typename?: 'rootQuery', getMerchandises?: Array<{ __typename?: 'MerchandisesType', id?: string | null, name?: string | null, price?: number | null, thumbnailPath?: string | null } | null> | null };

export type GetNewsQueryVariables = Exact<{
  params?: InputMaybe<ParamsInputType>;
}>;


export type GetNewsQuery = { __typename?: 'rootQuery', getNews?: Array<{ __typename?: 'NewsType', id?: string | null, title?: string | null, tags?: string | null, thumbnailPath?: string | null, publishedDate?: string | null } | null> | null };

export type GetSlidersQueryVariables = Exact<{
  params?: InputMaybe<ParamsInputType>;
}>;


export type GetSlidersQuery = { __typename?: 'rootQuery', getSliders?: Array<{ __typename?: 'SliderType', id?: string | null, photoPath?: string | null } | null> | null };

export type GetForgotPasswordTokenQueryVariables = Exact<{
  user?: InputMaybe<UserInputCheckToken>;
}>;


export type GetForgotPasswordTokenQuery = { __typename?: 'rootQuery', getForgotPasswordToken?: { __typename?: 'TokenForgotPassword', status?: string | null, isValid?: boolean | null, token?: string | null } | null };

export type GetVacanciesQueryVariables = Exact<{
  params?: InputMaybe<ParamsInputType>;
}>;


export type GetVacanciesQuery = { __typename?: 'rootQuery', getVacancies?: Array<{ __typename?: 'VacanciesType', id?: string | null, status?: StatusVacancies | null, companyLogoPath?: string | null, companyName?: string | null, jobTitle?: string | null } | null> | null };

export const BasicAuthUserFragmentDoc = `
    fragment BasicAuthUser on User {
  id
  fullName
  nickName
  token
}
    `;
export const ForgotPasswordDocument = `
    mutation ForgotPassword($user: UserInputForgotPassword!) {
  forgotPassword(user: $user) {
    status
    isValid
    token
  }
}
    `;
export const LoginDocument = `
    mutation Login($user: UserInputTypeLogi!) {
  login(user: $user) {
    ...BasicAuthUser
  }
}
    ${BasicAuthUserFragmentDoc}`;
export const RegisterDocument = `
    mutation Register($user: UserInputTypeRegiste) {
  register(user: $user) {
    id
    email
    token
  }
}
    `;
export const UpdatePasswordDocument = `
    mutation UpdatePassword($user: UserInputUpdatePassword!) {
  updatePassword(user: $user) {
    status
    isValid
    token
  }
}
    `;
export const GetActivitiesDocument = `
    query GetActivities($params: ParamsInputType) {
  getActivities(params: $params) {
    id
    title
    publishedDate
    description
    thumbnailPath
  }
}
    `;
export const GetAlumniBusinessesDocument = `
    query GetAlumniBusinesses($params: ParamsInputType) {
  getAlumniBusinesses(params: $params) {
    id
    title
    thumbnailPath
  }
}
    `;
export const GetArticlesDocument = `
    query GetArticles($params: ParamsInputType) {
  getArticles(params: $params) {
    id
    title
    description
    thumbnailPath
    publishedDate
  }
}
    `;
export const GetMerchandisesDocument = `
    query GetMerchandises($params: ParamsInputType) {
  getMerchandises(params: $params) {
    id
    name
    price
    thumbnailPath
  }
}
    `;
export const GetNewsDocument = `
    query GetNews($params: ParamsInputType) {
  getNews(params: $params) {
    id
    title
    tags
    thumbnailPath
    publishedDate
  }
}
    `;
export const GetSlidersDocument = `
    query GetSliders($params: ParamsInputType) {
  getSliders(params: $params) {
    id
    photoPath
  }
}
    `;
export const GetForgotPasswordTokenDocument = `
    query GetForgotPasswordToken($user: UserInputCheckToken) {
  getForgotPasswordToken(user: $user) {
    status
    isValid
    token
  }
}
    `;
export const GetVacanciesDocument = `
    query GetVacancies($params: ParamsInputType) {
  getVacancies(params: $params) {
    id
    status
    companyLogoPath
    companyName
    jobTitle
    status
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    ForgotPassword: build.mutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>({
      query: (variables) => ({ document: ForgotPasswordDocument, variables })
    }),
    Login: build.mutation<LoginMutation, LoginMutationVariables>({
      query: (variables) => ({ document: LoginDocument, variables })
    }),
    Register: build.mutation<RegisterMutation, RegisterMutationVariables | void>({
      query: (variables) => ({ document: RegisterDocument, variables })
    }),
    UpdatePassword: build.mutation<UpdatePasswordMutation, UpdatePasswordMutationVariables>({
      query: (variables) => ({ document: UpdatePasswordDocument, variables })
    }),
    GetActivities: build.query<GetActivitiesQuery, GetActivitiesQueryVariables | void>({
      query: (variables) => ({ document: GetActivitiesDocument, variables })
    }),
    GetAlumniBusinesses: build.query<GetAlumniBusinessesQuery, GetAlumniBusinessesQueryVariables | void>({
      query: (variables) => ({ document: GetAlumniBusinessesDocument, variables })
    }),
    GetArticles: build.query<GetArticlesQuery, GetArticlesQueryVariables | void>({
      query: (variables) => ({ document: GetArticlesDocument, variables })
    }),
    GetMerchandises: build.query<GetMerchandisesQuery, GetMerchandisesQueryVariables | void>({
      query: (variables) => ({ document: GetMerchandisesDocument, variables })
    }),
    GetNews: build.query<GetNewsQuery, GetNewsQueryVariables | void>({
      query: (variables) => ({ document: GetNewsDocument, variables })
    }),
    GetSliders: build.query<GetSlidersQuery, GetSlidersQueryVariables | void>({
      query: (variables) => ({ document: GetSlidersDocument, variables })
    }),
    GetForgotPasswordToken: build.query<GetForgotPasswordTokenQuery, GetForgotPasswordTokenQueryVariables | void>({
      query: (variables) => ({ document: GetForgotPasswordTokenDocument, variables })
    }),
    GetVacancies: build.query<GetVacanciesQuery, GetVacanciesQueryVariables | void>({
      query: (variables) => ({ document: GetVacanciesDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useForgotPasswordMutation, useLoginMutation, useRegisterMutation, useUpdatePasswordMutation, useGetActivitiesQuery, useLazyGetActivitiesQuery, useGetAlumniBusinessesQuery, useLazyGetAlumniBusinessesQuery, useGetArticlesQuery, useLazyGetArticlesQuery, useGetMerchandisesQuery, useLazyGetMerchandisesQuery, useGetNewsQuery, useLazyGetNewsQuery, useGetSlidersQuery, useLazyGetSlidersQuery, useGetForgotPasswordTokenQuery, useLazyGetForgotPasswordTokenQuery, useGetVacanciesQuery, useLazyGetVacanciesQuery } = injectedRtkApi;

