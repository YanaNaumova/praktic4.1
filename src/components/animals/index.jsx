import { useState } from "react";

function Animals() {
  const [animals, setAnimals] = useState([]);
  const animalList = [
    "Собака",
    "Кошка",
    "Заяц",
    "Волк",
    "Лиса",
    "Медведь",
    "Олень",
    "Сурок",
    "Хомяк",
    "Белка",
  ];
  function updateAnimal(animal) {
    setAnimals((prevArr) => [...prevArr, animal]);
  }

  function randomAnimal() {
    let index = Math.floor(Math.random() * animalList.length);
    updateAnimal(animalList[index]);
  }
  return (
    <div>
      <button onClick={randomAnimal}>Select Animal</button>
      {animals.map((animal, index) => {
        return <li key={index}>{animal}</li>;
      })}
    </div>
  );
}
export default Animals;
