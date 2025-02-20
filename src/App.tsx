import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { ApolloProvider } from '@apollo/client';

import PageLayout from '@/modules/PageLayout';
import CookieConsent from './components/CookieConsent';
import LoginPage from '@/pages/Login';
import LogoutPage from '@/pages/Logout';
import ProfilePage from '@/pages/Profile';
import ProjectsPage from '@/pages/Projects';
import StudentsPage from '@/pages/Students';
import SettingsPage from '@/pages/Settings';
import ProjectPage from '@/pages/ProjectPage';
import ApplicationPage from './pages/ApplicationPage';
import ActivationPage from '@/pages/Activation';
import ResetPage from '@/pages/Reset'
import ApplicationsPage from './pages/Applications';
import ApplicationCreationPage from './pages/ApplicationCreation';
import UserAgreementPage from './pages/UserAgreement';
import PersonalDataProcessingPage from './pages/PersonalDataProcessing';
import HomePage from './pages/HomePage';
import {
    MAIN_PAGE_ROUTE,
    ACTIVATION_PAGE_ROUTE,
    RESET_PASSWORD_PAGE_ROUTE,
    APP_SETTINGS_PAGE_ROUTE,
    LOGIN_PAGE_ROUTE,
    LOGOUT_PAGE_ROUTE,
    PROFILE_PAGE_ROUTE,
    PROJECTS_PAGE_ROUTE,
    PROJECT_PAGE_ROUTE,
    STUDENTS_PAGE_ROUTE,
    APPLICATIONS_PAGE_ROUTE,
    APPLICATION_CREATION_PAGE_ROUTE,
    USER_AGREEMENT_PAGE_ROUTE,
    PERSONAL_DATA_PROCESSING_ROUTE,
    APPLICATION_PAGE_ROUTE,
} from '@/consts';
import { darkThemeConfig, defaultThemeConfig } from '@/themeConfig';
import { useAppSelector } from '@/store';
import { Roles, Themes } from '@/models';
import { graphqlClient } from '@/graphql/client';
import ProtectedRoute from '@/hocs/ProtectedRoute';

function App() {
    //console.log(process.env.MODE)
    const { theme } = useAppSelector(state => state.themeReducer);
    return (
        <ApolloProvider client={graphqlClient}>
            <ConfigProvider theme={(theme === Themes.DARK) ? darkThemeConfig : defaultThemeConfig}>
                <BrowserRouter>
                    <PageLayout>
                        <Routes>
                            <Route
                                path={MAIN_PAGE_ROUTE}
                                element={<HomePage />}
                            />
                            <Route
                                path={LOGIN_PAGE_ROUTE}
                                element={<LoginPage />}
                            />
                            <Route
                                path={LOGOUT_PAGE_ROUTE}
                                element={<LogoutPage />}
                            />

                            <Route
                                path={PROFILE_PAGE_ROUTE}
                                element={
                                    <ProtectedRoute allowedRoles={[Roles.SuperAdmin, Roles.User]}>
                                        <ProfilePage />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path={PROJECTS_PAGE_ROUTE}
                                element={
                                    <ProtectedRoute allowedRoles={[Roles.SuperAdmin, Roles.User]}>
                                        <ProjectsPage />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path={APPLICATIONS_PAGE_ROUTE}
                                element={
                                    <ProtectedRoute allowedRoles={[Roles.SuperAdmin, Roles.User]}>
                                        <ApplicationsPage />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path={STUDENTS_PAGE_ROUTE}
                                element={
                                    <ProtectedRoute allowedRoles={[Roles.SuperAdmin]}>
                                        <StudentsPage />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path={APP_SETTINGS_PAGE_ROUTE}
                                element={
                                    <ProtectedRoute allowedRoles={[Roles.SuperAdmin]}>
                                        <SettingsPage />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path={PROJECT_PAGE_ROUTE}
                                element={
                                    <ProtectedRoute allowedRoles={[Roles.SuperAdmin, Roles.User]}>
                                        <ProjectPage />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path={APPLICATION_PAGE_ROUTE}
                                element={
                                    <ProtectedRoute allowedRoles={[Roles.SuperAdmin, Roles.User]}>
                                        <ApplicationPage />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path={ACTIVATION_PAGE_ROUTE}
                                element={<ActivationPage />}
                            />
                            <Route
                                path={RESET_PASSWORD_PAGE_ROUTE}
                                element={<ResetPage />}
                            />
                            <Route
                                path={APPLICATION_CREATION_PAGE_ROUTE}
                                element={
                                    <ProtectedRoute allowedRoles={[Roles.SuperAdmin, Roles.User]}>
                                        <ApplicationCreationPage />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path={USER_AGREEMENT_PAGE_ROUTE}
                                element={<UserAgreementPage />}
                            />
                            <Route
                                path={PERSONAL_DATA_PROCESSING_ROUTE}
                                element={<PersonalDataProcessingPage />}
                            />
                        </Routes>
                    </PageLayout>
                    <CookieConsent />
                </BrowserRouter>
            </ConfigProvider>
        </ApolloProvider >
    );
}

export default App;
