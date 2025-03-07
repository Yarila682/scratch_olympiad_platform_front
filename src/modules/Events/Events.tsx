import { useNavigate } from 'react-router-dom';

import { EventDetailsHttp, EventHttpList } from "@/__generated__/graphql";
import EventsList from "@/components/EventsList";
import { GET_ALL_APPLICATIONS, GET_ALL_EVENTS } from "@/graphql/query";
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




    const { loading, data } = useQuery<{ GetAllEvents: EventHttpList }, { page?: number, pageSize?: number }>(
        GET_ALL_EVENTS,
        {
            onError: (error) => {
                handlingGraphqlErrors(error)
            },
        }
    );

    const EventList = withPaginationUrl(EventsList, 10);

    return (
        <>
            <Button
                onClick={handleClick}
                type='primary'
                style={{ marginBottom: '0.5rem' }}
            >
                {'New Event'}
            </Button>
         
            <EventList
                data={data?.GetAllEvents}
                loading={loading}
                removal
            />
        </>
    );
}

export default EventsModule;