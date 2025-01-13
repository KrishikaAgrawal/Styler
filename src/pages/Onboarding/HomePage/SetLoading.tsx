import React, { useState, useEffect } from "react";
import Loading from "../../Loading/Loading";
import HomePage from "./HomePage";
// import Loading from "./components/Loading";
// import HomePage from "./HomePage/HomePage";
// export default HomePage;

const SetLoading: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading period
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <HomePage />
      {/* <h1 className="text-3xl font-bold underline">Hello, world!</h1> */}
    </div>
  );
};

export default SetLoading;
