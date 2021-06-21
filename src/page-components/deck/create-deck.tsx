import styled from "@emotion/styled";
import { useState } from "react";
import { B015, B070 } from "../../colours";
import EditableCard from "./editable-card";

const TitleContainer = styled.div`
  font-size: calc(5px + 3vw);
  line-height: calc(15px + 4vw);
  color: ${B070} !important;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const AddCardButton = styled.button`
  border: 1px black;
  background-color: ${B015};
  color: ${B070};
  border-radius: 5px;
  font-size: calc(5px + 3vw);
  line-height: 0px;
  margin: 1vw;
  width: 3vw;
  height: 3vw;
  max-height: 100%;
`;

const FinishDeckButton = styled.button`
  border: 1px black;
  background-color: ${B015};
  color: ${B070};
  border-radius: 5px;
  font-size: calc(5px + 2vw);
  padding: 10px;
  line-height: 0px;
  margin: 1vw;
  height: 3vw;
  max-height: 100%;
`;

type CardArrayType = Array<CardType>;
export type CardType = {
  question: string;
  answer: string;
};

const CreateDeckPage = () => {
  const emptyCard = { question: "", answer: "" };
  const [cards, setCards] = useState<CardArrayType>([{ ...emptyCard }]);

  const setQuestion = (index: number, question: string) => {
    let newCards = [...cards];
    newCards[index].question = question;
    setCards(newCards);
  };
  const setAnswer = (index: number, answer: string) => {
    console.log(index, answer);
    let newCards = [...cards];
    newCards[index].answer = answer;
    setCards(newCards);
  };
  const addCard = () => {
    setCards([...cards, emptyCard]);
  };

  return (
    <>
      <TitleContainer>Create a Deck</TitleContainer>
      {cards.map((card, index) => (
        <EditableCard
          card={card}
          setQuestion={(question: string) => setQuestion(index, question)}
          setAnswer={(answer: string) => setAnswer(index, answer)}
        />
      ))}
      <AddCardButton onClick={addCard}>+</AddCardButton>
      <FinishDeckButton onClick={() => console.log(cards)}>
        Finish Deck
      </FinishDeckButton>
    </>
  );
};

export default CreateDeckPage;
