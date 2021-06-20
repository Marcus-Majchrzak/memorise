import styled from "@emotion/styled";
import { B070 } from "../../colours";

const TitleContainer = styled.div`
  font-size: calc(5px + 3vw);
  line-height: calc(15px + 4vw);
  color: ${B070} !important;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

function CreateDeckPage() {
  return (
    <>
      <TitleContainer>Create a Deck</TitleContainer>
    </>
  );
}

export default CreateDeckPage;
