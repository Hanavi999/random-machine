import './App.css';
import { useState } from 'react';

function App() {
  const [random, setRandom] = useState("");
  const [randoms, setRandoms] = useState([]);
  const [RmValue, setRmValue] = useState("");
  const onChange = (event) => setRandom(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(random === "") {
      alert("공백입니다. 값을 입력해주세요.");
      return;
    }
    setRandoms((currentArray) => [random, ...currentArray]);
    setRandom("");
  }
  const onRemove = (id) => {
    setRandoms(randoms.filter(random => random !== id));
  }
  const onRandom = () => {
    if(randoms.length === 0) {
      alert("추첨할 목록이 존재하지 않습니다.");
      setRmValue("");
    }
    else {
      setRmValue(parseInt(Math.random() * ((randoms.length + 1) - 1) + 1));
      console.log(RmValue);
    } 
  }
  const onReset = () => {
    if(RmValue !== "" || randoms.length > 0) {
      setRmValue("");
      setRandoms([]);
    }
    else {
      alert("초기화 할 값이 존재하지 않습니다.");
    }
  }
  //console.log(randoms.map((item, index) => <li key={index}>{item}</li>));
  return (
    <div className='App'>
      <div className='body'>
        <div className="title">
          <h1 className="title-h1">Random machine</h1>
        </div>
        <div className="main">
          <div className='main-inputs'>
            <form className="main-input" onSubmit={onSubmit} >
              <input onChange={onChange} value={random} type="text" placeholder="여기에 입력"></input>
              <button>추가</button>
            </form>
            <button className='Draw-lots' onClick={() => onRandom()}>추첨하기</button>
          </div>
          <div className='result'>
            <h2 className='result-h3'>{RmValue ? "추첨 결과" : "아직 추첨이 진행되지 않았습니다."}</h2>
            <p>{randoms[RmValue - 1]}</p>
          </div>
          <div className='reset-body'>
            <button className='reset' onClick={() => onReset()}>초기화</button>
          </div>
        </div>
      </div>
      <div className="main-result">
            <ul>
              {randoms.map((item, index) => (
                <li key={index} className="main-result__list">
                  <p>{item}</p>
                  <button onClick={() => onRemove(item)}>X</button>
                </li>
              ))}
            </ul>
      </div>
    </div>
  );
}

export default App;
