import React, { useEffect, useState } from "react";
import styled from "styled-components";

type Props = {
  active: boolean;
  reset: boolean;
};

const Wrapper = styled.div`
  display: flex;
  padding: 0.2rem;
  background-color: #ff22ff;
  margin-bottom: 1rem;
`;

const Timer = ({ active, reset }: Props) => {
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    let interval: any;

    if (active) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    if (reset) {
      setTimer(0);
    }

    return () => clearInterval(interval);
  }, [active, reset]);

  return (
    <Wrapper>
      <p>Timer</p>
      <p>{timer}</p>
    </Wrapper>
  );
};

export default Timer;
