import data from "./data";
import { useEffect, useState } from "react";
const App = () => {
  // current state of people data
  const [people, setPeople] = useState(data);
  // count of birthdays today
  const [birthdays, setBirthdays] = useState(0);

  const getBirthdayCount = () => {
    const count = people.length;
    console.log("COUNT", count);
    setBirthdays(count);
  };
  // display on mount and changes to people
  useEffect(() => {
    getBirthdayCount();
  }, [people]);

  // clear a specific birthday
  const removeBirthday = (id) => {
    console.log("removing ", id);
    const updatedPeople = people.filter((person) => person.id !== id);
    setPeople(updatedPeople);
  };

  return (
    <main>
      <div className="container">
        <h3>{birthdays} Birthdays Today</h3>
        {people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <div key={id} className="person">
              <img src={image} alt="profile pic" />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
              <button
                className="remove btn"
                onClick={() => {
                  removeBirthday(id);
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
        <button
          type="button"
          className=" btn btn-block"
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear
        </button>
      </div>
    </main>
  );
};
export default App;
