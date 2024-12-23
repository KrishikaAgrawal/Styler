import React, { useState, useEffect } from "react";

import Router from "./routes/Router";
import { UserProvider } from "@/context/UserContext";
import { FormDataProvider } from "@/context/FormDataContext";
import Loading from "./pages/Loading/Loading";

const App: React.FC = () => {
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
    <>
      <FormDataProvider>
        <UserProvider>
          <Router />
        </UserProvider>
      </FormDataProvider>
    </>
  );
};

export default App;
