import React from 'react';
import { Menu } from 'components';
import { useHistory, useLocation } from 'react-router-dom';
import { MenuOne } from 'App/Microfrontends';

function MainMenu() {
  const history = useHistory();
  const location = useLocation();
  const menuProps = {
    path: '/',
    pathname: location.pathname,
    onChange: history.push,
  };

  const menu = (
    <Menu {...menuProps}>
      <Menu.Section label="Apps">
        <Menu.Item path="/child" label="Child App 1 microfrontend" partial>
          <Menu.Item path="/" label="back to main menu" back />
          <MenuOne path="/child" pathname={location.pathname} onChange={history.push} />
        </Menu.Item>
        <Menu.Item path="/other" label="Child App 2 microfrontend" />
      </Menu.Section>
    </Menu>
  );

  return <div className="layout__side-menu">{menu}</div>;
}

export default MainMenu;
