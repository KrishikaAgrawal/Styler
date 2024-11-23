// import React from "react";
// // import Booking from "./pages/Services/Booking/Booking";
// // import DesignerDetails from "./pages/Services/DesignerDetails";
// import Router from "@/routes";
// // import SpecialOffer from "./pages/header/SpecialOffer";
// // import MostPopular from "./pages/Services/MostPopular";

// const App: React.FC = () => {
//   return (
//     // <Booking />
//     // <DesignerDetails />
//     <Router />
//     // <MostPopular />
//     // <SpecialOffer />
//   );
// };

// export default App;

import Router from "./routes/Router";

import { UserProvider } from "@/context/UserContext";
import { FormDataProvider } from "@/context/FormDataContext";

function App() {
  return (
    <>
      <FormDataProvider>
        <UserProvider>
          <Router />
        </UserProvider>
      </FormDataProvider>
    </>
  );
}

export default App;
