import React from "react";
import Input from "./common/input";
class LoginForm extends React.Component {
  state = {
    account: { usename: "", password: "" },
    errors: {},
  };

  validate = () => {
    const errors = {};
    if (this.state.account.usename.trim() === "") {
      errors.usename = "username is isRequired";
    }

    if (this.state.account.password.trim() === "") {
      errors.password = "password is isRequired";
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };
  submitHandler = (e) => {
    e.preventDefault();
    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;
  };
  changeHandler = ({ currentTarget: input }) => {
    const account = { ...this.state };
    account[input.name] = input.value;
    this.setState({ account });
  };
  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login page</h1>
        <form onSubmit={this.submitHandler}>
          <Input
            name="username"
            label="username"
            onChange={this.changeHandler}
            value={account.usename}
            error={this.state.errors.usename}
          />
          <Input
            name="password"
            label="password"
            onChange={this.changeHandler}
            value={account.password}
            error={this.state.errors.password}
          />

          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
