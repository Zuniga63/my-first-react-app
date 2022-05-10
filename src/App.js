import "./App.css";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Title value="SPA With React" />
      <Subtitle text="This is a amazing app build with React" />
      <Button content="Go to Documentation" />
    </div>
  );
}

export default App;
