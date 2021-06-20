import styled from "@emotion/styled";
import { B015, B070 } from "../../colours";

const AddDeckButtonStyle = styled.button`
  border: 1px black;
  background-color: ${B015};
  color: ${B070};
  border-radius: 20px;
  font-size: calc(5px + 10vw);
  line-height: 0px;
  width: 10vw;
  height: 10vw;
  max-height: 100%;
`;
const TitleContainer = styled.div`
  font-size: calc(5px + 3vw);
  line-height: calc(15px + 4vw);
  color: ${B070} !important;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const AddDeckButton = () => {
  return (
    <AddDeckButtonStyle
      onClick={() => (window.location.href = "/decks/create")}
    >
      +
    </AddDeckButtonStyle>
  );
};

function DeckHomePage() {
  return (
    <>
      <TitleContainer>My Decks</TitleContainer>
      <AddDeckButton />
    </>
  );
}

export default DeckHomePage;
