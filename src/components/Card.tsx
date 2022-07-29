import styled from "styled-components";

type Props = {
  src: string;
  onClick: () => void;
  status: boolean;
};

const CardWrapper = styled.button`
  background-color: #fff;
  height: 8rem;
  width: 8rem;
  cursor: pointer;
  border: none;
`;

const Image = styled.img`
  max-width: 7rem;
  max-height: 7rem;
`;

const Card = ({ src, onClick, status }: Props): JSX.Element => {
  const backSrc = "./back.jpg";

  return (
    <CardWrapper onClick={onClick}>
      <Image src={!status ? backSrc : src} />
    </CardWrapper>
  );
};

export default Card;
