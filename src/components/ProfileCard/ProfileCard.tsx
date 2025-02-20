import { useEffect, useState } from 'react';
import { Button, Form, Input, Switch, notification } from 'antd';

import { ProfileFormInputs } from './ProfileCard.types';

import { Role, UpdateUser, UserHttp } from '@/__generated__/graphql';
import { useMutation } from '@apollo/client';
import { SET_USER_IS_ACTIVE, UPDATE_USER } from '@/graphql/mutations';
import { GET_ALL_USERS, GET_USER_BY_ID } from '@/graphql/query';
import { QueryOptions } from 'apollo-client';
import { handlingGraphqlErrors } from '@/utils';
import { useAppSelector } from '@/store';
import { Roles } from '@/models';

interface ProfileCardProps {
    isEditMode: boolean;
    profileData: UserHttp | undefined;
}

function ProfileCard({
    isEditMode,
    profileData,
}: ProfileCardProps) {
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({});
    useEffect(() => {
        forceUpdate({});
    }, []);
    const { userRole } = useAppSelector(state => state.authReducer);
    const [updateUser, { loading }] = useMutation<{ UpdateUser: UserHttp }, { input: UpdateUser }>(
        UPDATE_USER,
        {
            onCompleted: () => {
                notification.success({
                    message: '',
                    description: 'Successfully updated',
                })
            },
            onError: (error) => {
                handlingGraphqlErrors(error)
            },
            refetchQueries: [
                {
                    query: GET_USER_BY_ID,
                    variables: { id: profileData?.id },
                } as QueryOptions<{ id: string }>
            ]
        }
    );
    const [setUserIsActive, setUserIsActiveResult] = useMutation<{ SetUserIsActive: Response }, { id: string, isActive: boolean }>(
        SET_USER_IS_ACTIVE,
        {
            onCompleted: () => {
                notification.success({
                    message: 'Success!',
                    description: 'Activation status updated.',
                })
            },
            onError: (error) => {
                handlingGraphqlErrors(error)
            },
            refetchQueries: [
                {
                    query: GET_USER_BY_ID,
                    variables: { id: profileData?.id },
                } as QueryOptions<{ id: string }>,
                {
                    query: GET_ALL_USERS,
                    variables: {
                        active: true,
                        roles: [Role.User],
                    },
                } as QueryOptions<{ active: boolean, roles: Role[] }>,
                {
                    query: GET_ALL_USERS,
                    variables: {
                        active: false,
                        roles: [Role.User],
                    },
                } as QueryOptions<{ active: boolean, roles: Role[] }>
            ]
        }
    )
    return (
        <div>
            <Form
                name='profile'
                className='profile-form'
                onFinish={(inputs: ProfileFormInputs) => {
                    updateUser({
                        variables: {
                            input: {
                                id: profileData?.id || '0',
                                email: inputs.email,
                                fullName: inputs.fullName,
                                fullNameNative: inputs.fullNameNative,
                                city: inputs.city,
                                country: inputs.country,
                                birthdate: inputs.birthdate,
                            }
                        }
                    })
                }}
                form={form}
                disabled={!isEditMode}
                initialValues={{
                    email: profileData?.email,
                    fullName: profileData?.fullName,
                    fullNameNative: profileData?.fullNameNative,
                    city: profileData?.city,
                    country: profileData?.country,
                    birthdate: profileData?.birthdate,
                }}
            >
                <Form.Item name='email'>
                    <Input placeholder={'email'} size='large' />
                </Form.Item>
                <Form.Item name='fullName'>
                    <Input placeholder={'Full name'} size='large' />
                </Form.Item>
                <Form.Item name='fullNameNative'>
                    <Input placeholder={'Full name in native language'} size='large' />
                </Form.Item>
                <Form.Item name='city'>
                    <Input placeholder={'city'} size='large' />
                </Form.Item>
                <Form.Item name='country'>
                    <Input placeholder={'country'} size='large' />
                </Form.Item>
                <Form.Item name='birthdate'>
                    <Input placeholder={'birthdate'} size='large' />
                </Form.Item>
                {
                    userRole == Roles.SuperAdmin ? (
                        <Form.Item
                            name='active'
                            label={'Active'}
                        >
                            <Switch
                                defaultChecked={profileData?.isActive}
                                loading={setUserIsActiveResult.loading}
                                onChange={() =>
                                    setUserIsActive({
                                        variables: {
                                            id: profileData?.id || '0',
                                            isActive: !profileData?.isActive,
                                        },
                                    })
                                }
                            />
                        </Form.Item>
                    ) : <></>
                }
                {
                    isEditMode &&
                    <Form.Item>
                        <Button
                            loading={loading}
                            type='primary'
                            htmlType='submit'
                            className='profile-form-button'
                        >
                            Save
                        </Button>
                    </Form.Item>
                }
            </Form>
        </div>
    );
}

export default ProfileCard;