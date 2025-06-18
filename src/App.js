import logo from './logo.svg';
import './App.css';
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
        <h1>React 컴포넌트</h1>
        <Welcome name="강민"/>
        <Welcome name="테스트"/>
    </div>
  );
}

export default App;
