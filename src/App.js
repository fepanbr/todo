import styled from "./App.module.css";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  return (
    <div className={styled.app}>
      <Header />
      <Content />
    </div>
  );
}

export default App;
