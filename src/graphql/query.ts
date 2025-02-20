import { gql } from "@apollo/client";

export const GET_USER_BY_ID = gql`
    query GetUserById($id: ID!){
        GetUserById(id: $id) {
            ... on UserHttp {
                id
                email
                fullName
                fullNameNative
                city
                country
                birthdate 
                createdAt
                role
                updatedAt
                isActive
            }
        }
    }
`;

export const ME = gql`
    query {
        Me {
            ... on UserHttp {
                id
                email
                fullName
                fullNameNative
                city
                country {
                    id          # Now selecting country ID explicitly
                    name        # Now selecting country name explicitly
                    hasRegions  # Optional: Include if needed
                }
                birthdate 
                createdAt
                role
                updatedAt
                isActive
            }
        }
    }
`;

export const GET_ALL_USERS = gql`
    query GetAllUsers($page: Int, $pageSize: Int, $active: Boolean!, $roles: [Role!]!){
        GetAllUsers(page: $page, pageSize: $pageSize, active: $active, roles: $roles) {
            users {
                id
                email
                fullName
                fullNameNative
            }
            countRows
        }
    }
`;

export const GET_ALL_PROJECT_PAGES_BY_ACCESS_TOKEN = gql`
    query GetAllProjectPagesByAccessToken($page: Int, $pageSize: Int){
        GetAllProjectPagesByAccessToken(page: $page, pageSize: $pageSize) {
            projectPages{
                id
                title
                isShared
                isBanned
            }
            countRows
        }
    }
`;

export const GET_ALL_APPLICATIONS = gql`
    query GetAllApplications($page: Int, $pageSize: Int){
        GetAllApplications(page: $page, pageSize: $pageSize) {
            applications{
                authorId
                nomination
                id
            }
            countRows
        }
    }
`;

export const GET_ALL_PROJECT_PAGES_BY_AUTHOR_ID = gql`
    query GetAllProjectPagesByAuthorId($id: ID!, $page: Int, $pageSize: Int){
        GetAllProjectPagesByAuthorId(id: $id, page: $page, pageSize: $pageSize) {
            projectPages{
                id
                title
                isShared
                isBanned
            }
            countRows
        }
    }
`;

export const GET_PROJECT_PAGE_BY_ID = gql`
    query GetProjectPageById($id: ID!){
        GetProjectPageById(id: $id) {
            id
            authorId
            createdAt
            updatedAt
            projectId
            title
            instruction
            notes
            linkToScratch
            isShared
            isBanned
            projectUpdatedAt
        }
    }
`;

export const GET_APPLICATION_PAGE_BY_ID = gql`
    query GetApplicationById($id: ID!){
        GetApplicationById(id: $id) {
            id
            authorId
            createdAt
            updatedAt
            nomination
            algorithmicTaskLink
            algorithmicTaskFile
            creativeTaskLink
            creativeTaskFile
            engineeringTaskFile
            engineeringTaskCloudLink
            engineeringTaskVideo
            engineeringTaskVideoCloudLink
            note
        }
    }
`;

export const GET_SETTINGS = gql`
    query {
        GetSettings{
            activationByLink
        }
    }
`;

export const GET_COUNTRIES = gql`
  query GetAllCountries {
  GetAllCountries {
    countries {
      id
      name
    }
    countRows
  }
}
`;

export const GET_NOMINATIONS = gql`
  query GetAllNominations {
  GetAllNominations {
    nominations {
      name
    }
    countRows
  }
}
`;