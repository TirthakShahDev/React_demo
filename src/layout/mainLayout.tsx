import { Content, Footer, Sidebar } from "../layout";
import React from "react";
import Header from "./header";
import { IAppAction } from "../store/actions/Helpers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface IMainLayoutProps {
  breakpoint: string;
  selected: [];
  logout: () => IAppAction;
  changeLanguage: (language: any) => IAppAction;
}

interface IMainLayoutState {
  selected: [];
}
class MainLayout extends React.Component<IMainLayoutProps, IMainLayoutState> {
  static isSidebarOpen() {
    return document
      .querySelector(".cr-sidebar")
      .classList.contains("cr-sidebar--open");
  }

  constructor(props: IMainLayoutProps) {
    super(props);
    this.state = {
      selected: []
  }
  }

  componentDidUpdate({ breakpoint }) {
    if (breakpoint !== this.props.breakpoint) {
      this.checkBreakpoint(breakpoint);
    }
  }
  static getDerivedStateFromProps(
    props: IMainLayoutProps,
    state: IMainLayoutState
  ) {
    if (props.selected !== state.selected) {
      return {
        selected: props.selected
      };
    }
    return null;
  }

  componentDidMount() {
    this.checkBreakpoint(this.props.breakpoint);
  }

  // close sidebar when
  handleContentClick = (event: any) => {
    // close sidebar if sidebar is open and screen size is less than `md`
    if (
      MainLayout.isSidebarOpen() &&
      (this.props.breakpoint === "xs" ||
        this.props.breakpoint === "sm" ||
        this.props.breakpoint === "md")
    ) {
      this.openSidebar("close");
    }
  };

  checkBreakpoint(breakpoint: any) {
    switch (breakpoint) {
      case "xs":
      case "sm":
      case "md":
        return this.openSidebar("close");

      case "lg":
      case "xl":
      default:
        return this.openSidebar("open");
    }
  }

  openSidebar(openOrClose: any) {
    if (openOrClose === "open") {
      return document
        .querySelector(".cr-sidebar")
        .classList.add("cr-sidebar--open");
    }
    document.querySelector(".cr-sidebar").classList.remove("cr-sidebar--open");
  }

  render() {
    const { children } = this.props;
    return (
      <main className="cr-app bg-light">
        <Sidebar />
        <Content fluid onClick={this.handleContentClick}>
          <Header logout={this.props.logout} changeLanguage ={this.props.changeLanguage}/>
          {children}
          <ToastContainer autoClose={2000} />
          <Footer />
        </Content>
      </main>
    );
  }
}

export default MainLayout;
