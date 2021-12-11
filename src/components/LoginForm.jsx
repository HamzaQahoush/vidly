import React from "react";
import Input from "./common/input";
import Joi from "joi-browser";

class LoginForm extends React.Component {
  state = {
    account: { usename: "", password: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };
  validate = () => {
    const option = { abortEarly: false };
    const result = Joi.validate(this.state.account, this.schema, option);
    console.log(result);
    if (!result.error) return null;
    const errors = {};

    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };
  submitHandler = (e) => {
    e.preventDefault();
    const errors = this.validate();

    this.setState({ errors: errors || {} });
    if (errors) return;
  };
  validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "" || value.trim().length < 3) {
        return "Username is required or too short ";
      }
    }
    if (name === "password") {
      if (value.trim() === "" || value.trim().length < 3) {
        return "password is required or too short ";
      }
    }
  };
  changeHandler = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const account = { ...this.state.accounts };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };
  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login page</h1>
        <form onSubmit={this.submitHandler}>
          <Input
            name="username"
            label="username"
            onChange={this.changeHandler}
            value={account.usename}
            error={errors.username}
          />
          <Input
            name="password"
            label="password"
            onChange={this.changeHandler}
            value={account.password}
            error={errors.password}
          />

          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
