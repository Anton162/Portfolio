import "./App.css";
import { Footer } from "./layout/footer/Footer";
import { Header } from "./layout/header/Header";
import { About } from "./layout/section/about/About";
import { Contacts } from "./layout/section/contacts/Contacts";
import { Main } from "./layout/section/main/Main";
import { Skills } from "./layout/section/skills/Skills";
import { Works } from "./layout/section/works/Works";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Works />
      <About />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
