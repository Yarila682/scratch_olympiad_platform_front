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

export const CONFIRM_ACTIVATION = gql`
    mutation ConfirmActivation($activationToken: String!){
        ConfirmActivation(activationToken: $activationToken) {
            ... on SignInResponse {
                accessToken
                refreshToken
            }
        }
    }
`;

export const RESET_PASSWORD = gql`
    mutation ResetPassword($resetToken: String!){
        ResetPassword(resetToken: $resetToken) {
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

export const DELETE_USER = gql`
    mutation DeleteUser($id: ID!){
        DeleteUser(id: $id) {
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