import styled from "./App.module.css";
import Adder from "./components/Adder";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  return (
    <div className={styled.app}>
      <Header />
      <Content />
      <Adder />
    </div>
  );
}

export default App;
