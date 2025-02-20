import { gql } from "@apollo/client";

export const UPDATE_USER = gql`
    mutation UpdateUser($input: UpdateUser!){
        UpdateUser(input: $input) {
            ... on UserHttp {
                id
                email
                fullName
                fullNameNative
            }
        }
    }
`;

export const SIGN_IN = gql`
    mutation SignIn($input: SignIn!){
        SignIn(input: $input) {
            ... on SignInResponse {
                accessToken
                refreshToken
            }
        }
    }
`;

export const SIGN_UP = gql`
    mutation SignUp($input: SignUp!){
        SignUp(input: $input) {
            ... on Response{
                    ok
                }
            }
        }
`;

export const CREATE_USER = gql`
    mutation CreateUser($input: NewUser!){
        CreateUser(input: $input) {
            ... on UserHttp {
                id
                email
                fullName
                fullNameNative
            }
        }
    }
`;

export const SET_USER_IS_ACTIVE = gql`
    mutation SetUserIsActive($id: ID!, $isActive: Boolean!){
        SetUserIsActive(id: $id, isActive: $isActive) {
            ok
        }
    }
`;

export const CREATE_PROJECT_PAGE = gql`
    mutation {
        CreateProjectPage{
            id
            createdAt
            updatedAt
            authorId
            projectId
            projectUpdatedAt
            title
            notes
            linkToScratch
            isShared
        }
    }
`;

export const CONFIRM_ACTIVATION = gql`
    mutation ConfirmActivation($activationLink: String!){
        ConfirmActivation(activationLink: $activationLink) {
            ... on SignInResponse {
                accessToken
                refreshToken
            }
        }
    }
`;

export const RESET_PASSWORD = gql`
    mutation ResetPassword($resetLink: String!){
        ResetPassword(resetLink: $resetLink) {
            ok
        }
    }
`;

export const SET_ACTIVATION_BY_LINK = gql`
    mutation SetActivationByLink($activationByLink: Boolean!){
        SetActivationByLink(activationByLink: $activationByLink) {
            ok
        }
    }
`;

export const UPDATE_PROJECT_PAGE = gql`
    mutation UpdateProjectPage($input: UpdateProjectPage!){
        UpdateProjectPage(input: $input) {
            id
        }
    }
`;

export const DELETE_PROJECT_PAGE = gql`
    mutation DeleteProjectPage($id: ID!){
        DeleteProjectPage(id: $id) {
            ok
        }
    }
`;

export const DELETE_USER = gql`
    mutation DeleteUser($id: ID!){
        DeleteUser(id: $id) {
            ok
        }
    }
`;

export const SET_IS_BANNED = gql`
    mutation SetIsBanned($projectPageId: ID!, $isBanned: Boolean!){
        SetIsBanned(projectPageId: $projectPageId, isBanned: $isBanned) {
            ok
        }
    }
`;

export const FORGOT_PASSWORD = gql`
    mutation ForgotPassword($email: String!) {
        ForgotPassword(email: $email) {
            ok
        }
    }
`;

export const CREATE_APPLICATION = gql`
    mutation CreateApplication($input: NewApplication!){
        CreateApplication(input: $input) {
            ... on ApplicationHttp {
                id
                nomination
            }
        }
    }
`;

export const EXPORT_ALL_APPLICATIONS = gql`
  mutation ExportAllApplications {
    ExportAllApplications {
      ok
    }
  }
`;