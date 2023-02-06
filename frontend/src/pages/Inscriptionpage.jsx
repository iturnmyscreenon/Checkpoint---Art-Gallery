import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import SignUpForm from "../assets/signupform.jpg";
import "../styles/Inscriptionpage.css";

export default function Inscriptionpage() {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [messageError, setMessageError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwordRef.current.value === passwordConfirmRef.current.value) {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/user`, {
          username: usernameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
        .then((reponse) => {
          if (reponse.status === 201) {
            navigate("/connexion");
          }
        })
        .catch((err) => {
          setMessageError(err.response.data);
        });
    } else {
      setConfirmPassword("");
      setPassword("");

      setMessageError("Erreur dans le mot de passe");
    }
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {messageError && <p className="error">{messageError}</p>}
      <MDBContainer fluid>
        <MDBCard className="text-black" style={{ borderRadius: "5px" }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size="lg" />
                  <MDBInput
                    label="Username"
                    id="form1"
                    type="text"
                    className="w-100"
                    ref={usernameRef}
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size="lg" />
                  <MDBInput
                    label="Your Email"
                    id="form2"
                    type="email"
                    ref={emailRef}
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size="lg" />
                  <MDBInput
                    label="Password"
                    id="form3"
                    type="password"
                    value={password}
                    ref={passwordRef}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="key me-3" size="lg" />
                  <MDBInput
                    label="Repeat your password"
                    id="form4"
                    type="password"
                    value={confirmPassword}
                    ref={passwordConfirmRef}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <MDBBtn className="mb-4" size="lg" type="submit">
                  Register
                </MDBBtn>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage
                  src={SignUpForm}
                  style={{
                    backgroundPosition: "cover",
                    borderRadius: "25px",
                  }}
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </form>
  );
}
