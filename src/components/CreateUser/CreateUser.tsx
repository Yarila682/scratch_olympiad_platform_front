import { Button, Form, Input, notification } from 'antd';
import { useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';

import { CreateUserFormInputs } from './CreateUser.types';

import { NewUser, Role, UserHttp } from '@/__generated__/graphql';
import { CREATE_USER } from '@/graphql/mutations';
import { QueryOptions } from 'apollo-client';
import { handlingGraphqlErrors } from '@/utils';

interface CreateUserProps {
    role: Role;
    refetchQueries: QueryOptions[];
}

function CreateUser({ role, refetchQueries }: CreateUserProps) {
    const [form] = Form.useForm();
    const [createUser, { loading }] = useMutation<{ CreateUser: UserHttp }, { input: NewUser }>(
        CREATE_USER,
        {
            onCompleted: () => {
                notification.success({
                    message: 'success!',
                    description: 'User created successfully.',
                })
            },
            onError: (error) => {
                handlingGraphqlErrors(error)
            },
            refetchQueries: refetchQueries
        }
    );
    const onFinish = (inputs: CreateUserFormInputs) => {
        createUser({
            variables: {
                input: {
                    email: inputs.email,
                    password: inputs.password,
                    fullName: inputs.fullName,
                    fullNameNative: inputs.fullNameNative,
                    role: role,
                    city: inputs.city,
                    countryId: inputs.country,
                    birthdate: inputs.birthdate,
                }
            }
        })
    };
    const [, forceUpdate] = useState({});
    useEffect(() => {
        forceUpdate({});
    }, []);
    return (
        <Form
            onFinish={onFinish}
            form={form}
        >
            <Form.Item
                name='email'
                rules={[
                    {
                        required: true,
                        message: 'Please enter your email.',
                    },
                ]}
            >
                <Input
                    placeholder='Email'
                    size='middle'
                />
            </Form.Item>
            <Form.Item
                name='password'
                rules={[
                    {
                        required: true,
                        message: 'Please enter your password.',
                    },
                    {
                        min: 8,
                        message: 'Password needs to be at least 8 characters long.',
                    },
                ]}
            >
                <Input.Password
                    placeholder='Password'
                    size='middle'
                />
            </Form.Item>
            <Form.Item
                name='password_repeat'
                rules={[
                    {
                        required: true,
                        message: 'Please repeat your password.',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('Passwords are not the same!'));
                        },
                    }),
                ]}
            >
                <Input.Password
                    placeholder='Password'
                    size='middle'
                />
            </Form.Item>
            <Form.Item
                name='lastname'
                rules={[
                    {
                        required: true,
                        message: 'Please enter your second name!',
                    },
                ]}
            >
                <Input
                    placeholder='Second name'
                    size='middle'
                />
            </Form.Item>
            <Form.Item
                name='firstname'
                rules={[
                    {
                        required: true,
                        message: 'Please enter your first name!',
                    },
                ]}
            >
                <Input
                    placeholder='First name'
                    size='middle'
                />
            </Form.Item>
            <Form.Item
                name='middlename'
                rules={[
                    {
                        required: true,
                        message: 'Please enter your middle name!',
                    },
                ]}
            >
                <Input
                    placeholder='Middle name'
                    size='middle'
                />
            </Form.Item>
            <Form.Item
                name='nickname'
                rules={[
                    {
                        required: true,
                        message: 'Please enter your Nickname!',
                    },
                ]}
            >
                <Input
                    placeholder='Nickname'
                    size='middle'
                />
            </Form.Item>
            <Form.Item shouldUpdate>
                {
                    () => (
                        <Button
                            type='primary'
                            htmlType='submit'
                            loading={loading}
                            disabled={
                                !form.isFieldsTouched(true) ||
                                !!form.getFieldsError().filter(({ errors }) => errors.length).length
                            }
                        >
                            Создать
                        </Button>
                    )
                }

            </Form.Item>
        </Form>
    );
}

export default CreateUser;