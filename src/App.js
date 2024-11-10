import "./css/App.css";
import "./css/stamp.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Modal from "./components/Main/Modal/Modal";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Modal />
    </div>
  );
}

export default App;
