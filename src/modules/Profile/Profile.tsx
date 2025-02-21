import { UserHttp } from '@/__generated__/graphql';
import { GET_USER_BY_ID, ME } from '@/graphql/query';
import { Col, Row, Skeleton, Space } from 'antd';

import { useLocation } from 'react-router-dom';
import { graphql } from '@apollo/client/react/hoc';
import { useQuery } from '@apollo/client';
import { withPaginationLocal, WithPaginationProps } from '@/hocs';
import AvatarComponent from '@/components/Avatar/Avatar';
import ProfileCard from '@/components/ProfileCard';
import { handlingGraphqlErrors } from '@/utils';

function ProfileModule() {
    const location = useLocation();
    const peekUserId = location?.state?.userId;
    const peekUserRole = location?.state?.userRole;
    const Profile = peekUserId ? (
        graphql<{ id: string }, { GetUserById: UserHttp }>(GET_USER_BY_ID)(({ data }) => (
            data?.loading ? (
                <Skeleton avatar paragraph={{ rows: 8 }} />
            ) : (
                <Row gutter={{ xs: 8, sm: 16, md: 8, lg: 8 }}>
                    <Col xs={23} sm={23} md={23} lg={8} xl={8}>
                        <Space direction='vertical' size={'middle'}>
                            <AvatarComponent />
                            <ProfileCard isEditMode={true} profileData={data?.GetUserById} />
                        </Space>
                    </Col>
                </Row>
            )
        ))
    ) : (
        graphql<object, { Me: UserHttp }>(ME)(({ data }) => (
            data?.loading ? (
                <Skeleton avatar paragraph={{ rows: 4 }} />
            ) : (
                <Row gutter={{ xs: 8, sm: 16, md: 8, lg: 8 }}>
                    <Col xs={23} sm={23} md={23} lg={8} xl={8}>
                        <Space direction='vertical' size={'middle'}>
                            <AvatarComponent />
                            <ProfileCard isEditMode={false} profileData={data?.Me} />
                        </Space>
                    </Col>
                </Row>
            )
        ))
    )
    return (
        <Profile id={peekUserId} />
    )
}

export default ProfileModule;