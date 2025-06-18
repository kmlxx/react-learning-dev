import logo from './logo.svg';
import './App.css';

function App() {
    const name = '이강민';
    const today = new Date().toLocaleDateString();
    const desc = 'React를 시작하는 개발자';
  return (
    <div>
      <h1>{name}의 React</h1>
        <p>오늘 날짜 : {today}</p>
        <p>{desc}</p>
    </div>
  );
}

export default App;
