import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { MenuItemType } from 'antd/es/menu/hooks/useItems';

import { NavMenuItems, NavMenuItemsStudent, NavMenuItemsSuperAdmin } from './NavMenuItems';
import styles from './NavMenu.module.scss';
import { NavMenuItem } from './NavMenu.types';

import {
  MAIN_PAGE_ROUTE,
  PROJECTS_PAGE_ROUTE,
  STUDENTS_PAGE_ROUTE,
  APP_SETTINGS_PAGE_ROUTE,
  APPLICATIONS_PAGE_ROUTE
} from '@/consts';
import { Role } from '@/__generated__/graphql';
import { useAppSelector } from '@/store';

function NavMenu() {
  const { userRole } = useAppSelector(state => state.authReducer);
  let menuItems: NavMenuItem[];
  switch (userRole) {
    case Role.SuperAdmin as string:
      menuItems = NavMenuItemsSuperAdmin;
      break;
    case Role.User as string:
      menuItems = NavMenuItemsStudent;
      break;
    default:
      menuItems = NavMenuItems;
  }
  // choice selected item of nav menu
  const { pathname } = useLocation();
  let selectedKeys = '';
  switch (pathname) {
    case MAIN_PAGE_ROUTE:
      selectedKeys = '1';
      break;
    case PROJECTS_PAGE_ROUTE:
      selectedKeys = '2';
      break;
    case APPLICATIONS_PAGE_ROUTE:
      selectedKeys = '3';
      break;
    case STUDENTS_PAGE_ROUTE:
      selectedKeys = '4';
      break;
    case APP_SETTINGS_PAGE_ROUTE:
      selectedKeys = '5';
      break;
    default:
      selectedKeys = '';
  }
  //TODO make global loading
  return (
    <Menu
      mode='inline'
      className={styles.nav_menu}
      defaultSelectedKeys={[selectedKeys]}
      selectedKeys={[selectedKeys]}
      items={menuItems.map((({
        key, path, label, icon,
      }): MenuItemType => (
        {
          key,
          label: <Link to={path}>{label}</Link>,
          icon,
        }
      )))}
    />
  );
}

export default NavMenu;
