import logo200Image from "../assets/img/logo/logo_200.png";
import sidebarBgImage from "../assets/img/sidebar/sidebar-4.jpg";
import React from "react";
import { MdDashboard, MdWidgets } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavItem, NavLink as BSNavLink } from "reactstrap";
import bn from "../utils/bemnames";
import { Can } from "../abilityConfig/ability-context";
import { Common } from "../constants/common";
import { withTranslation } from "react-i18next";
import { TFunction } from "i18next";
const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat"
};

//It'll be come From API for Real Application
const navItems = [
  {
    to: "/",
    name: "DashBoard",
    exact: true,
    Icon: MdDashboard,
    meta: { title: "dashboard" }
  },
  {
    to: "/Articles",
    name: "Article",
    exact: true,
    Icon: MdWidgets,
    meta: { title: "article" }
  }
];

const bem = bn.create("sidebar");

class Sidebar extends React.Component<{ t: TFunction }> {
  state = {
    isOpenComponents: false,
    isOpenContents: false,
    isOpenPages: false
  };

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen
      };
    });
  };

  render() {
    const { t } = this.props;
    return (
      <aside className={bem.b()} data-image={sidebarBgImage}>
        <div className={bem.e("background")} style={sidebarBackground} />
        <div className={bem.e("content")}>
          <Navbar>
            <img
              src={logo200Image}
              width="40"
              height="30"
              className="pr-2"
              alt=""
            />
            <span className="text-white">React</span>
          </Navbar>
          <Nav vertical>
            {navItems.map(({ to, name, exact, Icon, meta }, index) => (
              <Can I={Common.Actions.CAN_READ} a={name} key={index}>
                <NavItem key={index} className={bem.e("nav-item")}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e("nav-item-icon")} />
                    <span className="">{t(`route.${meta.title}`)}</span>
                  </BSNavLink>
                </NavItem>
              </Can>
            ))}
          </Nav>
        </div>
      </aside>
    );
  }
}

export default withTranslation()(Sidebar);
