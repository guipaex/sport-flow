import styled from "styled-components";
import colors from "../../../utils/variables.scss";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthGoogleContext } from "../../../contexts/authGoogle";
import { FcGoogle } from "react-icons/fc";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 30rem;
  background-color: white;
  border-radius: 2rem;
  margin: auto;
  padding: 2rem 2.5rem;
`;
const FormTitle = styled.h1`
  margin: 1rem auto;
  width: 100%;
`;
const FormDescription = styled.p`
  margin: 1rem auto;
  width: 100%;
  font-size: 1rem;
`;

const GoogleButton = styled.button`
  width: fit-content;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;

  font-family: "Sora";
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 2rem;

  padding: 1rem 1.5rem;
  margin: 1rem auto;
  cursor: pointer;
  font-size: 1rem;
  transition: 300ms;
  .icon {
    font-size: 1.75rem;
  }
  &:hover {
    background-color: #e7eaf0;
  }
`;

export default function LoginForm() {
  const { signInGoogle, signed, user } = useContext<any>(AuthGoogleContext);
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    signInGoogle();
  };
  if (!signed) {
    return (
      <FormContainer>
        <FormTitle>Seja bem-vindo(a)!</FormTitle>
        <FormDescription>
          Por enquanto só é possível se cadastrar com o Google, mas em breve mais opções serão disponibilizadas
        </FormDescription>
        <GoogleButton onClick={handleClick}>
          <FcGoogle className='icon' />
          Entrar com Google
        </GoogleButton>
      </FormContainer>
    );
  } else {
    navigate(`/${user}`);
  }
}
