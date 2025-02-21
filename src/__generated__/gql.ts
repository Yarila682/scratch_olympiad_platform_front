/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n                    mutation RefreshToken($refreshToken: String!) {\n                            RefreshToken(refreshToken: $refreshToken) { \n                                ... on SignInResponse {\n                                accessToken\n                            }\n                        }\n                    }\n                ": types.RefreshTokenDocument,
    "\n    mutation UpdateUser($input: UpdateUser!){\n        UpdateUser(input: $input) {\n            ... on UserHttp {\n                id\n                email\n                fullName\n                fullNameNative\n            }\n        }\n    }\n": types.UpdateUserDocument,
    "\n    mutation SignIn($input: SignIn!){\n        SignIn(input: $input) {\n            ... on SignInResponse {\n                accessToken\n                refreshToken\n            }\n        }\n    }\n": types.SignInDocument,
    "\n    mutation SignUp($input: SignUp!){\n        SignUp(input: $input) {\n            ... on Response{\n                    ok\n                }\n            }\n        }\n": types.SignUpDocument,
    "\n    mutation CreateUser($input: NewUser!){\n        CreateUser(input: $input) {\n            ... on UserHttp {\n                id\n                email\n                fullName\n                fullNameNative\n            }\n        }\n    }\n": types.CreateUserDocument,
    "\n    mutation SetUserIsActive($id: ID!, $isActive: Boolean!){\n        SetUserIsActive(id: $id, isActive: $isActive) {\n            ok\n        }\n    }\n": types.SetUserIsActiveDocument,
    "\n    mutation ConfirmActivation($activationToken: String!){\n        ConfirmActivation(activationToken: $activationToken) {\n            ... on SignInResponse {\n                accessToken\n                refreshToken\n            }\n        }\n    }\n": types.ConfirmActivationDocument,
    "\n    mutation ResetPassword($resetToken: String!){\n        ResetPassword(resetToken: $resetToken) {\n            ok\n        }\n    }\n": types.ResetPasswordDocument,
    "\n    mutation SetActivationByLink($activationByLink: Boolean!){\n        SetActivationByLink(activationByLink: $activationByLink) {\n            ok\n        }\n    }\n": types.SetActivationByLinkDocument,
    "\n    mutation DeleteUser($id: ID!){\n        DeleteUser(id: $id) {\n            ok\n        }\n    }\n": types.DeleteUserDocument,
    "\n    mutation ForgotPassword($email: String!) {\n        ForgotPassword(email: $email) {\n            ok\n        }\n    }\n": types.ForgotPasswordDocument,
    "\n    mutation CreateApplication($input: NewApplication!){\n        CreateApplication(input: $input) {\n            ... on ApplicationHttp {\n                id\n                nomination\n            }\n        }\n    }\n": types.CreateApplicationDocument,
    "\n  mutation ExportAllApplications {\n    ExportAllApplications {\n      ok\n    }\n  }\n": types.ExportAllApplicationsDocument,
    "\n    query GetUserById($id: ID!){\n        GetUserById(id: $id) {\n            ... on UserHttp {\n                id\n                email\n                fullName\n                fullNameNative\n                city\n                country {\n                    id         \n                    name        \n                    hasRegions\n                }\n                birthdate \n                createdAt\n                role\n                updatedAt\n                isActive\n            }\n        }\n    }\n": types.GetUserByIdDocument,
    "\n    query GetAllUsers($page: Int, $pageSize: Int, $active: Boolean!, $roles: [Role!]!){\n        GetAllUsers(page: $page, pageSize: $pageSize, active: $active, roles: $roles) {\n            users {\n                id\n                email\n                fullName\n                fullNameNative\n            }\n            countRows\n        }\n    }\n": types.GetAllUsersDocument,
    "\n    query GetAllApplications($page: Int, $pageSize: Int){\n        GetAllApplications(page: $page, pageSize: $pageSize) {\n            applications{\n                authorId\n                nomination\n                id\n            }\n            countRows\n        }\n    }\n": types.GetAllApplicationsDocument,
    "\n    query GetApplicationById($id: ID!){\n        GetApplicationById(id: $id) {\n            id\n            authorId\n            createdAt\n            updatedAt\n            nomination\n            algorithmicTaskLink\n            algorithmicTaskFile\n            creativeTaskLink\n            creativeTaskFile\n            engineeringTaskFile\n            engineeringTaskCloudLink\n            engineeringTaskVideo\n            engineeringTaskVideoCloudLink\n            note\n        }\n    }\n": types.GetApplicationByIdDocument,
    "\n  query GetAllCountries {\n  GetAllCountries {\n    countries {\n      id\n      name\n    }\n    countRows\n  }\n}\n": types.GetAllCountriesDocument,
    "\n  query GetAllNominations {\n  GetAllNominations {\n    nominations {\n      name\n    }\n    countRows\n  }\n}\n": types.GetAllNominationsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n                    mutation RefreshToken($refreshToken: String!) {\n                            RefreshToken(refreshToken: $refreshToken) { \n                                ... on SignInResponse {\n                                accessToken\n                            }\n                        }\n                    }\n                "): (typeof documents)["\n                    mutation RefreshToken($refreshToken: String!) {\n                            RefreshToken(refreshToken: $refreshToken) { \n                                ... on SignInResponse {\n                                accessToken\n                            }\n                        }\n                    }\n                "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UpdateUser($input: UpdateUser!){\n        UpdateUser(input: $input) {\n            ... on UserHttp {\n                id\n                email\n                fullName\n                fullNameNative\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateUser($input: UpdateUser!){\n        UpdateUser(input: $input) {\n            ... on UserHttp {\n                id\n                email\n                fullName\n                fullNameNative\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation SignIn($input: SignIn!){\n        SignIn(input: $input) {\n            ... on SignInResponse {\n                accessToken\n                refreshToken\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation SignIn($input: SignIn!){\n        SignIn(input: $input) {\n            ... on SignInResponse {\n                accessToken\n                refreshToken\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation SignUp($input: SignUp!){\n        SignUp(input: $input) {\n            ... on Response{\n                    ok\n                }\n            }\n        }\n"): (typeof documents)["\n    mutation SignUp($input: SignUp!){\n        SignUp(input: $input) {\n            ... on Response{\n                    ok\n                }\n            }\n        }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreateUser($input: NewUser!){\n        CreateUser(input: $input) {\n            ... on UserHttp {\n                id\n                email\n                fullName\n                fullNameNative\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation CreateUser($input: NewUser!){\n        CreateUser(input: $input) {\n            ... on UserHttp {\n                id\n                email\n                fullName\n                fullNameNative\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation SetUserIsActive($id: ID!, $isActive: Boolean!){\n        SetUserIsActive(id: $id, isActive: $isActive) {\n            ok\n        }\n    }\n"): (typeof documents)["\n    mutation SetUserIsActive($id: ID!, $isActive: Boolean!){\n        SetUserIsActive(id: $id, isActive: $isActive) {\n            ok\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation ConfirmActivation($activationToken: String!){\n        ConfirmActivation(activationToken: $activationToken) {\n            ... on SignInResponse {\n                accessToken\n                refreshToken\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation ConfirmActivation($activationToken: String!){\n        ConfirmActivation(activationToken: $activationToken) {\n            ... on SignInResponse {\n                accessToken\n                refreshToken\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation ResetPassword($resetToken: String!){\n        ResetPassword(resetToken: $resetToken) {\n            ok\n        }\n    }\n"): (typeof documents)["\n    mutation ResetPassword($resetToken: String!){\n        ResetPassword(resetToken: $resetToken) {\n            ok\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation SetActivationByLink($activationByLink: Boolean!){\n        SetActivationByLink(activationByLink: $activationByLink) {\n            ok\n        }\n    }\n"): (typeof documents)["\n    mutation SetActivationByLink($activationByLink: Boolean!){\n        SetActivationByLink(activationByLink: $activationByLink) {\n            ok\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation DeleteUser($id: ID!){\n        DeleteUser(id: $id) {\n            ok\n        }\n    }\n"): (typeof documents)["\n    mutation DeleteUser($id: ID!){\n        DeleteUser(id: $id) {\n            ok\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation ForgotPassword($email: String!) {\n        ForgotPassword(email: $email) {\n            ok\n        }\n    }\n"): (typeof documents)["\n    mutation ForgotPassword($email: String!) {\n        ForgotPassword(email: $email) {\n            ok\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreateApplication($input: NewApplication!){\n        CreateApplication(input: $input) {\n            ... on ApplicationHttp {\n                id\n                nomination\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation CreateApplication($input: NewApplication!){\n        CreateApplication(input: $input) {\n            ... on ApplicationHttp {\n                id\n                nomination\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ExportAllApplications {\n    ExportAllApplications {\n      ok\n    }\n  }\n"): (typeof documents)["\n  mutation ExportAllApplications {\n    ExportAllApplications {\n      ok\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetUserById($id: ID!){\n        GetUserById(id: $id) {\n            ... on UserHttp {\n                id\n                email\n                fullName\n                fullNameNative\n                city\n                country {\n                    id         \n                    name        \n                    hasRegions\n                }\n                birthdate \n                createdAt\n                role\n                updatedAt\n                isActive\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetUserById($id: ID!){\n        GetUserById(id: $id) {\n            ... on UserHttp {\n                id\n                email\n                fullName\n                fullNameNative\n                city\n                country {\n                    id         \n                    name        \n                    hasRegions\n                }\n                birthdate \n                createdAt\n                role\n                updatedAt\n                isActive\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetAllUsers($page: Int, $pageSize: Int, $active: Boolean!, $roles: [Role!]!){\n        GetAllUsers(page: $page, pageSize: $pageSize, active: $active, roles: $roles) {\n            users {\n                id\n                email\n                fullName\n                fullNameNative\n            }\n            countRows\n        }\n    }\n"): (typeof documents)["\n    query GetAllUsers($page: Int, $pageSize: Int, $active: Boolean!, $roles: [Role!]!){\n        GetAllUsers(page: $page, pageSize: $pageSize, active: $active, roles: $roles) {\n            users {\n                id\n                email\n                fullName\n                fullNameNative\n            }\n            countRows\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetAllApplications($page: Int, $pageSize: Int){\n        GetAllApplications(page: $page, pageSize: $pageSize) {\n            applications{\n                authorId\n                nomination\n                id\n            }\n            countRows\n        }\n    }\n"): (typeof documents)["\n    query GetAllApplications($page: Int, $pageSize: Int){\n        GetAllApplications(page: $page, pageSize: $pageSize) {\n            applications{\n                authorId\n                nomination\n                id\n            }\n            countRows\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetApplicationById($id: ID!){\n        GetApplicationById(id: $id) {\n            id\n            authorId\n            createdAt\n            updatedAt\n            nomination\n            algorithmicTaskLink\n            algorithmicTaskFile\n            creativeTaskLink\n            creativeTaskFile\n            engineeringTaskFile\n            engineeringTaskCloudLink\n            engineeringTaskVideo\n            engineeringTaskVideoCloudLink\n            note\n        }\n    }\n"): (typeof documents)["\n    query GetApplicationById($id: ID!){\n        GetApplicationById(id: $id) {\n            id\n            authorId\n            createdAt\n            updatedAt\n            nomination\n            algorithmicTaskLink\n            algorithmicTaskFile\n            creativeTaskLink\n            creativeTaskFile\n            engineeringTaskFile\n            engineeringTaskCloudLink\n            engineeringTaskVideo\n            engineeringTaskVideoCloudLink\n            note\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAllCountries {\n  GetAllCountries {\n    countries {\n      id\n      name\n    }\n    countRows\n  }\n}\n"): (typeof documents)["\n  query GetAllCountries {\n  GetAllCountries {\n    countries {\n      id\n      name\n    }\n    countRows\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAllNominations {\n  GetAllNominations {\n    nominations {\n      name\n    }\n    countRows\n  }\n}\n"): (typeof documents)["\n  query GetAllNominations {\n  GetAllNominations {\n    nominations {\n      name\n    }\n    countRows\n  }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;