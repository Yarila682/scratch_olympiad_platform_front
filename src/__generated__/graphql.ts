/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Timestamp: { input: any; output: any; }
};

export type ApplicationHttp = {
  __typename?: 'ApplicationHttp';
  algorithmicTaskFile: Scalars['String']['output'];
  algorithmicTaskLink: Scalars['String']['output'];
  authorId: Scalars['ID']['output'];
  createdAt: Scalars['Timestamp']['output'];
  creativeTaskFile: Scalars['String']['output'];
  creativeTaskLink: Scalars['String']['output'];
  engineeringTaskCloudLink: Scalars['String']['output'];
  engineeringTaskFile: Scalars['String']['output'];
  engineeringTaskVideo: Scalars['String']['output'];
  engineeringTaskVideoCloudLink: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  nomination: Scalars['String']['output'];
  note: Scalars['String']['output'];
  updatedAt: Scalars['Timestamp']['output'];
};

export type ApplicationHttpList = {
  __typename?: 'ApplicationHttpList';
  applications: Array<ApplicationHttp>;
  countRows: Scalars['Int']['output'];
};

export type CountryHttp = {
  __typename?: 'CountryHttp';
  createdAt: Scalars['Timestamp']['output'];
  hasRegions: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['Timestamp']['output'];
};

export type CountryHttpList = {
  __typename?: 'CountryHttpList';
  countRows: Scalars['Int']['output'];
  countries: Array<CountryHttp>;
};

export type EventDetailsHttp = {
  __typename?: 'EventDetailsHttp';
  createdAt: Scalars['Timestamp']['output'];
  description: Scalars['String']['output'];
  endDate: Scalars['Timestamp']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  startDate: Scalars['Timestamp']['output'];
  updatedAt: Scalars['Timestamp']['output'];
};

export type EventHttp = {
  __typename?: 'EventHttp';
  createdAt: Scalars['Timestamp']['output'];
  endDate: Scalars['Timestamp']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  startDate: Scalars['Timestamp']['output'];
  updatedAt: Scalars['Timestamp']['output'];
};

export type EventHttpList = {
  __typename?: 'EventHttpList';
  countRows: Scalars['Int']['output'];
  events: Array<EventHttp>;
};

export enum EventRole {
  Expert = 'Expert',
  Moderator = 'Moderator',
  Organizer = 'Organizer'
}

export type Mutation = {
  __typename?: 'Mutation';
  ConfirmActivation: SignInResponse;
  CreateApplication: ApplicationHttp;
  CreateEvent: EventDetailsHttp;
  CreateUser: UserHttp;
  DeleteUser: Response;
  ExportAllApplications: Response;
  ForgotPassword: Response;
  RefreshToken: SignInResponse;
  ResetPassword: Response;
  SetActivationByLink: Response;
  SetUserIsActive: Response;
  SignIn: SignInResponse;
  SignUp: Response;
  UpdateEvent: EventDetailsHttp;
  UpdateUser: UserHttp;
};


export type MutationConfirmActivationArgs = {
  activationToken: Scalars['String']['input'];
};


export type MutationCreateApplicationArgs = {
  input: NewApplication;
};


export type MutationCreateEventArgs = {
  input: NewEvent;
};


export type MutationCreateUserArgs = {
  input: NewUser;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationResetPasswordArgs = {
  resetToken: Scalars['String']['input'];
};


export type MutationSetActivationByLinkArgs = {
  activationByLink: Scalars['Boolean']['input'];
};


export type MutationSetUserIsActiveArgs = {
  id: Scalars['ID']['input'];
  isActive: Scalars['Boolean']['input'];
};


export type MutationSignInArgs = {
  input: SignIn;
};


export type MutationSignUpArgs = {
  input: SignUp;
};


export type MutationUpdateEventArgs = {
  input: UpdateEvent;
};


export type MutationUpdateUserArgs = {
  input: UpdateUser;
};

export type NewApplication = {
  algorithmicTaskFile?: InputMaybe<Scalars['String']['input']>;
  algorithmicTaskLink?: InputMaybe<Scalars['String']['input']>;
  creativeTaskFile?: InputMaybe<Scalars['String']['input']>;
  creativeTaskLink?: InputMaybe<Scalars['String']['input']>;
  engineeringTaskCloudLink?: InputMaybe<Scalars['String']['input']>;
  engineeringTaskFile?: InputMaybe<Scalars['String']['input']>;
  engineeringTaskVideo?: InputMaybe<Scalars['String']['input']>;
  engineeringTaskVideoCloudLink?: InputMaybe<Scalars['String']['input']>;
  nomination: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
};

export type NewEvent = {
  description: Scalars['String']['input'];
  endDate: Scalars['Timestamp']['input'];
  name: Scalars['String']['input'];
  startDate: Scalars['Timestamp']['input'];
};

export type NewUser = {
  birthdate: Scalars['Timestamp']['input'];
  city: Scalars['String']['input'];
  countryId: Scalars['ID']['input'];
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  fullNameNative: Scalars['String']['input'];
  password: Scalars['String']['input'];
  regionId?: InputMaybe<Scalars['ID']['input']>;
  role: Role;
};

export type NewUserResponse = {
  __typename?: 'NewUserResponse';
  birthdate: Scalars['Timestamp']['output'];
  city: Scalars['String']['output'];
  countryId: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  fullNameNative: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  regionId?: Maybe<Scalars['ID']['output']>;
  role: Scalars['Int']['output'];
};

export type NominationHttp = {
  __typename?: 'NominationHttp';
  createdAt: Scalars['Timestamp']['output'];
  id: Scalars['ID']['output'];
  maxAge: Scalars['Int']['output'];
  minAge: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['Timestamp']['output'];
};

export type NominationHttpList = {
  __typename?: 'NominationHttpList';
  countRows: Scalars['Int']['output'];
  nominations: Array<NominationHttp>;
};

export type Query = {
  __typename?: 'Query';
  GetAllApplications: ApplicationHttpList;
  GetAllCountries: CountryHttpList;
  GetAllEvents: EventHttpList;
  GetAllNominations: NominationHttpList;
  GetAllUsers: UsersList;
  GetApplicationById: ApplicationHttp;
  GetEventById: EventDetailsHttp;
  GetRegionsByCountryId: RegionHttpList;
  GetSettings: Settings;
  GetUserByAccessToken: UserHttp;
  GetUserById: UserHttp;
  Me: UserHttp;
};


export type QueryGetAllApplicationsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAllCountriesArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAllEventsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAllNominationsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAllUsersArgs = {
  active: Scalars['Boolean']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  roles: Array<Role>;
};


export type QueryGetApplicationByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetEventByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetRegionsByCountryIdArgs = {
  countryId: Scalars['ID']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUserByIdArgs = {
  id: Scalars['ID']['input'];
};

export type RegionHttp = {
  __typename?: 'RegionHttp';
  countryId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type RegionHttpList = {
  __typename?: 'RegionHttpList';
  countRows: Scalars['Int']['output'];
  regions: Array<RegionHttp>;
};

export type Response = {
  __typename?: 'Response';
  ok: Scalars['Boolean']['output'];
};

export enum Role {
  Admin = 'Admin',
  Anonymous = 'Anonymous',
  SuperAdmin = 'SuperAdmin',
  User = 'User'
}

export type Settings = {
  __typename?: 'Settings';
  activationByLink: Scalars['Boolean']['output'];
};

export type SignIn = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SignInResponse = {
  __typename?: 'SignInResponse';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type SignUp = {
  birthdate: Scalars['Timestamp']['input'];
  city: Scalars['String']['input'];
  countryId: Scalars['ID']['input'];
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  fullNameNative: Scalars['String']['input'];
  password: Scalars['String']['input'];
  regionId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateEvent = {
  description: Scalars['String']['input'];
  endDate: Scalars['Timestamp']['input'];
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  startDate: Scalars['Timestamp']['input'];
};

export type UpdateUser = {
  birthdate: Scalars['Timestamp']['input'];
  city: Scalars['String']['input'];
  countryId: Scalars['ID']['input'];
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  fullNameNative: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  regionId?: InputMaybe<Scalars['ID']['input']>;
};

export type UserHttp = {
  __typename?: 'UserHttp';
  birthdate: Scalars['Timestamp']['output'];
  city: Scalars['String']['output'];
  country: CountryHttp;
  createdAt: Scalars['Timestamp']['output'];
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  fullNameNative: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  password: Scalars['String']['output'];
  region?: Maybe<RegionHttp>;
  role: Role;
  updatedAt: Scalars['Timestamp']['output'];
};

export type UsersList = {
  __typename?: 'UsersList';
  countRows: Scalars['Int']['output'];
  users: Array<UserHttp>;
};

export type RefreshTokenMutationVariables = Exact<{
  refreshToken: Scalars['String']['input'];
}>;


export type RefreshTokenMutation = { __typename?: 'Mutation', RefreshToken: { __typename?: 'SignInResponse', accessToken: string } };

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUser;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', UpdateUser: { __typename?: 'UserHttp', id: string, email: string, fullName: string, fullNameNative: string } };

export type SignInMutationVariables = Exact<{
  input: SignIn;
}>;


export type SignInMutation = { __typename?: 'Mutation', SignIn: { __typename?: 'SignInResponse', accessToken: string, refreshToken: string } };

export type SignUpMutationVariables = Exact<{
  input: SignUp;
}>;


export type SignUpMutation = { __typename?: 'Mutation', SignUp: { __typename?: 'Response', ok: boolean } };

export type CreateUserMutationVariables = Exact<{
  input: NewUser;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', CreateUser: { __typename?: 'UserHttp', id: string, email: string, fullName: string, fullNameNative: string } };

export type SetUserIsActiveMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  isActive: Scalars['Boolean']['input'];
}>;


export type SetUserIsActiveMutation = { __typename?: 'Mutation', SetUserIsActive: { __typename?: 'Response', ok: boolean } };

export type ConfirmActivationMutationVariables = Exact<{
  activationToken: Scalars['String']['input'];
}>;


export type ConfirmActivationMutation = { __typename?: 'Mutation', ConfirmActivation: { __typename?: 'SignInResponse', accessToken: string, refreshToken: string } };

export type ResetPasswordMutationVariables = Exact<{
  resetToken: Scalars['String']['input'];
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', ResetPassword: { __typename?: 'Response', ok: boolean } };

export type SetActivationByLinkMutationVariables = Exact<{
  activationByLink: Scalars['Boolean']['input'];
}>;


export type SetActivationByLinkMutation = { __typename?: 'Mutation', SetActivationByLink: { __typename?: 'Response', ok: boolean } };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', DeleteUser: { __typename?: 'Response', ok: boolean } };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', ForgotPassword: { __typename?: 'Response', ok: boolean } };

export type CreateApplicationMutationVariables = Exact<{
  input: NewApplication;
}>;


export type CreateApplicationMutation = { __typename?: 'Mutation', CreateApplication: { __typename?: 'ApplicationHttp', id: string, nomination: string } };

export type ExportAllApplicationsMutationVariables = Exact<{ [key: string]: never; }>;


export type ExportAllApplicationsMutation = { __typename?: 'Mutation', ExportAllApplications: { __typename?: 'Response', ok: boolean } };

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetUserByIdQuery = { __typename?: 'Query', GetUserById: { __typename?: 'UserHttp', id: string, email: string, fullName: string, fullNameNative: string, city: string, birthdate: any, createdAt: any, role: Role, updatedAt: any, isActive: boolean, country: { __typename?: 'CountryHttp', id: string, name: string, hasRegions: boolean } } };

export type GetAllUsersQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  active: Scalars['Boolean']['input'];
  roles: Array<Role> | Role;
}>;


export type GetAllUsersQuery = { __typename?: 'Query', GetAllUsers: { __typename?: 'UsersList', countRows: number, users: Array<{ __typename?: 'UserHttp', id: string, email: string, fullName: string, fullNameNative: string }> } };

export type GetAllApplicationsQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetAllApplicationsQuery = { __typename?: 'Query', GetAllApplications: { __typename?: 'ApplicationHttpList', countRows: number, applications: Array<{ __typename?: 'ApplicationHttp', authorId: string, nomination: string, id: string }> } };

export type GetApplicationByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetApplicationByIdQuery = { __typename?: 'Query', GetApplicationById: { __typename?: 'ApplicationHttp', id: string, authorId: string, createdAt: any, updatedAt: any, nomination: string, algorithmicTaskLink: string, algorithmicTaskFile: string, creativeTaskLink: string, creativeTaskFile: string, engineeringTaskFile: string, engineeringTaskCloudLink: string, engineeringTaskVideo: string, engineeringTaskVideoCloudLink: string, note: string } };

export type GetAllCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCountriesQuery = { __typename?: 'Query', GetAllCountries: { __typename?: 'CountryHttpList', countRows: number, countries: Array<{ __typename?: 'CountryHttp', id: string, name: string }> } };

export type GetAllNominationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllNominationsQuery = { __typename?: 'Query', GetAllNominations: { __typename?: 'NominationHttpList', countRows: number, nominations: Array<{ __typename?: 'NominationHttp', name: string }> } };


export const RefreshTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RefreshToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"RefreshToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"refreshToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SignInResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]}}]} as unknown as DocumentNode<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateUser"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UpdateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserHttp"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"fullNameNative"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const SignInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignIn"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SignIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SignInResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]}}]} as unknown as DocumentNode<SignInMutation, SignInMutationVariables>;
export const SignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignUp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SignUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Response"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}}]}}]}}]}}]} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NewUser"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CreateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserHttp"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"fullNameNative"}}]}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const SetUserIsActiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetUserIsActive"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isActive"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SetUserIsActive"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"isActive"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isActive"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}}]}}]}}]} as unknown as DocumentNode<SetUserIsActiveMutation, SetUserIsActiveMutationVariables>;
export const ConfirmActivationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ConfirmActivation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"activationToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ConfirmActivation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"activationToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"activationToken"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SignInResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]}}]} as unknown as DocumentNode<ConfirmActivationMutation, ConfirmActivationMutationVariables>;
export const ResetPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"resetToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ResetPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"resetToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"resetToken"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}}]}}]}}]} as unknown as DocumentNode<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const SetActivationByLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetActivationByLink"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"activationByLink"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SetActivationByLink"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"activationByLink"},"value":{"kind":"Variable","name":{"kind":"Name","value":"activationByLink"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}}]}}]}}]} as unknown as DocumentNode<SetActivationByLinkMutation, SetActivationByLinkMutationVariables>;
export const DeleteUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}}]}}]}}]} as unknown as DocumentNode<DeleteUserMutation, DeleteUserMutationVariables>;
export const ForgotPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ForgotPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ForgotPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}}]}}]}}]} as unknown as DocumentNode<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const CreateApplicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateApplication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NewApplication"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CreateApplication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ApplicationHttp"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nomination"}}]}}]}}]}}]} as unknown as DocumentNode<CreateApplicationMutation, CreateApplicationMutationVariables>;
export const ExportAllApplicationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ExportAllApplications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ExportAllApplications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}}]}}]}}]} as unknown as DocumentNode<ExportAllApplicationsMutation, ExportAllApplicationsMutationVariables>;
export const GetUserByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetUserById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserHttp"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"fullNameNative"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"country"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"hasRegions"}}]}},{"kind":"Field","name":{"kind":"Name","value":"birthdate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const GetAllUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"active"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roles"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Role"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetAllUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"active"},"value":{"kind":"Variable","name":{"kind":"Name","value":"active"}}},{"kind":"Argument","name":{"kind":"Name","value":"roles"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roles"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"fullNameNative"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countRows"}}]}}]}}]} as unknown as DocumentNode<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const GetAllApplicationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllApplications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetAllApplications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"applications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"nomination"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countRows"}}]}}]}}]} as unknown as DocumentNode<GetAllApplicationsQuery, GetAllApplicationsQueryVariables>;
export const GetApplicationByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetApplicationById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetApplicationById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"nomination"}},{"kind":"Field","name":{"kind":"Name","value":"algorithmicTaskLink"}},{"kind":"Field","name":{"kind":"Name","value":"algorithmicTaskFile"}},{"kind":"Field","name":{"kind":"Name","value":"creativeTaskLink"}},{"kind":"Field","name":{"kind":"Name","value":"creativeTaskFile"}},{"kind":"Field","name":{"kind":"Name","value":"engineeringTaskFile"}},{"kind":"Field","name":{"kind":"Name","value":"engineeringTaskCloudLink"}},{"kind":"Field","name":{"kind":"Name","value":"engineeringTaskVideo"}},{"kind":"Field","name":{"kind":"Name","value":"engineeringTaskVideoCloudLink"}},{"kind":"Field","name":{"kind":"Name","value":"note"}}]}}]}}]} as unknown as DocumentNode<GetApplicationByIdQuery, GetApplicationByIdQueryVariables>;
export const GetAllCountriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllCountries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetAllCountries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countRows"}}]}}]}}]} as unknown as DocumentNode<GetAllCountriesQuery, GetAllCountriesQueryVariables>;
export const GetAllNominationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllNominations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetAllNominations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nominations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countRows"}}]}}]}}]} as unknown as DocumentNode<GetAllNominationsQuery, GetAllNominationsQueryVariables>;