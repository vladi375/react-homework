import React from "react";
import "./styles.css";

class SignUpPage extends React.Component {
  state = {
    phone: "",
    fullName: "",
    password: "",
    confirmPassword: "",
    error: "",
  };

  onSignUp = async () => {
    const response = await fetch("some server", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify(this.state),
    });
    if (response.ok) {
      console.log("You have signed up successfully!");
    } else {
      console.log("Error:", response.status);
    }
  };

  validateData = () => {
    if (this.state.password.length < 8) {
      this.setState({ error: "Short password" });
    } else if (this.state.password !== this.state.confirmPassword) {
      this.setState({ error: "Passwords don't match" });
    } else if (this.state.phone.length !== 13) {
      this.setState({ error: "Phone should contain 13 symbols" });
    } else if (!this.state.fullName) {
      this.setState({ error: "You left the empty field" });
    } else {
      console.log(
        `Phone: ${this.state.phone}\nName: ${this.state.fullName}\nPassword: ${this.state.password}\nConfirm password: ${this.state.confirmPassword}`
      );
      this.onSignUp();
      this.setState({
        phone: "",
        fullName: "",
        password: "",
        confirmPassword: "",
        error: "",
      });
    }
  };

  onChangeCredentials = (event, fieldName) => {
    this.setState({ [fieldName]: event.target.value });
  };

  render() {
    return (
      <div className="sign-up">
        <input
          type="text"
          placeholder="phone number"
          onChange={(event) => this.onChangeCredentials(event, "phone")}
          value={this.state.phone}
        />
        <input
          type="text"
          placeholder="firstname and lastname"
          onChange={(event) => this.onChangeCredentials(event, "fullName")}
          value={this.state.fullName}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(event) => this.onChangeCredentials(event, "password")}
          value={this.state.password}
        />
        <input
          type="text"
          placeholder="repeat the password"
          onChange={(event) =>
            this.onChangeCredentials(event, "confirmPassword")
          }
          value={this.state.confirmPassword}
        />
        <button onClick={this.validateData}>Sign Up</button>
        <div>{this.state.error}</div>
      </div>
    );
  }
}

export default SignUpPage;
