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

export type AbsoluteMediaHttp = {
  __typename?: 'AbsoluteMediaHttp';
  id: Scalars['ID']['output'];
  uri: Scalars['String']['output'];
  uri_absolute: Scalars['String']['output'];
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
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['Timestamp']['output'];
};

export type CountryHttpList = {
  __typename?: 'CountryHttpList';
  countRows: Scalars['Int']['output'];
  countries: Array<CountryHttp>;
};

export type CourseApiMediaCollectionHttp = {
  __typename?: 'CourseAPIMediaCollectionHttp';
  banner_image?: Maybe<AbsoluteMediaHttp>;
  course_image?: Maybe<MediaHttp>;
  course_video?: Maybe<MediaHttp>;
  id: Scalars['ID']['output'];
  image?: Maybe<ImageHttp>;
};

export type CourseHttp = {
  __typename?: 'CourseHttp';
  blocks_url: Scalars['String']['output'];
  course_id: Scalars['String']['output'];
  effort: Scalars['String']['output'];
  end: Scalars['Timestamp']['output'];
  enrollment_end: Scalars['Timestamp']['output'];
  enrollment_start: Scalars['Timestamp']['output'];
  hidden: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  invitation_only: Scalars['Boolean']['output'];
  media: CourseApiMediaCollectionHttp;
  mobile_available: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  number: Scalars['String']['output'];
  org: Scalars['String']['output'];
  overview?: Maybe<Scalars['String']['output']>;
  pacing: Scalars['String']['output'];
  short_description: Scalars['String']['output'];
  start: Scalars['Timestamp']['output'];
  start_display: Scalars['String']['output'];
  start_type: Scalars['String']['output'];
};

export type CoursesListHttp = {
  __typename?: 'CoursesListHttp';
  countRows: Scalars['Int']['output'];
  courses: Array<CourseHttp>;
};

export type ImageHttp = {
  __typename?: 'ImageHttp';
  id: Scalars['ID']['output'];
  large: Scalars['String']['output'];
  raw: Scalars['String']['output'];
  small: Scalars['String']['output'];
};

export type MediaHttp = {
  __typename?: 'MediaHttp';
  id: Scalars['ID']['output'];
  uri: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  ConfirmActivation: SignInResponse;
  CreateApplication: ApplicationHttp;
  CreateParentRel: Response;
  CreateProjectPage: ProjectPageHttp;
  CreateUser: UserHttp;
  DeleteParentRel: Response;
  DeleteProjectPage: Response;
  DeleteUser: Response;
  ExportAllApplications: Response;
  ForgotPassword: Response;
  RefreshToken: SignInResponse;
  ResetPassword: Response;
  SetActivationByLink: Response;
  SetIsBanned: Response;
  SetUserIsActive: Response;
  SignIn: SignInResponse;
  SignUp: Response;
  UpdateProjectPage: ProjectPageHttp;
  UpdateUser: UserHttp;
};


export type MutationConfirmActivationArgs = {
  activationLink: Scalars['String']['input'];
};


export type MutationCreateApplicationArgs = {
  input: NewApplication;
};


export type MutationCreateParentRelArgs = {
  childID: Scalars['ID']['input'];
  parentId: Scalars['ID']['input'];
};


export type MutationCreateUserArgs = {
  input: NewUser;
};


export type MutationDeleteParentRelArgs = {
  childID: Scalars['ID']['input'];
  parentId: Scalars['ID']['input'];
};


export type MutationDeleteProjectPageArgs = {
  id: Scalars['ID']['input'];
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
  resetLink: Scalars['String']['input'];
};


export type MutationSetActivationByLinkArgs = {
  activationByLink: Scalars['Boolean']['input'];
};


export type MutationSetIsBannedArgs = {
  isBanned: Scalars['Boolean']['input'];
  projectPageId: Scalars['ID']['input'];
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


export type MutationUpdateProjectPageArgs = {
  input: UpdateProjectPage;
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

export type NewUser = {
  birthdate: Scalars['Timestamp']['input'];
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  fullNameNative: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: Role;
};

export type NewUserResponse = {
  __typename?: 'NewUserResponse';
  birthdate: Scalars['Timestamp']['output'];
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  fullNameNative: Scalars['String']['output'];
  id: Scalars['ID']['output'];
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

export type ProjectPageHttp = {
  __typename?: 'ProjectPageHttp';
  authorId: Scalars['ID']['output'];
  createdAt: Scalars['Timestamp']['output'];
  id: Scalars['ID']['output'];
  instruction: Scalars['String']['output'];
  isBanned: Scalars['Boolean']['output'];
  isShared: Scalars['Boolean']['output'];
  linkToScratch: Scalars['String']['output'];
  notes: Scalars['String']['output'];
  projectId: Scalars['ID']['output'];
  projectUpdatedAt: Scalars['Timestamp']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['Timestamp']['output'];
};

export type ProjectPageHttpList = {
  __typename?: 'ProjectPageHttpList';
  countRows: Scalars['Int']['output'];
  projectPages: Array<ProjectPageHttp>;
};

export type Query = {
  __typename?: 'Query';
  GetAllApplications: ApplicationHttpList;
  GetAllCountries: CountryHttpList;
  GetAllNominations: NominationHttpList;
  GetAllProjectPagesByAccessToken: ProjectPageHttpList;
  GetAllProjectPagesByAuthorId: ProjectPageHttpList;
  GetAllUsers: UsersList;
  GetApplicationById: ApplicationHttp;
  GetChildrenByParent: UsersList;
  GetCourseById: CourseHttp;
  GetCoursesByUser: CoursesListHttp;
  GetParentsByChild: UsersList;
  GetProjectPageById: ProjectPageHttp;
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


export type QueryGetAllNominationsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAllProjectPagesByAccessTokenArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAllProjectPagesByAuthorIdArgs = {
  id: Scalars['ID']['input'];
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


export type QueryGetChildrenByParentArgs = {
  parentId: Scalars['ID']['input'];
};


export type QueryGetCourseByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetParentsByChildArgs = {
  childId: Scalars['ID']['input'];
};


export type QueryGetProjectPageByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['ID']['input'];
};

export type Response = {
  __typename?: 'Response';
  ok: Scalars['Boolean']['output'];
};

export enum Role {
  Anonymous = 'Anonymous',
  Parent = 'Parent',
  Student = 'Student',
  SuperAdmin = 'SuperAdmin',
  Teacher = 'Teacher',
  UnitAdmin = 'UnitAdmin'
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
  country: Scalars['String']['input'];
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  fullNameNative: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UpdateProjectPage = {
  id: Scalars['ID']['input'];
  instruction: Scalars['String']['input'];
  isShared: Scalars['Boolean']['input'];
  notes: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type UpdateUser = {
  birthdate: Scalars['Timestamp']['input'];
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  fullNameNative: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};

export type UserHttp = {
  __typename?: 'UserHttp';
  birthdate: Scalars['Timestamp']['output'];
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  createdAt: Scalars['Timestamp']['output'];
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  fullNameNative: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  password: Scalars['String']['output'];
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
  activationLink: Scalars['String']['input'];
}>;


export type ConfirmActivationMutation = { __typename?: 'Mutation', ConfirmActivation: { __typename?: 'SignInResponse', accessToken: string, refreshToken: string } };

export type ResetPasswordMutationVariables = Exact<{
  resetLink: Scalars['String']['input'];
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', ResetPassword: { __typename?: 'Response', ok: boolean } };

export type SetActivationByLinkMutationVariables = Exact<{
  activationByLink: Scalars['Boolean']['input'];
}>;


export type SetActivationByLinkMutation = { __typename?: 'Mutation', SetActivationByLink: { __typename?: 'Response', ok: boolean } };

export type UpdateProjectPageMutationVariables = Exact<{
  input: UpdateProjectPage;
}>;


export type UpdateProjectPageMutation = { __typename?: 'Mutation', UpdateProjectPage: { __typename?: 'ProjectPageHttp', id: string } };

export type DeleteProjectPageMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteProjectPageMutation = { __typename?: 'Mutation', DeleteProjectPage: { __typename?: 'Response', ok: boolean } };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', DeleteUser: { __typename?: 'Response', ok: boolean } };

export type SetIsBannedMutationVariables = Exact<{
  projectPageId: Scalars['ID']['input'];
  isBanned: Scalars['Boolean']['input'];
}>;


export type SetIsBannedMutation = { __typename?: 'Mutation', SetIsBanned: { __typename?: 'Response', ok: boolean } };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', ForgotPassword: { __typename?: 'Response', ok: boolean } };

export type CreateApplicationMutationVariables = Exact<{
  input: NewApplication;
}>;


export type CreateApplicationMutation = { __typename?: 'Mutation', CreateApplication: { __typename?: 'ApplicationHttp', id: string, nomination: string } };

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetUserByIdQuery = { __typename?: 'Query', GetUserById: { __typename?: 'UserHttp', id: string, email: string, fullName: string, fullNameNative: string, city: string, country: string, birthdate: any, createdAt: any, role: Role, updatedAt: any, isActive: boolean } };

export type GetAllUsersQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  active: Scalars['Boolean']['input'];
  roles: Array<Role> | Role;
}>;


export type GetAllUsersQuery = { __typename?: 'Query', GetAllUsers: { __typename?: 'UsersList', countRows: number, users: Array<{ __typename?: 'UserHttp', id: string, email: string, fullName: string, fullNameNative: string }> } };

export type GetAllProjectPagesByAccessTokenQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetAllProjectPagesByAccessTokenQuery = { __typename?: 'Query', GetAllProjectPagesByAccessToken: { __typename?: 'ProjectPageHttpList', countRows: number, projectPages: Array<{ __typename?: 'ProjectPageHttp', id: string, title: string, isShared: boolean, isBanned: boolean }> } };

export type GetAllApplicationsQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetAllApplicationsQuery = { __typename?: 'Query', GetAllApplications: { __typename?: 'ApplicationHttpList', countRows: number, applications: Array<{ __typename?: 'ApplicationHttp', authorId: string, nomination: string, id: string }> } };

export type GetAllProjectPagesByAuthorIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetAllProjectPagesByAuthorIdQuery = { __typename?: 'Query', GetAllProjectPagesByAuthorId: { __typename?: 'ProjectPageHttpList', countRows: number, projectPages: Array<{ __typename?: 'ProjectPageHttp', id: string, title: string, isShared: boolean, isBanned: boolean }> } };

export type GetProjectPageByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetProjectPageByIdQuery = { __typename?: 'Query', GetProjectPageById: { __typename?: 'ProjectPageHttp', id: string, authorId: string, createdAt: any, updatedAt: any, projectId: string, title: string, instruction: string, notes: string, linkToScratch: string, isShared: boolean, isBanned: boolean, projectUpdatedAt: any } };

export type GetApplicationByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetApplicationByIdQuery = { __typename?: 'Query', GetApplicationById: { __typename?: 'ApplicationHttp', id: string, authorId: string, createdAt: any, updatedAt: any, nomination: string, algorithmicTaskLink: string, algorithmicTaskFile: string, creativeTaskLink: string, creativeTaskFile: string, engineeringTaskFile: string, engineeringTaskCloudLink: string, engineeringTaskVideo: string, engineeringTaskVideoCloudLink: string, note: string } };

export type GetAllCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCountriesQuery = { __typename?: 'Query', GetAllCountries: { __typename?: 'CountryHttpList', countRows: number, countries: Array<{ __typename?: 'CountryHttp', name: string }> } };

export type GetAllNominationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllNominationsQuery = { __typename?: 'Query', GetAllNominations: { __typename?: 'NominationHttpList', countRows: number, nominations: Array<{ __typename?: 'NominationHttp', name: string }> } };


export const RefreshTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RefreshToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"RefreshToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"refreshToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SignInResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]}}]} as unknown as DocumentNode<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateUser"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UpdateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserHttp"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"fullNameNative"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const SignInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignIn"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SignIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SignInResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]}}]} as unknown as DocumentNode<SignInMutation, SignInMutationVariables>;
export const SignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignUp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SignUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Response"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}}]}}]}}]}}]} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NewUser"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CreateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserHttp"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"fullNameNative"}}]}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const SetUserIsActiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetUserIsActive"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isActive"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SetUserIsActive"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"isActive"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isActive"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}}]}}]}}]} as unknown as DocumentNode<SetUserIsActiveMutation, SetUserIsActiveMutationVariables>;
export const ConfirmActivationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ConfirmActivation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"activationLink"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ConfirmActivation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"activationLink"},"value":{"kind":"Variable","name":{"kind":"Name","value":"activationLink"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SignInResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]}}]} as unknown as DocumentNode<ConfirmActivationMutation, ConfirmActivationMutationVariables>;
export const ResetPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"resetLink"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ResetPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"resetLink"},"value":{"kind":"Variable","name":{"kind":"Name","value":"resetLink"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}}]}}]}}]} as unknown as DocumentNode<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const SetActivationByLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetActivationByLink"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"activationByLink"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SetActivationByLink"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"activationByLink"},"value":{"kind":"Variable","name":{"kind":"Name","value":"activationByLink"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}}]}}]}}]} as unknown as DocumentNode<SetActivationByLinkMutation, SetActivationByLinkMutationVariables>;
export const UpdateProjectPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProjectPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProjectPage"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UpdateProjectPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateProjectPageMutation, UpdateProjectPageMutationVariables>;
export const DeleteProjectPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteProjectPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteProjectPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}}]}}]}}]} as unknown as DocumentNode<DeleteProjectPageMutation, DeleteProjectPageMutationVariables>;
export const DeleteUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DeleteUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}}]}}]}}]} as unknown as DocumentNode<DeleteUserMutation, DeleteUserMutationVariables>;
export const SetIsBannedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetIsBanned"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectPageId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isBanned"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SetIsBanned"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectPageId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectPageId"}}},{"kind":"Argument","name":{"kind":"Name","value":"isBanned"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isBanned"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}}]}}]}}]} as unknown as DocumentNode<SetIsBannedMutation, SetIsBannedMutationVariables>;
export const ForgotPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ForgotPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ForgotPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}}]}}]}}]} as unknown as DocumentNode<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const CreateApplicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateApplication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NewApplication"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CreateApplication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ApplicationHttp"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nomination"}}]}}]}}]}}]} as unknown as DocumentNode<CreateApplicationMutation, CreateApplicationMutationVariables>;
export const GetUserByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetUserById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserHttp"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"fullNameNative"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"birthdate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const GetAllUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"active"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roles"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Role"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetAllUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"active"},"value":{"kind":"Variable","name":{"kind":"Name","value":"active"}}},{"kind":"Argument","name":{"kind":"Name","value":"roles"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roles"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"fullNameNative"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countRows"}}]}}]}}]} as unknown as DocumentNode<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const GetAllProjectPagesByAccessTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllProjectPagesByAccessToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetAllProjectPagesByAccessToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectPages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"isShared"}},{"kind":"Field","name":{"kind":"Name","value":"isBanned"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countRows"}}]}}]}}]} as unknown as DocumentNode<GetAllProjectPagesByAccessTokenQuery, GetAllProjectPagesByAccessTokenQueryVariables>;
export const GetAllApplicationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllApplications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetAllApplications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"applications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"nomination"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countRows"}}]}}]}}]} as unknown as DocumentNode<GetAllApplicationsQuery, GetAllApplicationsQueryVariables>;
export const GetAllProjectPagesByAuthorIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllProjectPagesByAuthorId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetAllProjectPagesByAuthorId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectPages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"isShared"}},{"kind":"Field","name":{"kind":"Name","value":"isBanned"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countRows"}}]}}]}}]} as unknown as DocumentNode<GetAllProjectPagesByAuthorIdQuery, GetAllProjectPagesByAuthorIdQueryVariables>;
export const GetProjectPageByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProjectPageById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetProjectPageById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"instruction"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"linkToScratch"}},{"kind":"Field","name":{"kind":"Name","value":"isShared"}},{"kind":"Field","name":{"kind":"Name","value":"isBanned"}},{"kind":"Field","name":{"kind":"Name","value":"projectUpdatedAt"}}]}}]}}]} as unknown as DocumentNode<GetProjectPageByIdQuery, GetProjectPageByIdQueryVariables>;
export const GetApplicationByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetApplicationById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetApplicationById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"nomination"}},{"kind":"Field","name":{"kind":"Name","value":"algorithmicTaskLink"}},{"kind":"Field","name":{"kind":"Name","value":"algorithmicTaskFile"}},{"kind":"Field","name":{"kind":"Name","value":"creativeTaskLink"}},{"kind":"Field","name":{"kind":"Name","value":"creativeTaskFile"}},{"kind":"Field","name":{"kind":"Name","value":"engineeringTaskFile"}},{"kind":"Field","name":{"kind":"Name","value":"engineeringTaskCloudLink"}},{"kind":"Field","name":{"kind":"Name","value":"engineeringTaskVideo"}},{"kind":"Field","name":{"kind":"Name","value":"engineeringTaskVideoCloudLink"}},{"kind":"Field","name":{"kind":"Name","value":"note"}}]}}]}}]} as unknown as DocumentNode<GetApplicationByIdQuery, GetApplicationByIdQueryVariables>;
export const GetAllCountriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllCountries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetAllCountries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countRows"}}]}}]}}]} as unknown as DocumentNode<GetAllCountriesQuery, GetAllCountriesQueryVariables>;
export const GetAllNominationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllNominations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetAllNominations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nominations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countRows"}}]}}]}}]} as unknown as DocumentNode<GetAllNominationsQuery, GetAllNominationsQueryVariables>;