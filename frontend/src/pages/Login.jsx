import React, { Component } from "react";
import {
  Row,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
  FormText,
} from "react-bootstrap";
import "../styles/Login.css";
import {
  isEmail,
  isEmpty,
  isLength,
  isContainWhiteSpace,
} from "../helpers/validator";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {}, // Contains login form data
      errors: {}, // Contains login field errors
      formSubmitted: false, // Indicates submit status of login form
    };
  }

  handleInputChange = (event) => {
    const { target } = event;
    const { value } = target;
    const { name } = target;

    const { formData } = this.state;
    formData[name] = value;

    this.setState({
      formData,
    });
  };

  validateLoginForm = () => {
    const errors = {};
    const { formData } = this.state;

    if (isEmpty(formData.email)) {
      errors.email = "Email can't be blank";
    } else if (!isEmail(formData.email)) {
      errors.email = "Please enter a valid email";
    }

    if (isEmpty(formData.password)) {
      errors.password = "Password can't be blank";
    } else if (isContainWhiteSpace(formData.password)) {
      errors.password = "Password should not contain white spaces";
    } else if (!isLength(formData.password, { gte: 6, lte: 16, trim: true })) {
      errors.password = "Password's length must between 6 to 16";
    }

    if (isEmpty(errors)) {
      return true;
    }
    return errors;
  };

  login = (e) => {
    e.preventDefault();

    const errors = this.validateLoginForm();

    if (errors === true) {
      // eslint-disable-next-line no-alert
      alert("You are successfully signed in...");
      window.location.reload();
    } else {
      this.setState({
        errors,
        formSubmitted: true,
      });
    }
  };

  render() {
    const { errors, formSubmitted } = this.state;

    return (
      <div className="Login">
        <Row>
          <form onSubmit={this.login}>
            <FormGroup
              controlId="email"
              validationstate={
                // eslint-disable-next-line no-nested-ternary
                formSubmitted ? (errors.email ? "error" : "success") : null
              }
            >
              <FormLabel>Email</FormLabel>
              <FormControl
                type="text"
                name="email"
                placeholder="Enter your email"
                onChange={this.handleInputChange}
              />
              {errors.email && <FormText>{errors.email}</FormText>}
            </FormGroup>
            <FormGroup
              controlId="password"
              validationstate={
                // eslint-disable-next-line no-nested-ternary
                formSubmitted ? (errors.password ? "error" : "success") : null
              }
            >
              <FormLabel>Password</FormLabel>
              <FormControl
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={this.handleInputChange}
              />
              {errors.password && <FormText>{errors.password}</FormText>}
            </FormGroup>
            <Button type="submit" bsstyle="primary">
              Sign-In
            </Button>
          </form>
        </Row>
      </div>
    );
  }
}

export default Login;
