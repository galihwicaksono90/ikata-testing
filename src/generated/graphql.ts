import { api } from "redux/api/apiSlice";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
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

export type About = {
  __typename?: "About";
  description: Scalars["String"];
  image: Scalars["String"];
  type: Scalars["String"];
};

export enum AboutType {
  Jurusan = "jurusan",
  Organisasi = "organisasi",
}

export type Article = {
  __typename?: "Article";
  description: Scalars["String"];
  id: Scalars["Int"];
  image: Scalars["String"];
  postedAt: Scalars["DateTime"];
  title: Scalars["String"];
};

export enum ArticleType {
  NonScientific = "nonScientific",
  Scientific = "scientific",
}

export type AuthPayload = {
  __typename?: "AuthPayload";
  token?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
};

export type Company = {
  __typename?: "Company";
  address: Scalars["String"];
  city: Scalars["String"];
  description: Scalars["String"];
  email: Scalars["String"];
  expiredAt: Scalars["String"];
  id: Scalars["Int"];
  image: Scalars["String"];
  jobs: Array<Job>;
  name: Scalars["String"];
  postedAt: Scalars["String"];
};

export type FieldError = {
  __typename?: "FieldError";
  field?: Maybe<Scalars["String"]>;
  message?: Maybe<Scalars["String"]>;
};

export type FieldErrors = {
  __typename?: "FieldErrors";
  errors?: Maybe<Array<Maybe<FieldError>>>;
};

export type HeroImage = {
  __typename?: "HeroImage";
  id: Scalars["Int"];
  image: Scalars["String"];
  message: Scalars["String"];
};

export type Job = {
  __typename?: "Job";
  description: Scalars["String"];
  id: Scalars["Int"];
  qualifications: Array<Scalars["String"]>;
  title: Scalars["String"];
};

export type Member = {
  __typename?: "Member";
  id: Scalars["Int"];
  image: Scalars["String"];
  name: Scalars["String"];
  title: Scalars["String"];
};

export type Merch = {
  __typename?: "Merch";
  id: Scalars["Int"];
  image: Scalars["String"];
  name: Scalars["String"];
  price: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  login: AuthPayload;
  validateResetToken: Scalars["Boolean"];
};

export type MutationLoginArgs = {
  nim: Scalars["Int"];
  password: Scalars["String"];
};

export type MutationValidateResetTokenArgs = {
  token?: InputMaybe<Scalars["String"]>;
};

export type News = {
  __typename?: "News";
  author: Scalars["String"];
  content: Scalars["String"];
  createdAt: Scalars["DateTime"];
  description: Scalars["String"];
  id: Scalars["Int"];
  image: Scalars["String"];
  tags: Array<Scalars["String"]>;
  title: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  getAbout?: Maybe<About>;
  getArticle?: Maybe<Article>;
  getArticles: Array<Article>;
  getCompanyJobs: Array<Company>;
  getHeroImages: Array<Maybe<HeroImage>>;
  getMembers: Array<Member>;
  getMerchList: Array<Merch>;
  getNews?: Maybe<News>;
  getNewsItems: Array<News>;
  getTestimonies: Array<Testimony>;
  getVacancies: Array<Maybe<Vacancy>>;
};

export type QueryGetAboutArgs = {
  type: AboutType;
};

export type QueryGetArticleArgs = {
  id: Scalars["Int"];
};

export type QueryGetArticlesArgs = {
  limit: Scalars["Int"];
  type: ArticleType;
};

export type QueryGetHeroImagesArgs = {
  limit: Scalars["Int"];
};

export type QueryGetMembersArgs = {
  limit: Scalars["Int"];
};

export type QueryGetMerchListArgs = {
  limit: Scalars["Int"];
};

export type QueryGetNewsArgs = {
  id: Scalars["Int"];
};

export type QueryGetNewsItemsArgs = {
  limit: Scalars["Int"];
};

export type QueryGetTestimoniesArgs = {
  limit: Scalars["Int"];
};

export type QueryGetVacanciesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  type: VacancyType;
};

export type ResetToken = {
  __typename?: "ResetToken";
  token: Scalars["String"];
};

export type Testimony = {
  __typename?: "Testimony";
  description: Scalars["String"];
  endYear: Scalars["Int"];
  id: Scalars["Int"];
  image: Scalars["String"];
  name: Scalars["String"];
  startYear: Scalars["Int"];
};

export type User = {
  __typename?: "User";
  email: Scalars["String"];
  fullName: Scalars["String"];
  id: Scalars["Int"];
  role: Scalars["String"];
};

export enum UserRole {
  Admin = "admin",
  Guess = "guess",
  User = "user",
}

export type Vacancy = {
  __typename?: "Vacancy";
  company: Scalars["String"];
  id: Scalars["Int"];
  title: Scalars["String"];
  type: Scalars["String"];
};

export enum VacancyType {
  Job = "job",
  Scholarship = "scholarship",
}

export type ValidateResetTokenMutationVariables = Exact<{
  token?: InputMaybe<Scalars["String"]>;
}>;

export type ValidateResetTokenMutation = {
  __typename?: "Mutation";
  validateResetToken: boolean;
};

export type GetAboutQueryVariables = Exact<{
  limit: Scalars["Int"];
}>;

export type GetAboutQuery = {
  __typename?: "Query";
  jurusan?: {
    __typename?: "About";
    description: string;
    image: string;
    type: string;
  } | null;
  organisasi?: {
    __typename?: "About";
    description: string;
    image: string;
    type: string;
  } | null;
  getTestimonies: Array<{
    __typename?: "Testimony";
    id: number;
    name: string;
    startYear: number;
    endYear: number;
    description: string;
    image: string;
  }>;
};

export type GetArticleQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type GetArticleQuery = {
  __typename?: "Query";
  getArticle?: {
    __typename?: "Article";
    id: number;
    title: string;
    description: string;
    postedAt: any;
  } | null;
};

export type GetArticlesQueryVariables = Exact<{
  limit: Scalars["Int"];
  type: ArticleType;
}>;

export type GetArticlesQuery = {
  __typename?: "Query";
  getArticles: Array<{
    __typename?: "Article";
    id: number;
    title: string;
    description: string;
    postedAt: any;
    image: string;
  }>;
};

export type GetCompanyJobsQueryVariables = Exact<{ [key: string]: never }>;

export type GetCompanyJobsQuery = {
  __typename?: "Query";
  getCompanyJobs: Array<{
    __typename?: "Company";
    id: number;
    name: string;
    postedAt: string;
    expiredAt: string;
    city: string;
    description: string;
    address: string;
    email: string;
    image: string;
    jobs: Array<{
      __typename?: "Job";
      id: number;
      title: string;
      qualifications: Array<string>;
      description: string;
    }>;
  }>;
};

export type GetHeroImagesQueryVariables = Exact<{
  limit: Scalars["Int"];
}>;

export type GetHeroImagesQuery = {
  __typename?: "Query";
  getHeroImages: Array<{
    __typename?: "HeroImage";
    id: number;
    image: string;
  } | null>;
};

export type GetMembersQueryVariables = Exact<{
  limit: Scalars["Int"];
}>;

export type GetMembersQuery = {
  __typename?: "Query";
  getMembers: Array<{
    __typename?: "Member";
    id: number;
    name: string;
    title: string;
    image: string;
  }>;
};

export type GetMerchListQueryVariables = Exact<{
  limit: Scalars["Int"];
}>;

export type GetMerchListQuery = {
  __typename?: "Query";
  getMerchList: Array<{
    __typename?: "Merch";
    id: number;
    name: string;
    price: string;
    image: string;
  }>;
};

export type GetNewsItemsQueryVariables = Exact<{
  limit: Scalars["Int"];
}>;

export type GetNewsItemsQuery = {
  __typename?: "Query";
  getNewsItems: Array<{
    __typename?: "News";
    id: number;
    title: string;
    description: string;
    image: string;
  }>;
};

export type GetNewsQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type GetNewsQuery = {
  __typename?: "Query";
  getNews?: {
    __typename?: "News";
    id: number;
    title: string;
    description: string;
    content: string;
    image: string;
    author: string;
    createdAt: any;
    tags: Array<string>;
  } | null;
};

export type GetTestimoniesQueryVariables = Exact<{
  limit: Scalars["Int"];
}>;

export type GetTestimoniesQuery = {
  __typename?: "Query";
  getTestimonies: Array<{
    __typename?: "Testimony";
    id: number;
    name: string;
    startYear: number;
    endYear: number;
    description: string;
    image: string;
  }>;
};

export type GetVacanciesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]>;
  type: VacancyType;
}>;

export type GetVacanciesQuery = {
  __typename?: "Query";
  getVacancies: Array<{
    __typename?: "Vacancy";
    id: number;
    title: string;
    company: string;
    type: string;
  } | null>;
};

export const ValidateResetTokenDocument = `
    mutation ValidateResetToken($token: String) {
  validateResetToken(token: $token)
}
    `;
export const GetAboutDocument = `
    query GetAbout($limit: Int!) {
  jurusan: getAbout(type: jurusan) {
    description
    image
    type
  }
  organisasi: getAbout(type: organisasi) {
    description
    image
    type
  }
  getTestimonies(limit: $limit) {
    id
    name
    startYear
    endYear
    description
    image
  }
}
    `;
export const GetArticleDocument = `
    query GetArticle($id: Int!) {
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
export const GetCompanyJobsDocument = `
    query GetCompanyJobs {
  getCompanyJobs {
    id
    name
    postedAt
    expiredAt
    jobs {
      id
      title
      qualifications
      description
    }
    city
    description
    address
    email
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
export const GetNewsDocument = `
    query GetNews($id: Int!) {
  getNews(id: $id) {
    id
    title
    description
    content
    image
    author
    createdAt
    tags
  }
}
    `;
export const GetTestimoniesDocument = `
    query GetTestimonies($limit: Int!) {
  getTestimonies(limit: $limit) {
    id
    name
    startYear
    endYear
    description
    image
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
    ValidateResetToken: build.mutation<
      ValidateResetTokenMutation,
      ValidateResetTokenMutationVariables | void
    >({
      query: (variables) => ({
        document: ValidateResetTokenDocument,
        variables,
      }),
    }),
    GetAbout: build.query<GetAboutQuery, GetAboutQueryVariables>({
      query: (variables) => ({ document: GetAboutDocument, variables }),
    }),
    GetArticle: build.query<GetArticleQuery, GetArticleQueryVariables>({
      query: (variables) => ({ document: GetArticleDocument, variables }),
    }),
    GetArticles: build.query<GetArticlesQuery, GetArticlesQueryVariables>({
      query: (variables) => ({ document: GetArticlesDocument, variables }),
    }),
    GetCompanyJobs: build.query<
      GetCompanyJobsQuery,
      GetCompanyJobsQueryVariables | void
    >({
      query: (variables) => ({ document: GetCompanyJobsDocument, variables }),
    }),
    GetHeroImages: build.query<GetHeroImagesQuery, GetHeroImagesQueryVariables>(
      {
        query: (variables) => ({ document: GetHeroImagesDocument, variables }),
      }
    ),
    GetMembers: build.query<GetMembersQuery, GetMembersQueryVariables>({
      query: (variables) => ({ document: GetMembersDocument, variables }),
    }),
    GetMerchList: build.query<GetMerchListQuery, GetMerchListQueryVariables>({
      query: (variables) => ({ document: GetMerchListDocument, variables }),
    }),
    GetNewsItems: build.query<GetNewsItemsQuery, GetNewsItemsQueryVariables>({
      query: (variables) => ({ document: GetNewsItemsDocument, variables }),
    }),
    GetNews: build.query<GetNewsQuery, GetNewsQueryVariables>({
      query: (variables) => ({ document: GetNewsDocument, variables }),
    }),
    GetTestimonies: build.query<
      GetTestimoniesQuery,
      GetTestimoniesQueryVariables
    >({
      query: (variables) => ({ document: GetTestimoniesDocument, variables }),
    }),
    GetVacancies: build.query<GetVacanciesQuery, GetVacanciesQueryVariables>({
      query: (variables) => ({ document: GetVacanciesDocument, variables }),
    }),
  }),
});

export { injectedRtkApi as api };
export const {
  useValidateResetTokenMutation,
  useGetAboutQuery,
  useLazyGetAboutQuery,
  useGetArticleQuery,
  useLazyGetArticleQuery,
  useGetArticlesQuery,
  useLazyGetArticlesQuery,
  useGetCompanyJobsQuery,
  useLazyGetCompanyJobsQuery,
  useGetHeroImagesQuery,
  useLazyGetHeroImagesQuery,
  useGetMembersQuery,
  useLazyGetMembersQuery,
  useGetMerchListQuery,
  useLazyGetMerchListQuery,
  useGetNewsItemsQuery,
  useLazyGetNewsItemsQuery,
  useGetNewsQuery,
  useLazyGetNewsQuery,
  useGetTestimoniesQuery,
  useLazyGetTestimoniesQuery,
  useGetVacanciesQuery,
  useLazyGetVacanciesQuery,
} = injectedRtkApi;
