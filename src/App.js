import "./App.css";

function Title(props) {
  return <h1> {props.value} </h1>;
}

function Subtitle(props) {
  return <p>{props.text}</p>;
}

function Button(props) {
  return <button>{props.content}</button>;
}

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
