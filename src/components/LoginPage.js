import React from "react";
import axios from "axios";

class LoginPage extends React.Component {
  state = {
    phone: "+19254223749",
    password: "",
    user: null,
    error: "",
  };

  componentDidUpdate = async (prevProps, prevState) => {
    if (
      this.state.phone.length === 12 &&
      prevState.password.length === 2 &&
      this.state.password.length === 3
    ) {
      try {
        const response = await axios.post(
          "http://localhost:3001/auth/sign-in",
          {
            phone: this.state.phone,
            password: this.state.password,
          }
        );
        this.setState({
          user: response.data,
          phone: "",
          password: "",
          error: "",
        });
        console.log(response.data);
      } catch (err) {
        console.log(err.response.data);
        this.setState({ error: err.response.data });
      }
    }
  };

  //   onLogin = async () => {
  //     try {
  //       const response = await axios.post("http://localhost:3001/auth/sign-in", {
  //         phone: this.state.phone,
  //         password: this.state.password,
  //       });
  //       this.setState({
  //         user: response.data,
  //         phone: "",
  //         password: "",
  //         error: "",
  //       });
  //       console.log(response.data);
  //     } catch (err) {
  //       console.log(err.response.data);
  //       this.setState({ error: err.response.data });
  //     }
  //   };

  onChangeCredentials = (event, fieldName) => {
    if (fieldName === "phone") {
      this.setState({ phone: event.target.value, error: "" });
    }
    if (fieldName === "password") {
      this.setState({ password: event.target.value, error: "" });
    }
    // либо вместо двух вышеуказанных
    //this.setState({ [fieldName]: event.target.value})
  };

  render() {
    return (
      <div className="App">
        <input
          type="text"
          placeholder="phone number"
          onChange={(event) => this.onChangeCredentials(event, "phone")}
          value={this.state.phone}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(event) => this.onChangeCredentials(event, "password")}
          value={this.state.password}
        />
        {/* <button onClick={this.onLogin}>Sign In</button> */}
        <div>
          {this.state.user ? (
            <span>
              {this.state.user.name.first} {this.state.user.name.last}
            </span>
          ) : (
            <span>Please login to your account</span>
          )}
        </div>
        <div>{this.state.error}</div>
      </div>
    );
  }
}

export default LoginPage;
