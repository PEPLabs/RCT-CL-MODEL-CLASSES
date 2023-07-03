import React from 'react';
import './App.css';
import DogComponent from './components/dog-component';

function App() {
  return (
    <div className="App">
      <h2>Modeling Classes</h2>
      <p>This lab uses an interface to create a model of a dog. It is accepted and common to use interfaces to model data in React in the same way you would use model classes in other languages. An interface named 'dog' is provided, which contains name, breed, and age fields. This lab will require you to do is to fill in the addDogEvent method, which takes in data using the form input fields on this page, creates a Dog model based off of the Dog interface, and saves that to an array provided in the DogComponent (already provided.) Ensure that you properly rerender the component as you update the allDogs array; there is a tip on how to do this in the addDogEvent function itself.</p>


      <div className="todo-container">
        <DogComponent></DogComponent>
      </div>

      <div>
        <a href="https://blog.logrocket.com/understanding-using-interfaces-typescript/">https://blog.logrocket.com/understanding-using-interfaces-typescript/</a>
      </div>

      {/*OPTIONAL PRACTICE: If you want more practice later, try doing this exercise again but creating your own model from scratch. Attemept to make a Food interface and utilize it in a component.*/}
    </div>
  );
}

export default App;
