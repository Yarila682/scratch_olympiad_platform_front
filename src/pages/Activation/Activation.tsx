import { SignInResponse } from "@/__generated__/graphql";
import { ACCESS_TOKEN, LOGIN_PAGE_ROUTE, PROFILE_PAGE_ROUTE, REFRESH_TOKEN } from "@/consts";
import { CONFIRM_ACTIVATION } from "@/graphql/mutations";
import { handlingGraphqlErrors } from "@/utils";
import { useMutation } from "@apollo/client";
import { Spin, notification } from "antd";
import { useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

function ActivationPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const query = new URLSearchParams(location.search);
    const activationToken = query.get('activationToken')

    const [confirmActivation, { loading }] = useMutation<{ ConfirmActivation: SignInResponse }, { activationToken: string }>(
        CONFIRM_ACTIVATION,
        {
            onError: (error) => {
                handlingGraphqlErrors(error)
            },
            onCompleted: ({ConfirmActivation}) => {
                localStorage.setItem(ACCESS_TOKEN, ConfirmActivation.accessToken);
                localStorage.setItem(REFRESH_TOKEN, ConfirmActivation.refreshToken);
                notification.success({
                    message: 'Success!',
                    description: 'Your account has been activated.',
                })
                navigate(PROFILE_PAGE_ROUTE)
            },
            variables: {
                activationToken: activationToken || ''
            }
        }
    );
    useEffect(() => {
        confirmActivation();
    }, [activationToken, confirmActivation])
    return (
        <>
            {
                loading && <Spin size={'large'} />
            }
        </>
    );
}

export default ActivationPage;