import { EventHttp, UserHttp, Role , EventDetailsHttp} from "@/__generated__/graphql";
import { handlingGraphqlErrors } from "@/utils";
import { GET_EVENT_BY_ID, GET_USER_BY_ID } from "@/graphql/query";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { PROFILE_PAGE_ROUTE } from "@/consts";
import { Skeleton } from "antd";
import { Typography } from 'antd';

import { Modal, Button } from 'antd';
import { useState } from 'react';


const { Title, Text } = Typography;

import EventModalEditableContent from './EventModalEditableContent'


interface EventPageModuleProps {
    id: string;
}

function EventPageModule({ id }: EventPageModuleProps) {

    const [isModalVisibleParent, setIsModalVisible] = useState(false);



    const getEvent = useQuery<{ GetEventById: EventDetailsHttp }, { id: string }>(
        GET_EVENT_BY_ID,
        {
            onError: (error) => {
                handlingGraphqlErrors(error)
            },
            variables: {
                id: id
            }
        }
    );
    // const getUser = useQuery<{ GetUserById: UserHttp }, { id: string }>(
    //     GET_USER_BY_ID,
    //     {
    //         onError: (error) => {
    //             handlingGraphqlErrors(error)
    //         },
    //         skip: !getEvent.data?.GetEventById.authorId,
    //         variables: {
    //             id: getApplication.data?.GetApplicationById.authorId || '0'
    //         }
    //     }
    // );
    const navigate = useNavigate();
    // const openProfileUser = (userId: string, role: Role): void => {
    //     navigate(PROFILE_PAGE_ROUTE, {
    //         state: {
    //             userId,
    //             userRole: role,
    //         },
    //     })
    //     return
    // };

    // if (getEvent.loading || getUser.loading) {
    //     return <Skeleton avatar paragraph={{ rows: 8 }} />;
    // }

     const eventData = getEvent.data?.GetEventById as EventDetailsHttp;
    // const userData = getUser.data?.GetUserById;




    const showModal = () => {
      setIsModalVisible(!isModalVisibleParent);
      console.log("showModal"  + isModalVisibleParent);
    };


    return (
        <div>
            <Title level={3}>Event Data</Title>
            <h1>{eventData?.name}</h1>
            <p>{eventData?.description}</p>
            <p>Start Date: {eventData?.startDate}</p>
            <p>End Date: {eventData?.endDate}</p>
            {/* Add any other necessary fields here */}


            <Button type="primary" onClick={showModal}>
                Edit Event
            </Button>
            <EventModalEditableContent
                event={eventData}
                isVisible={isModalVisibleParent}
              
            />
           
        </div>
    );
}

export default EventPageModule;