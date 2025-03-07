import { List, Typography, notification } from "antd";
import { useNavigate } from "react-router-dom";

import ListItem from "@/components/ListItem";
import { EventHttp, EventHttpList } from "@/__generated__/graphql";
import { WithPaginationProps } from "@/hocs";
import { useMutation } from "@apollo/client";
import { GET_ALL_APPLICATIONS } from "@/graphql/query";
import { handlingGraphqlErrors } from "@/utils";

const { Text, Title } = Typography;

type EventsListProps = WithPaginationProps & {
    loading: boolean;
    data?: EventHttpList;
    removal: boolean;
}

function EventsList({
    onChangePage,
    page,
    pageSize,
    loading,
    data,
    removal,
}: EventsListProps) {
    const navigate = useNavigate();
    const openEventPage = (id: number): void => {
        navigate(`/event/${id}`)
        return
    };
    const applicationLabel = (event: EventHttp) => {
        return (
            <>
                <Title level={5}>Event ID:</Title>{event.id}
                <Title level={5}>Event name:</Title>{event.name}
             
            </>
        )
    }
    return (
        <List
            className='applications'
            loading={loading}
            bordered
            size='large'
            dataSource={data?.events}
            pagination={{
                onChange: onChangePage,
                total: data?.countRows,
                current: +page,
                defaultCurrent: 1,
                defaultPageSize: pageSize,
                responsive: true,
            }}
            itemLayout='vertical'
            renderItem={(event, index) => (
                <ListItem
                    index={index}
                    renderLabel={() => applicationLabel(event)}
                    handleClick={() => openEventPage(Number(event.id))}
                    handleDelete={() => (console.log())}
                />
            )}
        />
    );
}

export default EventsList;