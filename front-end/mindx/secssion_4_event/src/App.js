import { useState } from "react";

function App() {
  return (
    <div>
      <Person />
      <Counter />
    </div>
  );
}

const Counter = () => {
  const [count, setCount] = useState(0);
  // const countState = useState(0);
  // console.log('countState:', countState);

  // let count = countState[0];
  // let setCount = countState[1];

  const onIncrease = () => {
    setCount(count + 1)
  };

  return (
    <div>
      <span> {count} </span>
      <button onClick={onIncrease}>Increase</button>
    </div>
  )
}

const Person = () => {
  const [person, setPerson] = useState({
    name: 'Hoang',
    age: 23,
  });

  const onIncreaseAge = () => {
    if (person.age >= 25) {
      return;
    }
    setPerson({
      ...person,
      age: person.age + 1,
    })
  };

  const onDecreaseAge = () => {
    setPerson((prev) => {
      if (prev.age === 0) {
        return prev;
      }
      return {
        ...prev,
        age: prev.age - 1 ,
      }
    })
  }

  return <div>
    <p>
      Hello, My name is {person.name} . I'm {person.age} years old
    </p>
    <button onClick={onIncreaseAge}>InCrease Age</button>
    <button onClick={onDecreaseAge}>DeCrease Age</button>
  </div>
}

export default App;
