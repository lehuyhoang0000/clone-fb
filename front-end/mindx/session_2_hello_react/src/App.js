import './App.css';
import './NameCard.css'
import NameCard from "./NameCard.js";
import Card from './Card';

const age = Math.floor(Math.random() * 50);
// const data = {address: "HaNoi"}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className=''>
          <div className='title'>Enter your task here...</div>
          <ListName title="Clean up bedroom" />
          <ListName title="Buy some new" />
          <ListName title="Jogging" />
          <ListName title="Leart React" />
          <ListName title="Doing Exercies" />
          {/* <div>{JSON.stringify(data)}</div> */}
        </div>
        <Card>
          <NameCard name="Hoang" age={age} address="Hà nội"> <div>This is bug</div> </NameCard>
          <NameCard name="Hướng" age={21} address="Hà nội"> <div>This is bug123</div> </NameCard>
          <NameCard name="Hề" age="22" address="Hà nội" />
          <NameCard name="Hoang" age="23" address="Hà nội" />
          <div style={{
            // backgroundColor: '#FFFFFF',
            // color: '#000',
            fontWeight: 'bold',
            fontStyle: 'italic'
          }}>
            Today is {new Date().getDate()}
          </div>
        </Card>
      </header>
    </div>
  );
}



function ListName(props) {
  return (
    <ul>
      <li>{props.title}</li>
    </ul>
  )
}

export default App;
