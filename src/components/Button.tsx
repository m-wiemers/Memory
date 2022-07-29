import styled from "styled-components";

type ButtonProps = React.ButtonHTMLAttributes<HTMLElement> & {
  label: string;
};

const StyledButton = styled.button`
  border: none;
  margin: 1rem;
  padding: 0.5rem;
  background-color: #fff;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background-color: #ff22ff;
  }

  :active {
    background-color: #000;
    color: #fff;
  }
`;

const Button = ({ label, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{label}</StyledButton>;
};

export default Button;
