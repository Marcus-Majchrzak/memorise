import styled from "@emotion/styled";
import { B005, B032 } from "../colours";

const BarContainer = styled.div`
  background: ${B005};
  padding: calc(2px + 0.75vw) calc(2px + 0.25vw) calc(2px + 0.75vw)
    calc(2px + 0.25vw);
  display: flex;
  border-radius: 10px;
  flex-direction: row;
  width: calc(60px + 10vw);
  margin: 0.5vw;
`;

const StyledNavButton = styled.button`
  border: 1px black;
  background-color: ${B032};
  border-radius: 8%/16%;
  font-size: calc(5px + 0.75vw);
  width: 100%;
  height: calc(20px + 1.25vw);
  margin-left: 0.5vw;
  margin-right: 0.5vw;
  max-height: 100%;
`;

type NaveButtonType = {
  text: string;
  to: string;
};

const NavButton = (props: NaveButtonType) => {
  return (
    <StyledNavButton onClick={() => (window.location.href = props.to)}>
      {props.text}
    </StyledNavButton>
  );
};

function NavigationBar() {
  return (
    <BarContainer>
      <NavButton to="/" text="Home" />
      <NavButton to="/decks" text="Decks" />
    </BarContainer>
  );
}

export default NavigationBar;
