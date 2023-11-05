import styled from "styled-components";
import "./App.css";
import { Footer } from "./layout/footer/Footer";
import { Header } from "./layout/header/Header";
import { About } from "./layout/section/about/About";
import { Contacts } from "./layout/section/contacts/Contacts";
import { Main } from "./layout/section/main/Main";
import { Skills } from "./layout/section/skills/Skills";
import { Works } from "./layout/section/works/Works";
import { GoTopBtn } from "./components/goTopBtn/GoTopBtn";

function App() {
  return (
    <AppBox className="App">
      <Header />
      <Main />
      <Skills />
      <Works />
      <About />
      <Contacts />
      <Footer />
      <GoTopBtn />
    </AppBox>
  );
}

export default App;

const AppBox = styled.div`
  /* width: 1440px;
  margin: 0 auto;
  height: 100vh; */
`;
