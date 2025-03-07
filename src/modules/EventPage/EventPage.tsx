import { ApplicationHttp, UserHttp, Role } from "@/__generated__/graphql";
import { handlingGraphqlErrors } from "@/utils";
import { GET_APPLICATION_PAGE_BY_ID, GET_USER_BY_ID } from "@/graphql/query";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { PROFILE_PAGE_ROUTE } from "@/consts";
import { Skeleton } from "antd";
import { Typography } from 'antd';


const { Title, Text } = Typography;


interface EventPageModuleProps {
    id: string;
}

function EventPageModule({ id }: EventPageModuleProps) {

    const getApplication = useQuery<{ GetApplicationById: ApplicationHttp }, { id: string }>(
        GET_APPLICATION_PAGE_BY_ID,
        {
            onError: (error) => {
                handlingGraphqlErrors(error)
            },
            variables: {
                id: id
            }
        }
    );
    const getUser = useQuery<{ GetUserById: UserHttp }, { id: string }>(
        GET_USER_BY_ID,
        {
            onError: (error) => {
                handlingGraphqlErrors(error)
            },
            skip: !getApplication.data?.GetApplicationById.authorId,
            variables: {
                id: getApplication.data?.GetApplicationById.authorId || '0'
            }
        }
    );
    const navigate = useNavigate();
    const openProfileUser = (userId: string, role: Role): void => {
        navigate(PROFILE_PAGE_ROUTE, {
            state: {
                userId,
                userRole: role,
            },
        })
        return
    };

    if (getApplication.loading || getUser.loading) {
        return <Skeleton avatar paragraph={{ rows: 8 }} />;
    }

    const applicationData = getApplication.data?.GetApplicationById;
    const userData = getUser.data?.GetUserById;

    return (
        <div>
            <Title level={3}>Application Data</Title>
            <Text>Nomination: {applicationData?.nomination || 'No Data'}</Text>
            <br/>
            <Text>Author Id: {applicationData?.authorId || 'No Data'}</Text>
            <br/>
            <Text>Algorithmic Task Link: {applicationData?.algorithmicTaskLink || 'No Data'}</Text>
            <br/>
            <Text>Algorithmic Task File: {applicationData?.algorithmicTaskFile || 'No Data'}</Text>
            <br/>
            <Text>Creative Task Link: {applicationData?.creativeTaskLink || 'No Data'}</Text>
            <br/>
            <Text>Creative Task File: {applicationData?.creativeTaskFile || 'No Data'}</Text>
            <br/>
            <Text>Engineering Task Link: {applicationData?.engineeringTaskCloudLink || 'No Data'}</Text>
            <br/>
            <Text>Engineering Task File: {applicationData?.engineeringTaskFile || 'No Data'}</Text>
            <br/>
            <Text>Engineering Task Video: {applicationData?.engineeringTaskVideo || 'No Data'}</Text>
            <br/>
            <Text>Engineering Task Vidoe Link: {applicationData?.engineeringTaskVideoCloudLink || 'No Data'}</Text>
            <br/>
            <Text>Note: {applicationData?.note || 'No Data'}</Text>
            {userData && (
                <div>
                    <Title level={3}>Author: {userData.fullName}</Title>
                    <a onClick={() => openProfileUser(getUser.data?.GetUserById.id || '0', getUser.data?.GetUserById.role || Role.Anonymous)}>View Profile</a>
                </div>
            )}
        </div>
    );
}

export default EventPageModule;