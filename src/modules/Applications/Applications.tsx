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

function ApplicationsModule() {
    const navigate = useNavigate();

    const { userRole } = useAppSelector(state => state.authReducer);

    const handleClick = () => {
        navigate('/new-application');
    };

    const [exportAllApplications, { loading: exportLoading }] = useMutation(EXPORT_ALL_APPLICATIONS, {
        onCompleted: (data) => {
            if (data.ExportAllApplications.ok) {
                notification.success({
                    message: 'Success',
                    description: 'All applications exported successfully!',
                });
            }
        },
        onError: (error) => {
            handlingGraphqlErrors(error);
        },
    });

    const handleExportClick = () => {
        exportAllApplications();
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
                {'New Application'}
            </Button>
            {userRole === 'SuperAdmin' && (
                <Button
                    onClick={handleExportClick}
                    type='primary'
                    style={{ marginBottom: '0.5rem' }}
                    loading={exportLoading} 
                >
                    {'Export All Applications'}
                </Button>
            )}
            <ApplicationList
                data={data?.GetAllApplications}
                loading={loading}
                removal
            />
        </>
    );
}

export default ApplicationsModule;