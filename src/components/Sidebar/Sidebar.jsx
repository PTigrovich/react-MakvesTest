import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';
import { SidebarContainer, ThemeToggle } from './style-comp';



const routes = [
  { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
  { title: 'Sales', icon: 'chart-line', path: '/sales' },
  { title: 'Costs', icon: 'chart-column', path: '/costs' },
  { title: 'Payments', icon: 'wallet', path: '/payments' },
  { title: 'Finances', icon: 'chart-pie', path: '/finances' },
  { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
  { title: 'Settings', icon: 'sliders', path: '/settings' },
  { title: 'Support', icon: 'phone-volume', path: '/support' },
];

const Sidebar = (props) => {
  const { color } = props;
  const [isOpened, setIsOpened] = useState(false);
  const [theme, setTheme] = useState('light');
  const [activePath, setActivePath] = useState(window.location.pathname);

  const goToRoute = (path) => {
    console.log(`going to '${path}'`);
	setActivePath(path); 
  };

  const toggleSidebar = () => {
    setIsOpened((v) => !v);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
      <SidebarContainer $isOpened={isOpened} $theme={theme}>
          <div>
              <img src={logo} alt="TensorFlow logo" />
              <span className="sidebar__title">TensorFlow</span>
              <div onClick={toggleSidebar}>
                  <FontAwesomeIcon icon={isOpened ? 'angle-left' : 'angle-right'} />
              </div>
          </div>

          <div>
              {routes.map(route => (
                  <div
                      key={route.title}
                      className={activePath === route.path ? 'active' : ''}
                      onClick={() => {
                          goToRoute(route.path);
                      }}
                      data-tooltip={route.title}
                  >
                      <FontAwesomeIcon icon={route.icon} />
                      <span className="sidebar__title">{route.title}</span>
                  </div>
              ))}
          </div>
          <div>
              {bottomRoutes.map(route => (
                  <div
                      key={route.title}
                      className={activePath === route.path ? 'active' : ''}
                      onClick={() => {
                          goToRoute(route.path);
                      }}
                      data-tooltip={route.title}
                  >
                      <FontAwesomeIcon icon={route.icon} />
                      <span className="sidebar__title">{route.title}</span>
                  </div>
              ))}
          </div>
          <ThemeToggle onClick={toggleTheme} $isOpened={isOpened} $theme={theme}>
              <FontAwesomeIcon icon={theme === 'light' ? 'sun' : 'moon'} />
          </ThemeToggle>
      </SidebarContainer>
  );
};

Sidebar.propTypes = {
  color: PropTypes.string,
};

export default Sidebar;
