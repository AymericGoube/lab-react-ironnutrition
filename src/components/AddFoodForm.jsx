import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm() {
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [calories, setCalories] = useState();
  const [serving, setServing] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    console.log('succesfully send form');
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Divider>Add Food Entry</Divider>

        <label>Name</label>
        <Input
          value={name}
          type="text"
          onChange={(event) => setName(event.target.value)}
        />

        <label>Image</label>
        <Input
          value={image}
          type="text"
          onChange={(event) => setImage(event.target.value)}
        />

        <label>Calories</label>
        <Input
          value={calories}
          type="text"
          onChange={(event) => setCalories(event.target.value)}
        />

        <label>Servings</label>
        <Input
          value={serving}
          type="text"
          onChange={(event) => setServing(event.target.value)}
        />

        <button type="submit">Create</button>
      </form>
    </>
  );
}

export default AddFoodForm;
