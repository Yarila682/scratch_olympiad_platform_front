import {
    HomeOutlined,
    ProjectOutlined,
    TeamOutlined,
    SettingOutlined,
} from '@ant-design/icons';

import {
    APP_SETTINGS_PAGE_ROUTE,
    MAIN_PAGE_ROUTE, PROJECTS_PAGE_ROUTE, STUDENTS_PAGE_ROUTE, APPLICATIONS_PAGE_ROUTE,EVENTS_PAGE_ROUTE
} from '@/consts';
import { NavMenuItem } from './NavMenu.types';

export const NavMenuItems: NavMenuItem[] = [
    /*{
        key: '1',
        path: MAIN_PAGE_ROUTE,
        label: 'Main Page',
        icon: <HomeOutlined />,
    },*/
];

export const NavMenuItemsStudent: NavMenuItem[] = [
    /*{
        key: '1',
        path: MAIN_PAGE_ROUTE,
        label: 'Home',
        icon: <HomeOutlined />,
    },*/
    /*{
        key: '2',
        path: PROJECTS_PAGE_ROUTE,
        label: 'Projects',
        icon: <ProjectOutlined />
    },*/
    {
        key: '3',
        path: APPLICATIONS_PAGE_ROUTE,
        label: 'Applications',
        icon: <ProjectOutlined />
    },
];

export const NavMenuItemsSuperAdmin: NavMenuItem[] = [
    /*{
        key: '1',
        path: MAIN_PAGE_ROUTE,
        label: 'Main Page',
        icon: <HomeOutlined />,
    },*/
    /*{
        key: '2',
        path: PROJECTS_PAGE_ROUTE,
        label: 'Projects',
        icon: <ProjectOutlined />
    },*/
    {
        key: '3',
        path: APPLICATIONS_PAGE_ROUTE,
        label: 'Applications',
        icon: <ProjectOutlined />
    },
    {
        key: '4',
        path: STUDENTS_PAGE_ROUTE,
        label: 'Students',
        icon: <TeamOutlined />
    },
    {
        key: '5',
        path: APP_SETTINGS_PAGE_ROUTE,
        label: 'Settings',
        icon: <SettingOutlined />
    },
    {
        key: '6',
        path: EVENTS_PAGE_ROUTE,
        label: 'Events',
        icon: <SettingOutlined />
    },
];