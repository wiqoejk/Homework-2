import { useState } from "react";
import "./App.css";

interface Recipe {
  name: string;
  ingredients: string[];
  steps: string;
}

function App() {
  const [inputName, setInputName] = useState("");
  const [inputIngredients, setInputIngredients] = useState([]);
  const [inputSteps, setInputSteps] = useState("");
  const [list, setList] = useState<Recipe[]>([
    {
      name: "Ramen",
      ingredients: [
        "Boiling Water",
        "Eggs",
        "Noodles",
        "Meat",
        "Butter",
        "Mushroom",
        "Chicken Stock",
      ],
      steps: `Heat up stove
      \nBoil Water and add the Chicken Stock
      \nSoft boil the egg in a seperate pot
      \nCut up the Mushrooms
      \nGet a pan and heat it up 
      \nPut butter on it then start to sear the meat
      \nStir fry the musroom until it ready
      \nAfter the water in the first pot if boiling put in the noodle
      \nGet a bowl ready
      \nPut in the soup the the noodles
      \nCut the soft boil egg in half the place it ontop of the noodles
      \nThen put the meat and mushroom on the noodles
      \nThen get a chopsticks and eat up`,
    },
    {
      name: "Pho",
      ingredients: [
        "Boiling Water",
        "Eggs",
        "Noodles",
        "Meat",
        "Butter",
        "Mushroom",
        "Chicken Stock or Beef Stock",
      ],
      steps: `Heat up stove
      \nBoil Water and add the Chicken Stock
      \nSoft boil the egg in a seperate pot
      \nCut up the Mushrooms
      \nGet a pan and heat it up 
      \nPut butter on it then start to sear the meat
      \nStir fry the musroom until it ready
      \nAfter the water in the first pot if boiling put in the noodle
      \nGet a bowl ready
      \nPut in the soup the the noodles
      \nCut the soft boil egg in half the place it ontop of the noodles
      \nThen put the meat and mushroom on the noodles
      \nThen get a chopsticks and eat up`,
    },
  ]);

  function handleDelete(index: number) {
    const copy = [...list];
    copy.splice(index, 1);
    setList(copy);
  }
  function handleInputNameChange(event: any) {
    setInputName(event.target.value);
  }
  function handleInputIngredientsChange(event: any) {
    const newArrayString = event.target.value;
    const newArray = newArrayString.split(",");
    setInputIngredients(newArray);
  }
  function handleInputStepsChange(event: any) {
    setInputSteps(event.target.value);
  }
  function handleAdd(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (
      inputName === "" ||
      inputIngredients.length === 0 ||
      inputSteps === ""
    ) {
      return;
    }
    const copy = [...list];
    copy.push({
      name: inputName,
      ingredients: inputIngredients,
      steps: inputSteps,
    });
    setList(copy);
  }

  return (
    <>
      <h1>Recipes:</h1>
      {list.map((value, index) => {
        return (
          <div className="recipe">
            <h2>{value.name}:</h2>
            <h3>Ingredients:</h3>
            {value.ingredients.map((value) => {
              return (
                <div className="text">
                  <h4>{value}</h4>
                </div>
              );
            })}
            <h3>Steps:</h3>
            <p>{value.steps}</p>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        );
      })}
      <p />
      <form onSubmit={(event) => handleAdd(event)}>
        <label>Recipe: </label>
        <input onChange={(event) => handleInputNameChange(event)} />
        <p />
        <label>Ingredients: (seperate by ,)</label>
        <input onChange={(event) => handleInputIngredientsChange(event)} />
        <p />
        <label>Steps: </label>
        <input onChange={(event) => handleInputStepsChange(event)} />
        <p />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default App;
