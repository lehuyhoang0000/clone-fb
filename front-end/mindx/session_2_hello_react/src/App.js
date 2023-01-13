import './App.css';

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
        </div>
        <NameCard name="Hoang" age="23" />
        <NameCard name="Hướng" age="21" />
        <NameCard name="Hề" age="22" />
        <NameCard name="Hoang" age="23" />
      </header>
    </div>
  );
}

function NameCard(props) {
  return (
    <div className="card">
      <div className="name">Name: {props.name} </div>
      <div className="age">Age: {props.age} </div>
    </div>
  )
};

function ListName(props){
  return (
    <ul>
      <li>{props.title}</li>
    </ul>
  )
}

export default App;
