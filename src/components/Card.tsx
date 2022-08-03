import styled from 'styled-components';

type Props = {
  src: string;
  onClick: () => void;
  status: boolean;
};

const CardWrapper = styled.button`
  background-color: #fff;
  height: 6.5rem;
  width: 6.5rem;
  cursor: pointer;
  border: none;

  @media screen and (min-width: 480px) {
    height: 8rem;
    width: 8rem;
  }
`;

const Image = styled.img`
  max-width: 5.5rem;
  max-height: 5.5rem;

  @media screen and (min-width: 480px) {
    max-height: 7rem;
    max-width: 7rem;
  }
`;

const Card = ({ src, onClick, status }: Props): JSX.Element => {
  const backSrc = './back.jpg';

  return (
    <CardWrapper onClick={onClick}>
      <Image src={!status ? backSrc : src} />
    </CardWrapper>
  );
};

export default Card;
