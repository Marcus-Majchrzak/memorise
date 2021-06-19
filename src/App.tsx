import "./App.css";
import styled from "@emotion/styled";
import { B004, B005, P200, P500 } from "./colours";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./page-components/home";
import CreatePage from "./page-components/create";
import { forwardRef } from "react";
import NavigationBar from "./common-components/navbar";

const WebsiteArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
`;

const PageArea = styled.div`
  background: ${B004};
  height: calc(100% - 15px);
  padding: 0px 15px 15px 15px;
  display: flex;
  flex-direction: column;
`;

const AppArea = styled.div`
  position: relative;
  background: ${B005};
  border-radius: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`;

const TitleContainer = styled.div`
  display: flex;
`;
const TitleFormatter = styled.div`
  font-size: calc(5px + 4vw);
  line-height: calc(15px + 4vw);
  color: ${P500} !important;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  a {
    text-decoration: none;
    color: ${P500};
  }
`;
const SubtitleFormatter = styled.div`
  font-size: calc(5px + 1.5vw);
  color: ${P200};
  line-height: calc(12px + 2vw);
  padding-left: 15px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const InnerAppArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleComponent = forwardRef((props, _) => (
  <TitleFormatter>
    <a {...props}>Memoriser{props.children}</a>
  </TitleFormatter>
));

function App() {
  return (
    <Router>
      <WebsiteArea>
        <PageArea>
          <TitleContainer>
            <Link to="/" component={TitleComponent}></Link>
            <SubtitleFormatter>By Marcus Majchrzak</SubtitleFormatter>
          </TitleContainer>
          <AppArea>
            <InnerAppArea>
              <Switch>
                <Route path="/create">
                  <CreatePage />
                </Route>
                <Route path="/">
                  <HomePage />
                </Route>
              </Switch>
              <NavigationBar />
            </InnerAppArea>
          </AppArea>
        </PageArea>
      </WebsiteArea>
    </Router>
  );
}

export default App;
