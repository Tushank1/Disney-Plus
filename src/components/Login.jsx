import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="images/cta-logo-one.svg" alt="" />
        <SignUp>Get ALL There</SignUp>
        <Description>
          ​​Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/24, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <CTALogoTwo src="images/cta-logo-two.png" alt="" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    background-image: url("images/login-background.jpg");
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    opacity: 0.7;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const CTA = styled.div`
  padding: 80px 40px;
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;
`;
const CTALogoOne = styled.img``;
const SignUp = styled.a`
  width: 100%;
  font-weight: bold;
  background-color: #0063e5;
  padding: 17px 0px;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.div`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
`;

const CTALogoTwo = styled.img`
  width: 90%;
`;
