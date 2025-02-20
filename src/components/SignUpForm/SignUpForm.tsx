import { Button, Form, Input, Checkbox, notification, Select, DatePicker } from 'antd';
import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client'
import { useNavigate } from 'react-router-dom';
    ;
import { SignUpFormInputs } from './SignUpForm.types';

import { Response, SignUp } from '@/__generated__/graphql';
import { SIGN_UP } from '@/graphql/mutations';
import { GET_COUNTRIES } from '@/graphql/query';
import { handlingGraphqlErrors } from '@/utils';
import { MAIN_PAGE_ROUTE } from '@/consts';

const { Option } = Select;

function SignUpForm() {
    const navigate = useNavigate();

    const handleUserAgreementClick = (e: React.MouseEvent) => {
        e.preventDefault();
        navigate('/user-agreement');
    };

    const handleDataProcessingClick = (e: React.MouseEvent) => {
        e.preventDefault();
        navigate('/personal-data-processing');
    };

    const [form] = Form.useForm();

    const { data } = useQuery(GET_COUNTRIES);

    const [signUp, { loading }] = useMutation<{ SignIn: Response }, { input: SignUp }>(
        SIGN_UP,
        {
            onCompleted: () => {
                notification.success({
                    message: 'Success!',
                    description: 'Account activation instruction was sent to your email.',
                });
                navigate(MAIN_PAGE_ROUTE);
            },
            onError: (error) => {
                handlingGraphqlErrors(error)
            },
        }
    );
    const onFinish = (inputs: SignUpFormInputs) => {
        const formattedBirthDate = inputs.birthdate
            ? (inputs.birthdate as Date).toISOString().split('T')[0]
            : '';

        signUp({
            variables: {
                input: {
                    email: inputs.email,
                    password: inputs.password,
                    fullName: inputs.fullName,
                    fullNameNative: inputs.fullNameNative,
                    city: inputs.city,
                    countryId: inputs.countryId,
                    birthdate: formattedBirthDate,
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
                        message: 'Please enter your email!',
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
                        message: 'Please enter your password!',
                    },
                    {
                        min: 8,
                        message: 'Password needs to be at least 8 characters long!',
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
                        message: 'Please repeat your password',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('Passwords need to be the same!'));
                        },
                    }),
                ]}
            >
                <Input.Password
                    placeholder='Repeat password'
                    size='middle'
                />
            </Form.Item>
            <Form.Item
                name='fullName'
                rules={[
                    {
                        required: true,
                        message: 'Please enter your full name in english!',
                    },
                ]}
            >
                <Input
                    placeholder='Full name in English'
                    size='middle'
                />
            </Form.Item>
            <Form.Item
                name='fullNameNative'
            >
                <Input
                    placeholder='Full name in your native language'
                    size='middle'
                />
            </Form.Item>
            <Form.Item
                name="countryId"
                rules={[{ required: true, message: 'Please select your country!' }]}
>
                <Select placeholder="Select your country" size="middle" loading={!data}>
                    {data?.GetAllCountries?.countries?.length ? (
                        data.GetAllCountries.countries.map((country: { id: string; name: string }) => (
                            <Option key={country.id} value={country.id}>
                                {country.name}
                            </Option>
                        ))
                    ) : (
                        <Option disabled>No countries available</Option>
                    )}
                </Select>
            </Form.Item>
            <Form.Item
                name='city'
                rules={[
                    {
                        required: true,
                        message: 'Please enter the name of the city!',
                    },
                ]}
            >
                <Input
                    placeholder='City'
                    size='middle'
                />
            </Form.Item>
            <Form.Item
                name="birthdate"
                rules={[{ required: true, message: 'Please select your date of birth!' }]}
            >
                <DatePicker
                    placeholder="Date of birth"
                    format="YYYY-MM-DD"
                    size="middle"
                />
            </Form.Item>
            <Form.Item
                name='agreement'
                valuePropName='checked'
                rules={[
                    {
                        validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('Please read the terms of the user agreement!')),
                    },
                ]}
            >
                <Checkbox>
                    I have read the <a href="/user-agreement" onClick={handleUserAgreementClick}>user agreement</a> and the <a href="/personal-data-processing" onClick={handleDataProcessingClick}>privacy policy.</a>
                </Checkbox>
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
                            Sign Up
                        </Button>
                    )
                }

            </Form.Item>
        </Form>
    );
}

export default SignUpForm;