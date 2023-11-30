import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";

const LoginGoogle = styled.button`
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 2rem;
  padding: 0.5rem;
  line-height: 0;
  font-size: 1.5rem;
  width: fit-content;
  margin: 1rem;
  cursor: pointer;
`;

const GooogleButton = (
  <LoginGoogle>
    <FcGoogle />
  </LoginGoogle>
);

export { GooogleButton };
