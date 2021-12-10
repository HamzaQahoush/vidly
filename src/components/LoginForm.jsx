import React from "react";

class LoginForm extends React.Component {
  state = {
    account: { usename: "", password: "" },
  };
  username = React.createRef();
  submitHandler = (e) => {
    e.preventDefault();
    const username = this.username.current.value;
    console.log(username);
  };
  changeHandler = (e) => {
    const account = { ...this.state };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };
  render() {
    return (
      <div>
        <h1>Login page</h1>
        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              name="username"
              onChange={this.changeHandler}
              autoFocus
              value={this.state.account.username}
              ref={this.username}
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={this.state.account.password}
              onChange={this.changeHandler}
              name="password"
              id="password"
              type="text"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
