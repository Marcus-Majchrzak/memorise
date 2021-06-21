import styled from "@emotion/styled";
import { useState } from "react";
import { CardType } from "./create-deck";

const CardContainer = styled.div``;
const StyledInput = styled.input``;

type EditableCardType = {
  setQuestion: (question: string) => void;
  setAnswer: (answer: string) => void;
  card: CardType;
};

const EditableCard = (props: EditableCardType) => {
  const { card, setQuestion, setAnswer } = props;
  return (
    <>
      <CardContainer>
        <StyledInput
          type="text"
          value={card.question}
          onChange={(event) => setQuestion(event.target.value)}
        />
        <StyledInput
          type="text"
          value={card.answer}
          onChange={(event) => {
            setAnswer(event.target.value);
          }}
        />
      </CardContainer>
    </>
  );
};

export default EditableCard;
