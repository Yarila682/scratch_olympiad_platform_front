import { useNavigate } from 'react-router-dom';

import { ApplicationHttp, ApplicationHttpList } from "@/__generated__/graphql";
import ApplicationsList from "@/components/ApplicationsList";
import { GET_ALL_APPLICATIONS } from "@/graphql/query";
import { EXPORT_ALL_APPLICATIONS } from "@/graphql/mutations";
import { withPaginationUrl } from "@/hocs";
import { handlingGraphqlErrors } from "@/utils";
import { useMutation, useQuery } from "@apollo/client";
import { Button, notification } from "antd";
import { QueryOptions } from "apollo-client";
import { useAppSelector } from '@/store';  
import { Role } from '@/__generated__/graphql';  

function EventsModule() {
    const navigate = useNavigate();

    const { userRole } = useAppSelector(state => state.authReducer);

    const handleClick = () => {
        navigate('/new-event');
    };




    const { loading, data } = useQuery<{ GetAllApplications: ApplicationHttpList }, { page?: number, pageSize?: number }>(
        GET_ALL_APPLICATIONS,
        {
            onError: (error) => {
                handlingGraphqlErrors(error)
            },
        }
    );

    const ApplicationList = withPaginationUrl(ApplicationsList, 10);

    return (
        <>
            <Button
                onClick={handleClick}
                type='primary'
                style={{ marginBottom: '0.5rem' }}
            >
                {'New Event'}
            </Button>
         
            <ApplicationList
                data={data?.GetAllApplications}
                loading={loading}
                removal
            />
        </>
    );
}

export default EventsModule;