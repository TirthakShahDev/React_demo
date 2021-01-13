import logo200Image from "../assets/img/logo/logo_200.png";
import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { ILoginProps } from "../Types/PropTypes";
import { ILoginState } from "../Types/StateTypes";
import { login as LoginUser } from "../api/users";
import { connect } from "react-redux";
import { login } from "../store/actions/app.Actions";
import { RawRule } from "@casl/ability";
import { ConvertAbility } from "../utils/abilityConverter";
import ability from "../abilityConfig/ability";

class LoginForm extends React.Component<ILoginProps, ILoginState> {
  public static defaultProps: Partial<ILoginProps> = {
    usernameLabel: "UserName",
    usernameInputProps: {
      type: "text",
      placeholder: "UserName",
      name: "UserName"
    },
    passwordLabel: "Password",
    passwordInputProps: {
      type: "password",
      placeholder: "Password",
      name: "PassWord"
    }
  };
  state: ILoginState;
  constructor(props: ILoginProps) {
    super(props);
    this.state = {
      UserName: "admin",
      PassWord: "1111"
    };
  }
  handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const value = evt.target.value;
    this.setState({
      ...this.state,
      [evt.target.name]: value
    });
  }

handleClick = (event: any) => {
    window.ReactNativeWebView.postMessage(JSON.stringify({'data': 'Tirthak'}));
  };
  componentDidMount()
  {
    document.addEventListener("message", function(event:any) {
      alert(event.data);
     })
  };


  handleSubmit = () => {
    LoginUser(this.state)
      .then(async ({ data }) => {
        const abilities: RawRule[] = ConvertAbility(data.permissions);
        ability.update(abilities);
        data.abilities = abilities;
        this.props.dispatch(login(data))
        this.props.history.push('/')
      })
      .catch(m => {
        alert(m.toString());
      })
      .finally();
  };

  render() {
    const {
      usernameLabel,
      usernameInputProps,
      passwordLabel,
      passwordInputProps,
      children
    } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        <div className="text-center pb-4">
          <img
            src={logo200Image}
            className="rounded"
            style={{ width: 60, height: 60, cursor: "pointer" }}
            alt="logo"
          />
        </div>
        <FormGroup>
          <Label for={usernameLabel}>{usernameLabel}</Label>
          <Input
            {...usernameInputProps}
            value={this.state.UserName}
            onChange={event => this.handleChange(event)}
          />
        </FormGroup>
        <FormGroup>
          <Label for={passwordLabel}>{passwordLabel}</Label>
          <Input
            {...passwordInputProps}
            value={this.state.PassWord}
            onChange={event => this.handleChange(event)}
          />
        </FormGroup>
        <hr />
        <Button
          size="lg"
          className="bg-gradient-theme-left border-0"
          block
          onClick={this.handleSubmit}
        >
          Login
        </Button>
        
         <Button
          size="lg"
          className="bg-gradient-theme-left border-0"
          block
          onClick={this.handleClick}
        >
          Click Me
        </Button>
        {children}
      </Form>
    );
  }
}
export default connect(
  null,
  null
)(LoginForm);
