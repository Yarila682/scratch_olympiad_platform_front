import { Button, Modal, Tabs } from 'antd';

import StudentsTab from "./StudentsTab";
import { useState } from 'react';
import CreateUser from '@/components/CreateUser';
import { Role } from '@/__generated__/graphql';
import { QueryBaseOptions } from 'apollo-client';
import { GET_ALL_USERS } from '@/graphql/query';

function StudentsList() {
    const [openAddStudent, setOpenAddStudent] = useState(false)
    return (
        <>
            <Button type='primary' onClick={() => setOpenAddStudent(true)}>
                {'Create'}
            </Button>
            <Modal
                title={'Create a student'}
                centered
                open={openAddStudent}
                onCancel={() => setOpenAddStudent(false)}
                footer={[]}
            >
                <CreateUser role={Role.User} refetchQueries={[{
                    query: GET_ALL_USERS,
                    variables: {
                        active: true,
                        roles: [Role.User],
                    }
                } as QueryBaseOptions]}/>
            </Modal>
            <Tabs
                defaultActiveKey='1'
                items={[
                    {
                        label: 'Active',
                        key: '1',
                        children:
                            <StudentsTab isActive={true} />,
                    },
                    {
                        label: 'Not active',
                        key: '2',
                        children:
                            <StudentsTab isActive={false} />,
                    },
                ]}
            />
        </>
    );
}

export default StudentsList;