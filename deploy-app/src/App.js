import { useState } from 'react';
import './App.css';

function App() {
  const initialValues = {
    name: '',
    age: ''
  };
  const [people, setPeople] = useState(null);
  const [values, setValues] = useState(initialValues);

  const onChange = (e) => {
    console.log(e.target)
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setPeople(values)
  }

  return (
    <div className="App">
      <h1>Static web App</h1>
      {
        people === null ? 'Input your name and age' : `${people.name} is ${people.age} years old`
      }
      <form onSubmit={onSubmit}>
        <input type='text' placeholder='Name here' value={values.name} name='name' onChange={onChange}/>
        <input type='text' placeholder='Age here' value={values.age} name='age' onChange={onChange}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
