import "./styles.css";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./components/Card";
import Button from "./components/Button";
import MessageBox from "./components/MessageBox";
import Timer from "./components/Timer";
import { shuffle } from "./helpers/shuffle";
import cardSlugs from "./components/CardSlugs";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const PlayField = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  max-width: 700px;
`;

const shuffledCards = shuffle(cardSlugs);

export default function App() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [pairs, setPairs] = useState<number[]>([]);
  const [message, setMessage] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);
  const [allCards, setAllCards] = useState(shuffledCards);
  const [active, setActive] = useState<boolean>(false);
  const [reset, setReset] = useState<boolean>(false);

  useEffect(() => {
    if (selectedIds.length === 2) {
      setTimeout(() => setSelectedIds([]), 500);
    }
    if (selectedIds.length > 2) {
      setSelectedIds([]);
    }
  }, [selectedIds]);

  useEffect(() => {
    if (selectedIds.length > 1) {
      setActive(true);
      setReset(false);
    }
    if (pairs.length > 10) {
      setActive(false);
    }
  }, [selectedIds, pairs]);

  const pushToArray = (id: number) => {
    setSelectedIds((oldArray) => [...oldArray, id]);
  };

  const pushToPairs = (id: number, secondId: number) => {
    setPairs((oldArray) => [...oldArray, id, secondId]);
    setMessage("Yeah! It`s a pair!");
    setVisible(true);
    setTimeout(() => setVisible(false), 500);
  };

  const removeFromArray = (id: number, secondId?: number) => {
    if (secondId) {
      setSelectedIds(selectedIds.filter((thisid) => thisid !== id));
      setSelectedIds(selectedIds.filter((thisid) => thisid !== secondId));
    } else {
      setSelectedIds(selectedIds.filter((thisid) => thisid !== id));
    }
  };

  const clearAll = () => {
    setSelectedIds([]);
    setPairs([]);
    const shuffledCards = shuffle;
    setAllCards(shuffledCards);
    setMessage("");
    setReset(true);
    setActive(false);
  };

  const handleClick = (id: number) => {
    const secondId = id + 1;
    const minusId = id - 1;
    if (!selectedIds.includes(id)) {
      pushToArray(id);
    }
    if (selectedIds.includes(id)) {
      removeFromArray(id);
    }
    if (selectedIds.includes(id && secondId)) {
      pushToPairs(id, secondId);
    }
    if (selectedIds.includes(id && minusId)) {
      pushToPairs(id, minusId);
    }
  };

  const cards = allCards.map((el) => (
    <Card
      src={el.front}
      status={selectedIds.includes(el.id) || pairs.includes(el.id)}
      key={el.id}
      onClick={() => handleClick(el.id)}
    />
  ));

  return (
    <div className="App">
      <Wrapper>
        <h1>Memory</h1>
        <Timer active={active} reset={reset} />
        <PlayField>
          {cards}
          <MessageBox message={message} visible={visible} />
        </PlayField>
        <Button onClick={clearAll} label="Resetten" />
      </Wrapper>
    </div>
  );
}
