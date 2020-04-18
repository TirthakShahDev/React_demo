import React from "react";
import { connect } from "react-redux";
import * as AppActionCreators from "../store/actions/app.Actions";
import { bindActionCreators, Dispatch } from "redux";
import _ from "lodash";
import { IApplicationProps } from "../Types/PropTypes";
import { IErrorLogState } from "../Types/StateTypes";
import { IAppAction } from "../store/actions/Helpers";
import { IErrorLog } from "../store/state/errorlog.state";
import InternalServerErrorPage from "../pages/internalServerErrorPage";
// import { Redirect } from "react-router";

class ErrorHook extends React.PureComponent<
  { addError: (data: IErrorLog) => IAppAction },
  IErrorLogState
> {
  constructor(props: IApplicationProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    this.setState({hasError : true})
    this.props.addError({ err: error, info: errorInfo});
  }

  render() {
    if (this.state.hasError) {
      return <InternalServerErrorPage />;
    }

    return this.props.children;
  }
}
const mapDispatchtoProps = (dispatch: Dispatch) =>
  bindActionCreators(_.assign({}, AppActionCreators), dispatch);

export default connect(null, mapDispatchtoProps)(ErrorHook);
