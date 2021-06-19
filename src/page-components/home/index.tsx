import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { B015 } from "../../colours";

const PageArea = styled.div`
  background: ${B015};
  padding: 15px 15px 15px 15px;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
`;
function HomePage() {
  return (
    <PageArea>
      <Link to="/create">Create a new deck</Link>
    </PageArea>
  );
}

export default HomePage;
