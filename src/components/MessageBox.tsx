import styled from "styled-components";

type MessageBoxProps = {
  message: string;
  visible: boolean;
};

const Wrapper = styled.div`
  position: absolute;
  width: 80%;
  margin: 2rem;
  background-color: transparent;
  display: flex;
  justify-content: center;
  display: ${({ vis }) => (vis ? "inherit" : "none")};
`;

const Text = styled.p`
  color: #ff22ff;
  font-weight: bold;
  font-size: 3rem;
  opacity: 1;
`;

const MessageBox = ({ message, visible }: MessageBoxProps) => {
  return (
    <Wrapper vis={visible}>
      <Text>{message}</Text>
    </Wrapper>
  );
};

export default MessageBox;
