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
                country {
                    id         
                    name        
                    hasRegions
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
                    id          
                    name        
                    hasRegions  
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