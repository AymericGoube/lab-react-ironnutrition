import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/foodbox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [stateApp, setStateApp] = useState(foods);

  const ListOfFood = () => {
    return stateApp.map((food) => {
      return (
        // <div>
        //   <p>{food.name}</p>
        //   <img src={food.image} width={250} />
        // </div>
        <FoodBox food={food} />
      );
    });
  };

  return (
    <div className="App">
      <ListOfFood />
      {/* <FoodBox food={foods} /> */}
      <AddFoodForm />
    </div>
  );
}

export default App;
