import { useState, useEffect } from "react";
import Tours from "./components/Tours";
const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  // Fetch data on mount
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setLoading(false);
        throw new Error(response);
      }
      // process data from API call
      // convert JSON formatted str to JS Obj
      const data = await response.json();
      console.log(data);
      setTours(data);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  // Remove Tour by ID
  const removeTour = (id) => {
    console.log("removing", id);
    setTours(tours.filter((tour) => tour.id !== id));
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <button onClick={fetchTours}>Refresh</button>
      </div>
    );
  }

  return (
    <main>
      <h1 className="heading">Our Tours</h1>
      {/* Loading State */}
      {loading ? (
        <h2 id="loading">Loading..</h2>
      ) : (
        <div>
          {/* Render Tours */}
          <Tours tours={tours} removeTour={removeTour} />
        </div>
      )}
    </main>
  );
};
export default App;
