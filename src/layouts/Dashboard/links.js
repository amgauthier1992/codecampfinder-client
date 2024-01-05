import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useCallback } from 'react';

import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PropTypes from 'prop-types';
import styles from './styles';

const TOP_LINKS = [
  {
    title: 'My Courses',
    icon: <LibraryBooksOutlinedIcon sx={styles.MenuLinkIcon} />,
    navigate: '/dashboard',
  },
  {
    title: 'Find Courses',
    icon: <SearchOutlinedIcon sx={styles.MenuLinkIcon} />,
    navigate: '/dashboard/search',
  },
  {
    title: 'Comparison Tool (Coming Soon!)',
    icon: <BalanceOutlinedIcon sx={styles.MenuLinkIcon} />,
    disabled: true,
  },
];

const BOTTOM_LINKS = [
  //   {
  //     title: 'Settings',
  //     icon: <SettingsOutlinedIcon sx={styles.MenuLinkIcon} />,
  //     navigate: 'settings'
  //   },
  {
    title: 'Logout',
    icon: <LogoutOutlinedIcon sx={styles.MenuLinkIcon} />,
    navigate: 'login',
  },
];

const MenuLinks = ({ handleClickMenuItem }) => {
  const handleClickMenuLink = useCallback(
    (location) => {
      handleClickMenuItem(location);
    },
    [handleClickMenuItem],
  );

  return (
    <>
      <List sx={styles.ListTop}>
        {TOP_LINKS.map((link, i) => (
          <ListItem
            key={i}
            sx={styles.ListItem}
          >
            <ListItemButton
              disabled={link.disabled}
              onClick={() => handleClickMenuLink(link.navigate)}
            >
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText
                primary={link.title}
                sx={styles.MenuLink}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider
        sx={styles.Divider}
        variant='middle'
      />
      <List>
        {BOTTOM_LINKS.map((link, i) => (
          <ListItem
            key={i}
            sx={styles.ListItem}
          >
            <ListItemButton onClick={() => handleClickMenuLink(link.navigate)}>
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText
                primary={link.title}
                sx={styles.MenuLink}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default MenuLinks;

MenuLinks.propTypes = {
  handleClickMenuItem: PropTypes.func.isRequired,
};
