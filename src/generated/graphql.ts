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
export type UserInputTypeDelet = {
  id: Scalars['ID'];
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

/** This represents a UserInputType */
export type UserInputTypeUpdat = {
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  username?: InputMaybe<Scalars['String']>;
};

/** This represents a token and password */
export type UserInputUpdatePassword = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export enum Gender {
  Pria = 'Pria',
  Wanita = 'Wanita'
}

export enum GenderEnum {
  Pria = 'Pria',
  Wanita = 'Wanita'
}

/** This is the root mutation which holds all possible WRITE entrypoints for the GraphQL API */
export type RootMutation = {
  __typename?: 'rootMutation';
  /** The mutation that allows you to delete a existing User by Id */
  deleteUser?: Maybe<User>;
  /** The mutation that allows guest to request forgot password link token */
  forgotPassword?: Maybe<TokenForgotPassword>;
  /** The mutation that allows guest to login */
  login?: Maybe<User>;
  /** The mutation that allows guest to register */
  register?: Maybe<User>;
  /** The mutation that allows guest to login */
  updatePassword?: Maybe<TokenForgotPassword>;
  /** The mutation that allows you to update an existing User by Id */
  updateUser?: Maybe<User>;
};


/** This is the root mutation which holds all possible WRITE entrypoints for the GraphQL API */
export type RootMutationDeleteUserArgs = {
  user?: InputMaybe<UserInputTypeDelet>;
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


/** This is the root mutation which holds all possible WRITE entrypoints for the GraphQL API */
export type RootMutationUpdateUserArgs = {
  user?: InputMaybe<UserInputTypeUpdat>;
};

/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQuery = {
  __typename?: 'rootQuery';
  tokenForgotPassword?: Maybe<TokenForgotPassword>;
  user?: Maybe<Array<Maybe<User>>>;
};


/** This is the root query which holds all possible READ entrypoints for the GraphQL API */
export type RootQueryTokenForgotPasswordArgs = {
  user?: InputMaybe<UserInputCheckToken>;
};

export type BasicAuthUserFragment = { __typename?: 'User', id?: string | null, fullName?: string | null, nickName?: string | null };

export type LoginMutationVariables = Exact<{
  user: UserInputTypeLogi;
}>;


export type LoginMutation = { __typename?: 'rootMutation', login?: { __typename?: 'User', id?: string | null, fullName?: string | null, nickName?: string | null } | null };

export type RegisterMutationVariables = Exact<{
  user?: InputMaybe<UserInputTypeRegiste>;
}>;


export type RegisterMutation = { __typename?: 'rootMutation', register?: { __typename?: 'User', id?: string | null, email?: string | null, token?: string | null } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'rootQuery', user?: Array<{ __typename?: 'User', id?: string | null, fullName?: string | null, nickName?: string | null } | null> | null };

export const BasicAuthUserFragmentDoc = `
    fragment BasicAuthUser on User {
  id
  fullName
  nickName
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
export const MeDocument = `
    query Me {
  user {
    ...BasicAuthUser
  }
}
    ${BasicAuthUserFragmentDoc}`;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    Login: build.mutation<LoginMutation, LoginMutationVariables>({
      query: (variables) => ({ document: LoginDocument, variables })
    }),
    Register: build.mutation<RegisterMutation, RegisterMutationVariables | void>({
      query: (variables) => ({ document: RegisterDocument, variables })
    }),
    Me: build.query<MeQuery, MeQueryVariables | void>({
      query: (variables) => ({ document: MeDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useLoginMutation, useRegisterMutation, useMeQuery, useLazyMeQuery } = injectedRtkApi;

