import { SignInResponse } from "@/__generated__/graphql";
import { RESET_PASSWORD } from "@/graphql/mutations";
import { handlingGraphqlErrors } from "@/utils";
import { useMutation } from "@apollo/client";
import { Spin, notification } from "antd";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function ResetPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const query = new URLSearchParams(location.search);
    const resetToken = query.get('resetToken'); 

    const [resetPassword, { loading }] = useMutation<{ ResetPassword: SignInResponse }, { resetLink: string }>(
        RESET_PASSWORD,
        {
            onError: (error) => {
                handlingGraphqlErrors(error);
            },
            onCompleted: ({ ResetPassword }) => {
                notification.success({
                    message: 'Success!',
                    description: 'Password Reset',
                });
                navigate('/login');
            }
        }
    );

    useEffect(() => {
        if (resetToken) {
            resetPassword({
                variables: {
                    resetLink: resetToken 
                }
            });
        }
    }, [resetToken, resetPassword]);

    return (
        <>
            {loading && <Spin size="large" />}
        </>
    );
}

export default ResetPage;